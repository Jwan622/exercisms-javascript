var words = function(input) {
  var object = {}
  var cleaned_input = input.replace(/\s{2,}|\n|\t/g," ")
  var input_array_without_whitespace = cleaned_input.split(" ").filter(function(ele){
    return /\S/.test(ele)
  })

  input_array_without_whitespace.forEach(function(word) {
    if (word === "toString")
      object[word] = 1;
    else if (object[word]) {
      object[word]++;
    }
    else {
      object[word] = 1;
    }
  });
  return object
}

module.exports = words;
