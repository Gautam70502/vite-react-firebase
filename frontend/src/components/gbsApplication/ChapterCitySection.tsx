import React from "react";
import { FormFieldInput, FormFieldSelect } from "../formFields";
import { Chapter, City } from "@/api/types";
import { AlertCircle } from "lucide-react";

interface ChapterCitySectionProps {
  chapters?: Chapter[];
  cities?: City[];
  isLoadingChapters: boolean;
  isLoadingCities: boolean;
  chaptersError?: Error;
  citiesError?: Error;
}

const ChapterCitySection = ({
  chapters = [],
  cities = [],
  isLoadingChapters,
  isLoadingCities,
  chaptersError,
  citiesError,
}: ChapterCitySectionProps) => {
  // Helper to render error message
  const renderError = (error?: Error) => {
    if (!error) return null;

    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center mb-4">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span>
          {error.message || "Failed to load data. Please try again later."}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {chaptersError && renderError(chaptersError)}
      {citiesError && renderError(citiesError)}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormFieldSelect
          name="chapter"
          label="Chapter"
          placeholder="Select Chapter"
          options={chapters}
          isLoading={isLoadingChapters}
        />

        <FormFieldSelect
          name="city"
          label="City"
          placeholder="Select City"
          options={cities}
          isLoading={isLoadingCities}
        />

        <FormFieldInput
          name="whoInvited"
          label="Who Invited You to This Chapter?"
          placeholder="Who Invited"
        />

        <FormFieldSelect
          name="hearAboutBNI"
          label="How did you first hear about BNI?"
          placeholder="Select an option"
          options={[
            { id: "friend", name: "Friend or Family Member" },
            { id: "internet", name: "Internet" },
            { id: "event", name: "Networking Event" },
            { id: "other", name: "Other" },
          ]}
        />
      </div>
    </div>
  );
};

export default ChapterCitySection;
