
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface RadioOption {
  value: string;
  label: string;
}

interface FormFieldRadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  isLoading?: boolean;
}

const FormFieldRadioGroup = ({
  name,
  label,
  options,
  isLoading = false
}: FormFieldRadioGroupProps) => {
  const form = useFormContext();
  
  if (isLoading) {
    return (
      <div className="space-y-2">
        {label && <Skeleton className="h-4 w-full max-w-md" />}
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-6 w-full max-w-md" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {label && <div className="mb-2">{label}</div>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldRadioGroup;
