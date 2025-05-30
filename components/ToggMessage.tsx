// src/components/ToggleMessage.tsx
import { useState } from 'react';
import './ToggMessage.css'; // Import the CSS for this component

/**
 * ToggleMessage Component
 * A simple component that displays a button to toggle the visibility of a message.
 * The message changes based on its visibility status.
 */
function ToggMessage() {
  // State to manage the visibility of the message.
  // `isVisible` is the current state value, `setIsVisible` is the function to update it.
  // Initial state is `true`, meaning the message is visible by default.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  /**
   * Handles the click event of the toggle button.
   * Toggles the `isVisible` state to its opposite value.
   */
  const handleToggleClick = () => {
    setIsVisible(!isVisible); // Invert the current visibility state
  };

  return (
    <div className="toggle-message-container">
      {/* The button to toggle the message visibility */}
      <button onClick={handleToggleClick} className="toggle-button">
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {/* The message display area. Conditionally rendered based on `isVisible` state. */}
      {/* If `isVisible` is true, the message div is rendered. */}
      {isVisible && (
        <div className="message-display">
          <p>Message is visible!</p>
        </div>
      )}

      {/* If `isVisible` is false, this message is displayed instead. */}
      {!isVisible && (
        <div className="message-display message-hidden">
          <p>Message is hidden.</p>
        </div>
      )}
    </div>
  );
}

export default ToggMessage