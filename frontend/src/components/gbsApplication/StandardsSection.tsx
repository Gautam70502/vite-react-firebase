import React from "react";
import { FormFieldRadioGroup } from "../formFields";

const StandardsSection = () => {
  const yesNoOptions = [
    { value: "yes", label: "Yes, I am willing/able to make this commitment" },
    { value: "no", label: "No" },
  ];

  // Rating options from 1-10
  const ratingOptions = Array.from({ length: 10 }, (_, i) => {
    const value = String(i + 1);
    let label = value;
    if (i === 0) label = "1 (Minimal)";
    if (i === 9) label = "10 (Excellent)";
    return { value, label };
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-center">
        STANDARDS & EXPECTATIONS
      </h3>

      <div className="space-y-6">
        <FormFieldRadioGroup
          name="weeklyMeetings"
          label="Are you willing and able to make the commitment to arrive at our weekly meetings on time, stay throughout the 90 minutes, attend the Member Success Program training, and do you agree to abide by BNI's Member Policies, Guidelines, and Code of Ethics?"
          options={yesNoOptions}
        />

        <FormFieldRadioGroup
          name="substituteCommitment"
          label="Are you willing to find and send a qualified substitute if you are unable to attend a meeting?"
          options={yesNoOptions}
        />

        <FormFieldRadioGroup
          name="bringingReferrals"
          label="Are you willing/able to bring referrals and/or visitors to this chapter?"
          options={yesNoOptions}
        />

        <div>
          <p className="mb-2">
            Please rate your ability to provide quality Referrals and Visitors
            to the chapter
          </p>
          <div className="flex flex-wrap gap-4 mt-3">
            {ratingOptions.map((option) => (
              <FormFieldRadioGroup
                key={option.value}
                name="qualityRating"
                options={[option]}
              />
            ))}
          </div>
        </div>

        <FormFieldRadioGroup
          name="bniMemberBefore"
          label="Have you or your company ever been a member of a BNI chapter?"
          options={[
            {
              value: "yes",
              label: "Yes, I have/My company has been a BNI Member before",
            },
            { value: "no", label: "No" },
          ]}
        />

        <FormFieldRadioGroup
          name="otherNetworking"
          label="Do you belong to any other networking organizations?"
          options={[
            {
              value: "yes",
              label: "Yes, I belong to other networking organizations",
            },
            { value: "no", label: "No" },
          ]}
        />
      </div>
    </div>
  );
};

export default StandardsSection;
