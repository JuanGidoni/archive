import React from "react";
import Input from "./index";

export default {
  title: "Input",
  argTypes: {
    variant: {
      options: ['Light Mode', 'Dark Mode'],
      control: { type: 'radio' }
    },
    type: {
      options: ["button",
      "checkbox",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "image",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "reset",
      "search",
      "submit",
      "tel",
      "text",
      "time",
      "url",
      "week"],
      control: { type: "radio" },
    }
  },
  args: {
    className: "border-4 border-gray-400 border-solid rounded my-4 focus:border-blue-600 focus:outline-none p-1",
    placeholder: "Welcome",
    type: "text",
    disabled: false,
    name: "",
    idFor: "",
    required: true,
    reduxValue: "",
    min: "",
    max: "",
  },
  component: Input,
};

export const InputExample = (args) => {
    
const sendToStore = () => {};

  return <Input {...args} sendToStore={sendToStore} />
};
