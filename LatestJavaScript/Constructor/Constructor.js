class LibSystem {
    constructor(librarian) {
        this.book = 'Dead Silence';
        this.borrower = 'Anonymous';
        this.librarian = librarian;
    }
    printBook() {
        console.log("this is the chosen book", this.book + ' ' + this.borrower + ' through ' + this.librarian);
    }
    setBook(bookName) {
        this.bool = bookName;
    }
    setBorrower(name) {
        this, this.borrower = name;
    }
}
let praj = new LibSystem('Liss');
praj.setBorrower('Prajwal');
praj.printBook();