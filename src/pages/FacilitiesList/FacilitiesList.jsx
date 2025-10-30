import { useNavigate } from 'react-router-dom';
import { useFacilities } from '../../hooks/useFacilities';
import FacilityCard from '../../components/FacilityCard/FacilityCard';
import './_facilities-list.scss';

export default function FacilitiesList() {
  const { facilities, deleteFacility } = useFacilities();
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
      {facilities.length === 0 ? (
        <div className="facilities-list__empty">
          <h2>No facilities yet.</h2>
          <p>
            Press the "Create Facility" button above to add your first facility.
          </p>
        </div>
      ) : (
        <div className="facilities-list__grid">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              onDelete={deleteFacility}
            />
          ))}
        </div>
      )}
    </div>
  );
}
