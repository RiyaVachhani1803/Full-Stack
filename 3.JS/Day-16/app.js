//Trim the msg//
let message = "   Riya   ";
console.log(message.trim());

//Changing the Case of letters//
let name = "riya";
console.log(name.toUpperCase());

let Name = "PARV";
console.log(Name.toLowerCase());

//Method Chaning//
let src = "Welcome";
console.log("Before appling methods output is :" , src);

let src1 = "      Welcome      "
let src2 = src1.trim().toUpperCase();
console.log("After appling methods output is :" , src2); 

//methods with arguments//
let msg = "ILoveCoding";
console.log(msg);
msg.indexOf("Love");

//Slice Method// 
let msg1="RiyaVachhani"
console.log(msg1);
console.log(msg1.slice(0,4)); 
console.log(msg1.slice(4,12)); 
console.log(msg1.slice(4, msg1.length)); 
console.log(msg1.slice(4,6));
         //if we use only one index, then it is consider as given index to length of index//
console.log(msg1.slice(1)); 
console.log(msg1.slice(7)); 
        //if we passed negative index, then it will consider as (max length - no. given)//
console.log(msg1.slice(-4));  // 12-4=8

//Replace Method//
let name1 = "Riya Vachhani";
console.log(name1);
console.log(name1.replace("Vachhani" , "Patel"));
let name2 = "He'll World";
console.log(name2);
console.log(name2.replace("World" , "Connections"));
console.log(name2.replace("W","L"));

//Repeating Method//
let x = "Hlw..!!"
console.log(x);
console.log(x.repeat(4));
let x1 = "Omm..."
console.log(x1);
console.log(x1.repeat(9));

//Array Data Structure//
        //in simple way//
let student1="Lav";
let student2="Tanvi";
let student3="Parv";
let student4="Surbhi";
let student5="Heer";
console.log(student1,student2,student3,student4,student5);

        //using array//
let students = ["Lav" , "Tanvi" , "Parv" , "Surbhi" , "Heer"];
console.log(students);

//Visualizing of Array//
let Stu1 = ["Riya" , 53 , "AI & DS" , "ADIT"];
console.log(Stu1);
let Stu2 = ["Parv" , 12 , "CS" , "DAIICT"];
console.log(Stu2);
console.log(Stu1.length);
console.log(Stu1[0]);
console.log(Stu1[0][2]);
console.log(Stu1[3][0]);
console.log(Stu1[2].length);
console.log(Stu2.length);
console.log(Stu2[1]);
console.log(Stu2[2][0]);
let Stu3=[];
console.log(Stu3.length);
console.log(Stu3);
console.log(Stu3[1][2]);
