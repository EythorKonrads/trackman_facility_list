import './_facility-form.scss';

export default function FacilityForm() {
  return (
    <div className="facility-form">
      <h1 className="facility-form__title">Create new facility</h1>
      <form action="" className="facility-form__form">
        <label className="facility-form__label">
          Facility Name
          <input type="text" name="name" />
        </label>
        <label className="facility-form__label">
          Address
          <input type="text" name="address" />
        </label>
        <label className="facility-form__label">
          Description
          <textarea name="description" />
        </label>
        <label className="facility-form__label">
          Image URL
          <input name="image" />
        </label>
        <div className="facility-form__time">
          <label className="facility-form__label">
            Open
            <input type="time" name="open" required />
          </label>
          <label className="facility-form__label">
            Close
            <input type="time" name="close" required />
          </label>
        </div>
        <label className="facility-form__label">
          Default Facility
          <input type="checkbox" name="isDefault" />
        </label>
        <button type="submit" className="facility-form__submit">
          Create Facility
        </button>
      </form>
    </div>
  );
}
