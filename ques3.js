class Student{
    name;
    age;
    m1;
    m2;
    m3;
    max;
    avg;

    input(){
        this.name = prompt('Enter your name');
        this.age = prompt('Enter your age');
        this.m1 = parseInt(prompt('Enter m1'));
        this.m2 = parseInt(prompt('Enter m2'));
        this.m3 = parseInt(prompt('Enter m3'));
    }
    compute(){
        this.avg = this.m1+this.m2+this.m3/3;
        this.max = Math.max(this.m1,this.m2,this.m3);
    }
    display(){
        document.write('Name : '+this.name + '<br>');
        document.write(`Marks :  M1:${this.m1} , M2:${this.m2} , M3:${this.m3} <br>`);
        document.write('Age : '+this.age + '<br>')
        document.write('Maximum Marks :'+this.max + '<br>');
        document.write('Average :',this.avg + '<br>')
    }
}

let ob =new Student();
ob.input();
ob.compute();
ob.display();