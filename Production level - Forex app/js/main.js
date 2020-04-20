 /* use of a contional to check if the toggle switch has been changed using the following: 

specifications need to be meet - 
1) when switched on (Activie position):
    - The toggle button should trigger the risk caluclations needed to represent taking a short position (inverse Risk Reward calculation using absolute value considerations)
    - The toggle button should change the innerHTML for the targeted text beside the toggle switch to indicate "Shorting Position"

2) when switched off (default position):
    - The toggle button should trigger the risk caluclations needed to represent taking a Long position 
    - The toggle button should change the innerHTML for the targeted text beside the toggle switch to indicate "Long Position"
*/

//Reset btn


//grabbing values and elements
let riskLevels = [3, 5, 7, 10, 15, 20];

var oneThrid = document.querySelector("#oneThirdTP"); 
var oneFifth = document.querySelector("#oneFifthTP");
var oneSeventh = document.querySelector("#oneseventhTP");
var oneTenth = document.querySelector("#oneTenthTP"); 
var oneFifteenth = document.querySelector("#oneFifteenthTP"); 
var oneTweenyth = document.querySelector("#oneTweenythTP");

//Values of Risk Levels default
oneThrid.innerHTML = "0.0000";
oneFifth.innerHTML ="0.0000";
oneSeventh.innerHTML ="0.0000";
oneTenth.innerHTML ="0.0000"; 
oneFifteenth.innerHTML ="0.0000"; 
oneTweenyth.innerHTML ="0.0000";
  

// Fuction calRiskMain calulates the top information for current risk estimate
function calRiskMain(){
    let mainPrice = parseFloat(document.querySelector("#actualPrice").value);
    let currentSL = document.querySelector("#actualSL").value; 
    let currentTP = document.querySelector("#actualTP").value;
    let finiRisk = document.querySelector("#actualRisk");

    let lossDiff = mainPrice-currentSL;
    let gainDiff = currentTP-mainPrice;
    let rwRatioFini = gainDiff/lossDiff; 
    let resultA = rwRatioFini.toFixed(1);
    finiRisk.innerHTML = `1 : ${Number(resultA)}`;
    finiRisk.style.color = "red"; 
    
    if(lossDiff > 0){
        //calculations
        let thirdLv = lossDiff * riskLevels[0] + mainPrice; 
        let fifthLv = lossDiff * riskLevels[1] + mainPrice; 
        let sevethLv = lossDiff * riskLevels[2] + mainPrice; 
        let tenthLv = lossDiff * riskLevels[3] + mainPrice; 
        let fiftheenthLv = lossDiff * riskLevels[4] + mainPrice; 
        let tweenythLv = lossDiff * riskLevels[5] + mainPrice; 
        //fix to 4 places after the decimal
        oneThrid.innerHTML = thirdLv.toFixed(4);
        oneFifth.innerHTML = fifthLv.toFixed(4);
        oneSeventh.innerHTML = sevethLv.toFixed(4);
        oneTenth.innerHTML = tenthLv.toFixed(4);
        oneFifteenth.innerHTML = fiftheenthLv.toFixed(4);
        oneTweenyth.innerHTML = tweenythLv.toFixed(4);

        oneThrid.style.color = "red"; 
        oneFifth.style.color = "red"; 
        oneSeventh.style.color = "red"; 
        oneTenth.style.color = "red"; 
        oneFifteenth.style.color = "red";
        oneTweenyth.style.color = "red"; 


    } 
}


//radio toggle btn that swtiches between short and long ForEx positions 
function myFunction(){
    let togbtn = document.querySelector("#togBtnText");
    let compareLV = document.querySelector(".compare");
    if(togbtn.innerHTML==="Toggle: Long Position"){
        togbtn.innerHTML = "Toggle: Short Position";
        compareLV.innerHTML = "Comparisions: Short Position";
        compareLV.style.color = "Blue";
    }   else {
        togbtn.innerHTML = "Toggle: Long Position";
        compareLV.innerHTML = "Comparisions: Long Position";
        compareLV.style.color = "Green";
    }
}

document.getElementById("resetBtn").onclick = function(){clear()}; 

function clear(){
    
    oneThrid.innerHTML = "0.0000";
    oneFifth.innerHTML ="0.0000";
    oneSeventh.innerHTML ="0.0000";
    oneTenth.innerHTML ="0.0000"; 
    oneFifteenth.innerHTML ="0.0000"; 
    oneTweenyth.innerHTML ="0.0000";
   
    oneThrid.style.color = "Black"; 
    oneFifth.style.color = "Black"; 
    oneSeventh.style.color = "Black"; 
    oneTenth.style.color = "Black"; 
    oneFifteenth.style.color = "Black";
    oneTweenyth.style.color = "Black";
}







