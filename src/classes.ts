/*-------------------------------------------
Classes
-------------------------------------------*/
//Superclass

class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        //this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with${this.stregth} points`);
    }
}

//const p1 = new Character(10, 98)
//console.log(p1);
//RESULTADO: Character { stregth: 10, skill: 98 }

//const p1 = new Character(10, 98)
//p1.Attack();
//RESULTADO: Attack with 10 points

/*-------------------------------------------
Modificadores de Acesso - Data Modifiers
-------------------------------------------
public = pode acessar de fora da classe;
private = só pode ser acessada por dentro da classe;
protected = só pode ser acessado dentro da classe e nas subclasses que herdam a classe;

-------------------------------------------
Subclasses
-------------------------------------------*/
class Magician extends Character {
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.skill = 12;