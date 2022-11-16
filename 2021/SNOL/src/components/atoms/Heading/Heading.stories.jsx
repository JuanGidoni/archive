import React from "react";
import Heading from "./index";

export default {
  title: "Heading",
  argTypes: {
    variant: {
      options: ["Light Mode", "Dark Mode"],
      control: { type: "radio" },
    },
    type: {
      options: ["h1", "h2", "h3"],
      control: { type: "radio" },
    }
  },
  args: {
    className: "text-3xl text-indigo-600 font-medium w-full text-left",
    text: "Welcome",
  },
  component: Heading,
};

export const HeadingExample = (args) => <Heading {...args} />;
