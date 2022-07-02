// let fifteen = Promise.resolve(10);

// fifteen.then(value =>{ 
//     console.log(`Got ${value}`)
// });

const url = `https://www.omdbapi.com/?apikey=d31fda52&s=thor`;

let movies = Promise.resolve(fetch(url));

movies
.then(function (){
   let res = fetch(url);
   console.log(res);
})
.then(function (err){
    console.log("err");
})
// .then(function(){ console.log('${value}')});

// import {bigOak} from "./crow-tech";

// function storage(nest, name){
//     return new Promise(resolve =>{
//         nest.readStorage(name, result => resolve(result));
//     });
// }

// storage(bigOak, "enemies")
//     .then(value => console.log("Got", value));