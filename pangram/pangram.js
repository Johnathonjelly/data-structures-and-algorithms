class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
    this.arrSentence = [];
    this.letterSet;
  }

  isPangram() {
    if (!this.sentence) return false;
    if (this.sentence.match(/[a-z]/gi) === false) {
      return false;
    }

    this.arrSentence = this.sentence.replace(/ /g, "").split("");
    this.letterSet = new Set(this.arrSentence);
    if (this.letterSet.size === 26) {
      return true;
    } else {
      return false;
    }
  }
}

export default Pangram;
