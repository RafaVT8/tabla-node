const fs = require('fs')
require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "";
        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base*i}\n`;

        }

        if (listar) {
            console.log("tabal de multiplicar".bgBlue);
            console.log("****************".green)
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Archivo tabla-${base}.txt`;
    } catch (e) {
        throw e;
    }


}

module.exports = {
    crearArchivo
}