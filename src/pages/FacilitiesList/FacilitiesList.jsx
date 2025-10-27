import { Link } from 'react-router-dom';
import { useFacilities } from '../../hooks/useFacilities';
import FacilityCard from '../../components/FacilityCard/FacilityCard';
import './_facilities-list.scss';

export default function FacilitiesList() {
  const { facilities } = useFacilities();

  return (
    <div className="facilities-list">
      <h1 className="facilities-list__title">Facilities</h1>
      <Link to="/facility-form" className="facilities-list__button">
        + Add Facility
      </Link>
      <div className="facilities-list__grid">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
}
