import {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import ClientsList from './components/Clients/ClientsList';
import NavBar from './components/UI/NavBar';
import ClientForm from './components/Clients/ClientForm';
import Wrapper from './components/Helpers/Wrapper';

const baseURL =
  'https://www.crudcrud.com/api/d55e7c3b76f940c6ae2905deaaad49dd/test-1';

function App() {
  const [clients, setClients] = useState([]);
  const [clientToEdit, setClientToEdit] = useState({});
  const [editMode, setEditMode] = useState(false);

  const fetchClients = async () => {
    try {
      const response = await axios.get(baseURL);
      setClients(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);

  const clientHandler = async (client) => {
    try {
      if (editMode) {
        // const filteredClients = clients.filter((e) => {
        //   return e.id !== client.id;
        // });
        // setClients([client, ...filteredClients]);
        const clientEdited = {...client, _id: clientToEdit._id};
        const res = await axios.put(`${baseURL}/${clientEdited._id}`, client);
        fetchClients();
        setEditMode(false);
      } else {
        const res = await axios.post(baseURL, client);
        const newClient = res.data;
        setClients([...clients, newClient].sort((a, b) => a.id - b.id));
        fetchClients();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    //   const filteredClients = clients.filter((e) => {
    //     return e.id !== id;
    //   });
    const clientToDelete = clients.find((client) => client.id === id);
    try {
      const res = await axios.delete(`${baseURL}/${clientToDelete._id}`);
      fetchClients();
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = (id) => {
    const clientFound = clients.find((i) => i.id === id);
    // setClients(clients.filter((i) => i.id !== id).sort((a, b) => a.id - b.id));
    setClientToEdit(clientFound);
    setEditMode(true);
  };

  const clearEditClientHandler = (clear) => {
    setEditMode(clear);
  };

  return (
    <Wrapper>
      <NavBar />
      <div className="bodyApp">
        <ClientForm
          clientToEdit={clientToEdit}
          editMode={editMode}
          onSubmit={clientHandler}
          clearEditClient={clearEditClientHandler}
          clients={clients}
        />
        <ClientsList
          clients={clients}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </Wrapper>
  );
}

export default App;
