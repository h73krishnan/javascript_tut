// setTimeout
// let day = "";
// function firstFunction(){
//     setTimeout(function(){
//         name = "Monday";
//         document.getElementById("container_tech").innerHTML = `The day is ${name}`;
//     }, 1000);

// }

// function secondFunction(){
//     setTimeout(function(){
//         name = "Sunday";
//     }, 3000)
// }

// firstFunction();
// secondFunction();

// promise with resolve and reject function

// let name = "";
// function firstFunction(){
//     setTimeout(function(){
//         name = "Monday";
//         document.getElementById("heading_h3").innerHTML = `The day is ${name}`;
//     }, 1000);

// }

// function secondFunction(){

//     var yourPromise = new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             let behaviour = "good";
//             if (behaviour == "good"){
//                 resolve("good");
//             }else {
//                 reject();
//             }
//         }, 3000)
//     })
//     yourPromise.then(function(behaviour){ 
//         if(behaviour == "good") {
//             console.log("seen here");
//             name = "Sunday";
//             // show with and without innerHTML
//             document.getElementById("heading_h3").innerHTML = `The day is ${name}`;

//         }
//     }).catch(
//         function (err) {
//             name = "Monday"
//         });
// }


// firstFunction();
// secondFunction();

// promise with async await

let name = "";
function firstFunction(){
    setTimeout(function(){
        name = "Monday";
        document.getElementById("heading_h3").innerHTML = `The day is ${name}`;
    }, 1000);

}

async function secondFunction(){
    await setTimeout(function(){
            var behaviour = "good";
            if (behaviour == "good"){
                name = "Sunday"
                document.getElementById("heading_h3").innerHTML = `The day is ${name}`;
            }
        }, 3000)
    
}

firstFunction();
secondFunction();

