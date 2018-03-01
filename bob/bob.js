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
      case this.isShoutingHandler(message): {
        return this.response.get("shouting");
      }
      case this.isSilentHandler(message): {
        return this.response.get("slient");
      }
      case this.isQuestionHandler(message): {
        return this.response.get("question");
      }
      default: {
        return this.response.get("default");
      }
    }
  }

  isShoutingHandler(message) {
    return (
      message === message.toUpperCase() && message !== message.toLowerCase()
    );
  }

  isSilentHandler(message) {
    return !message.trim().length;
  }

  isQuestionHandler(message) {
    return message.length - 1 === message.endsWith("?");
  }
}

export default Bob;
