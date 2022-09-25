let str='034*2**2';
console.log('eval(str) :>> ', eval(str));
let btn=document.getElementsByClassName('btn');
let input=document.getElementById('input');
Array.from(btn).forEach(element => {
    if(element.id!='deleteBtn'&&element.id!='clear'&&element.id!='calculate'&&element.id!='square'&&element.id!='sqrt'&&element.id!='pie'){
        console.log('element',element);
        element.addEventListener('click',()=>{
            console.log(Array.from(element.classList));
            if (input.value==0) {
                input.value=element.innerHTML;
            } else {
                input.value+=element.innerHTML;
            }
        })    
    }
});

//CODE TO ERASE ONE NUMBER OR OPERATOR
let deleteBtn=document.getElementById('deleteBtn');
deleteBtn.addEventListener('click',()=>{
    if (input.value.length==1) {
        input.value=0;
    } else {
        input.value=input.value.substring(0,input.value.length-1);
    }
})

//CODE TO ERASE EVERYTHING
let clear=document.getElementById('clear');
clear.addEventListener('click',()=>{
    input.value=0;
})

//CODE TO CALCULATE THE RESULT
let calculate=document.getElementById('calculate');
calculate.addEventListener('click',()=>{

    try {
        input.value=input.value.replace(/\^/g,'**')
        input.value=input.value.replace(/3.14/g,'(3.14)')
        input.value=input.value.replace(/%/g,'*(1/100)')

        console.log(input.value);

        if (input.value[0]==='\u221a') {
            console.log(input.value);

            let result=eval(input.value.substring(1,input.value.length));
            result=Math.sqrt(result);
            input.value=result;
        } else {
            console.log(input.value);
            let result=eval(input.value);
            input.value=result;
            console.log(calculate,input.value);  
        }
        // let result=eval(input.value);
        // input.value=result;
        // console.log(calculate,input.value);
    } catch (error) {
        alert(error.message)
        input.value=0;
    }
})

//CODE FOR SQUARE BUTTON
let square=document.getElementById('square');
square.addEventListener('click',()=>{
    input.value+='^';
})

//CODE FOR SQUARE ROOT BUTTON
let sqrt=document.getElementById('sqrt');
sqrt.addEventListener('click',()=>{
    let sqrt= '\u221a';
    input.value=sqrt.concat(input.value);
})

//CODE FOR PIE
let pie=document.getElementById('pie');
pie.addEventListener('click',()=>{
    if (input.value==0) {
        input.value=3.14;
    } else {
        input.value+=3.14;
    }
})