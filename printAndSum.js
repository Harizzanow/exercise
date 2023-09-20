function printAndSum(num1, num2) {
    let sum = 0
    let buff = ""
    for (i = num1; i <= num2; i++) {
        sum += i
        buff += " " + i
        //console.log(buff)
    }
    console.log(buff)
    console.log(` Sum: ${sum}`);

} printAndSum(5, 10)