"use client";
import { addPost } from "@/actions/form";
import { Avatar } from "@nextui-org/react";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export const ComposePost = ({ userAvatarUrl }: { userAvatarUrl: string }) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, action] = useFormState(addPost, null);

	if (typeof state === "string") {
		formRef?.current?.reset();
	}

	return (
		<form
			ref={formRef}
			action={action}
			className='flex p-3 border-b border-white/20'
		>
			<Avatar radius='full' size='md' src={userAvatarUrl} />
			<div className='flex flex-1 flex-col gap-y-4'>
				<textarea
					name='post'
					id='post'
					rows={4}
					className='w-full text-xl p-2 bg-black placeholder-gray-500 resize-none'
					placeholder='Qué está pasando?'
				></textarea>
				<SubmitBtn />
			</div>
		</form>
	);
};

export function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className={`bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end ${
				pending && "bg-opacity-disabled"
			}`}
			disabled={pending}
		>
			{pending ? (
				<svg
					className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
				>
					<circle
						className='opacity-25'
						cx='12'
						cy='12'
						r='10'
						stroke='currentColor'
						stroke-width='4'
					></circle>
					<path
						className='opacity-75'
						fill='currentColor'
						d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
					></path>
				</svg>
			) : (
				"Postear"
			)}
		</button>
	);
}
