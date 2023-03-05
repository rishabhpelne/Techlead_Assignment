class Fruitjuice{
    product_code;
    flavour;
    pack_type;
    pack_size;
    product_price;

    input(){
        this.product_code = prompt('Enter the product code number');
        this.flavour = prompt('Flavour of the juice (orange,apple,etc)');
        this.pack_type = prompt('Type of Packaging (tetra-pack,bottle,etc)');
        this.pack_size = prompt('Enter pack size (200ml, 400ml, etc)');
        this.product_price = parseInt(prompt('Enter price of the product'));
    }
    discount(){
        this.product_price -= 10;
    }
    display(){
        document.write(`Product Code : ${this.product_code} <br>`);
        document.write(`Flavour : ${this.flavour} <br>`);
        document.write(`Pack Type : ${this.pack_type} <br>`);
        document.write(`Pack Size : ${this.pack_size} <br>`);
        document.write(`Product Price : ${this.product_price} <br>`);
    }
}

let obj = new Fruitjuice();
obj.input();
obj.discount();
obj.display();