import React from "react";
import { FormFieldInput } from "../formFields";

const ReferencesSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-center">
        BUSINESS REFERENCES
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Business references are people who have experience with your business:
        customers, referral partners, vendors, etc.
        <br />
        This information will be used only for contacting references, not for
        any promotional purposes
      </p>

      <h4 className="text-lg font-medium mb-4">Reference #1</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <FormFieldInput
          name="ref1FirstName"
          label="First Name"
          placeholder="First name"
        />

        <FormFieldInput
          name="ref1LastName"
          label="Last Name"
          placeholder="Last name"
        />

        <FormFieldInput
          name="ref1BusinessName"
          label="Business Name"
          placeholder="Business name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormFieldInput name="ref1Phone" label="Phone" placeholder="Phone" />

        <FormFieldInput
          name="ref1Email"
          label="Email"
          placeholder="user@email.com"
          type="email"
        />
      </div>

      <div className="mb-8">
        <FormFieldInput
          name="ref1Relationship"
          label="Your Business Relationship"
          placeholder="Your Business Relationship"
        />
      </div>

      <h4 className="text-lg font-medium mb-4">Reference #2</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <FormFieldInput
          name="ref2FirstName"
          label="First Name"
          placeholder="First name"
        />

        <FormFieldInput
          name="ref2LastName"
          label="Last Name"
          placeholder="Last name"
        />

        <FormFieldInput
          name="ref2BusinessName"
          label="Business Name"
          placeholder="Business name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormFieldInput name="ref2Phone" label="Phone" placeholder="Phone" />

        <FormFieldInput
          name="ref2Email"
          label="Email"
          placeholder="user@email.com"
          type="email"
        />
      </div>

      <div>
        <FormFieldInput
          name="ref2Relationship"
          label="Your Business Relationship"
          placeholder="Your Business Relationship"
        />
      </div>
    </div>
  );
};

export default ReferencesSection;
