var forLoop = function(array){
  for (var i = 0; i < 25; i++){
    var sent = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    array.push(sent)
  }
}
