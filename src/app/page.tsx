import AuthButtonServer from "@/components/auth-button-server";
import { PostLists } from "@/components/post-list";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type Database } from "./types/database";
import { Post } from "./types/posts";
import { ComposePost } from "@/components/compose-post";

export default async function Home() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user === null) return redirect("/login");

	const { data: posts } = await supabase
		.from("posts")
		.select("*, user:users(name, user_name, avatar_url)")
		.order("created_at", { ascending: false });

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
				<ComposePost userAvatarUrl={user?.user_metadata?.avatar_url} />
				<PostLists posts={posts as Post[]} />
			</section>
			<AuthButtonServer />
		</main>
	);
}
