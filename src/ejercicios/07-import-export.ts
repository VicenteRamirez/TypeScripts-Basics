import { Product, calculateISV } from './06-desestructuracion-funcion';

/*
    ===== Código de TypeScript =====
*/

 
const carritoCompras: Product[] = [
    {
        desc: 'iPhone 8',
        price: 100
    },
    {
        desc: 'iPhone X',
        price: 150
    }
];  


const [total, isv] = calculateISV( carritoCompras );

console.log( 'Total: ', total);
console.log( 'ISV: ', isv);

