var wordCount = function (sentence){
  word_count = {};
  words = sentence.split(' ');
  for(i=0; i< words.length; i++){
    if(words[i] in word_count){
      word_count[words[i]]++;
    }
    else{
      word_count[words[i]] = 1;
    }
  }
  return word_count;
};
