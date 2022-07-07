const { demandOption, options } = require("yargs");

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Lista la tabla de multiplicar"
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: "Hasta que numero quieres multiplicar la base"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe de ser un numero';
        }
        return true;
    }).argv;

module.exports = argv;