function FindWordStartingWith(book, query) {
  const words = book.text.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.startsWith(query.toLowerCase())) {
      result.push(i);
    }
  }

  return result;
}

module.exports = FindWordStartingWith;
