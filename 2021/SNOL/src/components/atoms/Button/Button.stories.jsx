import React from "react";
import Button from "./index";

export default {
  title: "Button",
  argTypes: {
    className: {
      options: ['flex-1 bg-blue-800 text-white p-2 rounded ml-3', 'bg-gray-300 p-2 rounded shadow-sm'],
      control: { type: 'radio' }
    },
  },
  args: {
    text: "Send"
  },
  component: Button,
};


export const ButtonExample = (args) => (
  <Button {...args} />
);

