const contenido = [
    {
        nombre: "Ethan",
        correo: "ethanlunacado@gmail.com",
        mensaje: "Excelente servicio"
    }
];

module.exports = class Contacto {
    constructor(mi_nombre, mi_correo, mi_mensaje) {
        this.nombre = mi_nombre;
        this.correo = mi_correo;
        this.mensaje = mi_mensaje;
    }

    save() {
        contenido.push({
            nombre: this.nombre,
            correo: this.correo,
            mensaje: this.mensaje,
        });
    }

    static fetchAll() {
        return contenido;
    }
}
