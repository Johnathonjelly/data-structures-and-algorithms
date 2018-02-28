class Bob {
  constructor() {
    this.response = new Map();
    this.response.set("default", "Whatever.");
    this.response.set("shouting", "Whoa, chill out!");
    this.response.set("question", "Sure.");
    this.response.set("forcefullQuestion", "Calm down, I know what I'm doing!");
    this.response.set("silent", "Fine. Be that way!");
  }

  hey(message) {
    switch (true) {
      case this.isShouting(message): {
        return this.response.get("shouting");
      }
      case this.isSilent(message): {
        return this.response.get("slient");
      }
      case this.isQuestion(message): {
        return this.response.get("question");
      }
      default: {
        return this.response.get("default");
      }
    }
  }

  isShouting(message) {
    return (
      message === message.toUpperCase() && message !== message.toLowerCase()
    );
  }

  isSilent(message) {
    return !message.trim().length;
  }

  isQuestion(message) {
    return message.length - 1 === message.endsWith("?");
  }
}

export default Bob;
