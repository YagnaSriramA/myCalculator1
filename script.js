function cls()
{
    let tbox=document.getElementById("fname")
    tbox.value=""
}

// function appnd()
// {
//     let btn_grb=document.getElementsByClassName("bleft")
//     let tbox=document.getElementById("fname")
//     tbox.value+=btn_grb.value
    
// }


// function myFunction(event) {
//     if (event.key == '0' || event.key == '1' 
//         || event.key == '2' || event.key == '3'
//         || event.key == '4' || event.key == '5' 
//         || event.key == '6' || event.key == '7'
//         || event.key == '8' || event.key == '9' 
//         || event.key == '+' || event.key == '-'
//         || event.key == '*' || event.key == '/')
//         document.getElementById("fname").value += event.key;
// }


function dis(x)
{
    let tbox=document.getElementById("fname")
    tbox.value+=x
}

function solve()
{
    let x = document.getElementById("fname").value
    
    let y=eval(x)
    console.log(y)
    document.getElementById("fname").value = y
}