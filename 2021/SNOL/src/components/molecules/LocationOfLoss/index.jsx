import { useEffect, useState } from "react";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Label from "../../atoms/Label";
import { enums as ENUM } from "../../../store/enums";
import { connect } from "react-redux";

const LocationOfLoss = ({ data, cityStates, changeFormValue, completed }) => {
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
    <div className="flex-auto flex-col xl:w-8/12 md:w-full sm:w-full mb-3">
      {fields.locationOfLoss ? (
        <>
          <Heading
            type="h2"
            className="text-3xl text-indigo-600 font-medium w-full text-left my-2"
            text="Location of Loss"
          />
          <div className="flex items-center justify-center">
            <Input
              type="checkbox"
              sendToStore={getImputValue}
              value={fields.locationOfLoss.checked || false}
              disabled={completed}
              name="locationOfLoss"
              // name={ENUM.LAST_NAME}
              className={`${
                completed
                  ? "completed"
                  : "border-4 border-gray-400 border-solid rounded my-3 mr-3 focus:border-blue-600 focus:outline-none"
              }`}
            />
            <Label
              idFor="locationOfLoss"
              headText="Same as policy adress"
              required={false}
              className="flex-1 inline-block"
            />
          </div>
          <Label
            idFor="locationAddressLine1"
            headText="Address Line 1"
            required={true}
            className="w-full inline-block"
          />
          <Input
            idFor="locationAddressLine1"
            type="text"
            sendToStore={getImputValue}
            value={
              fields.locationOfLoss.addressLine1 || fields.addressLine1 || ""
            }
            placeholder="Enter your address line"
            disabled={completed}
            name="locationAddressLine1"
            className={`${
              completed
                ? "completed"
                : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label
            idFor="locationAddressLine2"
            headText="Address Line 2"
            required={true}
            className="w-full inline-block"
          />
          <Input
            idFor="locationAddressLine2"
            type="text"
            sendToStore={getImputValue}
            value={
              fields.locationOfLoss.addressLine2 || fields.addressLine2 || ""
            }
            placeholder="Enter your address line"
            disabled={completed}
            name="locationAddressLine2"
            className={`${
              completed
                ? "completed"
                : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label
            idFor="locationCity"
            headText="City"
            required={true}
            className="w-full inline-block"
          />
          <Input
            idFor="locationCity"
            type="text"
            sendToStore={getImputValue}
            value={fields.locationOfLoss.city || fields.city || ""}
            placeholder="Enter your city"
            disabled={completed}
            name="locationCity"
            className={`${
              completed
                ? "completed"
                : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />
          <Label
            idFor="locationState"
            headText="State"
            required={true}
            className="w-full inline-block"
          />
          <Select
            idFor="locationState"
            sendToStore={getImputValue}
            options={cityStates}
            placeholder="Enter your state"
            disabled={completed}
            name="locationState"
            className={`${
              completed
                ? "completed"
                : "w-full border-4 border-gray-400 border-solid rounded my-2 focus:border-blue-600 focus:outline-none"
            }`}
            required={true}
          />{" "}
        </>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default LocationOfLoss;
