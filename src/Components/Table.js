
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tableDataState } from '../Recoil/atoms';

const Table = () => {
  const [tableData, setTableData] = useRecoilState(tableDataState);
  const [editFormData, setEditFormData] = useState(null);

  const handleEdit = (id) => {
    console.log("Editing row with ID:", id);
    setEditFormData(tableData.find((item) => item.id === id));
  };
  

  const handleSaveEdit = (id, newData) => {
    // Update the table data with the edited row
    setTableData(tableData.map((item) => (item.id === id ? { ...item, ...newData } : item)));
    // Clear the edit form data
    setEditFormData(null);
  };

  const handleCancelEdit = () => {
    // Clear the edit form data
    setEditFormData(null);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = {};
    // Extract data from form fields
    formData.forEach((value, key) => {
      newData[key] = value;
    });
    // Call handleSaveEdit with the new data
    handleSaveEdit(editFormData.id, newData);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this row?');
    if (isConfirmed) {
      setTableData(tableData.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      {editFormData && (
        <form onSubmit={handleSubmitEdit}>
          <label>
            Name:
            <input type="text" name="name" defaultValue={editFormData.name} />
          </label>
          <label>
            Age:
            <input type="text" name="age" defaultValue={editFormData.age} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelEdit}>Cancel</button>
        </form>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                

                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="btn btn-danger ml-2" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
