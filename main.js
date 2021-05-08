let div=document.createElement('div');
let ul=document.createElement('ul');


div.appendChild(ul);
console.log(div);


const arr = [
  { fName: "John Smith", age: 36, isMarried: true,adress:{street:'Boston',house:14} },
  { fName: "Jason", age: 19, isMarried: false,adress:{street:'Bobur',house:47} },
  { fName: "Michal", age: 25, isMarried: true,adress:{street:'Alisher',house:52} },
];


arr.map(i=>{
   ul.appendChild(<li>{arr[i].fName}</li>) 
})
