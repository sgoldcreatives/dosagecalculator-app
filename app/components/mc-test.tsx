import React, { useState } from "react";



  return (
    <div>
      <input type="text" placeholder="Search dosage form..." />
      {dosageForms.map((form) => (
        <label key={form.value}>
          <input
            type="checkbox"
            value={form.value}
            checked={selectedForms.includes(form.value)}
            onChange={() => handleFormSelect(form.value)}
          />
          {form.label}
        </label>
      ))}
      {selectedForms.length === 0 && <div>No dosage forms selected.</div>}
      {selectedForms.length > 0 && (
        <div>Selected dosage forms: {selectedForms.join(", ")}</div>
      )}
    </div>
  );
};

export default MultipleChoiceComponent;
