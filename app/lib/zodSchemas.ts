import { z } from 'zod';

export const genCertSchema = z.object({
	email: z.string().email(),
	courseId: z.string().length(4),
	name: z.string(),
});
