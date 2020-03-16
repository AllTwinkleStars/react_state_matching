
1) Instantiate the state @instantiate-the-state

In `src/components/App/App.js`, instantiate the components `state`.
Set the property `tiles` on state, it's value should be an empty `Array`. This will serve as our collection of 
tiles, holding cofiguration information, as well as other information regarding the current state of the individual 
tile. Set the property `numTiles` on state, it's default value should be `36`. This is the number of tiles we want 
in our grid. We will have half this amount of unique pairs of tiles eventually. Set the property `playing` on 
state, it's value should be `false`. The `playing` property is pretty self explanatory, it will be `true` if a 
game is in session and `false` otherwise. Set the property `previousTile` on state, it's value should be `null`. 
This will hold the index in our tiles array of the previously selected tile. This will come in handy when we are 
trying to figure out if we have a matched pair. Set the property `toBeCleared` on state, it's value should be 
`null`. In this game you will get to reveal two tiles at a time, if you click a third tile it will revert the two 
previously selecte tiles back to their original state. This value will keep track of the tiles we need to clear 
inbetween guesses.

2) Pass state as props to the OptionsPanel @pass-state-to-options-panel

In the `render()` method of `App`, pass the prop `playing` to the `<OptionsPanel />`.
The value of the `playing` prop should be the `playing` property we set on `state`.
Pass the prop `numTiles` to the `<OptionsPanel />`. The value of the `numTiles` prop
should be the `numTiles` property we set on `state` as well.

3) Pass state as props to the Board @pass-state-to-the-board

Pass the prop `numTiles` to the `<Board />`. It's value should be the `numTiles` property
from the state. Also pass the prop `tiles` to the `<Board />`. It's value should be the `tiles`
property from the state.

4) Pass props to the TileSelector @pass-props-to-tile-selector

In `src/components/OptionsPanel/OptionsPanel.js`, define a props parameter for the `OptionsPanel` functional component.
Pass the `numTiles` prop on to `<TileSelector />`.

5) Pass props to the Button @pass-props-to-button

Pass the `playing` prop on to `<Button />`

6) Render the numTiles prop as a child @render-num-tiles

In `src/components/TileSelector/TileSelector.js`, define a props parameter for the `TileSelctor` functional component.
Inside the `<div>` with a class name of `tileSelectorDropDown`, before the child `dropDown`, pass the 
`numTiles` prop as a child to be rendered.

7) Create the startGame method @start-game-method
In `src/components/App/App.js`, create a method on the `App` component called `startGame()`. Set `numTiles` as a
parameter. This method will, as suggested by the name, start a new game. Inside the body of the method, make a 
call to `this.setState()` passing in an object literal as the only argument. When a new game is started we want to
set the `playing` value in state to `true`. We will also want to clear out the `previousTile`, and `toBeCleared` 
values by setting them to `null`. We will also want to create a new array of tile objects. Using a destructured 
import, import `createTiles` from `'../../misc/utils'`. Back down in the object literal we passed to `setState()`,
 assign a call of the `createTiles()` function to the property `tiles`. The `createTiles()` function will build up
 an array of tile objects. These are just plain Javascript objects at the moment but in the future we will turn each
 one into a react component. Since we will be matching tiles, it will create a pair of tiles. Each pair will be 
unique. We will later be able to tell if clicked tiles match by compairing their `id` which is essentially a pair 
id. The `createTiles()` function take two arguments. The first is `numTiles`, pass in the `numTiles` value from our 
state. This will inform the function as to how many tiles it needs to create. The second argument is a callback 
function that will be attached to each tile in the array. For now we aren't going to pass anything in, but do note 
that once we create our onClick event handler, we will come back and pass it in.

8) Pass props from the board to tiles @pass-board-props-to-tiles

In `src/components/Board/Board.js`, we will create an array of `<Tile />` components from our array of tile 
objects we created in the last task. We will then render them as an array of children within the board. At the
top of the file, import the `Tile` component from `../Tile`. Add a props parameter to the `Board` functional 
component. Either as a varible in the body of the function, or directly inside the `Board` `<div>`, make a call 
to the `map()` method of the `tiles` prop. Pass an anonymous function that takes `tile` as a paramter and returns 
an instantiation of the `<Tile />` component to `map()`. Next we will need to pass on the `tile` object as props
to the `<Tile />` component. Using the object spread syntax, spread the tile object in as props in one shot. If 
you created the array of tile components as a variable you should now pass them to the `Board` `<div>` as children.

9) Dynamically set the color of each tile @dynamic-tile-color

In `src/components/Tile/Tiles.js`, set a prop parameter on the `Tile` functional component. At this point we now 
have access to each tile's configuration object as props. We will need to set each tile to have a different color 
based off of it's color prop. Do note that since we are working with pairs of tiles we will have two tiles per color. 
Inside the body of the `Tile` function, declare a variable to hold our dynamic color. Assign to this variable, a 
ternary statement. The condition for the truthy case will be if either the `selected` value from props is `true`, 
or the `matched` value from props is true. If our condition is met, it should evaluate to an object literal with a 
key of `backgroundColor` and a value which is the `color` prop. If our condition isn't met, evaluate the expression 
to `null`. On the `tile` `<div>`, add a `style` prop. Pass our dynamic color into this prop. If we meet our 
condition the tile color will be assigned from the tile's config object and can be thought of as the face of the 
tile. If the value is null the the tile's color will be set to it's default. You can think of this as representing 
the back of the tile.

10) Conditionally render the svg @conditionally-render-svg

Just like with the dynamic color, if this tile has been selected or is part of a matched pair, we want to display 
the svg from props. Inside the `tile` `<div>`, create a ternary expression. Our condition should check if either the 
`selected` or `matched` prop is true. If it is instantiate the `<svg />` component from the `svg` prop. Otherwise 
have it evaluate to null. 

11) Pass the start game method to OptionsPanel @pass-start-game-to-options

In `src/components/App/App.js`, pass the `startGame` method to the `<OptionsPanel />`.

12) Pass the start game method to the button @pass-start-game-to-button

In `src/components/OptionsPanel/OptionsPanel.js`, pass the `startGame` method from props to the 
`<Button />` component.

13) Register startGame as onClick @register-start-game-on-click

In `src/components/Button/Button.js`, add a paramater to the `Button` function to represent props. Add an `onClick` 
prop to the `<button>` element. Pass the `startGame` prop to the `onClick` prop.

14) Conditionally render text @conditionally-render-text

If the user is playing a game, we want the text of the button to change from `start` to `reset`. Create a ternary 
expression in the `button` element. If the `playing` value from props is `true`, evaluate the expression to 
`'reset'`. Otherwise evaluate the ternary expression to be `'start'`.



