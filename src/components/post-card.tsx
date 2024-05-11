"use client";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
} from "@nextui-org/react";
import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import { useState } from "react";

export function PostCard({
	userFullName,
	username,
	avatarUrl,
	content,
}: {
	userFullName: string;
	username: string;
	avatarUrl: string;
	content: string;
}) {
	const [isFollowed, setIsFollowed] = useState(false);

	return (
		<Card className='bg-transparent shadow-none hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer'>
			<CardHeader className='justify-between'>
				<div className='flex gap-x-2'>
					<Link href={`/${username}`}>
						<Avatar radius='full' size='md' src={avatarUrl} />
					</Link>
					<div className='flex flex-col gap-1 items-start justify-center'>
						<h4 className='text-small font-semibold leading-none text-default-600'>
							{userFullName}
						</h4>
						<h5 className='text-small tracking-tight text-default-400'>
							{username}
						</h5>
					</div>
				</div>
			</CardHeader>
			<CardBody className='px-3 py-0 text-xs text-white'>
				<p>{content}</p>
			</CardBody>
			<CardFooter className='gap-3 text-white'>
				<button>
					<IconMessageCircle className='w-4 h-4' />
				</button>
				<button>
					<IconHeart className='w-4 h-4' />
				</button>
				<button>
					<IconRepeat className='w-4 h-4' />
				</button>
			</CardFooter>
		</Card>
	);
}
