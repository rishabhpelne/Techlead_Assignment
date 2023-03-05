class Library{
    acc_num;
    title;
    author;
    num_days;

    input(){
        this.acc_num = prompt('Enter the accession number of books');
        this.title = prompt('Enter the title of book');
        this.author = prompt('Enter name of author');
        this.num_days = prompt('Enter number of days Late');
    }

    compute(){
        let fine;
        this.fine = this.num_days * 2;
    }
    display(){
        document.write(`Accession number ${this.acc_num} <br>`);
        document.write(`Title of Book : ${this.title} <br>`);
        document.write(`Author : ${this.author} <br>`);
        document.write(`Fine is ${this.fine} Rs for ${this.num_days} days`)
    }
}

let obj = new Library();
obj.input();
obj.compute();
obj.display();