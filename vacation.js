function vacation(people, type, day) {

    let singlePrice = 0
    
    switch(type){
        case "Students":
            if(day === "Friday"){
                singlePrice = 8.45
            }else if(day === "Saturday"){
                singlePrice = 9.80
            }else if(day === "Sunday"){
                singlePrice =10.46
            }
            break;
            case "Business":
                if(day === "Friday"){
                    singlePrice = 10.90
                }else if(day === "Saturday"){
                    singlePrice = 15.60
                }else if(day === "Sunday"){
                    singlePrice =16
                }
                break;
                case "Regular":
                    if(day === "Friday"){
                        singlePrice = 15
                    }else if(day === "Saturday"){
                        singlePrice = 20
                    }else if(day === "Sunday"){
                        singlePrice =22.50
                    }
                    break;
    }
    let totalPrice = people*singlePrice
    if(people >= 30 && type === "Students"){
        totalPrice = totalPrice*0.85
    }else if(people >=100 && type === "Business"){
        let discountedPrice = 10*singlePrice
        totalPrice -= discountedPrice
    }else if( type === "Regular" &&  people >=10 && people <=20){
        totalPrice *=0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
        
    }vacation(40,

    "Regular",
    
    "Saturday")