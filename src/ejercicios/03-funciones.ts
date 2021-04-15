/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a + b;
}

// const result = sumar(5, 5);
// console.log(result);


const sumarArrow = (a: number, b: number): number =>{
    return a + b;
}


// const resultArrow = sumarArrow(10, 10);
// console.log(resultArrow);


const multiplyArrow = (a: number, c?: number, b: number = 2): number => {
    return a * b
}

// const resultMultplyArrow = multiplyArrow(5,0,10);
// console.log(resultMultplyArrow);

interface statsPersonaje{
    nombre: string;
    hp: number;
    mostrarHP: () => void;
}


function curar(personaje: statsPersonaje, hp_healing: number):void {
    personaje.hp += hp_healing;
}

const newCharacter: statsPersonaje = {
    nombre: 'Wolverine',
    hp: 70,
    mostrarHP(){
        console.log('Health Points: ', this.hp); 
    }
}

curar(newCharacter, 30);

newCharacter.mostrarHP();