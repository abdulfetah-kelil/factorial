function funOne() {
    factorial=document.getElementById("fact").value
    fc=1
if(factorial==""){
    document.getElementById("par").innerText="Please enter a number"
    return false
} 

else if (isNaN(factorial)) {
    document.getElementById("par").innerText="Must be a number";
    return false;
}

else {
    for (var i=1;i<=factorial;i++){ 
fc=fc*i;
}
document.getElementById("result").innerText=fc;
return false;
}
}

