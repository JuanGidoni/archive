import React from "react";
import Label from "./index";

export default {
  title: "Label",
  argTypes: {
    variant: {
      options: ['Light Mode', 'Dark Mode'],
      control: { type: 'radio' }
    },
  },
  args: {
    className: "text-3xl text-indigo-600 font-medium w-full text-left",
    headText: "Welcome",
    required: true,
  },
  component: Label,
};


export const LabelExample = (args) => (
  <Label {...args} />
);
