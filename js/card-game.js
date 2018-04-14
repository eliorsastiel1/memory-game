
var numOfCouple=6

// event listner
var submitted = document.getElementById('btn-section'); 
submitted.addEventListener('click', respondToTheClick);

var restart = document.getElementById('restart'); 
restart.addEventListener('click', function(){location.reload();});

//the number that appear on the card
var cardNumber = [[1,1,2],
                 [2,3,3],
                 [4,4,5],
                 [5,6,6]
                 ];


var cardsValue=[{value:0, id:"one"},{value:0, id:"one"}];

var index = 0;

var inited=false;

function restart(){
    debugger;
    location.reload();
}

//The init function is swaping the array element
function init(){
    debugger;
    for(var k=0 ; k<25; k++){
        var i= Math.floor((Math.random() * 4));
        var j= Math.floor((Math.random() * 3));
        var i1= Math.floor((Math.random() * 4));
        var j1= Math.floor((Math.random() * 3));
        
        var temp= cardNumber[i][j];
        cardNumber[i][j]=cardNumber[i1][j1];
        cardNumber[i1][j1]=temp;
    }
}


// what happend when the user press on the card.
function respondToTheClick(evt) {
    if(inited==false){
        init();
        inited=true;
    }
    
    switch(evt.toElement.className){
        case "btn one animated bounce":
        changeTheElementOnTheCard("one", 0, 0);
        MakeTheButtonUnClickable("btn one animated bounce");
            break;
        case "btn two animated bounce":
        changeTheElementOnTheCard("two", 0, 1);
        MakeTheButtonUnClickable("btn two animated bounce");
            break;
        case "btn three animated bounce":
        changeTheElementOnTheCard("three", 0, 2);
        MakeTheButtonUnClickable("btn three animated bounce");
            break;
        case "btn four animated bounce":
        changeTheElementOnTheCard("four", 1, 0);
        MakeTheButtonUnClickable("btn four animated bounce");
            break;
        case "btn five animated bounce":
        changeTheElementOnTheCard("five", 1, 1);
        MakeTheButtonUnClickable("btn five animated bounce");
            break;    
        case "btn six animated bounce":
        changeTheElementOnTheCard("six", 1, 2);
        MakeTheButtonUnClickable("btn six animated bounce");
            break;
        case "btn seven animated bounce":
        changeTheElementOnTheCard("seven", 2, 0);
        MakeTheButtonUnClickable("btn seven animated bounce");
            break;
        case "btn eight animated bounce":
        changeTheElementOnTheCard("eight", 2, 1);
        MakeTheButtonUnClickable("btn eight animated bounce");
            break;
        case "btn nine animated bounce":
        changeTheElementOnTheCard("nine", 2, 2);
        MakeTheButtonUnClickable("btn nine animated bounce");
            break;
        case "btn ten animated bounce":
        changeTheElementOnTheCard("ten", 3, 0);
        MakeTheButtonUnClickable("btn ten animated bounce");
            break;
        case "btn eleven animated bounce":
        changeTheElementOnTheCard("eleven", 3, 1);
        MakeTheButtonUnClickable("btn eleven animated bounce");
            break;
        case "btn twelve animated bounce":
        changeTheElementOnTheCard("twelve", 3, 2);
        MakeTheButtonUnClickable("btn twelve animated bounce");
            break;     
        }
        if(index==2){
            if(cardsValue[0].value != cardsValue[1].value){
                setTimeout(changeTheElementOnTheCardToOriginal,500);
            }
            else{
                numOfCouple--
                if(numOfCouple==0){
                    setTimeout(finished , 500);
                }
            }
            index=0;
        }
}

//change the number on the card as a position in cardNumber array
function changeTheElementOnTheCard(id, i, j){

     document.getElementById(id).innerHTML=cardNumber[i][j];
     cardsValue[index].value=cardNumber[i][j];
     cardsValue[index].id=id;
     index++;
}

// if has no match between the cards the function replace to "?" charcter.
function changeTheElementOnTheCardToOriginal(){
    
    for(var i=0; i<cardsValue.length ; i++ ){
        document.getElementById(cardsValue[i].id).innerHTML="?"; 
        MakeTheButtonClickable("btn "+cardsValue[i].id+" animated bounce");
    }
}

// make the card to be unclickable
function MakeTheButtonUnClickable(id){
    document.getElementsByClassName(id)[0].style.pointerEvents = "none";
}

//make the card to be clickable
function MakeTheButtonClickable(id){
    document.getElementsByClassName(id)[0].style.pointerEvents = "auto";
}

//when the game is finshed this function is called.
function finished(){
    alert("You did it! well done :)");
    location.reload();
}

