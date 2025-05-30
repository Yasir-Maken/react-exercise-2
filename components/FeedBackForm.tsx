import React, { useState } from 'react';
import './FeedBackForm.css'; // Import the CSS for this component

/**
 * FeedbackForm Component
 * A simple form for users to submit feedback. It includes a textarea
 * for comments and a submit button. The textarea is a controlled component,
 * and upon submission, the feedback is logged to the console.
 */
function FeedBackForm() {
  // State to manage the value of the textarea.
  // Initialized as an empty string.
  const [feedback, setFeedback] = useState<string>('');

  /**
   * Handles changes to the textarea input.
   * Updates the `feedback` state with the current value of the textarea.
   * @param event The change event object from the textarea element.
   */
  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value); // Update state with the textarea's current value
  };

  /**
   * Handles the form submission.
   * Prevents the default form submission behavior (page reload) and
   * logs the current feedback value to the console.
   * @param event The form submission event object.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission (page reload)
    console.log('Feedback Submitted:', feedback); // Log the feedback to the console
    alert('Thank you for your feedback! Check the console for the submitted text.'); // Provide user feedback
    setFeedback(''); // Optionally clear the textarea after submission
  };

  return (
    <div className="feedback-form-container">
      <h3 className="form-title">Share Your Feedback</h3>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="feedback-comments" className="form-label">
            Your Comments:
          </label>
          <textarea
            id="feedback-comments"
            className="feedback-textarea"
            value={feedback} // Controlled component: textarea value is tied to state
            onChange={handleFeedbackChange} // Event handler for textarea changes
            placeholder="Type your feedback here..."
            rows={5} // Number of visible text lines
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedBackForm;