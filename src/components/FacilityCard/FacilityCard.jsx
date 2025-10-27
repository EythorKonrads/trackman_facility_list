import './_facility-card.scss';

export default function FacilityCard({ facility }) {
  const timeStringToMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const now = new Date();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const openMinutes = timeStringToMinutes(facility.open);
  const closeMinutes = timeStringToMinutes(facility.close);

  const isOpen =
    openMinutes <= closeMinutes
      ? minutesNow >= openMinutes && minutesNow <= closeMinutes
      : minutesNow >= openMinutes || minutesNow <= closeMinutes;

  return (
    <div className="facility-card">
      <div
        className="facility-card__image"
        style={{ backgroundImage: `url(${facility.image})` }}
        role="img"
        aria-label={facility.name}
      >
        {facility.isDefault && (
          <img
            className="facility-card__default"
            src={`${import.meta.env.BASE_URL}default_facility.svg`}
            alt="Default facility"
          />
        )}
      </div>
      <div className="facility-card__body">
        <div className="facility-card__container">
          <p className="facility-card__name">{facility.name}</p>
          <div className="facility-card__hours">
            <div
              className={`facility-card__status ${isOpen ? 'facility-card__status--open' : 'facility-card__status--closed'}`}
            >
              {isOpen ? 'Open' : 'Closed'}
            </div>
          </div>
        </div>
        <div className="facility-card__container">
          <div className="facility-card__location">
            <img
              src={`${import.meta.env.BASE_URL}location.svg`}
              alt="location icon"
            />
            <p className="facility-card__address">{facility.address}</p>
          </div>
          <div className="facility-card__buttons">
            <button
              className="facility-card__button facility-card__button--delete"
              type="button"
            >
              <img
                src={`${import.meta.env.BASE_URL}delete.svg`}
                alt="delete icon"
              />
            </button>
            <button
              className="facility-card__button facility-card__button--edit"
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
