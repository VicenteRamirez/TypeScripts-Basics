/*
    ===== Código de TypeScript =====
*/

interface superHero{
    name: string;
    age: number;
    address: address;
    showStreet:() => string;
}

interface address{
    street: string;
    country: string;
    city: string;
}

const superH: superHero = {
    name: 'Flash',
    age: 25,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NYC'
    },

    showStreet(){
        return this.name + ', ' + this.address.street + ', ' + this.address.country + ', ' + this.address.city;
    }

}

const direccion = superH.showStreet();

console.log(direccion);

