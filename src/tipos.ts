/*-------------------------------------------
Tipos Primitivos: boolean, number, string
-------------------------------------------*/
let ligado: boolean = false;

let nome: string = "brenda";

let idade: number = 27;

let altura: number = 1.57; 

/*-------------------------------------------
Tipos Especiais: null, undefined
-------------------------------------------*/
let nulo: null = null;

let indefinido: undefined = undefined; 

/*-------------------------------------------
Tipos Abrangentes: any, void
-------------------------------------------
let retornoViwe: any = (aceita qualquer coisa);
Quando á uma função que pode retornar um valor não previsível. 
Ex: uma função que pode retornar um objeto, mas as vezes pode 
retornar um vazio, ou texto;

let returno: void (só aceita o vazio);
ex: function executaQuery(): void {}

-------------------------------------------
Objeto
-------------------------------------------
Objeto sem previsibilidade:*/
let produto: object = {
    name: "Brenda",
    cidade: "SC",
    idade: 27,
}; 
/*-------------------------------------------
objeto tipado com previsibilidade:*/
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

/*-------------------------------------------
Arrays
-------------------------------------------*/
let dados: string[] = ["brenda", "ana", "maria"]; //vetor
let dados2: Array<string> = ["brenda", "ana", "maria"];

//Não precisa respeitar a ordem das informações.
let infos: (string | number)[] = ["brenda", 27, "ana", 28];

/*-------------------------------------------
Tuplas
-------------------------------------------
Um vetor de multitiples (mais de um tipo);*/

//Tem que respeitar a ordem das informações;
let boleto:[string, number, number] = ["água conta", 100, 5245621];

/*-------------------------------------------
Métodos Arrays
-------------------------------------------*/
dados.pop()
//dados.map() etc... igual ao JS.

/*-------------------------------------------
Datas
-------------------------------------------*/
let aniversario: Date = new Date("2024-01-14 11:18")
console.log(aniversario.toString());