const empledos = [{
        id: 1,
        nombre: "Rafa"
    },
    {
        id: 2,
        nombre: "Miguel"
    },
    {
        id: 3,
        nombre: "Fernando"
    }
];

const salario = [{
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 1500
    },
];


const getEmpleado = (id) => {


    const promesa = new Promise((resolve, reject) => {
        let empleado = empledos.find(e => e.id === id);

        if (empleado != undefined) {
            empleado = empleado.nombre;
        }

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con id ${id}`)
        }
    });

    return promesa;
}

const id = 1;
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

const objEmpleado = async() => {
    return empledos[0];
}

objEmpleado().then(obj => console.log(obj.nombre));