import React from "react";
import TextArea from "./index";

export default {
  title: "TextArea",
  argTypes: {
    variant: {
      options: ['Light Mode', 'Dark Mode'],
      control: { type: 'radio' }
    },
  },
  args: {
    className: "border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none p-2",
    idFor: "id",
    placeholder: "Insert a message",
    disabled: false,
  },
  component: TextArea,
};


export const TextAreaExample = (args) => (
  <TextArea {...args} />
);