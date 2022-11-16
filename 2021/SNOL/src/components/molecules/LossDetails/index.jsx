import { useEffect, useState } from "react";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import Parragraph from "../../atoms/Parragraph";
import Select from "../../atoms/Select";
import { connect } from "react-redux";
import { enums as ENUM } from "../../../store/enums";

const LossDetails = ({ data, changeFormValue, reportingAgents, completed }) => {
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
        text="Loss Details"
      />
      <Label
        idFor={ENUM.DATE_OF_LOSS}
        headText="Date of Loss"
        required={true}
        className="w-full inline-block"
      />
      <Input
        idFor={ENUM.DATE_OF_LOSS}
        type="date"
        sendToStore={getImputValue}
        value={fields.dateOfLoss || ""}
        disabled={completed}
        name={ENUM.DATE_OF_LOSS}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
        }`}
        required={true}
      />
      <Label
        name={ENUM.TIME_OF_LOSS}
        headText="Time of Loss"
        required={true}
        className="w-full inline-block"
      />
      <div className="flex">
        <Input
          name={ENUM.TIME_OF_LOSS}
          type="text"
          sendToStore={getImputValue}
          value={10 || ""}
          disabled={completed}
          className={`${
            completed
              ? "completed"
              : "w-12 border-4 border-gray-400 border-solid rounded my-2 mr-1 focus:border-blue-600 focus:outline-none"
          }`}
          required={true}
        />
        <p className="text-3xl">:</p>
        <Input
          idFor="timeOfLoss2"
          type="text"
          sendToStore={getImputValue}
          value={10 || ""}
          disabled={completed}
          name="timeOfLoss2"
          className={`${
            completed
              ? "completed"
              : "w-12 border-4 border-gray-400 border-solid rounded my-2 ml-1 focus:border-blue-600 focus:outline-none"
          }`}
          required={true}
        />
        <div className="flex items-center justify-center">
          <Input
            idFor="timeOfLoss3"
            type="radio"
            sendToStore={getImputValue}
            value={true}
            disabled={completed}
            name="timeOfLoss34"
            className={`${
              completed
                ? "completed"
                : "w-12 border-4 border-gray-400 border-solid rounded my-2 ml-1 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label idFor="timeOfLoss3" headText="am" className="" />
          <Input
            idFor="timeOfLoss4"
            type="radio"
            sendToStore={getImputValue}
            value={!true}
            disabled={completed}
            name="timeOfLoss34"
            className={`${
              completed
                ? "completed"
                : "w-12 border-4 border-gray-400 border-solid rounded my-2 ml-1 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label idFor="timeOfLoss4" headText="pm" className="" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Label
          idFor={ENUM.LOSS_REPORTER}
          headText="Who is reporting the loss?"
          required={true}
          className="flex-1 inline-block text-xl"
        />
        <Select
          idFor={ENUM.LOSS_REPORTER}
          sendToStore={getImputValue}
          options={reportingAgents}
          disabled={completed}
          name={ENUM.LOSS_REPORTER}
          className={`${
            completed
              ? "completed"
              : "w-6/12 border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
          }`}
          required={true}
        />
      </div>
      <Parragraph
        text="Contact information for person reporting the loss"
        className="flex-1 inline-block text-xl my-2"
      />
      <Parragraph
        text="Alterantive Contact information for Insured"
        className="flex-1 inline-block text-xl my-2"
      />
      <div className="flex items-center justify-center mb-5">
        <Parragraph
          text="Is a Public Adjuster or Attorney assisting you with this claim?"
          className="flex-1 inline-block text-xl my-2"
        />
        <div className="flex items-center justify-center">
          <Input
            idFor="acceptYes"
            type="radio"
            sendToStore={getImputValue}
            value={fields.publicAjuster}
            disabled={completed}
            name="acceptYesNo"
            className={`${
              completed
                ? "completed"
                : "w-12 border-4 border-gray-400 border-solid rounded my-2 ml-1 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label idFor="acceptYesNo" headText="Yes" className="" />
          <Input
            idFor="acceptNo"
            type="radio"
            sendToStore={getImputValue}
            value={!fields.publicAjuster}
            disabled={completed}
            name="acceptYesNo"
            className={`${
              completed
                ? "completed"
                : "w-12 border-4 border-gray-400 border-solid rounded my-2 ml-1 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label idFor="acceptYesNo" headText="No" className="" />
        </div>
      </div>
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

export default connect(null, mapDispatch)(LossDetails);
