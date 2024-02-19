
let userName='';
 
userName? console.log("hello, ${useName}!") : console.log("hello !");

const userQuestion="how can i choose the gorgeous place to rest after job ?";

console.log(userQuestion);

let randomNumber=Math.floor(Math.random()*8);

let eightBall="";

if (randomNumber==0){
    eightBall="it is a certain";
}
else if(randomNumber==1){
    eightBall="it is decidedily so";

}
else if(randomNumber==2){
    eightBall="reply hazy try again";

}
else if(randomNumber==3){
    eightBall="can not predict now";

}
else if(randomNumber==4){
    eightBall="do not count on it";

}
else if(randomNumber==5){
    eightBall="my sources say no";

}
else if(randomNumber==6){
    eightBall="outlook not so good";

}
else if (randomNumber==7){
    eightBall="signs point to yes";

}
else{
   console.log("invalid random number") ;
}

console.log(eightBall);






