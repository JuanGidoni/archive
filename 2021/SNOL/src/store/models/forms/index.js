const initialState = {
  fields: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneType: "",
    addressline1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    locationOfLoss: {
      checked: false,
      addressline1: "",
      addressLine2: "",
      city: "",
      state: "",
    },
    descriptionOfLoss: "",
    dateOfLoss: "",
    timeOfLoss: {
      hours: "",
      minutes: "",
      meridian: false,
    },
    lossReporter: "",
  },
  // const initialState = {
  //   fields: {
  //     policyNumber: "",
  //     firstName: "",
  //     lastName: "",
  //     phoneType: "",
  //     phoneNumber: "",
  //     email: "",
  //     addressLine1: "",
  //     addressLine2: "",
  //     city: "",
  //     state: "",
  //     zip: "",
  //     dateOfLoss: "",
  //     timeOfLoss: "",
  //     lossReporter: "",
  //     lossLocation1: "",
  //     lossLocation2: "",
  //     lossCity: "",
  //     lossState: "",
  //     lossZip: "",
  //     lossDescription: "",
  //   },
  cityStates: [
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
  ],
  reportingAgents: [
    {
      value: "agent",
      name: "Agent",
    },
    {
      value: "insured",
      name: "Insured",
    },
  ],
};

export const form = {
  state: initialState,
  reducers: {
    changeFilter: (form) => {
      return { ...form, filter: !form.filter };
    },
    changeFormValue: (form, fields) => {
      return { ...form, fields };
    },
  },
};

export default form;
