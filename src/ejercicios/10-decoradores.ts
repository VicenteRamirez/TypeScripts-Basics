/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }


@reportableClassDecorator
class mySuperClass {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo')
    }
}

console.log(mySuperClass);

const myClass = new mySuperClass();