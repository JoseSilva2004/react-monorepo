import React, { useState } from 'react';
import { Form, Row, Col, Button, FloatingLabel, Alert } from 'react-bootstrap';
import './Forms.scss';
import { createEmbarcacionRequest } from '../../api/embarcacion';

const Forms: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo_embarcacion: '',
    tipo_material: '',
    capacidad_maxima: '',
    cantidad_pasajero: '',
    fecha_fabricacion: '',
    cantidad_motor: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'danger' | undefined>(undefined);

  const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await createEmbarcacionRequest(formData);
      const data = await res.json();

      if (res.status >= 200 && res.status < 300) {
        console.log(data);
        setMessage('La embarcación se ha registrado correctamente');
        setMessageType('success');
        console.log(res.json)
      } else if (res.status === 409) { // Manejo específico para el error 409
        console.error('Error 409:', data);
        setMessage('Hubo un error al registrar la embarcación: Ya existe una embarcación con ese nombre');
        setMessageType('danger');
      } else {
        console.error('Error:', data);
        setMessage('Hubo un error al registrar la embarcación');
        setMessageType('danger');
      }
    } catch (error) {
      console.error('Error al registrar la embarcación:', error);
      setMessage('Hubo un error al registrar la embarcación');
      setMessageType('danger');
    }

    setTimeout(() => {
      setMessage(null);
      setMessageType(undefined);
    }, 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrar Embarcacion</h2>
      {message && (
        <div className="alert-container">
          <Alert variant={messageType}>{message}</Alert>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formInput1" className="form-group">
              <FloatingLabel controlId="formInput1" label="Nombre de Embarcacion">
                <Form.Control type="text" placeholder="Nombre de Embarcacion" className="form-control" value={formData.nombre} onChange={handleStringChange} name="nombre" />
              </FloatingLabel>
              <div className='floating'>
                <div className='form-floating'>
                  <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" value={formData.tipo_embarcacion} onChange={handleSelectChange} name='tipo_embarcacion'>
                    <option selected disabled>Seleccion un tipo</option>
                    <option value="Carga de Pasajero">Carga de Pasajero</option>
                    <option value="Carga Pesada">Carga pesada</option>
                    <option value="Bote Pesquero">Bote Pesquero</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">Tipo de Embarcacion</label>
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="formInput6" className="form-group">
              <FloatingLabel controlId="formInput6" label="Fecha de Fabricacion">
                <Form.Control type="date" placeholder="Fecha de Fabricacion" className="form-control" value={formData.fecha_fabricacion} onChange={handleStringChange} name='fecha_fabricacion' />
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formInput7" className="form-group">
              <FloatingLabel controlId="formInput7" label="Cantidad de Motores">
                <Form.Control type="number" placeholder="Cantidad de Motores" className="form-control" value={formData.cantidad_motor} onChange={handleNumberChange} name='cantidad_motor' />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formInput4" className="form-group">
              <FloatingLabel controlId="formInput4" label="Capacidad Maxima">
                <Form.Control type="number" placeholder="Capacidad Maxima" className="form-control" value={formData.capacidad_maxima} onChange={handleNumberChange} name='capacidad_maxima' />
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formInput5" className="form-group">
              <FloatingLabel controlId="formInput5" label="Cantidad de Pasajeros">
                <Form.Control type="number" placeholder="Cantidad de Pasajeros" className="form-control" value={formData.cantidad_pasajero} onChange={handleNumberChange} name='cantidad_pasajero' />
              </FloatingLabel>
            </Form.Group>
            <div className='floating'>
              <div className='form-floating'>
                <select className="form-select" id="tipo_material" aria-label="Floating label select example" value={formData.tipo_material} onChange={handleSelectChange} name='tipo_material'>
                  <option selected disabled>Seleccion un tipo</option>
                  <option value="Hierro">Hierro</option>
                  <option value="Metal">Metal</option>
                  <option value="Madera">Madera</option>
                </select>
                <label htmlFor="tipo_material">Tipo de Material</label>
              </div>
            </div>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="submit-button">
          Registrar
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
