
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface FormFieldInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  type?: string;
}

const FormFieldInput = ({
  name,
  label,
  placeholder,
  isLoading = false,
  type = "text"
}: FormFieldInputProps) => {
  const form = useFormContext();
  
  if (isLoading) {
    return (
      <div className="space-y-2">
        {label && <Skeleton className="h-4 w-20" />}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    );
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldInput;
