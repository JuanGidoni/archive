import Parragraph from "../../atoms/Parragraph";

const InitialParraphs = () => {
  return (
    <div className="flex-auto m-auto flex-col w-full my-2">
      <Parragraph
        className="bg-snol text-white p-1"
        text="If submitting a claim for a loss that occurred on or after 6/1/2021 AND is in Massachusetts, Connecticut, New Jersey, or Rhode Island. DO NOT submit your claim here."
      />
      <Parragraph
        className="bg-snol text-white py-3"
        text="Please contact (888) 475-0222 and a representative will be able to assist you."
      />
      <Parragraph
        className="bg-white text-black py-3"
        text="You may report your claim by phone by calling 1-888-CLM-DEPT (888-256-3378)."
      />
      <Parragraph
        className="bg-white text-black py-3"
        text="Or, easily file your claim online with our two-step claim submission tool. You will be able to submit detailed photos and videos with your claim."
      />
      <Parragraph
        className="bg-white text-black py-3"
        text="Please fully complete the claim form below to start the process online. Missing information will delay your claim."
      />
      <Parragraph
        className="bg-white text-black py-3"
        text="We recommend you provide us both an email and a phone number to maximize the number of ways we can reach you during the claims process. Providing a mobile number will allow text alerts. Message and data rates may apply."
      />
      <Parragraph
        className="bg-white text-black"
        text="All fields marked * are mandatory."
      />
    </div>
  );
};

export default InitialParraphs;
