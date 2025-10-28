import { useNavigate } from 'react-router-dom';
import { useFacilities } from '../../hooks/useFacilities';
import FacilityCard from '../../components/FacilityCard/FacilityCard';
import './_facilities-list.scss';

export default function FacilitiesList() {
  const { facilities } = useFacilities();
  const navigate = useNavigate();

  return (
    <div className="facilities-list">
      <button
        className="facilities-list__button"
        type="button"
        onClick={() => navigate('/facility/new')}
      >
        Create Facility
      </button>
      <div className="facilities-list__grid">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
}
