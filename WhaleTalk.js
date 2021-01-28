let input = 'These are some words uu';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let v = 0; v< vowels.length; v++) {
    if (input[i] === vowels[v]){
      if (input[i] === 'e'){
      resultArray.push('ee');
      }
      else if (input[i] === 'u') {
      resultArray.push('uu');  
      }
    }
  }
};
console.log(resultArray.join("").toUpperCase());