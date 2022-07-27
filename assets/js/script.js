let formulario = document.querySelector('form');

let agregar = (event) => {
    event.preventDefault();

    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');

    if (tipo == 'Perro') {
        let alex = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${alex.datosPropietario()}</li><li> ${alex.datosMascota()}</li></ul>`;
    } else if (tipo == 'Gato') {
        let calila = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${calila.datosPropietario()}</li><li> ${calila.datosMascota()}</li></ul>`;
    } else { 
        let pepe = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${pepe.datosPropietario()}</li><li> ${pepe.datosMascota()}</li></ul>`;
    }
}

formulario.addEventListener('submit', agregar);


class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    get direccion(){
        return this._direccion;
    }
    set direccion(nueva_direccion){
        this._direccion = nueva_direccion;
    }
    get telefono(){
        return this._telefono;
    }
    set telefono(nuevo_telefono){
        this._telefono = nuevo_telefono;
    }
    datosPropietario() {
        return (`El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.telefono}, y el número telefónico de contacto: ${this.direccion}`);
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(nuevo_tipo){
        this._tipo = nuevo_tipo;
    }

}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
    datosMascota() {
        return (`El tipo de animal es: ${this.nombreMascota} , mientras que el nombre de la mascota es: ${this.tipo} y la enfermedad es: ${this.enfermedad}`);
    }
}