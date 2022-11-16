import React from "react";
import Parragraph from "./index";

export default {
  title: "Parragraph",
  argTypes: {
    variant: {
      options: ['Light Mode', 'Dark Mode'],
      control: { type: 'radio' }
    },
  },
  args: {
    className: "bg-blue-500 p-1 text-white",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit a est quibusdam illum magnam?"
  },
  component: Parragraph,
};


export const ParragraphExample = (args) => (
  <Parragraph {...args} />
);
