/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Spiderman',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

console.log(personaje);

personaje.puebloNatal = 'NYC'

console.log(personaje);