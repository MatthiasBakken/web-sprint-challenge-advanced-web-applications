import React from 'react';
import { act, render, screen, waitFor } from "@testing-library/react";
import BubblePage from './BubblePage';


test( "Renders without errors", () => {
    render( <BubblePage /> );
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    act( () => {
        localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    })
    render( <BubblePage /> );
    await waitFor( () => expect( screen.queryAllByTestId( "circle" ) ).toHaveLength(11) );

});