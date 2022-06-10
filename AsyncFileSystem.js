// // ------------------------------------------------------------- Lgin/signUp(Asynchronous file system) ?

// // ager file hoga to signup ke liye jayega and ager file nahi hoga to pahale vah create karega .

// // jab user signup ke liye  jayega tab vah (name , email) input lega . 
// // sabse pahale us user ka email file ('AsyncfileS.txt') me check ki vah user us file me hai ya nahi.
// // ager us user ka email text ('AsyncfileS.txt') file se match karta hai to massege show karega. (you hava already signUP.please login .)
// // ager user ka email match nahi karta hai tab password bhi puchhega and after massege show karega .(signUP successfully.)

// // jab user login ke liye jayega tab user ka email and password puchhega .
// // jab user ka email and password match karega tabhi user login ho payega .
// // ager match nahi kiya to massege show karega(Invaild .please check Email and Password.).

const f = require("fs")
const input = require('readline-sync')
if (f.existsSync('AsyncfileS.txt')){
    console.log(`1. signUp\n2. login\n3. Exixt`);
    let a=input.questionInt("Enter your option :")
    if(a===1){
        let name = input.question('Apna name dale : ')
        let email = input.question('Apna email id dale : ')

        f.readFile('AsyncfileS.txt', 'utf-8',(err,data)=>{
            if(err) throw err;
            if (data.includes(email)) {
                console.log('you hava already signUP.');
        
            } else {
                let password = input.question('Apna Password dale : ')
                let a = f.appendFile('AsyncfileS.txt', `${name},${email},${password}\n`,(err)=>{
                    if(err) throw err;
                })
                console.log('signUP successfully .');
            }
        })
    }
    else if(a===2){
        f.readFile('AsyncfileS.txt','utf-8',(err,data)=>{
            if(err) throw err;
            let email = input.question('Apna email id dale : ')
            let password = input.question('Apna Password dale : ')
            if (data.includes(email)&& (data.includes(password))) {      // check (p.txt) me email, password hai ya nahi .
                console.log('login succesfully.');
            }
            else{
                console.log(`Invaild .please check Email and Password .`);
            }
        })
    }
    else{
        console.log('you are going out of your page.')
    }
}
else{
    f.writeFile('AsyncfileS.txt','',(err)=>{
        if(err) throw err;
    })
}


// // *********************************************************************************** //
// // ager file hoga to signup ke liye jayega and ager file nahi hoga to pahale vah create karega .

// // jab user signup ke liye  jayega tab vah (name , email) input lega . 
// // sabse pahale us user ka email file ('AsyncfileS.txt') me check ki vah user us file me hai ya nahi.
// // ager us user ka email text ('AsyncfileS.txt') file se match karta hai to massege show karega. (you hava already signUP.please login .)
// // ager user ka email match nahi karta hai tab password bhi puchhega and after massege show karega .(signUP successfully.)

// // jab user login ke liye jayega tab user ka email and password puchhega .
// // jab user ka email and password match karega tabhi user login ho payega .
// // jab user ka email and password match karega tab jo user login karte samay email and password input vah aur jo text file me user ka detail hoga terminal per show karega .

const f = require("fs")
const input = require('readline-sync')
if (f.existsSync('AsyncfileS.txt')){        //  check file with sync 
    console.log(`1. signUp\n2. login\n3. Exixt`);
    let a=input.questionInt("Enter your option :")
    if(a===1){
        let name = input.question('Apna name dale : ')
        let email = input.question('Apna email id dale : ')

        f.readFile('AsyncfileS.txt', 'utf-8',(err,data)=>{      // read file async 
            if(err) throw err;
            if (data.includes(email)) {
                console.log('you hava already signUP.');
        
            } else {
                let password = input.question('Apna Password dale : ')
                let a = f.appendFile('AsyncfileS.txt', `${name},${email},${password}\n`,(err)=>{        // append file async 
                    if(err) throw err;
                })
                console.log('signUP successfully .');
            }
        })
    }
    else if(a===2){
        let email = input.question('Apna email dale : ')
        let password = input.question('Apna Password dale : ')
        f.readFile("AsyncfileS.txt","utf-8",(err,data)=>{       // read file async 
            
            let uerData = data.split('\n');
            check=true;
            for (d of uerData) {
                if (d.includes(email) && (d.includes(password))) {      // check email and password hai ya nahi
                    check=false;
                    console.log(`jo user login karega uska Email:${email} and password:${password} show detail :-` , d);
                    console.log('Match data . login successfully .');
                    break
                }
            }
        }) 
    }
    else{
        console.log('you are going out of your page.')
    }
}
else{
    f.writeFile('AsyncfileS.txt','',(err)=>{
        if(err) throw err;
    })
}
