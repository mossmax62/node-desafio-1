const fs = require('fs');

const registrar = (nombre = null, edad=null, tipo = null, color=null, enfermedad=null) => {
    const data = leer();
    const citas = JSON.parse(data);
    citas.push({ nombre, edad, tipo, color, enfermedad });
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita registrada');

}
const leer = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        return data.toString();
    }catch (error) {
        console.error('Error al leer el archivo', error);
    }

    
}

module.exports = { registrar, leer };