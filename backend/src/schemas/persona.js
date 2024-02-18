class Persona {
    constructor(id, nombrecompleto, nrodocumento, correo = null, telefono = null) {
        this.id = id;
        this.nombrecompleto = nombrecompleto;
        this.nrodocumento = nrodocumento;
        this.correo = correo;
        this.telefono = telefono;
    }

    static fromJson(json) {
        const { id, nombrecompleto, nrodocumento, correo, telefono } = json;

        if (!id || !nombrecompleto || !nrodocumento) {
            throw Error("una persona debe tener id, nombrecompleto y nrodocumento");
        }

        return new Persona(id, nombrecompleto, nrodocumento, correo, telefono);
    }

    toJson() {
        return JSON.stringify({
            id: this.id,
            nombrecompleto: this.nombrecompleto,
            nrodocumento: this.nrodocumento,
            correo: this.correo,
            telefono: this.telefono
        });
    }
}

export default Persona;
