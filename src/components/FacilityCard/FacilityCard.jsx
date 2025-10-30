import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogDelete from '../Dialog/DialogDelete';
import './_facility-card.scss';

export default function FacilityCard({ facility, onDelete }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = `${import.meta.env.BASE_URL}broken-image.png`; // or use a broken image icon

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

  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    onDelete(facility.id);
    setShowDeleteDialog(false);
  };

  return (
    <div className="facility-card">
      <div
        className={`facility-card__image ${imageLoaded ? 'facility-card__image--loaded' : ''}`}
        role="img"
        aria-label={facility.name}
      >
        <img
          className="facility-card__temp-image"
          src={facility.image || fallbackImage}
          alt={facility.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        {imageLoaded && (
          <div
            className={`facility-card__background ${imageError ? 'facility-card__background--fallback' : ''}`}
            style={{
              backgroundImage: `url(${imageError ? fallbackImage : facility.image || fallbackImage})`,
            }}
          />
        )}
        {facility.isDefault && (
          <img
            className="facility-card__default"
            src={`${import.meta.env.BASE_URL}default_facility.svg`}
            alt="Default facility"
            loading="lazy"
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
              loading="lazy"
            />
            <a
              className="facility-card__address"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(facility.address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {facility.address}
            </a>
          </div>
          <div className="facility-card__buttons">
            <button
              className="facility-card__button facility-card__button--delete"
              type="button"
              onClick={() => setShowDeleteDialog(true)}
            >
              <img
                src={`${import.meta.env.BASE_URL}delete.svg`}
                alt="delete icon"
                loading="lazy"
              />
            </button>
            <button
              className="facility-card__button facility-card__button--edit"
              type="button"
              onClick={() => navigate(`/facility/edit/${facility.id}`)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <DialogDelete
        isOpen={showDeleteDialog}
        title="Delete Facility"
        description={
          <>
            Are you sure you want to delete this facility? This action cannot be
            undone.
            <br />
            Facility: <span style={{ fontWeight: 700 }}>{facility.name}</span>
          </>
        }
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
