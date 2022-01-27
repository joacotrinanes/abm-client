import React from 'react';
import Client from './Client';
import styles from './ClientsList.module.css';
import Card from '../UI/Card';

const ClientsList = (props) => {
  return (
    <Card className={styles.card}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>RUT</td>
            <td>Tipo</td>
            <td>Teléfono</td>
            <td>Activo</td>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {props.clients.map((client) => {
            return (
              <Client
                key={client.id}
                id={client.id}
                nombre={client.nombre}
                apellido={client.apellido}
                RUT={client.RUT}
                tipo={client.tipo}
                telefono={client.telefono}
                activo={client.activo}
                editHandler={props.editHandler}
                deleteHandler={props.deleteHandler}
              />
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default ClientsList;
