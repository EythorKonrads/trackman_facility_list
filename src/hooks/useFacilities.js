import { useState, useEffect } from 'react';

const sortByDefault = (facilities) => {
  return facilities.sort(
    (a, b) => (b.isDefault ? 1 : 0) - (a.isDefault ? 1 : 0)
  );
};

export function useFacilities() {
  const [facilities, setFacilities] = useState(() => {
    const stored = localStorage.getItem('facilities');
    const parsed = stored ? JSON.parse(stored) : [];
    return sortByDefault(parsed);
  });

  useEffect(() => {
    localStorage.setItem('facilities', JSON.stringify(facilities));
  }, [facilities]);

  const addFacility = (facility) => {
    const newFacilities = [...facilities];

    if (newFacilities.length === 0) {
      facility.isDefault = true;
    } else if (facility.isDefault) {
      newFacilities.forEach((facility) => (facility.isDefault = false));
    }

    newFacilities.push(facility);
    setFacilities(sortByDefault(newFacilities));
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

    setFacilities(sortByDefault(newFacilities));
  };

  const deleteFacility = (id) => {
    let newFacilities = facilities.filter((facility) => facility.id !== id);
    if (
      !newFacilities.some((facility) => facility.isDefault) &&
      newFacilities.length > 0
    ) {
      newFacilities[0].isDefault = true;
    }

    setFacilities(sortByDefault(newFacilities));
  };

  return { facilities, addFacility, updateFacility, deleteFacility };
}
