'use client';
import { useState } from 'react';
import InputButton from '@/app/components/InputButton';

import styles from '@/app/components/Workspace/Workspace.module.css';

const Workspace = () => {
    const [url, setUrl] = useState('http://asdasdasdasd');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };
    const handleSubmit = () => {
        setLoading(true);
        setError('');
        fetch('/api/shorten', { method: 'POST', body: JSON.stringify({ url }) })
            .then((response) => response.json())
            .then((data) => {
                setShortUrl(data.shortUrl);
            })
            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);

        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl)
    }

    return (
        <main className={styles.main}>
            <InputButton
                value={url}
                onChange={handleChange}
                onSubmit={handleSubmit}
                error={error}
                type="url"
                required
                isLoading={isLoading}
            />
            {shortUrl && (<div className={styles.arrow}>&#8595;</div>)}
            {shortUrl && (
                <InputButton
                    value={shortUrl}
                    buttonText="Copy"
                    onSubmit={handleCopy}
                />
            )}
        </main>
    );
};

export default Workspace;
