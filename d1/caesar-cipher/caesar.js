const encrypt = function (plaintext, key) {
  // IMPLEMENT ME

  
  const alphabets = "abcdefghijklmnopqrstuvwxyzA";
  const letters = alphabets.split("");

  let result = "";
  for (let i = 0; i <= plaintext.length - 1; i++) {

    const difference = letters.indexOf(plaintext[i]) + key;
    if (plaintext[i] === " ") {
      result += " "
    }
    else if (difference > 25) {
      result += letters[difference - 26];

    }

    else if (difference > 0) {
      result += letters[difference];

    }

    else {
      result += letters[26 + difference];
    }

  }
  return result;

};

module.exports = encrypt;