
//your order please

function order(words){
    if (words.length == 0){return words}
    let wordsarr = words.split(' ');
    let indarr = words.match(/\d/g);
    let neword = [];
    for (let i=1;i<=indarr.length;i++){
      let ind = indarr.indexOf(i.toString())
      neword.push(wordsarr[ind])
    }
    return neword.join(' ')
  }