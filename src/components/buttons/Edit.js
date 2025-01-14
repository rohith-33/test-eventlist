const EditButton = ({ onClick }) => (
  <button onClick={onClick} className="edit-button" aria-label="Edit">
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox=" 24 24"
      data-testid="EditIcon"
      aria-label="fontSize small"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
    </svg>
  </button>
);

export default EditButton;
