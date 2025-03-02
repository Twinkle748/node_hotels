// function add(a,b){
//     return a+b;
// }

//second method to declare function
// var add = function(a,b){
//     return a+b;
// }

//third method to declare function
//var add  =(a,b) =>{ return a+b; }
//fourth method to declare function


//var add = (a,b) =>a+b;

// callback function
// function callback(){
//     console.log("callback function");
// }
// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result:' +result);
//     callback();
// }
// add(3,4,callback);

// const jsonString = '{"name":"jahan","age":30,"city": "NewYork"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.city);

const objectToConvert = {
    name: "Alice",
    age: 24
};
const json = JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json);



