/*console.log("HELLO WORLD");
var a=12;
console.log("a="+a);
if(a>10){
    a=30;
    console.log("Hi",a);
}*/
/*function selectlanguage(clbk){
    function ccompiler(){
        return "C compiler selected";
    }
    function javacompiler(){
        return "JAVA compiler selected";
    }
    if (clbk == "c"){
        return ccompiler;
    }
    else{
        return javacompiler;
    }
    
}
lang=selectlanguage('j');
console.log(lang);
*/
/*console.log("HELLO JS");
console.log(document);
let parent=document.getElementsByClassName("parent");
console.dir(document);
const div= document.getElementsByClassName("parent");
console.log(div);
//div[0].innerText ="ABES ENGINEERING ";
div[0].innerHTML="<h1 style=color:pink> Sakshi<h1>";
const h1=document.createElement("h1");
h1.innerText="Element created by DOM";
h1.style.backgroundColor="black";
h1.style.color="white";
div[0].appendChild(h1);
console.log(h1);
const img=document.createElement('img');
img.src="cat.png";
img.setAttribute("height","150px")
console.log(img);
div[0].appendChild(img);
div[0].removeChild(h1);
const button=document.getElementById("btn");
console.log(button);
const display =document.getElementById("dis");
console.log(display);
getData=()=>{
    console.log("Calling get data function");
    display.innerHTML="<h2 style=color:Red>Your data is monitored<h2>";
}
button.addEventListener("click",getData);
const promise1=new Promise(
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve("value of a is resolved");
        }
        else{
            reject("a is reject");
        }
    }
);
promise1.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("all resources closed")});*
const promise2=new Promise(
    (resolve,reject)=>{
        let b= Math.random()*1000;
        if (b>100 && b<200) {
            resolve("accepted");
        }
        else{
            reject("rejected");
        }
    }
);
promise2.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("all resources closed")});*
const promise2=new Promise(
    (resolve,reject)=>{
        resolve({name:"Sakshi",branch:"CSE"});
    }
);
promise2.then((data)=>{console.log(data)}).catch(error=>{console.log(error)});*/
const div=document.getElementsByClassName('parent');
const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        for(let i=0;i<5;i++){
            
            div[0].appendChild()
        }
        console.log(res.products[0].id+" "+res.products[0].title)})
})

