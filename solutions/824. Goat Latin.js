/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words=sentence.match(/\w+/g).map(splitWord);
    let vwls=['a','A', 'e','E', 'i','I', 'o','O','u','U'];
  
    words.forEach((word,i)=>{
      let firstLetter=word[0];
      let deleteCount=(vwls.includes(firstLetter))?0:1;
      let removedLetter=word.splice(0,deleteCount)[0];
      let addLetters=Array.from({length:i+1}, v => 'a');;
      
      if (removedLetter!=null){word.push(removedLetter);}
      
      word.push('m','a',...addLetters);
    });
    
    let result=getSentence(words.map(joinWord));
  return result;
  
};
let splitWord=(word)=>{return word.split('')}
let joinWord=(word)=>{return word.join('')}
let getSentence=(words)=>{return words.join(' ')}
