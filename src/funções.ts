/*-------------------------------------------
Funções
-------------------------------------------*/
function addNumber(x: number, y: number): number {
    return x + y;
}

function addHello(name: string): string {
    return `Hello ${name}`;
}

let soma: number = addNumber(4, 7);
console.log(soma);
console.log(addHello("Brenda"));

/*-------------------------------------------
Função Multi Tipos
-------------------------------------------*/
function CallToPhone(phone: number | string): number | string {
    return phone;
}
//aceita numerou ou string
console.log(CallToPhone(54514574854))

/*-------------------------------------------
Funções Async
-------------------------------------------*/
//async = Promisse

async function getDatabase(id: number): Promise<string> {
    return "Brenda";
}

/*
async function getDatabase(id: number): Promise<number | string> {
    return "Brenda";
} */