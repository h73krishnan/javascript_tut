// async js programming
// callbacks, promise, async and await functions

// purpose
// what is the purpose?
// problem statement: 

const datas = [
    {name: "Ajay", Profession: "Software Engineer"},
    {name: "Anuj", Profession: "Software Engineer"}
];

function getDatas(){
    setTimeout(() =>{
        let output = "";
        datas.forEach((data, index)=>{
            output+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
        // dom me dono items ko display kardiya
    // }, 5000);
    }, 1000);
}
// 
// callback function to display above function

// second function using setTimeout
// function createdata(newdata){
//     setTimeout(() =>{
//         datas.push(newdata)
//     }, 2000)
// }

// function with callback
// function createdata(newdata, callback){
//     setTimeout(() =>{
//         datas.push(newdata);
//         callback();
//     }, 2000)
// }

// promises
// function createdata(newdata){

//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             datas.push(newdata);
//             let error = true;
//             if (!error){
//                 resolve();
//             }else{
//                 reject("Kuch sahi nhi hai");
//             }

//         }, 2000);
//     })
   
// }
// w/o callback
// createdata({name: "Vivek", Profession: "Software Engineer"}, getDatas);
// w callback
// createdata({name: "Vivek", Profession: "Software Engineer"}, getDatas);
// promises
// step 1 with a bug
// createdata({name: "Vivek", Profession: "Software Engineer"}).then(getDatas);
// step 2 w/o bug
// createdata({name: "Vivek", Profession: "Software Engineer"}).then(getDatas).catch(err => console.log("kuch sahi nahi hai"));


// async and await
async function start(){
    await createdata({name: "Vivek", Profession: "Software Engineer"});
    getdata();
}

getDatas();