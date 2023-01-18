function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	
  //your code here
	let romanLetter = '';
	let number = num;
	for(let i=0;i<obj.length;i++){
		if(obj[i]<=number){
			number =number - obj[i];
			romanLetter = romanLetter+obj[i];
		i--;
		}
	}
	console.log(romanLetter)

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
