class Employee{
    constructor(name, exp, division){
        this.name = name;
        this.exp = exp;
        this.division = division;
    }
    slogan(){
        return `This is ${this.name} and this company is the best`;
    }
    joinYear(){
        return 2022 - this.exp;
    }

    //! Can access without any object;
    static add(a, b){
        return a + b;
    }
}
class Programmer extends Employee{
    constructor(name, exp, division, lang, github){
        super(name, exp, division);
        this.lang = lang;
        this.github = github;
    }
    favoriteLang(){
        return `My favourite is ${this.lang === 'Javascript' ? this.lang : 'not present'}`;
    }

    //! Static is used when we are not using any member function of class.
    static multiply(a , b){
        return a * b;
    }
}
praj = new Employee("Prajwal", 2,'A');
console.log(praj);
console.log(praj.slogan());
console.log(praj.joinYear());
console.log(Employee.add(24,4)); //! without creating object with class name just!
praj2 = new Programmer("Prajwal", 2, 'A', 'Rust', 'Synonymous64');
console.log(praj2);
console.log(praj2.favoriteLang());
console.log(Programmer.multiply(2,2));