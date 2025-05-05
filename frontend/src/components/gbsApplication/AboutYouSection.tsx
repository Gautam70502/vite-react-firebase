import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormFieldInput } from "../formFields";

const AboutYouSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-center">About You</h3>
      <p className="text-center text-gray-600 mb-6">
        Please fill exactly as in the Expression of Interest Form
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormFieldInput
          name="firstName"
          label="First Name"
          placeholder="First name"
        />

        <FormFieldInput
          name="lastName"
          label="Last Name"
          placeholder="Last name"
        />

        <FormFieldInput
          name="companyName"
          label="Company Name"
          placeholder="Company name"
        />
      </div>

      <div className="mt-4">
        <FormFieldInput
          name="industry"
          label="What is your Industry?"
          placeholder="e.g. Manufacturing, Hospitality, Healthcare"
        />
      </div>

      <h4 className="text-lg font-medium mt-6 mb-4">Business Address</h4>
      <div className="grid grid-cols-1 gap-4">
        <FormFieldInput name="addressLine1" placeholder="Address Line 1" />

        <FormFieldInput name="addressLine2" placeholder="Address Line 2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <FormFieldInput name="city_address" placeholder="City" />

        <FormFieldInput
          name="stateProvince"
          placeholder="State/Province/Region"
        />

        <FormFieldInput name="postalCode" placeholder="Postal / Zip Code" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <FormFieldInput
          name="email"
          label="Email"
          placeholder="user@email.com"
          type="email"
        />

        <FormFieldInput
          name="businessWebsite"
          label="Business Website"
          placeholder="www.website.com"
        />

        <FormFieldInput
          name="mobileNumber"
          label="Mobile Number"
          placeholder="10 Digit Only"
        />

        <FormFieldInput
          name="secondaryPhone"
          label="Secondary Phone"
          placeholder="10 Digit Only"
        />
      </div>

      <div className="mt-4">
        <FormFieldInput
          name="gstNumber"
          label="GST Number"
          placeholder="GST Number"
        />
      </div>
    </div>
  );
};

export default AboutYouSection;
