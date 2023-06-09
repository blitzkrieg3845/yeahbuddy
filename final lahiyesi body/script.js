
let calcbutton = document.querySelector("#calcbutton")
function caloriCalc(){
    let ceki = document.querySelector("#ceki");
let boy = document.querySelector("#boy");
let yas = document.querySelector("#yas");
let netice = document.querySelector(".netice");
    let ehtiyac = (66,5 + (13.75 * ceki.value)+(5 * boy.value)-(6.77 *yas.value))
    document.querySelector(".netice").style.fontSize = "40px"
    netice.innerHTML= ehtiyac + "KCL";
    

}
function bodyMassIndex(){
    
    let ceki = document.querySelector("#ceki");
    let boy = document.querySelector("#boy");
    let netice = document.querySelector(".netice")
    let index = ceki.value/((boy.value/100)**2)
    let ilkuc=index.toString().substring(0, 4);
    netice.innerHTML=ilkuc
}
function bodyFatIndex(){
   let weight = document.querySelector("#ceki");
   let height = document.querySelector("#boy");
   let age =document.querySelector("#yas");
   let cavab = document.querySelector(".cavab");
   let bmi=weight.value/((height.value/100)**2);
   let bfp=(1.20 * bmi)+((0.23*age.value)-16.2);
   let bbbb=bfp.toString().substring(0, 2);
   cavab.innerHTML=bbbb + "%";
  
}
function oneRepMax(){
    let ceki = document.querySelector("#ceki");
    let boy = document.querySelector("#boy");
    let netice = document.querySelector(".netice")
    let onerep=(ceki.value/(1.0278-(0.0278*boy.value)))+1
    let ilkuc=onerep.toString().substring(0, 3);
    netice.innerHTML=ilkuc + "KG"
}
function caloriBurned(){
    let Heartrate = document.querySelector("#boy");
    let Weight = document.querySelector("#ceki");
    let Age = document.querySelector("#yas");
    let netice = document.querySelector(".netice");
    let caloriburned=(-55.0969 + (0.6309 * Heartrate.value) + (0.1988 * Weight.value) + (0.2017 * Age.value)) / 4.184;
    let ilkuc=caloriburned.toString().substring(0, 1);
    netice.innerHTML=ilkuc + " P/M"
}


function fotoChangerTrapez(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic trapez.jpg"
}
function fotoChangerDeltoid(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic  deltoid.jpg"
}
function fotoChangerBiceps(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic biceps.jpg"
}
function fotoChangerTriceps(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic triceps.jpg"
}
function fotoChangerForearm(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic forearm.jpg"
}
function fotoChangerChest(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic chest.jpg"
}
function fotoChangerAbdominis(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic abdominis.jpg"
}
function fotoChangerOblics(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic oblics.jpg"
}
function fotoChangerWing(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic  wing.jpg"
}
function fotoChangerUpperback(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic upperback.jpg"
}
function fotoChangerQuads(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic  quads.jpg"
}
function fotoChangerCalf(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic calf.jpg"
}
function fotoBasic(){
    let sekil = document.querySelector("#sekilbasic")
    sekil.src = "sekiller/lahiye basic  standart.jpg"
}
function voiceYeah(){
   let ses = document.querySelector("#ses")
    ses.play();
}
function cekiBarFunc(){
    let ceki = document.querySelector("#ceki");
    
    if(ceki.value ==0){
        

    }
    else{
        
       document.querySelector(".barr").style.width = ceki.value + "px";
    }
}
function boyBarFunc(){
    let boy = document.querySelector("#boy");
    
    if(boy.value ==0){

    }
    else{ 
       document.querySelector(".barr2").style.width = (boy.value * 0.83) + "px";
    }
}
function yasBarFunc(){
    let yas = document.querySelector("#yas");
    
    if(yas.value ==0){
        
    }
    else{
       document.querySelector(".barr3").style.width = (yas.value * 3.34) + "px";
    }
}
