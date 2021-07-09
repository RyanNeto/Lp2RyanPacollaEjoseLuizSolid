interface Jogo{
Titulo:string;
descriçao: string;
genero: string;
platform: string[]

}
const Battle: Jogo = {
 Titulo : "Battlefield",
 descriçao:"Jogo de tiro",
 genero: "Açao",
 platform:["PS3","PC","IOS","PS4"],

}


interface DLC extends Jogo{
 originalGame :Jogo;
 novoconteudo: string[];
}
const ledtbehind: DLC = {
 Titulo : "Battlefield",
 descriçao:"Jogo de tiro",
 genero: "Açao",
 platform:["PS3","PC","IOS","PS4"],
 originalGame: Battle,
novoconteudo: ["3 horas de historia", "novos personagens","novos mapas"],
}

