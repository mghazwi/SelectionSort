// SelectionSort for words/numbers entered using prompt

function selectionSort(input){
  let words = input.split(' ');
  for(let i=words.length-1;i>0;i--){
    index = findIndexOfLargest(words,i+1);
    swap(words,index,i);
  }
  return words;
}

function findIndexOfLargest(words,upto){
  let index = 0;
  for(let i=1;i<upto;i++){
    if(words[index].localeCompare(words[i]) == -1){
      index = i;
    }
  } 
  return index;
}

function swap(words,index1,index2){
  let w1 = words[index1];
  let w2 = words[index2];
  words[index1] = w2;
  words[index2] = w1;
}

let input = prompt("enter array words seperated by single space(\' \'):");
let words = selectionSort(input);
alert(words);
