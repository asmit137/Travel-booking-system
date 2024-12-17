import { useState, useEffect } from 'react';

const AdminPackageForm = ({ onAddPackage, editingPackage }) => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    availableDates: '',
    image: '',
  });

  
  useEffect(() => {
    if (editingPackage) {
      setFormData({
        title: editingPackage.title,
        description: editingPackage.description,
        price: editingPackage.price,
        availableDates: editingPackage.availableDates.join(', '), 
        image: editingPackage.image,
      });
    } else {
      setFormData({
        title: '',
        description: '',
        price: '',
        availableDates: '',
        image: '',
      });
    }
  }, [editingPackage]); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageData = {
      ...formData,
      price: parseFloat(formData.price),
      availableDates: formData.availableDates.split(',').map((date) => date.trim()),
    };
    onAddPackage(packageData); 
    setFormData({
      title: '',
      description: '',
      price: '',
      availableDates: '',
      image: '',
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">{editingPackage ? 'Update Package' : 'Add New Package'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Package Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (USD)"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="availableDates"
          placeholder="Available Dates (comma-separated)"
          value={formData.availableDates}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          {editingPackage ? 'Update Package' : 'Add Package'}
        </button>
      </form>
    </div>
  );
};

export default AdminPackageForm;
