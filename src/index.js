function add(a, b){
  return a + b;
}


function arrayOfString(array){

  array.sort(function(a,b){
    return a.length - b.length;
  });
  return array[array.length-1];

}

function encrypt(words){
  const newWords=words.split("").map(letter => {
    switch (letter) {
    case "i","l":
      return "1";
    break;
    case "z":
      return "2";
    break;

    case "e":
      return "3";
    break;

    case "a":
      return "4";
    break;

    case "s":
      return "5";
    break;

    case "g":
      return "6";
    break;

    case "t","y":
      return "7";
    break;

    case "b":
      return "8";
    break;

    case "q":
      return "9";
    break;

    case "o":
      return "0";
      break;
    default:
      return letter;
  }
  })
  decodeWords=newWords.join("")
return decodeWords;

}

function stringsAndNumbers(array){
  let arrayNew = [];
  for (let i=0; i<array.length; i++) {
  if (arrayNew.indexOf(array[i])===-1){

      arrayNew.push(array[i]);
    }
  }

  return arrayNew;
}

function Developer(name,languages){
  this.name = name;
  this.languages = languages;

}

const developer=new Developer("nikki",["css", "html", "javascript"])

Developer.prototype.learnLanguage =function(newLanguage) {
  this.languages.push(newLanguage)
  return this.languages;
}

const developerLearned=new Developer("nikki",["css", "html", "javascript"])

function stringsConcat(array){
  let newArray = [];
  array.forEach(item=>{
    if(typeof item ==="string"){
     newArray.push(item);
    }
  });
  return newArray.join(" ");
}


function negativeOnly(array){
  let newArray=[];
  array.forEach(number => {
    if (number<0){
      newArray.push(number);
    }
  })
  return newArray;
}

function camelise(string){
  //let newString ="";
  const newArray=string.split(" ").map(word=>{
    let first=word[0].toUpperCase();
    return word=first +word.substring(1);
  })


  let firstLetter=newArray.join("")[0].toLowerCase();
  return newString=firstLetter+newArray.join("").substring(1);
}
module.exports = {
  add,
  arrayOfString,
  encrypt,
  stringsAndNumbers,
  developer,
  developerLearned,
  stringsConcat,
  negativeOnly,
  camelise
}
