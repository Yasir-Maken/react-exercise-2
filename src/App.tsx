// import React, { useState } from 'react';
import "./App.css";
import ProductCard from "../components/ProductCard";
import ToggMessage from '../components/ToggMessage';
import TitleUpdater from '../components/TitleUPdater';
import InputLogger from '../components/InputLogger';
import ItemWithDetails from '../components/ItemWithDetails';
import UserList from '../components/UserList';
import FeedBackForm from '../components/FeedBackForm';
import { UserPreferencesProvider } from '../contexts/UserPreferencesContext'; // Import the Provider
import TextDisplay from '../components/TextDisplay'; // Import the Consumer


// Example user data for the UserList component
const exampleUsers = [
  { id: 1, name: 'Alice Smith' },
  { id: 2, name: 'Bob Johnson' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
  { id: 5, name: 'Eve Adams' },
];

// Main App component for React.js Exercise
function App() {
  
  return (
    <>
      <div className="app-container">
        <h2>Exercise 2: React.js with TypeScript & Vite</h2>
        {/* Task 1: Display a simple "Hello World" message */}
        <h1>Hello!! I am Yasir Maken React Learner</h1>
        {/* Task 2: Simple "PrductCard" */}
        <div className="task">
          <h2 className="task-heading">Task 1: Product Card</h2>
          <ProductCard name="KODAK SSD" price={110.325}/> 
        </div>
        {/* Task 3: Simple "Toggle Message" When Hidden & Visible */}
        <div className="task">
          <h2 className="task-heading">Task 2: Toggle Message</h2>
          <ToggMessage />
        </div>
        {/* Task 4: Simple "Page Title Updater" When Input Change */}
        <div className="task">
          <h2 className="task-heading">Task 3: Title Updater</h2>
          <TitleUpdater />
        </div>
        {/* Task 5: Simple "Input Logger" When Input Change */}
        <div className="task">
          <h2 className="task-heading">Task 4: Input Logger</h2>
          <InputLogger />
        </div>
        {/* Task 6: Simple "Item Details" Show & Hide onClicking */}
        <div className="task">
          <h2 className="task-heading">Task 5: Show Item Details</h2>
          <ItemWithDetails
            itemName="Amazing React"
            itemDetails="This scroll contains forgotten lore from the elder days, detailing the rise and fall of mythical beasts and the secrets of the cosmos. Handle with care, as its parchment is fragile."
          />
        </div>
        {/* Task 7: Simple "Map User List" Use Unique Identifier */}
        <div className="task">
          <h2 className="task-heading">Task 6: Show User List</h2>
          <UserList users={exampleUsers}/>
        </div>
        {/* Task 8: Simple "FeedBack Form" To Control Compent Box */}
        <div className="task">
          <h2 className="task-heading">Task 7: FeedBack Form</h2>
          <FeedBackForm />
        </div>
        {/* Task 9: Simple "User Preference" Tree */}
        <div className="task">
          <h2 className="task-heading">Task 8: User Preferences</h2>
          <UserPreferencesProvider>
            <TextDisplay />
          </UserPreferencesProvider>
        </div>
      </div>
    </>
  )
}

export default App
