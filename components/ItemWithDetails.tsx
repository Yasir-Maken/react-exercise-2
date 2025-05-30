import { useState } from 'react';
import './ItemWithDetails.css'; // Import the CSS for this component

/**
 * Props interface for the ItemWithDetails component.
 * Defines the types for the properties this component expects.
 */
interface ItemWithDetailsProps {
  itemName: string;    // The name of the item to display
  itemDetails: string; // The detailed description of the item
}

/**
 * ItemWithDetails Component
 * Displays an item's name and provides a button to toggle the visibility
 * of additional details about that item.
 *
 * Uses `useState` to manage the visibility state and conditional rendering
 * to show or hide the details paragraph.
 *
 * @param {ItemWithDetailsProps} props - The properties for the component.
 */
function ItemWithDetails({ itemName, itemDetails }: ItemWithDetailsProps) {
  // State to manage whether the details are currently visible or hidden.
  // Initial state is `false`, meaning details are hidden by default.
  const [showDetails, setShowDetails] = useState<boolean>(false);

  /**
   * Handles the click event for the 'Show Details' / 'Hide Details' button.
   * Toggles the `showDetails` state to its opposite boolean value.
   */
  const handleToggleDetails = () => {
    setShowDetails(!showDetails); // Invert the current state
  };

  return (
    <div className="item-details-container">
      <h3 className="item-name">{itemName}</h3>
      {/* Button to toggle the visibility of the details */}
      <button onClick={handleToggleDetails} className="toggle-details-button">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Conditional rendering: The details paragraph is only rendered if `showDetails` is true */}
      {showDetails && (
        <p className="item-details-text">
          {itemDetails}
        </p>
      )}
    </div>
  );
}

export default ItemWithDetails;