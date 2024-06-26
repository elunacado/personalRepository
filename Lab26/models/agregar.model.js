const db = require('../util/database')

module.exports = class Obras {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save(username) {
        return db.execute(
            'INSERT INTO obra (nombre, imagen, username) VALUES (?, ?, ?)',
            [this.nombre, this.imagen, username]
        );
    }
    

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM obra')
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM obra WHERE id=?', [id]);
    }

    static fetch(id){
        if (id) {
            return this.fetchOne(id)
        } else {
            return this.fetchAll();
        }

    }

    static search(valor_busqueda) {
        return db.execute('SELECT * FROM obra WHERE nombre LIKE ?', ['%' + valor_busqueda + '%']);
    }
}