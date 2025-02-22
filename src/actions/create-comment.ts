"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/utils/paths";
import { revalidatePath } from "next/cache";
import { z } from "zod";

interface CreateCommentFormType {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
  success?: boolean;
}

const commentSchema = z.object({
  content: z
    .string()
    .max(500, "The comment cannot exceed 500 characters")
    .min(3, "The comment must at least contain 3 characters"),
});

export const createCommentAction = async (
  formState: CreateCommentFormType,
  formData: FormData
): Promise<CreateCommentFormType> => {
  // Check if user is signed in
  const session = await auth();
  if (!session?.user) {
    return {
      errors: {
        _form: ["Please sign in to comment"],
      },
    };
  }

  // Extract and validate postId and parentId
  const rawPostId = formData.get("postId");
  const postId = rawPostId ? rawPostId.toString() : "";
  if (!postId) {
    return {
      errors: {
        _form: ["Post ID is required"],
      },
    };
  }

  const rawParentId = formData.get("parentId");
  // Only set parentId if it is provided and not the string "null"
  const parentId =
    rawParentId && rawParentId.toString() !== "null"
      ? rawParentId.toString()
      : null;

  // Perform form validation
  const result = commentSchema.safeParse({
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Save comment to DB
  try {
    await db.comment.create({
      data: {
        content: result.data.content,
        postId: postId,
        userId: session.user.id!,
        parentId: parentId,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: ["Database Error: ", error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Couldn't save comment to database"],
        },
      };
    }
  }

  // Fetch topic for revalidation
  // const topic = await db.topic.findFirst({
  //   where: { posts: { some: { id: postId } } },
  // });

  // if (!topic) {
  //   return {
  //     errors: {
  //       _form: ["Failed to revalidate topic"],
  //     },
  //   };
  // }

  const topic = await db.topic.findFirst({
    where: {
      posts: { some: { id: postId } },
    },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Failed to revalidate topic"],
      },
    };
  }

  // Revalidate the post show path
  revalidatePath(paths.viewPost(topic.slug, postId));

  return {
    errors: {},
    success: true,
  };
};
