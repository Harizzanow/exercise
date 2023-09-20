function barcode(input) {
 
    let startInterval = String(input[0]);
    let endInterval = String(input[1]);
 
  let startA = Number(startInterval[0])
let endA = Number(endInterval[0])
let starB = Number(startInterval[1])
let endB = Number(endInterval[1])
let startC = Number(startInterval[2])
let ednC = Number(endInterval[2])
let starD = Number(startInterval[3])
let endD = Number(endInterval[3])
let buff = "";
for(let a = startA ; a <= endA ; a++){
for (let b = starB ; b <=endB ; b++){
    for(let c = startC ; c <= ednC ; c++){
        for(let d = starD ; d <= endD ; d ++){
            if(a % 2 !== 0 && b% 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
               
               buff+= `${a}${b}${c}${d} ` 
               //console.log(buff)// console.log( a + " " + b + " " + c + " " + d)
            }
        }
    }
}
    
}
console.log(buff)

}

barcode(["2345", "6789"])