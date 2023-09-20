function reverseString(input) {
    let word = input[0]
  let buff=""
    for (let i = word.length - 1; i >= 0; i--) {
      let letter = word[i];
      buff+= letter
     
    }
    console.log(buff);
  }reverseString(["Hello"])