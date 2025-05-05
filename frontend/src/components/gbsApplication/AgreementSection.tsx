import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormFieldCheckbox } from "../formFields";

const AgreementSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Contact Information</h3>

      <FormFieldCheckbox
        name="informContacts"
        label="I have/will inform the above contacts that I am sharing their information with BNI for the purpose of references"
      />

      <h3 className="text-lg font-medium mt-6 mb-4">Agreement</h3>

      <FormFieldCheckbox
        name="agreeTerms"
        label="I Agree to the Terms and Conditions & Privacy Policy"
      />
    </div>
  );
};

export default AgreementSection;
