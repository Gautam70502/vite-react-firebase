import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import {
  useChaptersData,
  useCitiesData,
  useSubmitApplication,
} from "@/hooks/useGBSApplicationData";
import { AlertCircle } from "lucide-react";
import {
  ChapterCitySection,
  AboutYouSection,
  StandardsSection,
  ReferencesSection,
  AgreementSection,
} from "@/components/gbsApplication";

// Form validation schema
const formSchema = z.object({
  chapter: z.string().min(1, "Please select a chapter"),
  city: z.string().min(1, "Please select a city"),
  whoInvited: z.string().optional(),
  hearAboutBNI: z.string().min(1, "Please select how you heard about BNI"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  city_address: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  email: z.string().email("Invalid email address"),
  businessWebsite: z.string().url("Invalid URL").optional().or(z.literal("")),
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
  secondaryPhone: z.string().optional(),
  gstNumber: z.string().optional(),
  weeklyMeetings: z.enum(["yes", "no"]),
  substituteCommitment: z.enum(["yes", "no"]),
  bringingReferrals: z.enum(["yes", "no"]),
  qualityRating: z.string(),
  bniMemberBefore: z.enum(["yes", "no"]),
  otherNetworking: z.enum(["yes", "no"]),
  ref1FirstName: z.string().min(1, "Reference name is required"),
  ref1LastName: z.string().min(1, "Reference last name is required"),
  ref1BusinessName: z.string().min(1, "Reference business name is required"),
  ref1Phone: z.string().min(10, "Phone must be at least 10 digits"),
  ref1Email: z.string().email("Invalid email address"),
  ref1Relationship: z.string().min(1, "Relationship is required"),
  ref2FirstName: z.string().min(1, "Reference name is required"),
  ref2LastName: z.string().min(1, "Reference last name is required"),
  ref2BusinessName: z.string().min(1, "Reference business name is required"),
  ref2Phone: z.string().min(10, "Phone must be at least 10 digits"),
  ref2Email: z.string().email("Invalid email address"),
  ref2Relationship: z.string().min(1, "Relationship is required"),
  informContacts: z.boolean(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const GBSApplication = () => {
  // Query hooks for data fetching
  const {
    data: chapters,
    isLoading: isLoadingChapters,
    error: chaptersError,
  } = useChaptersData();

  const {
    data: cities,
    isLoading: isLoadingCities,
    error: citiesError,
  } = useCitiesData();

  const { mutate: submitForm, isPending: isSubmitting } =
    useSubmitApplication();

  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weeklyMeetings: "no",
      substituteCommitment: "no",
      bringingReferrals: "no",
      bniMemberBefore: "no",
      otherNetworking: "no",
      informContacts: false,
      agreeTerms: false,
    },
  });

  // Form submission handler
  function onSubmit(data: FormValues) {
    submitForm(data);
  }

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">GBS</h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            GBS Surat - Application Form
          </h2>
          <p className="text-gray-600">GBS Membership Application Form</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Chapter & City Section */}
            <ChapterCitySection
              chapters={chapters}
              cities={cities}
              isLoadingChapters={isLoadingChapters}
              isLoadingCities={isLoadingCities}
              chaptersError={
                chaptersError instanceof Error ? chaptersError : undefined
              }
              citiesError={
                citiesError instanceof Error ? citiesError : undefined
              }
            />

            {/* About You Section */}
            <AboutYouSection />

            {/* Standards & Expectations Section */}
            <StandardsSection />

            {/* Business References Section */}
            <ReferencesSection />

            {/* Agreement Section */}
            <AgreementSection />

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default GBSApplication;
