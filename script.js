let jogo=[];
let tableiro=[];
let quemJoga=0;
let verifica;
let jogando=true;
let nivel=1;
let jogadaCpu=1;
let quemComeca=random;

function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="x";
                    quemJoga=1;
                }
                break;

            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="x";
                    quemJoga=1;
                }
                break;

                case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="x";
                    quemJoga=1;
                }
                break;

                case 4:
                    if(jogo[1][0]==""){
                        jogo[1][0]="x";
                        quemJoga=1;
                    }
                    break;

                case 5:
                    if(jogo[1][1]==""){
                        jogo[1][1]="x";
                        quemJoga=1;
                    }
                    break;

                case 6:
                    if(jogo[1][2]==""){
                        jogo[1][2]="x";
                        quemJoga=1;
                    }
                    break;
                
                case 7:
                    if(jogo[2][0]==""){
                        jogo[2][0]="x";
                        quemJoga=1;
                    }
                    break;

                case 8:
                    if(jogo[2][1]==""){
                        jogo[2][1]=="x";
                        quemJoga=1;
                    }
                    break;

                    case 9:
                        if(jogo[2][2]==""){
                            jogo[2][2]=="x";
                            quemJoga=1;
                        }
                    break;
        }
    }
}

function atualizaTabuleiro(){
    for(var linha=0; linha <3; linha++){
        for(var coluna=0; coluna<3; coluna++){
            if(jogo[linha][coluna] == "x"){
                tabuleiro[linha][coluna].innerHTML="x";
                tabuleiro[linha][coluna].style.cursor="default";
            }
            else if(jogo[linha][coluna] == "o"){
                tabuleiro[linha][coluna].innerHTML="o";
                tabuleiro[linha][coluna].style.cursor="default";
            }else{
                if(jogo[linha][coluna] == ""){
                    tabuleiro[linha][coluna].innerHTML="";
                    tabuleiro[linha][coluna].style.cursor="pointer";
                }
            }
        }
    }
}

function inicia(){
    let jogando=true;
    let jogadaCpu=1;
    jogo=[]; //matriz
    tabuleiro=[
        [document.getElementById("1"),document.getElementById("2"),document.getElementById("3")],
        [document.getElementById("4"),document.getElementById("5"),document.getElementById("6")],
        [document.getElementById("7"),document.getElementById("8"),document.getElementById("9")]
    ]
}