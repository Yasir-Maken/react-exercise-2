import { useUserPreferences } from "../contexts/UserPreferencesContext"; // Import the custom hook
import './TextDisplay.css'; // Import CSS for this component

/**
 * TextDisplay Component
 * This component consumes the `fontSize` from the `UserPreferencesContext`
 * and applies it as a CSS class to its displayed text.
 */
function TextDisplay() {
  // Use the custom hook to get the font size from the context.
  const { fontSize } = useUserPreferences();

  return (
    <div className="text-display-container">
      <p className={`display-text font-size-${fontSize}`}>
        This text is displayed with the font size from the context.
        <br />
        Current size: <strong>{fontSize.toUpperCase()}</strong>
      </p>
    </div>
  );
}

export default TextDisplay;