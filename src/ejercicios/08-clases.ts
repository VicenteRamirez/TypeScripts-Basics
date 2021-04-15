/*
    ===== Código de TypeScript =====
*/
class normalPerson{
    
    constructor ( 
        public name: string, 
        public dir: string  
        ) {}

}

class Hero extends normalPerson{
    // alterEgo: string;
    // age: number;
    // name: string; 

    constructor( 
        public alterEgo: string, 
        public age: number, 
        public name: string
        ){
            super( name, 'New York, USA' );
        }
}

const ironman = new Hero('Ironman', 35, 'Tony Stark');

console.log(ironman);    