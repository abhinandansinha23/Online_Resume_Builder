//alert("Loading");
function addNewWEField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let weOb= document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let aqOb= document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

function addNewPRField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('prField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let prOb= document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prOb.insertBefore(newNode, prAddButtonOb);

}

function addNewskillField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let skillOb= document.getElementById("skill");
    let skillAddButtonOb=document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb);

}

//generate CV
function generateCV(){

let nameField=document.getElementById("nameField").value;
//let nameT1 =document.getElementById("nameT1");
//nameT1.innerHTML=nameField;

document.getElementById("nameT2").innerHTML=nameField;

document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
document.getElementById("gmailT").innerHTML=document.getElementById("gmailField").value;
document.getElementById("githubT").innerHTML=document.getElementById("githubField").value;

let prs=document.getElementsByClassName('prField')
let str2="";

for(let e of prs){
    str2=str2 + `<li> ${e.value} </li>`;
}
document.getElementById("prT").innerHTML=str2;

document.getElementById("interestT").innerHTML=document.getElementById("interestField").value;

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

let wes=document.getElementsByClassName('weField')
let str="";

for(let e of wes){
    str=str + `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;


let aqs=document.getElementsByClassName('eqField')
let str1="";

for(let e of aqs){
    str1=str1 + `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;

let sqs=document.getElementsByClassName('skillField')
let str3="";

for(let e of sqs){
    str3=str3 + `<li> ${e.value} </li>`;
}
document.getElementById("skillT").innerHTML=str3;


let file=document.getElementById('imgField').files[0];

console.log(file);

let reader=new FileReader();
reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend=function(){
document.getElementById('imgTemplate').src=reader.result;
};


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function printCV(){
window.print();
}
