const dice = document.getElementById('dice-btn');

function dicegame() {
    //DICE 1
    var randomdice =Math.floor((Math.random()*6)+1);
    console.log(randomdice)
    var diceLocation ="img/"+"dice"+randomdice+".png";
    console.log(diceLocation)
    var img1 =document.querySelectorAll("img")[0];
    img1.setAttribute("src",diceLocation);
    
    //DICE 2
    var randomdice2 =Math.floor((Math.random()*6)+1);
    var diceLocation2="img/"+"dice"+randomdice2+".png";
    var img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src",diceLocation2);
    

    if(randomdice > randomdice2){
        document.querySelector('h1').innerHTML="🏆 Player 1 wins!";
    }

    else if(randomdice < randomdice2){
        document.querySelector('h1').innerHTML="Player 2 wins! 🏆";
    }

    else if(randomdice <= randomdice2){
        document.querySelector('h1').innerHTML="🏆 match Draw! 🏆";
    }

    else{
        document.querySelector('h1').innerHTML="Error: Something went wrong!";
    }
 
    dice.innerHTML="play Again!"
}