const form = document.querySelector(".form-cont");
const cfmBtn = document.getElementById("confirm");
const ty = document.querySelector(".ty");
const hName = document.getElementById("hname");
const cNum = document.getElementById("cnum");
const mm = document.getElementById("mm");
const mmErr = document.querySelector(".mm-err");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");
const cvcErr = document.querySelector(".cvc-err");
const cnumErr = document.querySelector(".cnum-err")
const hnameErr = document.querySelector(".hname-err")
const continueBtn = document.getElementById("continue");
const showNum = document.querySelector(".card-num")
const chname = document.querySelector(".chname")
const exDate = document.querySelector(".date")
const idnum = document.querySelector(".id-num")


//TO REST ALL VALUES
const chnameVal = chname.textContent;
const exDateVal = exDate.textContent
const showNumVal = showNum.textContent
const idnumVal = idnum.textContent

//REGULAR EXPRESSIONS
// ====================
const hnameRegex = /^\w+\-*/gi //name 
const checkIndnum =/^[0-9]/  // card number only accepts numbers 16 digits
const cNumRegex = /^[0-9]{16}$/;
const monthRegex = /^((0[0-9])|(1[0-2])|([1-9]))$/;
const yearRegex =/^(20[0-9]{2})$/
const cvcRegex = /^[0-9]{3}$/


//ERROR SYLING 
// ============
function showErr(val){
    val.style.border = "red solid 2px"
    
}
function restErr(num){
    num.style.border = "2px solid #222";
}

cfmBtn.addEventListener("click", (e) => {   //start of event

// NAME CHECKER
// ===============
    if(hName.value.match(hnameRegex)){
        hnameErr.textContent = ""
        hnameErr.style.color = "green"
        restErr(hName)
    }
    else if(hName.value == ""){
        hnameErr.textContent = "can't be blank"
        showErr(hName)
        hnameErr.style.color ="red"
    }
    else{
        showErr(hName)   
        hnameErr.textContent = "wrong format, alphabets only"
        hnameErr.style.color ="red"
    }
        


//CARD NUMBER CHEKER
// =================
    if(cNum.value.match(cNumRegex)){
        cnumErr.textContent = ""
        cnumErr.style.color = "green"
        restErr(cNum)
    }
    else if(cNum.value == ""){
        cnumErr.textContent = "can't be blank"
        cnumErr.style.color = "red"
        showErr(cNum) 
    } 
    else if(cNum.value.length < 16 | cNum.value.length > 16){
        cnumErr.textContent = "must be 16 numbers"
        cnumErr.style.color = "red"
        showErr(cNum) 
    }
    
    
    else{   cnumErr.textContent = "wrong format, numbers only"}
        

// EXP DATE CHECKER
//=================
    if(mm.value.match(monthRegex) && yy.value.match(yearRegex)){
        mmErr.style.color = "green"
        restErr(mm)
        restErr(yy)
        mmErr.textContent = ""
    }
    else if(mm.value == "" | yy.value == ""){
        if(mm.value == "" && yy.value == ""){
            showErr(mm) 
            showErr(yy) 
        }
        else if(mm.value == ""){
            showErr(mm) 
        }else if(yy.value == ""){
            showErr(yy) 
        }else{
            showErr(mm) 
            showErr(yy) 
        }
        mmErr.textContent = "can't be blank"
        mmErr.style.color = "red"
        
    }
    else{   mmErr.textContent = "wrong format numbers only"}

// CVC REGEX CHECKER
//==============
    if(cvc.value.match(cvcRegex)){
        cvcErr.style.color = "green"
        cvcErr.textContent = ""
        restErr(cvc)
    }
    else if(cvc.value == ""){
        cvcErr.textContent = "can't be blank"
        cvcErr.style.color = "red"
        showErr(cvc) 
    }
    else if(cvc.value.length < 3 | cvc.value.length > 3){
        cvcErr.textContent = "must be 3 numbers"
        cvcErr.style.color = "red"
        showErr(cvc) 
    }
    else{   
        showErr(cvc) 
        cvcErr.style.color = "red"
        cvcErr.textContent = "wrong format numbers only"}
        
        
// FINISH
    if(hName.value.match(hnameRegex) && cNum.value.match(cNumRegex) && mm.value.match(monthRegex) && yy.value.match(yearRegex) && cvc.value.match(cvcRegex)){
        moveon()
        showNum.textContent = cnum.value.replace(/(.{4})/g, '$1 ')//ADD SPACE AFER EVER 4 NUMBERS
        chname.textContent = hName.value
        exDate.textContent = `${mm.value}/${yy.value.slice(-2)}`  //DATE WITH MONTH AND LAST TWO LATTERS OF THE YEAR
        idnum.textContent = cvc.value
    }

})//END OF THE EVENT 


// to show or remove page
function moveon(){
   
    if(form.classList.contains("show")){
        form.classList.remove("show");
        ty.classList.add("show")
    }else{
        form.classList.add("show");
        ty.classList.remove("show")
    }
 
       
       

   
}

// CONTINUE BTN  
// =============

continueBtn.addEventListener("click", () =>{
    moveon()
 // TO RESET ERROR SO ERROR MESSAGES ARE SHOWN IN RED
   restErr(mm)
   restErr(hName)
   restErr(cNum)
   restErr(yy)
   restErr(cvc)
   //TO CLEAR OUT THE VALUES OF EACH IMPUT FORM WHEN CONTINUE IS CLICKED
   resetVals(hName)
   resetVals(cNum)
   resetVals(mm)
   resetVals(yy)
   resetVals(cvc)
   //TO RESET NAME, CARD NUMBER, EXP DATE, ID NUMBER TO ITS HTML TEXT CONTEN
   showNum.textContent = showNumVal;
   chname.textContent = chnameVal;
   exDate.textContent = exDateVal;
   idnum.textContent = idnumVal
}) // END OF CONTINUE BUTTON EVENT


//  to reset all values when the continue button has been clicked
// --------------------------------------------------------------
function resetVals(elt){
    elt.value = ""
}