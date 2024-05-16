class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(`${this.name} is running`);
    }
    shout() {
        console.log(`${this.name} is shrieking`);
    }
}
class Monkey extends Animal{
    constructor(name, color){
        super(name, color)
    }
    eatBanana(){
        console.log(`${this.name} is eating banana`);
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        console.log(`${this.name} has the color ${this.color}`);
    }
}
let m = new Monkey('Monkey', 'grey');
m.setColor('blue');
m.eatBanana();
m.shout();
m.getColor();