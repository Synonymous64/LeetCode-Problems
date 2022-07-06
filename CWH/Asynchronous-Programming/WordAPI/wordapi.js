console.log("How's Life Going?");
const word = [
  {
    word: "example",
    definitions: [
      {
        definition: "a representative form or pattern",
        partOfSpeech: "noun",
      },
      {
        definition: "something to be imitated",
        partOfSpeech: "noun",
      },
      {
        definition: "an occurrence of something",
        partOfSpeech: "noun",
      },
      {
        definition:
          "an item of information that is typical of a class or group",
        partOfSpeech: "noun",
      },
      {
        definition: "punishment intended as a warning to others",
        partOfSpeech: "noun",
      },
      {
        definition:
          "a task performed or problem solved in order to develop skill or understanding",
        partOfSpeech: "noun",
      },
    ],
  },
  {
    word: "with",
    definitions: [
      {
        definition:
          "denotes or expresses some situation or relation of nearness, proximity, association, connection, or the like.",
        partOfSpeech: "preposition",
      },
    ],
  },
  {
    "word": "of",
    "definitions": [
      {
        "definition": "In a general sense, from, or out from; proceeding from; belonging to; relating to; concerning; -- used in a variety of applications.",
        "partOfSpeech": "preposition"
      }
    ]
  }
];

let inputTag = document.createElement('input');
inputTag.setAttribute('type', 'text');
inputTag.setAttribute('style','border : 3px solid grey; padding : 3px')

let bodyTag = document.querySelector('body');
bodyTag.innerHTML = `<h1 align="center"> Welcome to API - Dictonary</h1>
<br><br>Enter your word to search<br><br>`;
bodyTag.appendChild(inputTag);
let search = document.createElement('div');
let result = document.createElement('ul');

search.innerHTML = `<br><button type="button" id = "search"> search </button>`;
bodyTag.appendChild(search);
bodyTag.appendChild(result);

document.getElementById('search').addEventListener('click', funct);

function funct(){
    // console.log("Hello there");
    let str = `<h3>Search Result</h3> <br>`;
    let wordToSearch = inputTag.value;
    let index;
    for(key in word){
        if(word[key].word == wordToSearch){
            index = key;
        }
    }
    if(index == undefined){
        str = `<h3>Match not found`;
    } else{
        let obj = word[index].definitions;
        for(key in obj){
            str += `<li>${obj[key].definition}</li>`
        }
    }
    result.innerHTML = str;
}
