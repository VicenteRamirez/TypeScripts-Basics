/*
    ===== Código de TypeScript =====
*/

interface Passenger{
    name: string;
    sons?: string[];
}



const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melisa',
    sons: ['Natalia', 'Gabriel']
}


function  printSons(passenger:Passenger):void {
    
    const howSons = passenger.sons?.length || 0;


    console.log(howSons, passenger.sons);
    
}

 
printSons(passenger2);
