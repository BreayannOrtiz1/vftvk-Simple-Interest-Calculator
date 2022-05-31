function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal>=0 || principal!=""){  //Test if i have not a negative number or empty
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
    
        interest = (principal*years*(rate/100)).toFixed(2); //Calculation of interest, 2 decimals
        
        var year = new Date().getFullYear()+parseInt(years);
        var DOM_result = document.getElementById("result"); //Declarate a variable to simplify
    
        DOM_result.innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",<br>";    //Important use inner HTML, then you can use HTML tags
        DOM_result.innerHTML+="at an interest rate of "+"<mark>"+rate+"</mark>"+"%.<br>";
        DOM_result.innerHTML+="You will receive an amount of "+"<mark>"+interest+"</mark>"+",<br>";
        DOM_result.innerHTML+="in the year "+"<mark>"+year+"</mark>"+".";
    }
    
    if(principal<=0){
        alert("Amount: Enter a positive number");
        document.getElementById("principal").focus();   //Focus at the box of interest, "Amount"
        DOM_result.innerHTML="";    //Show nothing if amount value is less or equal to zero
    }
    

}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

