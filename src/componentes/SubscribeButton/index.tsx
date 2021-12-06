import { signIn, useSession } from 'next-auth/client'
import React from 'react'
import styles from './SubscribeButton.module.scss'


interface SubscribeButtonProps {
    priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession()


    function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

    }

    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe now
        </button>
    )
}
