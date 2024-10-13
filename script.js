const currentPlayer = document.querySelector(".currentSelector")

let selected;
let player = "x";

let posicao = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

function jogo(){
    selected=[] 

    currentPlayer.innerHTML = `Your turn: ${player}`;
    document.querySelectorAll(".game button").forEach((item) => 
    {item.innerHTML = "";
     item.addEventListener("click", newMove);

    });
}

posicao();

function newMove(e){ //essa função vai receber o evento, referente ao botão.
    const index = e.target.getAttribute("data-i")
    e.target.innerHTML = player;
    e.target.removeEventListener("click",newMove); //remover o evento click para não ocorrer a troca
    selected[index] = player; // armazenar no index do botão o player X ou O

    setTimeout(() => {
        check();
    },[100]);
    
    player = player == "x" ? "o" : "x"; // trocar  player
    currentPlayer.innerHTML `Your turn: ${player}`;
}

function check(){
    let playerLAstMove = player === "x" ? "o" : "x";

    const items = selected
    .map((item,i) => [item,i])
    .filter((item,i) => item[0] === playerLastMove)
    .map((item) => item[1]);

    for(pos of positions){
        if(pos.every((item) => items.includes(item))){
            alert("O jogador " + playerLastMove + "ganhou!");
            posicao();
            return;
        }
    }
    if(selected.filter((item) => item).length === 9){
        alert("Empate!");
        posicao();
        return;
    }    

}

