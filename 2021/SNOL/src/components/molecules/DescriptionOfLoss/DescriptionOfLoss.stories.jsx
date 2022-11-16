import React from "react";
import DescriptionOfLoss from "./index";
import { Provider } from "react-redux";
import store from "../../../store";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/es/integration/react";

export default {
  title: "DescriptionOfLoss",
  args: {
    className: "bg-blue-500 p-1 text-white",
    data:[],
    completed: false,
  },
  component: DescriptionOfLoss,
};


export const DescriptionOfLossExample = (args) => {
    const changeFormValue = () => {};
  return <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
        <DescriptionOfLoss {...args} changeFormValue={changeFormValue} />
    </PersistGate>
  </Provider>

};