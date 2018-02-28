class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
    this.arrSentence = [];
    this.letterSet;
  }

  stripPangram() {
    this.sentence = this.sentence.replace(/\s/gi, "").toLowerCase();
    this.arrSentence = this.sentence.split("");
    this.letterSet = new Set(this.arrSentence);
  }

  checkSetSize() {
    this.stripPangram();
    return this.letterSet.size === 26;
  }

  isPangram() {
    if (this.sentence === "") {
      return false;
    } else if (/\d/gi.test(this.sentence)) {
      this.sentence = this.sentence.replace(/\d/g, "");
      return this.checkSetSize();
    } else if (/_/g.test(this.sentence)) {
      this.sentence = this.sentence.replace(/_/g, "");
      return this.checkSetSize();
    } else if (!/a-zA-Z/gi.test(this.sentence)) {
      this.sentence = this.sentence.replace(
        /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g,
        ""
      );
      return this.checkSetSize();
    } else {
      return this.checkSetSize();
    }
  }
}

export default Pangram;
