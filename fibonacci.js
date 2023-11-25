function funOne(){
    n=document.getElementById("fact").value
    const fib =[0,1]
    for (let  i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    document.getElementById("resultTwo").innerText=fib;
        return false;
    
}


