import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFacilities } from '../../hooks/useFacilities';
import './_facility-form.scss';

export default function FacilityForm() {
  const [facility, setFacility] = useState({
    name: '',
    address: '',
    description: '',
    image: '',
    open: '',
    close: '',
    isDefault: false,
  });
  const { addFacility } = useFacilities();
  const navigate = useNavigate();

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
    addFacility({ ...facility, id: generateId() });
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
        <button type="submit" className="facility-form__submit">
          Create Facility
        </button>
      </form>
    </div>
  );
}
