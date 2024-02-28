function breakString(text) {
  let words = text.split(" ");
  if (words.length === 3) {
    return words[0] + " " + words[1] + "\n" + words[2];
  } else if (words.length === 2) {
    return words[0] + "\n" + words[1];
  } else {
    return text;
  }
}

export { breakString };
