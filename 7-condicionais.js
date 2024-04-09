console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`);
const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");

console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
    if(idadeComprador >= 18){
        console.log("Compra efetuada com sucesso!");
        listaDeDestinos.splice(1,1); // removendoelse{} item da lista
    }else if(estaAcompanhada){
        console.log("Comprador está acompanhado!");
        listaDeDestinos.splice(1,1); // removendoelse{} item da lista
    }else{
        console.log("Compra não efetuada. Comprador menor de idade!");
    }
}

console.log("Embarque: \n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Embarque não permitido!");
}


console.log(listaDeDestinos);