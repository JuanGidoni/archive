import { useEffect, useState } from "react";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Label from "../../atoms/Label";
import Parragraph from "../../atoms/Parragraph";
import { connect } from "react-redux";
import { enums as ENUM } from "../../../store/enums";

const PolicyHolderAddress = ({ data, changeFormValue, completed }) => {
  const [fields, setFields] = useState({});

  useEffect(() => {
    setFields(data);
  }, [data]);

  const getImputValue = async (value) => {
    setFields({
      ...fields,
      [value.name]: value.value,
    });
    changeFormValue({
      ...fields,
      [value.name]: value.value,
    });
    return value;
  };

  const cityStates = [
    {
      value: "ar",
      name: "Argentina",
    },
    {
      value: "cl",
      name: "Chile",
    },
    {
      value: "usa",
      name: "United States of America",
    },
    {
      value: "ur",
      name: "Uruguay",
    },
  ];

  return (
    <div className="flex-auto flex-col xl:w-8/12 md:w-full sm:w-full">
      <Heading
        type="h2"
        className="text-3xl text-indigo-600 font-medium w-full text-left my-2"
        text="Policyholder Address"
      />
      <Label
        idFor={ENUM.ADDRESS_LINE_1}
        headText="Address Line 1"
        required={true}
        className="w-full inline-block"
      />
      <Input
        idFor={ENUM.ADDRESS_LINE_1}
        type="text"
        sendToStore={getImputValue}
        value={fields.addressLine1 || ""}
        placeholder="Enter your address line"
        disabled={completed}
        name={ENUM.ADDRESS_LINE_1}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Label
        idFor={ENUM.ADDRESS_LINE_2}
        headText="Address Line 2"
        required={true}
        className="w-full inline-block"
      />
      <Input
        idFor={ENUM.ADDRESS_LINE_2}
        type="text"
        sendToStore={getImputValue}
        value={fields.addressLine2 || ""}
        placeholder="Enter your address line"
        disabled={completed}
        name={ENUM.ADDRESS_LINE_2}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Label
        idFor={ENUM.CITY}
        headText="City"
        required={true}
        className="w-full inline-block"
      />
      <Input
        idFor={ENUM.CITY}
        type="text"
        sendToStore={getImputValue}
        value={fields.city || ""}
        placeholder="Enter your city"
        disabled={completed}
        name={ENUM.CITY}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />

      <Label
        idFor={ENUM.STATE}
        headText="State"
        required={true}
        className="w-full inline-block"
      />
      <Select
        idFor={ENUM.STATE}
        sendToStore={getImputValue}
        options={cityStates}
        placeholder="Enter your state"
        disabled={completed}
        name={ENUM.STATE}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Parragraph
        text="Important – for losses in MA, CT, NJ, or RI which occur on/after June 1, 2021, please call (888) 475-0222 to report your claim"
        className="bg-blue-800 text-white p-3 my-3"
      />
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  changeFilter: () => {
    dispatch.form.changeFilter();
  },
  changeFormValue: (payload) => {
    dispatch.form.changeFormValue(payload);
  },
});

export default connect(null, mapDispatch)(PolicyHolderAddress);
