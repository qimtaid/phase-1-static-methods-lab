class Formatter {
  //add static methods here
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Static method to titleize a string
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}


console.log(Formatter.capitalize('hello')); 
console.log(Formatter.sanitize('hello!$&')); 
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); 