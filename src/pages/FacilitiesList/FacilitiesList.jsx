import FacilityCard from '../../components/FacilityCard/FacilityCard';
import './_facilities-list.scss';

export default function FacilitiesList() {
  return (
    <div className="facilities-list">
      <h1 className="facilities-list__title">Facilities</h1>
      <div className="facilities-list__grid">
        <FacilityCard />
      </div>
    </div>
  );
}
