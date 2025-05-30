import { createContext, useState, useContext, ReactNode } from 'react';
import './UserPreferencesContext.css'; // Import CSS for the provider component

// Define the types for the font sizes we'll support
type FontSize = 'small' | 'medium' | 'large';

// Define the shape of the context value
interface UserPreferencesContextType {
  fontSize: FontSize;
  // Function to update the font size. It takes the new font size as an argument.
  setFontSize: (size: FontSize) => void;
}

// Create the context with a default (initial) value.
// The default value is used when a component tries to consume the context
// without a provider above it in the tree.
const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

/**
 * UserPreferencesProvider Component
 * This component acts as the provider for the UserPreferencesContext.
 * It manages the `fontSize` state and provides it, along with a setter function,
 * to any consuming components wrapped within it.
 * It also includes a button to cycle through different font sizes.
 *
 * @param {ReactNode} children - The child components that will have access to this context.
 */
function UserPreferencesProvider({ children }: { children: ReactNode }) {
  // State to hold the current font size preference.
  // Initialized to 'medium'.
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  /**
   * Toggles the font size between 'small', 'medium', and 'large'.
   */
  const toggleFontSize = () => {
    switch (fontSize) {
      case 'small':
        setFontSize('medium');
        break;
      case 'medium':
        setFontSize('large');
        break;
      case 'large':
        setFontSize('small');
        break;
      default:
        setFontSize('medium'); // Fallback
    }
  };

  // The value that will be provided to consumers of this context.
  // It includes the current `fontSize` and the `setFontSize` function.
  const contextValue: UserPreferencesContextType = {
    fontSize,
    setFontSize,
  };

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      <div className="user-preferences-provider-container">
        {/* Button to change the font size preference */}
        <button onClick={toggleFontSize} className="font-size-toggle-button">
          Toggle Font Size (Current: {fontSize.toUpperCase()})
        </button>
        {/* Render the children components that will consume this context */}
        {children}
      </div>
    </UserPreferencesContext.Provider>
  );
}

/**
 * Custom hook to consume the UserPreferencesContext.
 * This hook makes it easier and safer to access the context value
 * by throwing an error if the hook is used outside of a provider.
 * @returns {UserPreferencesContextType} The current user preferences context value.
 */
function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
}

export { UserPreferencesProvider, useUserPreferences };
