import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useUserAddress } from '@/hooks/useUserAddress';
import { useModal } from '@/hooks/useModal';
import Title6 from '@/components/shared/typo/Title6';
import MapNonInteractive from '@/components/shared/MapNonInteractive';
import AddressCard from '@/components/shared/AddressCard';
import React from 'react';
 // Import the Header component with the correct relative path


import LeafletMap from './LeafletMap'; // Import the LeafletMap component

const DeliveryAddress = () => {
  const center = { lat: 13.084622, lng: 80.248357 }; // You can set the center as needed

  return (
    <>
      

      <div className="row">
        <div className="col text-center">
          <h2>Delivery Address Map</h2>
          <p>Loading basic map using layer from maptiler</p>
          <LeafletMap center={center} /> {/* Use the LeafletMap component */}
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
