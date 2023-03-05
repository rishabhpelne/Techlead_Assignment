class Student{
    name;
    hindi;
    english;
    maths;
    computer;
    average;
    grade;

    accept(){
        this.name = prompt('Enter name of Student');
        this.hindi = prompt('Enter the marks in Hindi');
        this.english = prompt('Enter the marks in English');
        this.maths = prompt('enter the marks in Mathematics');
        this.computer = prompt('enter the marks in Computer');
        this.average = prompt('enter the average marks obtained(out of 100)')
    }

    calcavg(){
        if(this.average >= 90){
            document.write(this.grade = 'Grade A++');
        }
        else if(this.average>=75 && this.average<=89){
            document.write(this.grade = 'Grade A');
        }
        else{
            document.write(this.grade = 'Grade B');
        }
    }
}

let stud = new Student();
stud.accept();
stud.calcavg();