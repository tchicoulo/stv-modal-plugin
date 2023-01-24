# stv-modal-plugin

This is a modal library that you can use with an simple import directly with npm.

If you need, you can custom the background, the container of the modal and the text.

## 1. How to use it

To use it, it's simple, follow just the instructions below

## 1.1 Install the library on the root of your Project

`npm install --save stv-modal-plugin`

### 1.2 Import the modal

`import ModalDialog from "./modal-stv-plugin";`

### 1.3 Then use the component

Replace "Your text" by the text that you want

`<ModalDialog name="Your Text" />`

## 2. Add style to custom your modal component

You've the choice to custom three differents part of this modal

This is an example of what you can do, if you need to add/change some style and custom your Modal

`background` => To change the position of the modal container, the color of the background, the opacity...

`containerModal` => To change the size, border... of the modal container.

`styleText` => to change the size, color of the text...

### 2.1 How to use it

It's simple, you just need to copy the variables below and add some style css properties inside
You've the choice to choose 1,2 or 3 of them.

`let background = {};`

`let containerModal = {};`

`let styleText = {};`


Example:

let background: {
  justifyContent: "left",
  backgroundColor: "red",
}

let containerModal: {
  justifyContent: "left",
  marginLeft: "50px",
  paddingLeft: "50px",
}

let styleText = {
  color: "green",
  textDecoration: "underline",
};

### 2.2 Apply your custom style that you need to the props modal component.

Below, there is an example if you want to change properties of theses 3 custom part.

`<ModalDialog name="Your Text" background={background} containerModal={containerModal} styleText={styleText}/>`

You can use 1 or 2, 3 of them too, as you need.

## 3 Add event or do something when you click to the cross or to the background area of you library

it's an event onClick, you just need to add the "handleClick" on props.

then, replace "do something" like in the example below by what do you want you need to do for your project.


Example:

`<ModalDialog text="Employee Created!" handleClick={() => "Do something"} background={background} containerModal={containerModal}/>`


That's it.

Enjoy!
