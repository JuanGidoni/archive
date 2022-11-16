import { useEffect, useState } from "react";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { connect } from "react-redux";
import { enums as ENUM } from "../../../store/enums";

const PolicyDetails = ({ data, changeFormValue, completed }) => {
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
    <div className="flex-auto flex-col w-8/12">
      <Heading
        type="h2"
        className="text-3xl text-indigo-600 font-medium w-full text-left my-2"
        text="Policy Details"
      />
      <Label
        className="w-full inline-block"
        idFor="policyDetails"
        headText="Policy number"
        required={true}
      />
      <Input
        idFor="policyDetails"
        type="text"
        sendToStore={getImputValue}
        reduxValue={fields.policyNumber || ""}
        placeholder="Enter your policy number"
        disabled={completed}
        name={ENUM.POLICY_NUMBER}
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

const mapState = (state) => ({
  formattedState: JSON.stringify(state, null, "\t"),
  form: state.form.fields,
});

const mapDispatch = (dispatch) => ({
  changeFilter: () => {
    dispatch.form.changeFilter();
  },
  changeFormValue: (payload) => {
    dispatch.form.changeFormValue(payload);
  },
});

export default connect(mapState, mapDispatch)(PolicyDetails);
