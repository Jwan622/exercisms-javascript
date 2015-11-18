var nucleoMap = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

var invertConverter = function (obj) {
  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};

var splitStrandToArray = function(strand) {
  return strand.split('')
}

module.exports = function() {
  this.toRna = function(strand) {
    var strandArray = splitStrandToArray(strand)
    var converted = ''

    strandArray.forEach(function(letter) {
      converted = converted + nucleoMap[letter]
    })

    return converted;
  }

  this.toDna = function(strand) {
    var strandArray = splitStrandToArray(strand);
    var converted = ''

    strandArray.forEach(function(letter) {
      converted = converted + invertConverter(nucleoMap)[letter]
    })

    return converted;
  }
}
