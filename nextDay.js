function nextDay(year,month,day){
    let next = 0
    let nextMonth=0
    let firstYear = 1900
    
if(day >=30){
    day = 1
    month +=1
    if(month>12){
        year += 1
    }else{
        year = year
        if(year === 1){
            year = 1901
        }
    }
}else{
    day +=1
}
console.log(`${year}-${month}-${day}`)

}nextDay(1, 9, 30)