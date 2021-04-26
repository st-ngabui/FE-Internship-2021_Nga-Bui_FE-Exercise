function maskedNumber(a) {
  var array = [];
  for(var j = 0;j<10;j++){
    var b = a.replace('*', j);
    if(Number(b) % 6 == 0) array.push(b);
  }
  return array;
}
console.log(maskedNumber('1*9'));