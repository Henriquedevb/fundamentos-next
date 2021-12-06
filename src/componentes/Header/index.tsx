import React from 'react'
import Image from "next/image";

import logo from '../../../public/images/logo.svg';

import SingInButton from '../SignInButton'

import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt="ig.news" />
                <nav>

                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    )
}
