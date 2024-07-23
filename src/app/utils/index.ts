import { eq } from 'drizzle-orm';
import db from '@/db';
import { urls } from '@/db/schema';

export const getOriginalUrl = async (hash: string) => {
    const [first] = await db
        .select({
            originalUrl: urls.originalUrl
        })
        .from(urls)
        .where(eq(urls.shortUrl, hash));
    return first?.originalUrl;
};
