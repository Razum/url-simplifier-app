import { eq } from 'drizzle-orm';
import { NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import db from '@/db';
import { urls } from '@/db/schema';

export async function POST(request: Request) {
    const data = await request.json();
    const { protocol, host } = new URL(request.url);

    const existing = await db.select().from(urls).where(eq( urls.originalUrl, data.url));
    if (existing.length > 0) {
        const shortUrl = `${protocol}://${host}/${existing[0].shortUrl}`;
        return Response.json({ shortUrl});
    }

    const hash = nanoid(6);
    await db.insert(urls).values({ originalUrl: data.url, shortUrl: hash });
    const shortUrl = `${protocol}://${host}/${hash}`;
    return Response.json({ shortUrl });
}
