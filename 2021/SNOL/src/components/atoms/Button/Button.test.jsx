import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Button render", async () => {
  const { findAllByRole } = render(<Button type={""} className={"bg-white"} />);
  // Assert
  const ButtonComponents = await findAllByRole("heading");
  expect(ButtonComponents[0]).toHaveLength(1);
});
