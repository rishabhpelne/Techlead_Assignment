class Empl{
    Emp_no;
    Name;
    Basic;
    DA;
    HRA;
    TA;
    PF;
    Gross;

    get(){
        this.Emp_no = prompt('Enter the employee number');
        this.Name = prompt('Enter name of Employee');
        this.Basic = parseInt(prompt('Enter Basic Salary'));
    }

    calcu(){
        if(this.Basic >= 20000){
            this.Gross = (this.Basic+53/100+12/100+10/100)-8/100;
            this.PF = 8/100;
        }
        else if(this.Basic>=10000 && this.Basic<=20000){
            this.Gross = (this.Basic+45/100+10/100+12/100)-7.5/100;
            this.PF = 7.5/100;
        }
        else{
            this.Gross = (this.Basic+40/100+8/100+14/100)-7/100;
            this.PF = 7/100;
        }
    }
    display(){
        document.write(`EMPLOYEE NO. : ${this.Emp_no} <br>`);
        document.write(`NAME : ${this.Name} <br>`);
        document.write(`GROSS SALARY. : ${this.Gross} Rs. <br>`);
        document.write(`PF : ${this.PF} <br>`);
    }
}
let obj = new Empl();
obj.get();
obj.calcu();
obj.display();