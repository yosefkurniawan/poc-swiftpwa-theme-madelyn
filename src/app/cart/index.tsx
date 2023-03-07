import { Inter } from 'next/font/google'
import styles from './cart.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className={styles.main}>
      MY CART
    </main>
  )
}
