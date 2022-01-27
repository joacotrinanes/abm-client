import {useState, useEffect} from 'react';
import ButtonApp from '../UI/ButtonApp';
import Card from '../UI/Card';
import './ClientForm.css';

const ClientForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredRUT, setEnteredRUT] = useState('');
  const [enteredType, setEnteredType] = useState('');
  const [enteredTelephone, setEnteredTelephone] = useState('');
  const [isActive, setIsActive] = useState('');

  const setForm = () => {
    setEnteredName(props.clientToEdit.nombre);
    setEnteredLastName(props.clientToEdit.apellido);
    setEnteredRUT(props.clientToEdit.RUT);
    setEnteredTelephone(props.clientToEdit.telefono);
    setEnteredType(props.clientToEdit.tipo);
    setIsActive(props.clientToEdit.activo);
  };
  useEffect(() => {
    if (props.clientToEdit) {
      setForm();
    }
  }, [props.clientToEdit]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let client = {};
    if (props.editMode) {
      client = {
        id: props.clientToEdit.id,
        nombre: enteredName,
        apellido: enteredLastName,
        RUT: +enteredRUT,
        tipo: enteredType,
        telefono: enteredTelephone,
        activo: isActive
      };
      props.onSubmit(client);
    } else {
      const idArray = props.clients.map((i) => i.id);
      let lastID = Math.max(...idArray);

      client = {
        id: props.clients.length > 0 ? lastID + 1 : 0,
        nombre: enteredName,
        apellido: enteredLastName,
        RUT: +enteredRUT,
        tipo: enteredType,
        telefono: enteredTelephone,
        activo: isActive
      };

      props.onSubmit(client);
    }
  };

  const clearEditHandler = () => {
    setEnteredName('');
    setEnteredLastName('');
    setEnteredRUT('');
    setEnteredTelephone('');
    setEnteredType('');
    setIsActive('');

    props.onSubmit(props.clientToEdit);
    props.clearEditClient(false);
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const rutHandler = (event) => {
    setEnteredRUT(event.target.value);
  };

  const typeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const isActiveHandler = (event) => {
    setIsActive(event.target.value);
  };

  const telephoneHandler = (event) => {
    setEnteredTelephone(event.target.value);
  };

  return (
    <div className="formWrapper">
      <Card className="formCard">
        <form onSubmit={onSubmitHandler} id="form" className="clientForm">
          <h4 className="title">ABM Cliente</h4>
          <div className="clientForm__controls">
            <div className="clientForm__control">
              <label htmlFor="nombre">Nombre: </label>
              <input
                id="nombre"
                type="text"
                value={enteredName}
                onChange={nameHandler}
                required
              />
            </div>
            <br />
            <div className="clientForm__control">
              <label htmlFor="apellido">Apellido: </label>
              <input
                id="apellido"
                type="text"
                value={enteredLastName}
                onChange={lastNameHandler}
                required
              />
            </div>
            <br />
            <div className="clientForm__control">
              <label htmlFor="rut">RUT: </label>
              <input
                id="rut"
                type="number"
                value={enteredRUT}
                onChange={rutHandler}
              />
            </div>
            <br />
            <div className="clientForm__control__radio">
              <label>Tipo: </label>
              <input
                id="empresa"
                name="tipo"
                type="radio"
                value="Empresa"
                onChange={typeHandler}
                checked={enteredType === 'Empresa' ? true : false}
              />
              <label htmlFor="empresa">Empresa</label>
              <input
                id="consumidorFinal"
                name="tipo"
                type="radio"
                value="Consumidor Final"
                onChange={typeHandler}
                checked={enteredType === 'Consumidor Final' ? true : false}
              />
              <label htmlFor="consumidorFinal">Consumidor Final</label>
            </div>
            <br />
            <div className="clientForm__control">
              <label htmlFor="telefono">Teléfono: </label>
              <input
                id="telefono"
                type="tel"
                value={enteredTelephone}
                onChange={telephoneHandler}
              />
            </div>
            <br />
            <div className="clientForm__control__radio">
              <label>Activo: </label>
              <input
                id="activoSi"
                name="activo"
                type="radio"
                value="Activo"
                onChange={isActiveHandler}
                checked={isActive === 'Activo' ? true : false}
              />
              <label htmlFor="activoSi">Activo</label>
              <input
                id="activoNo"
                name="activo"
                type="radio"
                value="No Activo"
                onChange={isActiveHandler}
                checked={isActive === 'No Activo' ? true : false}
              />
              <label htmlFor="activoNo">No Activo</label>
            </div>
          </div>
          <br />
          <ButtonApp
            placeholder={props.editMode ? 'Edit' : 'Submit'}
            className="submit"
            type="submit"
          />
          <ButtonApp
            placeholder="Clear"
            className="clear"
            onClick={clearEditHandler}
            type="button"
          />
          <br />
        </form>
      </Card>
    </div>
  );
};

export default ClientForm;
