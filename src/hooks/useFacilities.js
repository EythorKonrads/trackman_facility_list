import { useState } from 'react';

export function useFacilities() {
  const [facilities, setFacilities] = useState(() => {
    const stored = localStorage.getItem('facilities');
    return stored ? JSON.parse(stored) : [];
  });

  const addFacility = (facility) => {
    const newFacilities = [...facilities];
    newFacilities.push(facility);
    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  const updateFacility = (id, updated) => {
    const newFacilities = facilities.map((facility) => {
      if (facility.id === id) return updated;
      return facility;
    });

    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  const deleteFacility = (id) => {
    let newFacilities = facilities.filter((facility) => facility.id !== id);

    setFacilities(newFacilities);
    localStorage.setItem('facilities', JSON.stringify(newFacilities));
  };

  return { facilities, addFacility, updateFacility, deleteFacility };
}
