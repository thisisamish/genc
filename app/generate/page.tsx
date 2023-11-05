'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@radix-ui/themes';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function GeneratePage() {
	const [email, setEmail] = useState('');
	const [courseId, setCourseId] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/generate', {
				email,
				courseId,
				name,
			});
			if (res.status === 200) {
				toast.success('Certificate Generated Successfully!');
				setEmail('');
				setCourseId('');
				setName('');
			}
		} catch (error) {
			toast.error('Error in generating certificate!');
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-center text-5xl font-bold mb-20">
				Generate Page
			</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label htmlFor="email">Name of the participant:</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={(e) => setName(e.target.value)}
						className="border border-gray-300 rounded-md px-2 py-1"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email">Email ID of the participant:</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						className="border border-gray-300 rounded-md px-2 py-1"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="courseid">CourseID:</label>
					<input
						type="text"
						id="courseid"
						name="courseid"
						onChange={(e) => setCourseId(e.target.value)}
						className="border border-gray-300 rounded-md px-2 py-1"
						required
					/>
				</div>
				<Button type="submit">Generate</Button>
			</form>
			{/* <div>Your Certificate ID is: {certificateId}</div> */}
		</div>
	);
}
