class Library {
    constructor(totalBooks){
        this.totalBooks = new Array();
        this.totalBooks = totalBooks;
        this.noofBooks = totalBooks.length;
        this.issuedBooks = new Array();
        this.noofIssuedBooks = 0;
        // this.returningBook = new Array();
    };
    getBookList(){
        totalBooks.forEach(element =>{
            console.log(element);
        })
    }
    issuingBooks(bookname , userName){
        let s  = 0;
        for(let i = 0; i < this.noofBooks; ++i){
            if(bookname === totalBooks[i]){
                totalBooks.splice(i,1);
                this.issuedBooks.push(bookname);
                this.noofBooks--;
                this.noofIssuedBooks++;
            }
            else{
                s++;
            }
        }
        if(s === this.noofBooks){
            console.log(userName +  " This book not found");
        } else {
            console.log("Successfully issued the book");
        }
    }
    getIssuedBook(){
        return this.issuedBooks;
    }
    returnBook(bookname, user){
        let count = this.noofIssuedBooks;
        for(let i = 0; i < this.noofIssuedBooks; ++i){
            if(this.issuedBooks[i] === bookname){
                totalBooks.push(bookname);
                this.noofBooks++;
                this.noofIssuedBooks--;
                this.issuedBooks.splice(i, 1);
            }  else count++;
        }
        if(count === this.noofIssuedBooks){
            console.log("No such books was issued by " + user);
        } else {
            console.log("Book is successfully returned");
        }
    }
}
let totalBooks = [
    "The Goldfinch by Donna Tart",
    "Joy at Work by Marie Kondo", 
    "Salt Fat Acid Heat by Samin Nosrat",
    "The Gift of Forgiveness by Katherine Pratt",
];
let myLib = new Library(totalBooks);
console.log(myLib); 
myLib.issuingBooks("Joy at Work by Marie Kondo", "Prajwal");
console.log(myLib.getIssuedBook());
myLib.returnBook("Joy at Work by Marie Kondo", "Prajwal");
myLib.getBookList();