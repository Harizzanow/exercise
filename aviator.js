function aviator(input){
let companyName = input[0];
let ticketAdult = Number(input[1]);
let ticketKids = Number(input[2]);
let priceAdult = Number(input[3]);
let tax = Number(input[4])

let priceKidsTicket = priceAdult - priceAdult*0.70
let totalPriceTicketAdult = ticketAdult*(priceAdult + tax);
let totalPriceKids =  ticketKids *(priceKidsTicket + tax);

let totalCoast = totalPriceTicketAdult + totalPriceKids
let totalProfit = totalCoast*0.20

console.log(`The profit of your agency from ${companyName} tickets is ${totalProfit.toFixed(2)} lv.`)



    


}


aviator(["WizzAir", "15" , "5" ,"120" ,"40"])