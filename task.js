// Output every second
// using setInterval

function printNumbers(from , to){
    let current = from;

    let timerid = setInterval(function(){
        console.log(current);
        if(current == to){
            clearInterval(timerid);
        }
        current++;
    },1000)
}

printNumbers(2,7);

// using setTimeOut

function printNumbers(from , to){
    let current = from;
    let timerid = setTimeout(function go(){
        console.log(current);
        if(current<to){
            setTimeout(go,1000);
        }
        current++;
    },1000)
}

printNumbers(5,7);