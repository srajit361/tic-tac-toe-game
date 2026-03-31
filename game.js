let boxes=document.querySelectorAll(".box");
let rb=document.querySelector("#rst-btn");
let newgmbtn=document.querySelector("#new-btn");
let mc =document.querySelector(".msgcont");
let mg=document.querySelector("#msg");
let turnO = true;
let c=0;
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const ressetgame=()=>{
    turnO=true;
    enablebutton();
    mc.classList.add("hide");


};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
             box.innerText="X";
             turnO=true;
            }
             box.disable=true;
             c++;
            let iswinner=  checkwin();
            if(c === 9 && ! iswinner){
                gameDraw();
            }
       
      
    });   
});

const gameDraw = () => {
   mc.innerText = `Game was a Draw.`;
 mg.classList.remove("hide");
  disableBoxes();
};


const disablebutton=()=>{
    for (let box of boxes){
        box.disabled=true;
        
    }
};
const enablebutton=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
};
const showwinner=(winner)=>{
mg.innerText=`congratulations the winner is ${winner}`;
mc.classList.remove("hide");
disablebutton();

};
const checkwin=()=>{
            for ( let pattern of winpatt){
              
                  let pos1=  boxes[pattern[0]].innerText;
                   let pos2= boxes[pattern[1]].innerText;
                   let pos3= boxes[pattern[2]].innerText;

                   if(pos1 !="" && pos2!="" && pos3!=""){
                    if(pos1===pos2 && pos2 === pos3){
                          console.log("winner",pos1);
                          showwinner(pos1);
                          return true;

                    }
                      
                   }

                
            }
        };
      newgmbtn.addEventListener("click", ressetgame);
     rb.addEventListener("click", ressetgame);

