
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface Option {
  id: string;
  name: string;
}

interface FormFieldSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  isLoading?: boolean;
}

const FormFieldSelect = ({
  name,
  label,
  placeholder = "Select an option",
  options,
  isLoading = false
}: FormFieldSelectProps) => {
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
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldSelect;
