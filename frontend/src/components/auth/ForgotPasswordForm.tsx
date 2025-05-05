
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormFieldInput } from '@/components/formFields';
import { Link } from 'react-router-dom';
import { forgotPassword } from '@/api/authApi';
import { toast } from '@/hooks/use-toast';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await forgotPassword({ email: values.email });
      toast({
        title: "Reset email sent",
        description: response.message,
      });
      setIsSubmitted(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="mb-4 text-green-600">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Mail className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-lg font-medium">Check your email</h3>
        <p className="mt-2 text-sm text-gray-500">
          We've sent you a password reset link. Please check your email.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline" className="mr-2">
            <Link to="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="space-y-4 text-center mb-6">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-gray-500">
          Enter your email and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFieldInput 
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <div className="flex flex-col space-y-4">
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending reset link..." : "Send reset link"}
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            asChild
          >
            <Link to="/login">Back to login</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
