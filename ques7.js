class Bank{
    name;
    acno;
    type;
    bal=1000;

    initialise(){
        this.name = prompt('Enter the name of Depositor');
        this.acno = prompt('Enter your Account number');
        this.type = prompt('Type of Account (Saveing / Current)');
        // this.bal = parseInt(prompt('Enter the amount in account'));
    }
    depo(a){   //a means deposite 
        a = parseInt(prompt('Enter amount to Deposited'));
        this.bal = a + this.bal;
        document.write(`Deposite : ${this.bal} <br>`);
    }

    withdraw(a){  // a means withdraw
        a = parseInt(prompt('Enter amount to Withdraw'));
        if(this.bal >= 1000){
            this.bal = this.bal - a;
            document.write(`Withdraw : ${this.bal} <br>`);
        }
        else{
            alert('Balance is less than 1000 rs')
        }
    }
    print(){
        document.write(`Name of Depositor : ${this.name} <br>`);
        document.write(`Account number : ${this.acno}  <br>`);
        document.write(`Account Type : ${this.type} <br>`);
        document.write(`Balance : ${this.bal} <br>`);
       
    }
}

let ban = new Bank();
ban.initialise();
ban.depo(this.bal);
ban.withdraw(this.bal);
ban.print();