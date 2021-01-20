class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(word) {
    word = word.split(" ")
    const bad = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    
    for(let i = 0; i < word.length; i++) {
      if (i === 0) {
        word[i] = this.capitalize(word[i])
      } else {
        if (!(bad.includes(word[i]))) {
          word[i] = this.capitalize(word[i])
        }
      }
    }

    return word.join(" ")
  }
}