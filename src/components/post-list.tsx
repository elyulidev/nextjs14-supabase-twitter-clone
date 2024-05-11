import React from "react";
import { PostCard } from "./post-card";
import { type Post } from "@/app/types/posts";

export const PostLists = ({ posts }: { posts: Post[] | null }) => {
	return (
		<>
			{posts && posts.length > 0 ? (
				posts?.map((post) => {
					const { id, content, user } = post;
					const {
						user_name: username,
						name: userFullName,
						avatar_url: avatarUrl,
					} = user;

					return (
						<PostCard
							key={id}
							username={username}
							userFullName={userFullName}
							avatarUrl={avatarUrl}
							content={content}
						/>
					);
				})
			) : (
				<p>No hay posts</p>
			)}
		</>
	);
};
