import { useEffect, useState } from "react";
import Label from "../../atoms/Label";
import TextArea from "../../atoms/TextArea";
import { connect } from "react-redux";
import { enums as ENUM } from "../../../store/enums";

const DescriptionOfLoss = ({ data, changeFormValue, completed, className }) => {

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
    <div className={className ? className : "flex-auto flex-col xl:w-8/12 md:w-full sm:w-full"}>
      <Label
        className="text-3xl text-indigo-600 font-medium w-full text-left"
        idFor={ENUM.LOSS_DESCRIPTION}
        headText="Description Of Loss"
        required={true}
      />
      <TextArea
        idFor={ENUM.LOSS_DESCRIPTION}
        sendToStore={getImputValue}
        data={fields.descriptionOfLoss || ""}
        placeholder="Enter your description of loss"
        disabled={completed}
        name={ENUM.LOSS_DESCRIPTION}
        className={`${
          completed
            ? "completed"
            : "w-full border-4 h-72 border-gray-400 border-solid rounded my-4 focus:border-blue-600 focus:outline-none"
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

export default connect(null, mapDispatch)(DescriptionOfLoss);
