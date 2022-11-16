import React from "react";
import Select from "./index";

export default {
  title: "Select",
  argTypes: {
    variant: {
      options: ['Light Mode', 'Dark Mode'],
      control: { type: 'radio' }
    },
  },
  args: {
    className: "border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none",
    options: [{
      name: "Testing options",
      value: "testing"
    }]
  },
  component: Select,
};


export const SelectExample = (args) => (
  <Select {...args} />
);
