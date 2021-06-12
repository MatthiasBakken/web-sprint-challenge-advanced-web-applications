import React from 'react';
import { queryByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';


const emptyColor = {
  color: "",
  code: {
    hex: "",
  },
  id: 0,
};
  
const whiteColor = {
  color: "white",
  code: {
    hex: "#fff",
  },
  id: 0,
};

test( "Renders without errors with blank color passed into component", () => {
  render( <Color setEditColor={() => console.log("setEdit")} color={emptyColor} toggleEdit={false} deleteColor={() => console.log("color deleted")} /> );
});
  
test( "Renders the color passed into component", async () => {
  render( <Color setEditColor={() => console.log( "setEdit" )} color={whiteColor} toggleEdit={false} deleteColor={() => console.log( "color deleted" )} /> );
  await waitFor( () => expect( screen.queryByTestId( "color" ) ).toBeVisible() );
});

test( "Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  render( <Color setEditColor={() => console.log( "setEdit" )} color={whiteColor} toggleEdit={(bool) => console.log(bool)} deleteColor={() => console.log("clicked")} /> );
  const deleteButton = screen.getByTestId( "delete" );
  userEvent.click( deleteButton );
  
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});