let time=new Date();
let day=time.getDay();
let date=time.getDate();
let year=time.getFullYear();
let month=time.getMonth()+1;
if(day==1){
    document.getElementById('small').innerText=(" Monday");
}
else if(day==2){
    document.getElementById('small').innerText=(" tuesday");
}
else if(day==3){
    document.getElementById('small').innerText=(" wednesday");
}
else if(day==4){
    document.getElementById('small').innerText=(" thrusday");
}
else if(day==5){
    document.getElementById('small').innerText=(" friday");
}
else if(day==6){
    document.getElementById('small').innerText=("saturday");
}
else if(day==7){
    document.getElementById('small').innerText=("sunday");
}
else{
    document.getElementById('small').innerText=("sunday");
    document.getElementById('big').style.color="red";
}
document.getElementById('small').style.fontSize="3rem";
document.getElementById('small').style.textAlign="center";
document.getElementById('big').innerText=date;
document.getElementById('big').style.textAlign="center";
document.getElementById('big').style.fontSize="5rem";
document.getElementById('big').style.paddingTop="90px";
document.getElementById('small2').innerText=year;
document.getElementById('small2').style.textAlign="center";
document.getElementById('small2').style.fontSize="2rem";
if(month==1){
    document.getElementById('small3').innerText=(" january");
}
else if(month==2){
    document.getElementById('small3').innerText=("february");
}
else if(month==3){
    document.getElementById('small3').innerText=("march");
}
else if(month==4){
    document.getElementById('small3').innerText=("april");
}
else if(month==5){
    document.getElementById('small3').innerText=("may");
}
else if(month==6){
    document.getElementById('small3').innerText=("june");
}
else if(month==7){
    document.getElementById('small3').innerText=(" july");
}
else if(month==8){
    document.getElementById('small3').innerText=("august");
}
else if(month==9){
    document.getElementById('small3').innerText=(" September");
}
else if(month==10){
    document.getElementById('small3').innerText=(" Octuber");
}
else if(month==11){
    document.getElementById('small3').innerText=(" November");
}
else if(month==12){
    document.getElementById('small3').innerText=(" December");
}
document.getElementById('small3').style.fontSize="2rem";

