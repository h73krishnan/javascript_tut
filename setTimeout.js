let example = () =>{
    let num = 3;
    setTimeout(()=>{
        console.log(num);
    }, 3000);
    console.log("Javascript no wait - print - come back");
}

example();