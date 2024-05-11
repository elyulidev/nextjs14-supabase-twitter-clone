"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addPost = async (prevState: unknown, formData: FormData) => {
	"use server";
	const content = formData.get("post");

	if (content === null) return;

	const supabase = createServerActionClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) return;

	await supabase.from("posts").insert({ content, user_id: user?.id });

	revalidatePath("/");
	return "Post created successfully!!!";
};
