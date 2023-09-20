function bestPlayer(input){
    let name = input[0];
    let goals = Number(input[1])
    let index = 2
    let command = input[index]
    
    
    while(command !=="END" ){
        
        let currentName = input[index]
        index++
     let currrentGoals = Number(input[index])
     console.log()
     if(currrentGoals > goals && currrentGoals <3 ){
        console.log(`${currentName} is the best player!`)
        console.log(`He has scored ${currrentGoals} goals.`)
        break;
     }else if(currrentGoals > goals && currrentGoals >=3){
        console.log(`${currentName} is the best player!`)
        console.log(`He has scored ${currrentGoals} goals and made a hat-trick !!!`)
        break;
     }
    
    command = input[index]
    index++
    }
    
    
    
    
    } bestPlayer(["Rooney",
   "1",
   "Junior",
   "2",
   "Paolinio",
   "2",
   "END"])
   
   