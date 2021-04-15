/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 100,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const { volume, second, song, details/*: { author } */} = player;
const { author } = details;


console.log('El volumen actual es de: ', volume);
console.log('El segundo actual es de: ', second);
console.log('La canción actual es de : ', song);
console.log('El autor actual es: ',author);


//DESTRUCTURACIÓN DE ARREGLOS
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, vegeta, trunks] = dbz;

console.log(goku);
console.log(vegeta);
console.log(trunks);