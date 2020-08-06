//const argv = require(' yargs').argv;
const argv = require('./config/yargs').argv;
//const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Por hacer ======');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================');
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let borrar = porHacer.eliminar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
}