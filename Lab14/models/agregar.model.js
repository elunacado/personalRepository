const obras = [
    {
        nombre: "Mona Lisa", 
        imagen: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/C10F/production/_120032494_gettyimages-184254372-1.jpg",
    }
];

module.exports = class Obras {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        obras.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); //es lo mismo que construcciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return obras;
    }

}