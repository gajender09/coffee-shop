import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { useModal } from '@/hooks/useModal';
import { useUserAddress } from '@/hooks/useUserAddress';
import AddressCard from '@/components/shared/AddressCard';
import { useNavigate } from 'react-router-dom';
import LeafletMap from '@/hooks/provider/ModalProvider/CheckoutModal/LeafletMap';


export default function UserAddressCard() {
  // Address Provider
  const { address } = useUserAddress();
  // Modal Provider
  const { showAddressModal } = useModal();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShowAddressModal = () => {
    // Here you can define the route you want to navigate to
    // For example, '/address'
    navigate('');
  };

  return (
    <AddressCard>
      <div className="relative w-full h-full">
        <div className="w-full h-full flex flex-col justify-end p-4">
          <span className="w-fit bg-primary-500 text-xs font-semibold text-white rounded-lg px-1.5 py-1 ">
            Location
          </span>
          <span className="font-semibold text-white line-clamp-2 mt-2">
            {address?.fullAddress ? (
              address?.fullAddress
            ) : (
              <button onClick={showAddressModal} className="underline">
                Add Your Location
              </button>
            )}
          </span>
        </div>
        {address?.fullAddress && (
          <div className="absolute top-2 right-2">
            <button
              type="button"
              onClick={showAddressModal}
              className="text-primary bg-white/50 hover:bg-white focus:outline-none rounded-full text-sm p-1.5 inline-flex items-center"
            >
              <PencilSquareIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </AddressCard>
  );
}
