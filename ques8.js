class Bill{
    name;
    consumerno;
    unitconsumed;

    datainput(){
        this.name = prompt('Enter name of consumer');
        this.consumerno = prompt('Enter the Consumer number');
        this.unitconsumed = parseInt(prompt('Enter the unit consumed'));
    }

    compute(){
        let amount;
        if(this.unitconsumed <= 100){
            this.amount = this.unitconsumed * 1.20;
        }
        else if(this.unitconsumed>100 && this.unitconsumed <= 200){
            this.amount = this.unitconsumed * 2.20;
        }
        else if(this.unitconsumed>200 && this.unitconsumed <= 300){
            this.amount = this.unitconsumed * 3.20;
        }
        else {
            this.amount = this.unitconsumed * 4.00;
        }  
    }

    display(){
        document.write(`Consumer Name : ${this.name} <br>`);
        document.write(`Consumer No : ${this.consumerno} <br>`);
        document.write(`Unit Consumed : ${this.unitconsumed} <br>`);
        document.write(`Bill amount : ${this.amount} Rs.  <br>`);
    }
}

let obj = new Bill();
obj.datainput();
obj.compute();
obj.display();