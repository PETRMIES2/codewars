// nääh. Stupid code.
function maskify(source) {
  // let maskArea = source.length-4;
  // let plainPart = source.substring(maskArea);
  // return [...source.substring(0,maskArea)].map(a=>'#').join('') + plainPart;

   return source.slice(0, -4).replace(/./g, '#') + source.slice(-4);
  // return source.replace(/.(?=....)/g, '#');
  // return source.replace(/.(?=.{4})/g, "#");
}



console.log(maskify('1114341234'));
