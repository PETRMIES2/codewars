function cleanTalk(talk){
  return talk.split(' ')
            .filter(text => text !=='puke')
            .filter(text => text !=='hiccup')
            .filter(text => text !== '')
            .join(' ');
}
console.log(cleanTalk('puke make        hiccup hiccup money puke puke puke and hiccup hiccup puke spend hiccup puke puke it hiccup wisely.'));
