var forLoop = function(array){
  var sent = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  for (var i = 0; i < 25; i++){
    array.push(sent)
  }
}
