"use server";
import { z } from "zod";

// creating schema for validation
const topicSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title cannot exceed 100 characters")
    .regex(
      /^[a-zA-Z0-9\s.,!?-]+$/,
      "Title can only contain letters, numbers, spaces, and basic punctuation"
    ),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description cannot exceed 1000 characters"),
});

interface formStateType {
  errors: {
    title?: string[]; // 'title' property may or may not be present
    description?: string[]; //  'description' property may or may not be present
  };
}

export const createTopicAction = async (
  formState: formStateType,
  formData: FormData
): Promise<formStateType> => {
  // getting hold of data that is to be validated
  const title = formData.get("title");
  const description = formData.get("description");

  // perform validation checks
  const result = topicSchema.safeParse({ title, description });
  if (result.success) {
    console.log("Validation successful!", result.data);
  } else {
    console.log("Validation Failed");
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };

  // revalidate home path

  // redirect user to that topic route
};
