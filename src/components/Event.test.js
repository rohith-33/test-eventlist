import { fireEvent, render, screen } from "@testing-library/react";
import Event from "./Event";
import React, { useState } from "react";
describe("Event component", () => {
  const mockEvent = {
    id: "034",
    eventName: "mock event",
    startDate: "04-08-2024",
    endDate: "04-18-2024",
    completed: false,
  };
  test("renders event name by default", () => {
    render(<Event event={mockEvent} />);
    const eventNameElement = screen.getByText(mockEvent.eventName);
    expect(eventNameElement).toBeInTheDocument();
  });
  test('renders start date and end date when "Show Details" button is clicked', () => {
    render(<Event event={mockEvent} />);
    const showDetailsButton = screen.getByRole("button", {
      name: /show details/i,
    });
    fireEvent.click(showDetailsButton);
    const startDateElement = screen.getByText(mockEvent.startDate);
    const endDateElement = screen.getByText(mockEvent.endDate);
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();
  });
  test('hides start date and end date when "Hide Details" button is clicked', () => {
    render(<Event event={mockEvent} />);
    const showDetailsButton = screen.getByRole("button", {
      name: /show details/i,
    });
    fireEvent.click(showDetailsButton);
    const hideDetailsButton = screen.getByRole("button", {
      name: /hide details/i,
    });
    fireEvent.click(hideDetailsButton);
    const startDateElement = screen.queryByText(mockEvent.startDate);
    const endDateElement = screen.queryByText(mockEvent.endDate);
    expect(startDateElement).not.toBeInTheDocument();
    expect(endDateElement).not.toBeInTheDocument();
  });
  test('renders completed status with "Mark as Completed" button', () => {
    render(<Event event={mockEvent} />);
    const markAsCompletedButton = screen.getByRole("button", {
      name: /mark as completed/i,
    });
    expect(markAsCompletedButton).toBeInTheDocument();
  });
  test('updates completed status when "Mark as Completed" button is clicked', () => {
    render(<Event event={mockEvent} />);
    const markAsCompletedButton = screen.getByRole("button", {
      name: /mark as completed/i,
    });
    fireEvent.click(markAsCompletedButton);
    const completedStatus = screen.getByText(/completed/i);
    expect(completedStatus).toBeInTheDocument();
  });
});
