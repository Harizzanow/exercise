function lastDigit(input) {
    let num = String(input[0]);
  
    for (let i = num.length - 1; i >= 0; i--) {
      let lastDigit = Number(num[i]);
  
      if (lastDigit === 1) {
        console.log("one");
        break;
      } else if (lastDigit === 2) {
        console.log("two");
        break;
      } else if (lastDigit === 3) {
        console.log("three");
        break;
      } else if (lastDigit === 4) {
        console.log("four");
        break;
      } else if (lastDigit === 5) {
        console.log("five");
        break;
      } else if (lastDigit === 6) {
        console.log("six");
        break;
      } else if (lastDigit === 7) {
        console.log("seven");
        break;
      } else if (lastDigit === 8) {
        console.log("eight");
        break;
      } else if (lastDigit === 9) {
        console.log("nine");
        break;
      }
    }
  }
  lastDigit(["512"])