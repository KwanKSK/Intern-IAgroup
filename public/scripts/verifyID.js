function VerifyID(){
    var idCard = String(document.getElementById("idCard").value);
    var idVerify = idCard.split("");
    var calDigit = 0;
    var checkDigit = 0;

    for(i=0; i<=11; i++){
        for(var j=13; j>=2; j--){
            calDigit = idVerify[i] * j;
        }
        checkDigit = checkDigit + calDigit;
    }
    checkDigit = (11 - (checkDigit % 11)) % 10;

    if(idVerify[12] == checkDigit) var textVerify = "True";
        else var textVerify = "False";
    
    document.getElementById("verify").innerHTML = textVerify; 
}