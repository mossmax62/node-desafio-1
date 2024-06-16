const {registrar, leer} = require('./operaciones');
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);
console.log(operacion);
if(operacion !== undefined ){

if (operacion.trim().toLocaleLowerCase() === 'registrar') {
    let resultado = registrar(nombre, edad, tipo, color, enfermedad);

}
if (operacion.trim().toLocaleLowerCase() === 'leer') {
    let data = leer();
    console.log(data);
}
  }  else {
    console.log('Operación no válida');
}

