class Book{
    BOOK_NO;
    BOOK_TITLE;
    PRICE;

    input(){
        this.BOOK_NO = prompt('Enter the book no');
        this.BOOK_TITLE = prompt('Enter the book title');
        this.PRICE = parseInt(prompt('Enter the price per copy'))
    }
    TOTAL_COST(n){
        let tcost;
        tcost = this.PRICE * this.n;
        document.write('Total cost : ',tcost , 'rs');
    } 
    purchase(){
        this.n = parseInt(prompt('Enter the no. of copies to purchase'));
        this.TOTAL_COST(this.n);  //callback function
        console.log(`Price per copy : ${this.PRICE} <br>`);
        console.log(`No of copies : ${this.n}`)
    }
}

let ob = new Book();
ob.input();
ob.purchase();

