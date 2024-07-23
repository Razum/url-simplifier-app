import { ThreeDots } from 'react-loader-spinner'

import styles from '@/app/components/InputButton/InptButton.module.css';
import clsx from "clsx";

type InputButtonProps =  {
    buttonText?: string;
    error?: string | null;
    onSubmit: () => void;
    isLoading?: boolean;
} & React.HTMLProps<HTMLInputElement>;

const InputButton = ({ buttonText = 'Submit', error, value, onChange, onSubmit, required, type, isLoading  }: InputButtonProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputButton}>
                <input
                    className={styles.input}
                    value={value}
                    onChange={onChange}
                    required={required}
                    type={type}
                    placeholder="Enter URL"
                />
                <button
                    type="button"
                    onClick={onSubmit}
                    className={clsx(styles.button, isLoading && styles.isLoading)}
                >
                    {isLoading ?

                        <ThreeDots
                            visible={true}
                            height="40"
                            width="40"
                            color="#ffffff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                        />
                        : buttonText}

                </button>
            </div>
            {error && <span className={styles.error}>{error}</span>}

        </div>
    );
};

export default InputButton;
