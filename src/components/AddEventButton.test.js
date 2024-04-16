import { fireEvent, render, screen } from "@testing-library/react";
import AddEventButton from "./AddEventButton";
import React, { useState } from "react";
describe("AddEventButton component", () => {
  test("renders Add New Event button", () => {
    render(<AddEventButton />);
    const addNewEventButton = screen.getByRole("button", {
      name: "Add New Event",
    });
    expect(addNewEventButton).toBeInTheDocument();
  });
  test("toggle event form visibility when add new event button is clicked", () => {
    render(<AddEventButton />);
    const addNewEventButton = screen.getByRole("button", {
      name: "Add New Event",
    });
    fireEvent.click(addNewEventButton);
    let eventForm = screen.queryByTestId("event-form");
    expect(eventForm).toBeInTheDocument();
    fireEvent.click(addNewEventButton);
    eventForm = screen.queryByTestId("event-form");
    expect(eventForm).not.toBeInTheDocument();
  });
  test("triggers action when add new event button is clicked", () => {
    const mockAction = jest.fn();
    render(<AddEventButton action={mockAction} />);
    const addNewEventButton = screen.getByRole("button", {
      name: "Add New Event",
    });
    fireEvent.click(addNewEventButton);
    expect(mockAction).toHaveBeenCalled();
  });
});
const AddEventButton = ({ action }) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const toggleEventFormVisibility = () => {
    setShowEventForm((prevState) => !prevState);
  };
  const handleClick = () => {
    toggleEventFormVisibility();
    if (action) {
      action();
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Add New Event</button>
      {showEventForm && <EventForm />}
    </div>
  );
};
const EventForm = () => {
  return <form data-testid="event-form">{/* Event form content */}</form>;
};
export default AddEventButton;
