import { useState } from 'react';

export function useFacilities() {
  const [facilities, setFacilities] = useState(() => {
    const stored = localStorage.getItem('facilities');
    return stored ? JSON.parse(stored) : [];
  });

  const addFacility = (facility) => {
    const newFacilities = [...facilities];

    if (newFacilities.length === 0) {
      facility.isDefault = true;
    } else if (facility.isDefault) {
      newFacilities.forEach((facility) => (facility.isDefault = false));
    }

    newFacilities.push(facility);
    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  const updateFacility = (id, updated) => {
    const newFacilities = facilities.map((facility) => {
      if (facility.id === id) return updated;
      return facility;
    });

    if (updated.isDefault) {
      newFacilities.forEach((facility) => {
        if (facility.id !== id) facility.isDefault = false;
      });
    }

    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  const deleteFacility = (id) => {
    let newFacilities = facilities.filter((facility) => facility.id !== id);
    if (
      !newFacilities.some((facility) => facility.isDefault) &&
      newFacilities.length > 0
    ) {
      newFacilities[0].isDefault = true;
    }

    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  return { facilities, addFacility, updateFacility, deleteFacility };
}
