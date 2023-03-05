//Question 1
class Employee{
    constructor(b){
        this.basic = b;

    }
    calculate(){
        let da,hra,pf,np,gp;
        da = 25/100 * this.basic;
        hra = 15/100 * this.basic;
        pf = 8.33/100 * this.basic;
        np = this.basic + da + hra;
        gp = np - pf;
        console.log('Gross Pay ',gp)
    }
}
let obj = new Employee(300000);
obj.calculate();

///////////////////////////////////////////////////

//Question 2
class Salary{
    name;
    address;
    phone;
    subSpc;
    mSal;
    iTax;

    input(){
        this.name = prompt('Enter  your name :');
        this.address = prompt('Enter your address :');
        this.phone = prompt('Enter  phone no :');
        this.subSpc = prompt('Enter Subject Speciation :');
        this.mSal = prompt('Enter monthly salary :')
    }

    display(){
        document.write(`Name : ${this.name} <br>`);
        document.write(`Address : ${this.address} <br>`);
        document.write('Phone :'+this.phone +'<br>')
        document.write('Subject Speciallision :'+this.subSpc +'<br>');
        document.write('Monthly Salary :'+this.mSal +'<br>')
    }
    cal(){
        let aSal;
        aSal = 12 * this.mSal;
        if(aSal > 175000){
            this.iTax = 5/100 * (aSal - 175000);
        }
        else{
            this.iTax = 0;
        }
    }
}
let obj1 = new Salary();
obj1.input();
obj1.display();
obj1.cal();