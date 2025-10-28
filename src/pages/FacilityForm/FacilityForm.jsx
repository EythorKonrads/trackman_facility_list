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
      <h1 className="facility-form__title">Create new facility</h1>
      <form action="" className="facility-form__form">
        <label className="facility-form__label">
          Facility Name
          <input
            type="text"
            name="name"
            value={facility.name}
            onChange={handleChange}
          />
        </label>
        <label className="facility-form__label">
          Address
          <input
            type="text"
            name="address"
            value={facility.address}
            onChange={handleChange}
          />
        </label>
        <label className="facility-form__label">
          Description
          <textarea
            name="description"
            value={facility.description}
            onChange={handleChange}
          />
        </label>
        <label className="facility-form__label">
          Image URL
          <input
            type="text"
            name="image"
            value={facility.image}
            onChange={handleChange}
          />
        </label>
        <div className="facility-form__time">
          <label className="facility-form__label">
            Open
            <input
              type="time"
              name="open"
              value={facility.open}
              onChange={handleChange}
              required
            />
          </label>
          <label className="facility-form__label">
            Close
            <input
              type="time"
              name="close"
              value={facility.close}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label className="facility-form__label">
          Default Facility
          <input
            type="checkbox"
            name="isDefault"
            checked={facility.isDefault}
            onChange={handleChange}
          />
        </label>
        <button
          className="facility-form__cancel"
          type="button"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
        <button type="submit" className="facility-form__submit">
          {existing ? 'Update Facility' : 'Create Facility'}
        </button>
      </form>
    </div>
  );
}
