/*-------------------------------------------
Interfaces (type x interface)
-------------------------------------------
readonly: apena leitura, não pode ser alterado por externos.

Mais utilizado para objetos*/
type robot = {
    readonly id: number;
    name: string;
};

//Mais utilizado para classes
interface robot2 {
    readonly id: number | string; 
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman"
}; 

const bot2: robot = {
    id: 1,
    name: "megaman"
}; 

console.log((bot1.name = "man"));

/*-------------------------------------------
Quando usar interfaces
-------------------------------------------
class Pessoa implements robot {
    id: string | number;
    name: string;

    constructor(id string | number, name string) {
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "maria");
console.log(p) */