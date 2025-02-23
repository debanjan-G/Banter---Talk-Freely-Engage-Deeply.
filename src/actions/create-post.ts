"use server";

import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";

interface formStateType {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

// creating Post Schema for ZOD validation
const postSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters")
    .regex(
      /^[a-zA-Z0-9\s.,!?-]+$/,
      "Title can only contain letters, numbers, spaces, and .,!?-"
    ),
  content: z
    .string()
    .min(15, "Title must be at least 15 characters")
    .max(1000, "Title cannot exceed 1000 characters"),
});

export const createPostAction = async (
  formState: formStateType,
  formData: FormData
): Promise<formStateType> => {
  console.log("Create Post server action invoked!");

  // check if user is logged in or not
  const session = await auth();
  if (!session?.user) {
    return {
      errors: {
        _form: ["Please signin to create a post!"],
      },
    };
  }

  // perform form validation checks
  const result = postSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  // if validation fails
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Extract topicId safely
  const topicId = formData.get("topicId") as string | null;

  // checking if userId and topicId exists
  if (!session.user.id || !topicId) {
    return {
      errors: {
        _form: ["Missing userId or topicId!"],
      },
    };
  }

  // save post to DB
  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create post!"],
        },
      };
    }
  }

  // // Revalidate view topic path
  // revalidatePath("/topics");

  // fetching the topic name
  const topic = await db.topic.findFirst({
    where: {
      id: topicId,
    },
  });

  if (!topic)
    return {
      errors: {
        _form: ["Topic not found!"],
      },
    };

  // revalidate topic page (here it is optional unless we are caching the dynamic route using generateStaticParams())
  revalidatePath(paths.viewTopic(topic.slug));

  // Redirect user to post page
  redirect(paths.viewPost(topic.slug, post.id));
};
