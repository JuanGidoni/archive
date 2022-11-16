import { useEffect, useState } from "react";
import Input from "../../atoms/Input";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import Select from "../../atoms/Select";
import { enums as ENUM } from "../../../store/enums";
import { connect } from "react-redux";

const PolicyholderInformation = ({ data, changeFormValue, completed }) => {
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

  return (
    <div className="flex-auto flex-col xl:w-8/12 md:w-full sm:w-full">
      <Heading
        type="h2"
        className="text-3xl text-indigo-600 font-medium w-full text-left my-2"
        text="Policyholder Information"
      />
      <Label
        className="w-full inline-block"
        idFor={ENUM.FIRST_NAME}
        headText="First Name"
        required={true}
      />
      <Input
        idFor="firstName"
        type="text"
        sendToStore={getImputValue}
        value={fields.firstName || ""}
        placeholder="Enter your first name"
        disabled={completed}
        name={ENUM.FIRST_NAME}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Label
        className="w-full inline-block"
        idFor={ENUM.LAST_NAME}
        headText="Last Name"
        required={true}
      />
      <Input
        idFor={ENUM.LAST_NAME}
        type="text"
        sendToStore={getImputValue}
        value={fields.lastName || ""}
        placeholder="Enter your last name"
        disabled={completed}
        name={ENUM.LAST_NAME}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Label
        className="w-full inline-block"
        idFor={ENUM.PHONE_NUMBER}
        headText="Best Contact Number"
        required={true}
      />
      <div className="flex">
        <Select
          sendToStore={getImputValue}
          options={[
            {
              value: "mobile",
              name: "Mobile",
            },
            {
              value: "landline",
              name: "Landline",
            },
          ]}
          placeholder="Enter your mobile"
          disabled={completed}
          name="mobile"
          className={`${
            completed
              ? "completed"
              : "w-3/12 border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
          }`}
        />
        <Input
          idFor={ENUM.PHONE_NUMBER}
          type="text"
          sendToStore={getImputValue}
          value={fields.phone || ""}
          placeholder="Enter your phone"
          disabled={completed}
          name={ENUM.PHONE_NUMBER}
          className={`${
            completed
              ? "completed"
              : "flex-1 border-4 border-gray-400 border-solid rounded my-2 ml-5 focus:border-blue-600 focus:outline-none"
          }`}
          required={true}
        />
      </div>
      <Label
        className="w-full inline-block"
        idFor={ENUM.EMAIL}
        headText="Email Address"
        required={true}
      />
      <Input
        idFor={ENUM.EMAIL}
        type="email"
        sendToStore={getImputValue}
        value={fields.email || ""}
        placeholder="Enter your email"
        disabled={completed}
        name={ENUM.EMAIL}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
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

export default connect(null, mapDispatch)(PolicyholderInformation);
