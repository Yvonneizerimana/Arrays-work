
const getSleepHours=day=>{

    if(day==="Monday"){
        return 8;
    }
    
    else if(day==="Tuesday"){
        return 8;
    }

    else if(day==="Wednesday"){
        return 8;
    }

    else if(day==="Thusday"){
        return 8;
    }

    else if(day==="Friday"){
        return 8;
    }

    else if(day==="Saturday"){
        return 8;
    }

    else if(day==="Sunday"){
        return 8;
    }

    else{
        return "you've slept a few hours per week";
    }
};

function getActualSleepHours(){

  return getSleepHours("Monday")+getSleepHours("Tuesday")+getSleepHours("Wednesday")+getSleepHours("Thusday")+getSleepHours("Friday")+getSleepHours("Saturday")+getSleepHours("Sunday");
}

console.log("The actual sleep Hours is :  " + getActualSleepHours());

function getIdealSleepHours(){

    let idealHours= 8;

    return idealHours*=7;
}

console.log("The ideal hours is : "+getIdealSleepHours());

function calculateSleepDebits(){

let actualSleepHours=getActualSleepHours();
let idealSleepHours=getIdealSleepHours();



if(actualSleepHours===idealSleepHours){

    return " User got the perfect amount of sleep";

}

else if (actualSleepHours>idealSleepHours){

    return "you slept too much than expected";

}

else if (actualSleepHours<idealSleepHours){

    return "you didn't slept satsified time";
}

else{

   return " you didn't slept altleast any hour in whole week";
}
}

console.log("Sleep debits is : "+ calculateSleepDebits());