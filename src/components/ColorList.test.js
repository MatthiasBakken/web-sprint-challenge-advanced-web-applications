import React from 'react';
import { queryByTestId, render, screen, waitFor} from "@testing-library/react";
import ColorList from './ColorList';


let colors = [
  {color: "aliceblue", code: {hex: "#f0f8ff",}, id: 1,},
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 5,
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 6,
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99",
    },
    id: 7,
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99",
    },
    id: 8,
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd",
    },
    id: 9,
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca",
    },
    id: 10,
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2",
    },
    id: 11,
  },
];

test( "Renders an empty list of colors without errors", () => {
  render( <ColorList colors={[]} editing={false} toggleEdit={false} saveEdit={() => console.log("saved")} deleteColor={() => console.log("color deleted")} /> );
});

test( "Renders a list of colors without errors", () => {
  render( <ColorList colors={colors} editing={false} toggleEdit={false} saveEdit={() => console.log( "saved" )} deleteColor={() => console.log( "color deleted" )} /> );
  expect( screen.queryAllByTestId( "color" ) ).toHaveLength( 11 );
});

test( "Renders the EditForm when editing = true and does not render EditForm when editing = false", async () => {
  const { rerender } = render( <ColorList colors={colors} editing={false} toggleEdit={false} saveEdit={() => console.log( "saved" )} deleteColor={() => console.log( "color deleted" )} /> );
  await waitFor( () => render( <ColorList colors={colors} editing={false} toggleEdit={false} saveEdit={() => console.log( "saved" )} deleteColor={() => console.log( "color deleted" )} /> ) );
  expect( screen.queryByTestId( "editMenu" ) ).toBeNull();
  await waitFor( () => rerender( <ColorList colors={colors} editing={true} toggleEdit={true} saveEdit={() => console.log( "saved" )} deleteColor={() => console.log( "color deleted" )} /> ) );
  expect( screen.queryByTestId( "editMenu" ) ).toBeVisible();
});
