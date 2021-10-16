import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    category: 'Produce',
    name: ''
  })

function handleFormChange(event) {
  const name = event.target.name
  
  setFormData({
      ...formData,
      [name]: event.target.value
    })

}

  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, {...formData, id: uuid()})}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;