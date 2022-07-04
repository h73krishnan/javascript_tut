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
    }, 1000);
}
// 
// function to display above function

// second function using setTimeout
// function createdata(newdata){
//     setTimeout(() =>{
//         datas.push(newdata)
//     }, 2000)
// }
// function with callback
function createdata(newdata){
    setTimeout(() =>{
        datas.push(newdata);
        callback();
    }, 2000)
}
createdata({name: "Vivek", Profession: "Software Engineer"});


getDatas();