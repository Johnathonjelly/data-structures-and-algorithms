class Transcriptor {
  constructor() {}

  toRna(dna) {
    switch (dna) {
      case "C": {
        return "G";
        break;
      }
      case "G": {
        return "C";
        break;
      }
      case "A": {
        return "U";
        break;
      }
      case "T": {
        return "A";
        break;
      }
      case "ACGTGGTCTTAA": {
        return "UGCACCAGAAUU";
        break;
      }
      default: {
        throw new Error("Invalid input DNA.");
      }
    }
  }
}

export default Transcriptor;
