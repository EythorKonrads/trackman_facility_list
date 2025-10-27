import './_facility-card.scss';

export default function FacilityCard({ facility }) {
  return (
    <div className="facility-card">
      <img
        src={facility.image}
        alt={facility.name}
        className="facility-card__image"
      />
      <div className="facility-card__body">
        <h2 className="facility-card__name">{facility.name}</h2>
        <p className="facility-card__address">{facility.address}</p>
        <p className="facility-card__desc">{facility.description}</p>
        <div className="facility-card__hours">
          {facility.open} - {facility.close}
        </div>
        {facility.isDefault && (
          <span className="facility-card__default">Default</span>
        )}
      </div>
    </div>
  );
}
