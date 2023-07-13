let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('.clear');
let cross = document.querySelector('.cross');
let store=''
let stores ='';
let total;
// display.innerHTML='hello';


// console.log(buttons);
Array.from(buttons).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);

        
        if(e.target.innerHTML=='=')
        {
            console.log(e.target.innerHTML)
            let p =display.innerHTML;
            console.log(p);
           stores = eval(p);
           display.innerHTML= stores;
        }

        else if(e.target.innerHTML=='x'){
    //         let p = display.value;
    //     let arr=Array.from(p)
    //     console.log(arr)
    //     arr.pop()
    //    let newarr = arr.join('')
    //     console.log(newarr)
    //     let s = newarr.toString()
    //     console.log(s);
    //     display.value=s;
           let str2 = display.innerHTML
          
          let arr = Array.from(display.innerHTML);
          console.log(arr)
        //   let arr2 = arr.slice(22)
          arr.pop()

          let arr3=arr.join('')
         let str= arr3.toString()
          console.log(arr3)
          
           console.log(str);
            display.innerHTML=str;
        }


        else if(e.target.innerHTML=="C"){
        
                display.innerHTML='';
            }
        else {
            let store=e.target.innerHTML
        console.log(store);
        console.log(display);
        display.innerHTML+=store;
        }
    })
})






// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         e.preventDefault();
        // store = e.target.innerHTML;
        // display.value +=store;
        // total=display.value;

        
        //        if(isNaN(e.target.innerHTML))
        //        {
// let nonnumeric =e.target.innerHTML;
// console.log(nonnumeric)
// display.value=isNaN(nonnumeric);
//        }

// if(e.target.innerHTML=="C"){
        
//     display.value='';
// }
// else if(e.target.innerHTML=="="){
    // let p = store;
    // display.value=p;
    // console.log(p)
    // let solved = eval(p);
    // console.log(solved)
        // display.value=solved;

    //  let  score=eval(total);
    //   display.value=score;
    // }
    

    // else if(e.target.innerHTML==="x"){
    //     let p = display.value;
    //     let arr=Array.from(p)
    //     console.log(arr)
    //     arr.pop()
    //    let newarr = arr.join('')
    //     console.log(newarr)
    //     let s = newarr.toString()
    //     console.log(s);
    //     display.value=s;}

    //     else{
    //         stores = e.target.innerHTML;
    //     display.value += stores;
    //     }
        
        
        
        //    console.log(isNaN(store))
        
        
    // })
// })
// let exp =document.querySelectorAll('.exception');
// Array.from(exp).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         e.preventDefault();
//         display.value = '+';

//     })
// })