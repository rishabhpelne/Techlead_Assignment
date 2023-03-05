class Mobile{
        bno;
        phno;
        name;
        days;
        charge;

        input(){
            this.bno = prompt('Enter your Bike number');
            this.phno = prompt('Enter your phone number');
            this.name = prompt('Enter your name');
            this.days = prompt('number of days Bike on Rent');
        }
        compute(){
            if(this.days <= 5){
                this.charge = '500 rs per day'
            }
            else if(this.days >= 5){
                this.charge = '400 rs per day'
            }
            else{
                this.charge = '200rs per day'
            }
        }
        display(){
            document.write(`Bike No : ${this.bno}  <br>`)
            document.write(`Phone No : ${this.phno}  <br>`)
            document.write(`Name : ${this.name}  <br>`)
            document.write(`No. of days : ${this.days}  <br>`)
            document.write(`Charge : ${this.charge}  <br>`)
        }
}

let mob = new Mobile();
mob.input();
mob.compute();
mob.display();