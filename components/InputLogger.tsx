import React, { useState } from 'react';
import './InputLogger.css'; // Import the CSS for this component

/**
 * InputLogger Component
 * This component features a text input field. As the user types,
 * the current value of the input is immediately displayed in a
 * paragraph tag below the input.
 *
 * It uses `useState` to manage the input's value and the `onChange`
 * event handler to update that state.
 */
function InputLogger() {
  // State to hold the current value of the text input.
  // Initialized as an empty string.
  const [inputValue, setInputValue] = useState<string>('');

  /**
   * Event handler for the input field's `onChange` event.
   * Updates the `inputValue` state with the new value from the input field.
   * @param event The change event object from the input element.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with the input's current value
  };

  return (
    <div className="input-logger-container">
      <label htmlFor="text-logger-input" className="logger-label">
        Type something:
      </label>
      <input
        id="text-logger-input"
        type="text"
        value={inputValue} // Controlled component: input value is tied to state
        onChange={handleInputChange} // Event handler for input changes
        placeholder="Start typing here..."
        className="logger-input-field"
      />
      {/* Display the current value of the input field */}
      <p className="logged-text">
        You typed: <strong>{inputValue || '[Nothing Yet]'}</strong>
      </p>
    </div>
  );
}

export default InputLogger;