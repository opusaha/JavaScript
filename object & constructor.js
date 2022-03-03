// how to create an object
// adding a constructor(this. ke constructor bole)
// adding constructor in function
// addin a function in a constructor
// printing the value of a function

function studentDetails(name, age, gender, cityCode) {
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.cityCode=cityCode;

  this.display= function () {
    document.write(this.name);
    document.write(this.age);
    document.write(this.gender);
    document.write(this.cityCode);
  }
}
var student1 = new studentDetails("Aklima ", 15, "female ", 1400);
var student2 = new studentDetails("Maya ", 17, "female ", 3500);
var student3 = new studentDetails("Payel ", 16, "female ", 1500);
var student4 = new studentDetails("Puja ", 17, "female ", 3500);
var student5 = new studentDetails("Orpita ", 17, "female ", 7000);

student1.display();
student2.display();
student3.display();
student4.display();
student5.display();


// another project
// another project
// another projcet

function studentinfo(name, age , gpa, passyear) {
  this.name=name;
  this.age=age;
  this.gpa=gpa;
  this.passyear=passyear;

  this.display= function () {
    document.write(this.name);
    document.write(this.age);
    document.write(this.gpa);
    document.write(this.passyear);
  }
}
var stud1 = new studentinfo ("Maya", 18, 4.00, 2020);
var stud2 = new studentinfo ("Kotha", 19, 3.00, 2021);
var stud3 = new studentinfo ("Orpa", 17, 4.50, 2020);
var stud4 = new studentinfo ("Akhi", 16, 4.70, 2021);
var stud5 = new studentinfo ("Jothi", 19, 4.90, 2022);

stud1.display();
stud2.display();
stud3.display();
stud4.display();
stud5.display();