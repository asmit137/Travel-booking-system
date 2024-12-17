import { useNavigate } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/booking/${pkg._id}`, { state: { pkg } }); 
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mb-2">{pkg.title}</h2>
      <p className="text-gray-700 mb-2">{pkg.description}</p>
      <p className="text-indigo-700 font-semibold mb-4">${pkg.price}</p>
      <button
        onClick={handleViewDetails}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        View Detail
      </button>
    </div>
  );
};

export default PackageCard;
