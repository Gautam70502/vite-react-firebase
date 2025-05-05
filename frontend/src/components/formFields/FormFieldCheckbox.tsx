
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface FormFieldCheckboxProps {
  name: string;
  label: React.ReactNode;
  isLoading?: boolean;
}

const FormFieldCheckbox = ({
  name,
  label,
  isLoading = false
}: FormFieldCheckboxProps) => {
  const form = useFormContext();
  
  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-4 w-full max-w-md" />
      </div>
    );
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              {label}
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormFieldCheckbox;
