import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean
    children: ReactNode
}

export function Button({children, loading, ...rest}:ButtonProps) {
    return(
        <button
            disabled={loading}
            {...rest}
            className={styles.button}
        >

            {
                loading ? (
                    <FaSpinner color='#fff' size={16}/>
                ):(
                    <span className={styles.buttonText}>
                        { children }
                    </span>
                )
            }

        </button>
    )
}