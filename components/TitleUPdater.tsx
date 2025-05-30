import React, { useState, useEffect } from 'react';
import './TitleUpdater.css'; // Import the CSS for this component

/**
 * TitleUpdater Component
 * This component contains an input field. As the user types into the input,
 * the browser's document title (the text in the browser tab) is updated
 * to reflect the current value of the input field.
 *
 * It uses `useState` to manage the input's value and `useEffect` to
 * perform the side effect of updating `document.title`.
 */
function TitleUpdater() {
  // State to store the current value of the input field.
  // Initial value is an empty string.
  const [inputValue, setInputValue] = useState<string>('');

  // useEffect hook to handle side effects.
  // This effect runs whenever `inputValue` changes.
  useEffect(() => {
    // Update the browser's document title.
    // If inputValue is empty, set a default title, otherwise use the input value.
    document.title = inputValue ? `Typing: ${inputValue}` : 'React Exercise';

    // Optional: Cleanup function. This runs when the component unmounts
    // or before the effect re-runs (if dependencies change).
    // Here, we reset the title to a default value when the component is removed.
    return () => {
      document.title = 'React App'; // Reset to a generic title
    };
  }, [inputValue]); // Dependency array: the effect re-runs only when `inputValue` changes.

  /**
   * Handles changes in the input field.
   * Updates the `inputValue` state with the current value from the input event.
   * @param event The change event from the input element.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="title-updater-container">
      <label htmlFor="title-input" className="input-label">
        Type something to change the browser title:
      </label>
      <input
        id="title-input"
        type="text"
        value={inputValue} // Binds the input's value to the `inputValue` state
        onChange={handleChange} // Calls `handleChange` when the input changes
        placeholder="Start typing here..."
        className="title-input-field"
      />
      <p className="current-title-display">
        Current Input: <strong>{inputValue || '[Empty]'}</strong>
      </p>
    </div>
  );
}

export default TitleUpdater;