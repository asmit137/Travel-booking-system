import { useEffect, useState } from 'react';
import { fetchPackages, createPackage, updatePackage, deletePackage } from '../api';
import AdminPackageForm from '../components/AdminPackageForm';
import Header from '../components/Header';

const AdminPanel = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null); 

  
  const loadPackages = async () => {
    const { data } = await fetchPackages();
    setPackages(data);
  };

  useEffect(() => {
    loadPackages();
  }, []);updatePackage


  const handleSavePackage = async (pkg) => {
    if (editingPackage) {
      await (editingPackage._id, pkg); 
      setEditingPackage(null); 
    } else {
      await createPackage(pkg); 
    }
    loadPackages();
  };

  const handleEditPackage = (pkg) => {
    setEditingPackage(pkg);
  };

  // Delete package
  const handleDeletePackage = async (id) => {
    await deletePackage(id);
    loadPackages();
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">Admin Panel</h1>

      
        <AdminPackageForm onAddPackage={handleSavePackage} editingPackage={editingPackage} />

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {packages.map((pkg) => (
            <div key={pkg._id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-bold">{pkg.title}</h2>
              <p className="text-gray-600">{pkg.description}</p>
              <p className="font-bold text-indigo-600">${pkg.price}</p>
              <div className="flex gap-2 mt-4">
              
                <button
                  onClick={() => handleEditPackage(pkg)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePackage(pkg._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
