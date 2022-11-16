import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../../atoms/Button";
import DescriptionOfLoss from "../../molecules/DescriptionOfLoss";
import InitialParraphs from "../../molecules/InitialParraphs";
import PolicyDetails from "../../molecules/PolicyDetails";
import PolicyholderInformation from "../../molecules/PolicyholderInformation";
import PolicyHolderAddress from "../../molecules/PolicyHolderAddress";
import LossDetails from "../../molecules/LossDetails";
import LocationOfLoss from "../../molecules/LocationOfLoss";

const FormOne = ({ form, reportingAgents, cityStates }) => {
  const [completed, setCompleted] = useState(false);
  const [fields, setFields] = useState({});

  useEffect(() => {
    setFields(form);
  }, [form]);

  return (
    <form
      className="container m-auto form p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col w-6/12">
        <InitialParraphs />
        <PolicyDetails
          data={fields}
          completed={completed}
          setCompleted={setCompleted}
        />
        <PolicyholderInformation
          data={fields}
          completed={completed}
          setCompleted={setCompleted}
        />
        <PolicyHolderAddress
          data={fields}
          completed={completed}
          setCompleted={setCompleted}
        />
        <LossDetails
          data={fields}
          reportingAgents={reportingAgents}
          completed={completed}
          setCompleted={setCompleted}
        />
        <LocationOfLoss
          data={fields}
          cityStates={cityStates}
          completed={completed}
          setCompleted={setCompleted}
        />
        <DescriptionOfLoss
          data={fields}
          completed={completed}
          setCompleted={setCompleted}
        />
        <div className="flex flex-row w-4/12">
          <Button
            handleEvent={() => setCompleted(!completed)}
            text={`${completed ? "Edit all" : "Save all"}`}
            className="bg-gray-300 p-2 rounded shadow-sm"
          />
          <Button
            text="Send"
            handleEvent={() => console.log("Hago algo magico")}
            className="flex-1 bg-blue-800 text-white p-2 rounded ml-3"
          />
        </div>
      </div>
    </form>
  );
};

const mapState = (state) => ({
  formattedState: JSON.stringify(state, null, "\t"),
  form: state.form.fields,
  cityStates: state.form.cityStates,
  reportingAgents: state.form.reportingAgents,
});

const mapDispatch = (dispatch) => ({
  changeFilter: () => {
    dispatch.form.changeFilter();
  },
  changeInputValue: () => dispatch.form.changeInputValue,
  // changeInputValue: () => {
  //   dispatch.form.changeInputValue()
  // },
});

export default connect(mapState, mapDispatch)(FormOne);
