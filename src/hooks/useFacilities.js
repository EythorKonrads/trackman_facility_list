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

  return { facilities, addFacility };
}
