class Password{
    constructor(){
        this.chars = "abcdefghijklmnopqrstABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.sepcialChars = "!@#&"
        this.simpleChars = "abcdefghijklmnopqrstuvwxyz";
        this.password = "";
    }
    generateStrongPassword(){
        this.password = "";
        for(let i = 1; i <= 11; ++i){
            let randomNum = Math.floor(Math.random() * this.chars.length);
            this.password += this.chars.charAt(randomNum);
        }
        let randomNum = Math.floor(Math.random() * this.sepcialChars.length);
        this.password += this.sepcialChars.charAt(randomNum);
    }
    generateSimplePassword(){
        this.password = "";
        for(let i = 1; i <= 12; ++i){
            let randomNum = Math.floor(Math.random() * this.simpleChars.length);
            this.password += this.simpleChars.charAt(randomNum);
        }
    }
    printPass(){
        console.log("GENERATED PASSWORD IS: ");
        console.log('====================================');
        console.log(this.password);
    }
}
let myPass = new Password();
myPass.generateStrongPassword();
myPass.printPass();
myPass.generateSimplePassword();
myPass.printPass();