module.exports = 
function multiply(first, second) {
	let result=[];
	let transCalc=[];
	let shift=0;
	let remain=0;
	first=first.split('').reverse(); second=second.split('').reverse();

	for(let i of first){
		for(let k of second){
			let n=i*k+remain;
			if(n>9) {
				transCalc.push(n%10);
				remain=Math.floor(n/10);
			}
			else {
				transCalc.push(n);
				remain=0;
			}
		}
		if(remain) transCalc.push(remain);
		remain=0;
		for(let u=0;u<transCalc.length;u++){
			if(!result[shift+u]) result[shift+u]=0;
			let sum=result[shift+u]+transCalc[u]+remain;
			if(sum>9) {
				result[shift+u]=sum%10;
				remain=1;
			}
			else {
				result[shift+u]=sum;
				remain=0;
			}
		}
		if(remain) result.push(remain);
		remain=0;
		shift++;
		transCalc=[];
	}
	return result.reverse().join('');
}