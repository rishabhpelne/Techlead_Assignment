class Employee{
    pan;
    name;
    tax_income;
    tax;

     input(){
        this.pan = prompt('Enter your Pan number');
        this.name = prompt('Enter your Name');
        this.tax_income = parseInt(prompt('Enter your TAX INCOME'))
     }
     
     cal(){
        if(this.tax_income <= 100000){
            this.tax = 0;
        }
        else if(this.tax_income >100000 && this.tax_income <= 150000){
            this.tax = 10/100 * (this.tax_income - 100000);
        }
        else if(this.tax_income > 150001 &&  this.tax_income <= 250000){
         this.tax = 5000 + 20/100 * (this.tax_income - 150000)
        }
        else{
         this.tax = 25000 + 30/100 * (this.tax_income - 250000)
        }
     }

     display(){
      document.write('Pan Number :'+this.pan +'<br>');
      document.write('Name :'+this.name +'<br>');
      document.write('TAX Income tax :',this.tax_income +'<br>')
      document.write('TAX  : ',this.tax +'<br>')
   }
}

let emp = new Employee();
emp.input();
emp.cal();
emp.display();