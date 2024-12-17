import { useEffect, useState } from 'react';
import { fetchPackages } from '../api';
import CustomerHeader from '../components/CustomerHeader';
import PackageCard from '../components/PackageCard.jsx';

const HomePage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true); 
        const { data } = await fetchPackages();
        setPackages(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoading(false); 
      }
    };
    loadPackages();
  }, []);

  return (
    <>
      <CustomerHeader />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">
          Explore Our Travel Packages
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading packages...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.length > 0 ? (
              packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No travel packages available.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
