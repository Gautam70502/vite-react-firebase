
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface FormFieldTextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
}

const FormFieldTextarea = ({
  name,
  label,
  placeholder,
  isLoading = false
}: FormFieldTextareaProps) => {
  const form = useFormContext();
  
  if (isLoading) {
    return (
      <div className="space-y-2">
        {label && <Skeleton className="h-4 w-20" />}
        <Skeleton className="h-24 w-full rounded-md" />
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
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldTextarea;
