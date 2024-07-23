import { redirect } from 'next/navigation';
import { getOriginalUrl } from '@/app/utils';
import styles from '@/app/[hash]/page.module.css';

export default async function Redirect({
    params
}: {
    params: { hash: string };
}) {
    const originalUrl = await getOriginalUrl(params.hash);
    if (originalUrl) {
        redirect(originalUrl);
    }
    return <div className={styles.notFound}>Page not found</div>;
}
