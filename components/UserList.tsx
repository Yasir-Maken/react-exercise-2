import './UserList.css'; // Import the CSS for this component

/**
 * Interface for a single user object.
 * Defines the structure of each item in the users array.
 */
interface User {
  id: number;   // Unique identifier for the user
  name: string; // Name of the user
}

/**
 * Props interface for the UserList component.
 * Defines the types for the properties this component expects.
 */
interface UserListProps {
  users: User[]; // An array of User objects
}

/**
 * UserList Component
 * This component takes an array of user objects as a prop and renders
 * each user's name in a list item. It ensures each list item has a
 * unique and stable key for React's reconciliation process.
 *
 * @param {UserListProps} props - The properties for the component.
 */
function UserList({ users }: UserListProps) {
  return (
    <div className="user-list-container">
      <h3 className="list-title">Registered Users:</h3>
      {/* Check if there are users to display */}
      {users.length > 0 ? (
        <ul className="user-list">
          {/* Map over the users array to render each user as a list item */}
          {users.map((user) => (
            // Use user.id as the key for unique identification.
            // This is crucial for performance and correct behavior in React lists.
            <li key={user.id} className="user-list-item">
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-users-message">No users to display.</p>
      )}
    </div>
  );
}

export default UserList;