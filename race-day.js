
let raceNumber=Math.floor(Math.random()*1000);

const registeredEarly=false;
const age=19;

if (age>18 && registeredEarly){
    raceNumber +=1000;
}
else if(!registeredEarly&&age<18){
    raceNumber +=1000
}

if (age>18 && registeredEarly){
    console.log(`runner is adult and registered early with racenumber: ${raceNumber}`);
}
else if(age>18 && !registeredEarly){
    console.log (`they will race at 11:00am with this race number: ${raceNumber}`);

}
else if(age<18){
    console.log(`they will race at 12:30pm with this race number: ${raceNumber}`);
}
else{
    console.log("you are not allowed to be a runner");
}


