// item 1

const lista = ["Mustang - Ford", "Panamera - Porsche"]; // item 2

class Automovel {
  constructor(nome, marca, modelo, paisOrigem){
    this.nome = nome;
    this.marca = marca;
    this.modelo = modelo;
    this.paisOrigem = paisOrigem;
  }

  getAutomovel (){ 
    return `   nome: ${this.nome} || marca: ${this.marca}
   modelo: ${this.modelo} || Pais de Origem: ${this.paisOrigem}`;
  }
}

for (const valor of lista) { //item 3
  console.log(valor);

  for (const key in Automovel) {
    console.log(key, Automovel[key]);
  }  
}

var automovel = new Automovel("supra", "Toyota", "MK4", "Japão");

console.log(automovel.getAutomovel());
console.log();


