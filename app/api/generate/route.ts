import { genCertSchema } from '@/app/lib/zodSchemas';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/prisma/client';

export async function POST(req: NextRequest) {
	const body = await req.json();

	const validation = genCertSchema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.format(), { status: 400 });
	}

	const { email, courseId, name } = validation.data;
	const dataToHash = courseId + email;
	const hash = crypto.createHash('sha256').update(dataToHash).digest('hex');

	const existingCertificate = await prisma.certificate.findUnique({
		where: { id: hash },
	});
	if (existingCertificate) {
		return NextResponse.json(
			"You've already generated a certificate for this course.",
			{ status: 400 }
		);
	}

	await prisma.certificate.create({
		data: {
			id: hash,
			email: email.toLowerCase(),
			courseId: courseId.toLowerCase(),
			participantName: name,
		},
	});

	return NextResponse.json({ certificateId: hash });
}
