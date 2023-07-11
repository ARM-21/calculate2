let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('.clear');
let cross = document.querySelector('.cross');
let store=''
let stores ='';
let total;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        // store = e.target.innerHTML;
        // display.value +=store;
        // total=display.value;

        
        //        if(isNaN(e.target.innerHTML))
        //        {
// let nonnumeric =e.target.innerHTML;
// console.log(nonnumeric)
// display.value=isNaN(nonnumeric);
//        }

if(e.target.innerHTML=="C"){
        
    display.value='';
}
else if(e.target.innerHTML=="="){
    // let p = store;
    // display.value=p;
    // console.log(p)
    // let solved = eval(p);
    // console.log(solved)
        // display.value=solved;

     let  score=eval(total);
      display.value=score;
    }
    

    else if(e.target.innerHTML==="x"){
        let p = display.value;
        let arr=Array.from(p)
        console.log(arr)
        arr.pop()
       let newarr = arr.join('')
        console.log(newarr)
        let s = newarr.toString()
        console.log(s);
        display.value=s;}

        else{
            stores = e.target.innerHTML;
        display.value += stores;
        }
        
        
        
        //    console.log(isNaN(store))
        
        
    })
})
// let exp =document.querySelectorAll('.exception');
// Array.from(exp).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         e.preventDefault();
//         display.value = '+';

//     })
// })