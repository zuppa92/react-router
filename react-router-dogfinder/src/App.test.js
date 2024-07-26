import Router from "react-router";
Router.useParams = jest.fn();
import DogDetails from './components/DogDetails'; // Correct import path
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders dog details', async () => {
  Router.useParams.mockReturnValue({ name: 'whiskey' });

  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

  render(
    <BrowserRouter>
      <DogDetails dogs={dogs} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Whiskey')).toBeInTheDocument();
  });
});