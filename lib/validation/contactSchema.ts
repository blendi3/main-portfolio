// lib/validation/contactSchema.ts
import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name is too short"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters"),
});

export const ValidationError = yup.ValidationError;
