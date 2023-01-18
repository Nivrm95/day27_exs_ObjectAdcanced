const student = {
    name: 'Bob',
    age: 25,
    location: 'tel-aviv',
    weight: 80,
    height: 1.80,
};


//1
const getKeys = (obj) => Object.keys(obj) 
console.log(getKeys(student));

//2
const convertKeysToUpperCase = (obj) => {
    const newObj = {};
      for(let [k , v] of Object.entries(obj)){
        newObj[k.toUpperCase()] = v
    }
    return newObj;
  }
  console.log(convertKeysToUpperCase(student));
  //3
const values = (obj) => Object.values(obj)
console.log(values(student));

//4
const objectMultiplied = (obj) =>{
  let newObj = {}
  for(let [k , v] of Object.entries(obj)){
      if(typeof v === 'number'){
        v = v*2;
      }
      newObj[k] = v;
  }
  return newObj
}
console.log(objectMultiplied(student));

//5
const objReversed = (obj) =>{
  let newObj = {}
  for(let [k , v] of Object.entries(obj)){
    newObj[v] = k;
      }
    return newObj;
  }
  
console.log(objReversed(student));


//6
const sumNum = (obj) =>{
  let sum = 0
  for(let v of Object.values(obj)){
      if(typeof v === 'number') 
      sum += v;
  }
  return sum
}
console.log(sumNum(student));


//7
const averageNum = (obj) =>{
  let sum = 0
  let numVal = 0
  for(let v of Object.values(obj)){
      if(typeof v === 'number') 
      sum += v;
      numVal++
  }
  return sum/numVal
}
console.log(averageNum(student));

//8 - no good

//9
const people = { 
  person1: { name: "John", age: 25 },
  person2: { name: "Mike", age: 32 },
  person3: { name: "Sara", age: 28 },
 };
 

 const checkIfPersonExist = (k, word) => {
  let found = false;
  Object.values(k).forEach((v) => {
    if (v.name === word) {
      found = true;
    }
  });
  return found;
};
console.log(checkIfPersonExist(people, 'Sara'));

// 19-no good


