import styles from './Client.module.css';
import ButtonTable from '../UI/ButtonTable';

const Client = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.apellido}</td>
      <td>{props.RUT}</td>
      <td>{props.tipo}</td>
      <td>{props.telefono}</td>
      <td>{props.activo}</td>
      <td>
        <ButtonTable
          placeholder="Select"
          className={styles.select}
          onClick={() => props.editHandler(props.id)}
        />
      </td>
      <td>
        <ButtonTable
          placeholder="Delete"
          className={styles.delete}
          onClick={() => props.deleteHandler(props.id)}
        />
      </td>
    </tr>
  );
};

export default Client;
