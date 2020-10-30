let image  = document.querySelector('.image')
let roll_dice = document.querySelector('.roll-dice');
let first_score =document.querySelector('.first_player_score');
let second_score = document.querySelector('.second_player_score');
let current_score = document.querySelector('.first_current');
let second_current_score = document.querySelector('.second_current');
let right_box = document.querySelector('.right-box');
let left_box = document.querySelector('.left-box');
let main = document.querySelector('.main');
let new_game = document.querySelector('.new');
let back = 0;
//  right_box.toggle('circle');
// left_box.toggle('circle_left');

console.log(image);
let prev_first_player=0;
let prev_second_playe=0;
let current_player =1;
let number =0;
new_game.addEventListener('click', new_Game);


function new_Game(){
    console.log("new game");
//     prev_first_player=0;
//   prev_second_playe=0;
//   current_player = true;
//   number =0;
location.reload();
}
// diceNumber();
roll_dice.addEventListener('click', diceNumber);


function diceNumber(){
    let imgNumber =Math.floor((Math.random() * 6) + 1);
    console.log(imgNumber);
     image.innerHTML = `<img src ="dice${imgNumber}.svg" >`
     if(prev_second_playe >=100 || prev_first_player >= 100){
         if(prev_second_playe >=100){
            main.innerHTML ="Hurrah winner of the match is second player";
         }
         else{
             main.innerHTML ="Hurrah !!!!!!!!!!!!!! first player winner of the match...";
         }
        
         console.log('winner team ')
     }

     if(current_player ===1){
         back =0;
        second_current_score.innerHTML = '0';
        prev_first_player += imgNumber;
        first_score.innerHTML = prev_first_player;
        current_score.innerHTML = imgNumber;
        if(prev_second_playe >=100 || prev_first_player >= 100){
            if(prev_second_playe >=100){
               main.innerHTML ="Hurrah winner of the match is second player";
            }
            else{
                main.innerHTML ="Hurrah !!!!!!!!!!!!!! first player winner of the match...";
            }
           
            console.log('winner team ')
        }



        // console.log('first player '+prev_first_player);
        if(imgNumber ===1){
            
            // left_box.style.backgroundColor ="green";
            // right_box.style.backgroundColor ="white";
            current_player = 2;
        }
        
     }
     else{
         back=1;
        //   player2_score(img_number);
        current_score.innerHTML = '0';
        prev_second_playe +=imgNumber;
        second_current_score.innerHTML = imgNumber;
        second_score.innerHTML = prev_second_playe;
        if(prev_second_playe >=100 || prev_first_player >= 100){
            if(prev_second_playe >=100){
               main.innerHTML ="Hurrah winner of the match is second player";
            }
            else{
                main.innerHTML ="Hurrah !!!!!!!!!!!!!! first player winner of the match...";
            }
           
            console.log('winner team ')
        }
        // console.log('second_player',prev_second_playe);
        if(imgNumber ===1){
            // left_box.style.backgroundColor ="#fff";

            // right_box.style.backgroundColor ="red";
            current_player = 1;
        }

     }

     if(back===0){
        right_box.style.backgroundColor ="#ecf0f1";
        left_box.style.backgroundColor ="white";

     }
     else if(back===1){
        left_box.style.backgroundColor ="#ecf0f1";
        right_box.style.backgroundColor ="white";
     }
}



