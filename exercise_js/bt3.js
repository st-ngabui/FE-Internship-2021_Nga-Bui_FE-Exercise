function maskedNumber(a) {
  let array = [];
  for(let j = 0; j < 10; j++){
    let b = a.replace('*', j);
    if(Number(b) % 3 === 0) array.push(b);
  }
  return array;
}
console.log(maskedNumber('1234567890*'));
