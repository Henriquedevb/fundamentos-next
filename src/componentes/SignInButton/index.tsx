import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './SignInButton.module.scss'

export default function SingInButton() {
    const [session] = useSession()

    return session ? (
        <button type="button" className={styles.SignInButton} onClick={() => signOut()}>
            <FaGithub color="#04d361" />
            {session.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button >

    ) : (
        <button type="button" className={styles.SignInButton} onClick={() => signIn('github')}>
            <FaGithub color="#eba417" />
            Sign In with GitHub
        </button >
    )
}
