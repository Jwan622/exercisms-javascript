var Hamming = {
  compute: function(dna, rna) {
    var score = 0;
    if (dna.length === rna.length) {
      for (x = 0; x < dna.length; x++) {
        if (dna[x] !== rna[x]) {
          score++;
        }
      }
      return score;
    } else {
      throw new Error('DNA strands must be of equal length.')
    }
  }
}

module.exports = Hamming;
