import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    quote: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, roll, quote, image } = formData;
    const newUser = new FormData();

    newUser.append('name', name);
    newUser.append('roll', roll);
    newUser.append('quote', quote);
    newUser.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/adduser', newUser);

      // Assuming you want to handle the state locally in this component
      console.log('User added successfully:', response.data);

      // Clear the form after successful submission
      setFormData({
        name: '',
        roll: '',
        quote: '',
        image: null,
      });

      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Please try again.');
    }
  };

  return (
    <div className="add-user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Roll:
          <input type="text" name="roll" value={formData.roll} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Quote:
          <textarea name="quote" value={formData.quote} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Form;
