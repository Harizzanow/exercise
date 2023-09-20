function balls(input){
 let ballsCounter = Number(input[0]);
 
 let divides = 0
 let ballPoints = 0
  let ballPointsCounter = 0;
  let redBalls = 0
  let yellowBall = 0
  let orangeBall=0
  let whiteBall = 0

  for( let i = 1 ; i < input.length ; i ++){
 let currentBall = input[i];
 if(currentBall === "red" ){
     ballPoints +=5
     redBalls++
     
   
 }else if(currentBall === "yellow"){
    ballPoints += 15
    yellowBall++
 }else if(currentBall === "orange"){
    ballPoints += 10
    orangeBall++
  }else if(currentBall === "white"){
    ballPoints += 20
   whiteBall++
  }else if(currentBall === "black"){
    ballPoints = Math.floor(ballPoints/ 2)
    divides++
  }else {
    ballPointsCounter++
  }
}
 console.log(`Total points: ${ballPoints}`)
 console.log(`Red balls: ${redBalls}`)
 console.log(`Orange balls: ${orangeBall}`)
 console.log(`Yellow balls: ${yellowBall}`)
 console.log(`White balls: ${whiteBall}`)
 console.log(`Other colors picked: ${ballPointsCounter}`)
 console.log(`Divides from black balls: ${divides}`)
 
 
 
 
    //• Ако топката е “red” точките ни се повишават с 5.
 //• Ако топката е “orange” точките ни се повишават с 10.
// //• Ако топката е “yellow” точките ни се повишават с 15.
 //• Ако топката е “white” точките ни се повишават с 20.
 //• Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
//Ако топката е с какъвто и да е цвят, различен от по-горните, точките не се манипулират и програмата продължава да работи.

 
 //"Total points: {всичките събрани точки}"
// "Red balls: {броят червени топки}"
 //"Orange balls: {броят оранжеви топки}"
 //"Yellow balls: {броят жълти топки}"
 //"White balls: {броят бели топки}"
 //"Other colors picked: {броят на избраните топки извън зададените цветове}"
 //"Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"

  

}balls(["3","white","black","pink"])