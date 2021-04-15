/*
    ===== Código de TypeScript =====
*/

export interface Product {
    desc: string;
    price: number; 
}

const phone: Product =  {
    desc: 'iPhone X',
    price: 300
}

const tablet: Product = {
    desc: 'iPad Air',
    price: 350
}


export function calculateISV( product:Product[] ): [number, number] {
    let total = 0;

    product.forEach(({price})=>{
        total += price;
    });

    return [total, total * 0.15];
}

const articles = [phone, tablet];

const [total, isv] = calculateISV(articles);

// console.log('Total: ', total);
// console.log('ISV: ', isv);