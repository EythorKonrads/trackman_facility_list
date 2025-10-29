import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFacilities } from '../../hooks/useFacilities';
import './_facility-form.scss';

export default function FacilityForm() {
  const navigate = useNavigate();
  const { facilities, addFacility, updateFacility } = useFacilities();
  const { id } = useParams();
  const existing = facilities.find((f) => f.id === id);

  const [facility, setFacility] = useState(
    existing || {
      name: '',
      address: '',
      description: '',
      image: '',
      open: '',
      close: '',
      isDefault: false,
    }
  );

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFacility((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existing) updateFacility(existing.id, facility);
    else addFacility({ ...facility, id: generateId() });
    navigate('/');
  };

  return (
    <div className="facility-form" onSubmit={handleSubmit}>
      <h1 className="facility-form__title">
        {' '}
        {existing ? 'Edit Facility' : 'Create new facility'}
      </h1>
      <form action="" className="facility-form__form">
        <div className="facility-form__group">
          <h2 className="facility-form__group-title">Facility Information</h2>
          <label className="facility-form__label">
            Facility Name *
            <input
              type="text"
              name="name"
              value={facility.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="facility-form__label">
            Address *
            <input
              type="text"
              name="address"
              value={facility.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className="facility-form__label">
            Description *
            <textarea
              name="description"
              value={facility.description}
              onChange={handleChange}
              required
            />
          </label>
          <label className="facility-form__label">
            Cover Image URL *
            <input
              type="text"
              name="image"
              value={facility.image}
              onChange={handleChange}
              required
            />
          </label>
          <label className="facility-form__label facility-form__label--checkbox">
            <input
              type="checkbox"
              name="isDefault"
              checked={facility.isDefault}
              onChange={handleChange}
            />
            <p>
              Default Facility <br />
              <span>
                Setting this facility as default will override the currently
                marked default facility.
              </span>
            </p>
          </label>
        </div>
        <div className="facility-form__group">
          <h2 className="facility-form__group-title">Working Hours</h2>
          <div className="facility-form__time">
            <label className="facility-form__label">
              Opening Time *
              <input
                type="time"
                name="open"
                value={facility.open}
                onChange={handleChange}
                required
              />
            </label>
            <label className="facility-form__label">
              Closing Time *
              <input
                type="time"
                name="close"
                value={facility.close}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div className="facility-form__buttons">
          <button
            className="facility-form__button facility-form__button--cancel"
            type="button"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="facility-form__button facility-form__button--submit"
          >
            {existing ? 'Update Facility' : 'Create Facility'}
          </button>
        </div>
      </form>
    </div>
  );
}
