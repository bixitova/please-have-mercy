function calculate {
     
    var num1 = Number(document.getElementById("edu").value);
    var result = 500;
    result *= num1; 
    var num2 = Number(document.getElementById("fam").value);
    result *= num2;
    var num3 = Number(document.getElementsByClassName("skill").value);
    for (i = 0; i < 4; i++) {
        if (num3[i].checked === true) {
          result += parseFloat(num3[i].value);
        }
    } 
    var num4 = Number(document.getElementById("age").value);
    for (i = 0; i < num4.length; i++) {
        if (num4[i].checked) {
          result *= parseFloat(num4[i].value);
        }
    }
    var num5 = Number(document.getElementsByClassName("rep").value);
    console.log(num5);
    for (i = 0; i < 2; i++) {
      if (num5[i].checked === true) {
        result *= parseFloat(num5[i].value);
      }
    }
    if (num5[2].checked === true){
      result -= parseFloat(num5[2].value);
    }
    localStorage.setItem("result", result);
    return false;
    } 
    var button = document.getElementById("resultButton");
    button.addEventListener("click", calculate);

