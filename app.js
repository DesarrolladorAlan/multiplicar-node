const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('Crear');
        // crearArchivo(base)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// let base = '5';

// console.log(module);
// console.log(multiplicar);
// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);

// console.log(argv.base);
// console.log('limite', argv.limite);
// console.log(argv2);