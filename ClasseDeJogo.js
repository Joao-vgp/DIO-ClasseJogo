class Heroi {
	constructor(nome, idade, classe) {
    	this.nome = nome
    	this.idade = idade
        this.classe = classe
    }
    ataque(){
    	let ataque
        if (this.classe === "Mago"){
        	ataque = "magia"
        }
        else if (this.classe === "Guerreiro"){
        	ataque = "espada"
        }
        else if (this.classe === "Monge"){
        	ataque = "artes marciais"
        }
        else if (this.classe === "Ninja"){
        	ataque = "shuriken"
        } 
    
    	console.log(`O ${this.classe} atacou usando ${ataque}`)
    }
}

let mago = new Heroi ("Dio", 18, "Mago")
let guerreiro = new Heroi ("Dio", 20, "Guerreiro")
let monge = new Heroi ("Dio", 30, "Monge")
let ninja = new Heroi ("Dio", 24, "Ninja")


mago.ataque()
guerreiro.ataque()
monge.ataque()
ninja.ataque()

