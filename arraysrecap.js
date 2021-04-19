//a simple schedule
// const schedule=["Wakeup","Eat","Film a video","Watch a movie"];
// console.log(schedule);
// console.log(schedule[2]);
// schedule.push("wash clothes");
// console.log(schedule.push("wash clothes"));
// console.log(schedule.pop());
// console.log(schedule.shift("pray"));//removes the first element
// console.log(schedule.unshift("play"));//inserts new elements at the beginning
// console.log(shedule.idexOf("Eat"));
let students=["Prissy","Pam"]
console.log(students)
students.length
console.log(students.length)
students[0];
console.log(students[0]);
let last = students[students.length -1]
console.log(last)
students.forEach(function(item,index){//looping over an array
    console.log(item,index)
})
students.forEach(function(student){
console.log(student)
});
console.log(students.push("Shadya"));
console.log(students.pop());
console.log(students.shift());
console.log(students.unshift("Mercy"));
let towns=["Ntinda","Nakawa","Busega","Kamwokya"]
let pos =1;
let n =2;
let removedItems=towns.splice(pos,n);//removes items from an index position
console.log(removedItems);
console.log(towns.join());
console.log(towns.length);
towns.length=10;
console.log(towns.length);
//mapping an array
const numbers=[9,10,-3,8];
const filtered =numbers.filter(n=> n>=0);
const items =filtered.map(n=>'<li>' + n +'</li>');
console.log(items);

