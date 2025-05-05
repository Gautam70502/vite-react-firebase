
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchChapters } from "../api/chaptersApi";
import { fetchCities } from "../api/citiesApi";
import { submitApplication } from "../api/submissionApi";
import { toast } from "@/hooks/use-toast";
import { Chapter, City, SubmissionResponse } from "../api/types";

export const useChaptersData = () => {
  return useQuery<Chapter[], Error>({
    queryKey: ['chapters'],
    queryFn: fetchChapters,
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCitiesData = () => {
  return useQuery<City[], Error>({
    queryKey: ['cities'],
    queryFn: fetchCities,
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useSubmitApplication = () => {
  return useMutation({
    mutationFn: submitApplication,
    onSuccess: (data: SubmissionResponse) => {
      if (data.success) {
        toast({
          title: "Form submitted",
          description: data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission failed",
          description: data.message || "There was an error submitting your application.",
        });
      }
    },
    onError: (error: Error) => {
      console.error("Application submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission error",
        description: error.message || "There was an error submitting your application. Please try again.",
      });
    }
  });
};
