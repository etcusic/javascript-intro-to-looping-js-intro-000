var forLoop = function(array){
  for (var i = 0; i < 25; i++){
    //var sent = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    array.push(`"I am ${i} strange loop`)
  }
  return array
}

var whileLoop = function(n){
  while(n >= 0){
    return n
    n--
  }
  return 'done'
}
