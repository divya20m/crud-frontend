import React, { useEffect } from 'react';
import { Listing } from './Listing';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Lists({ lists, setLists }) {
  const getLists = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      
    })
      .then((res) => res.json()) 
      .then((data) => setLists(data));
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete item with id ${id}`);
        }
        console.log(`Item with id ${id} deleted successfully.`);
        return response.json();
      })
      .then(() => setLists((prevLists) => prevLists.filter((user) => user.id !== id)))
      .catch((error) => console.error('Error deleting:', error));
  };
  

  useEffect(() => {
    getLists();
  }, []);


  const navigate=useNavigate()
  return (
    <div className='lists'>
      {lists.map((li, index) => (
        <Listing key={index} lists={li} id={index} deleteButton={
          <Button
            onClick={() => handleDelete(li.id)}
          >
            Delete
          </Button>
        }
        
        editButton={
          <Button
            onClick={() => navigate(`/edit/${li.id}`)}
          >Edit
          </Button>
        }
        />
      ))}
    </div>
  );
}
