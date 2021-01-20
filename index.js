class Formatter {
  //add static methods here
  static capitalize(word) {
    //Write a method static capitalize that takes in a string and capitalizes the first letter.
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    //Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
    return word.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(word) {
    //Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
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