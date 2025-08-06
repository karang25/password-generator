//Random Password Generator
function code(){
function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="`!@#$%^&*()_+-=[]~";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase? lowercaseChars :"";
    allowedChars+=includeUppercase? uppercaseChars :"";
    allowedChars+=includeNumbers? numberChars :"";
    allowedChars+=includeSymbols? symbolChars :"";

    if(passwordLength<=0){
        console.log("password length must be atleast 1");
    }
    if(allowedChars.length===0){
        console.log("at least 1 set of characters needs to be selected");
    }

    for(let i=0;i<passwordLength;i++){
        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    console.log(allowedChars);

   
   

    return password;
    
    
}


const passwordLength=12;
const includeLowercase =true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;


const Password=generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

console.log(`Generated Password: ${Password}`); 
document.getElementById("Password").textContent=`Password = ${Password}`;  }                            