const API = 'http://localhost:3063/api'
interface Embarcacion {
    nombre: string,
    tipo_embarcacion: string,
    tipo_material: string,
    capacidad_maxima: string,
    cantidad_pasajero: string,
    fecha_fabricacion: string,
    cantidad_motor: string
}

export const createEmbarcacionRequest = (embarcacion: Embarcacion) =>
    fetch(`${API}/embarcacion`, {
        method: 'POST',
        body: JSON.stringify(embarcacion),
        headers: {
            'Content-Type': 'application/json'
        }
    })