//To convert the time 24-12hrs
let hor=new Date()
let hrs=hor.getHours()
function hors(){
    if(hrs>12){
        console.log(hrs-12)
    }else{
        console.log(hrs)
    }
}
hors(hrs)
//Generate the 6 digit otp:-
function otp(){
    console.log((Math.random(otp)*1000000).toFixed(0))
}
otp(otp)
//function to return day of the week
let today=new Date
let day=today.getDay()
function days(day){
    if(day==1){
        console.log("mon")
    }
    else if(day==2){
        console.log("tues")
    }
    else if(day==3){
        console.log("wed")
    }
    else if(day==4){
        console.log("thurs")
    }
    else if(day==5){
        console.log("fri")
    }
    else if(day==6){
        console.log("sat")
    }
    else{
        console.log("sun")
    }
}
days(day)