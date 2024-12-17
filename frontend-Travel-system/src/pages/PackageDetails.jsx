import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPackageById } from '../api';
import BookingForm from '../components/BookingForm';

const PackageDetails = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const loadPackage = async () => {
      const { data } = await fetchPackageById(id);
      setPkg(data);
    };
    loadPackage();
  }, [id]);

  if (!pkg) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{pkg.title}</h1>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <p className="font-bold text-indigo-600 text-lg mb-6">${pkg.price}</p>
          <BookingForm packageId={pkg._id} price={pkg.price} />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
