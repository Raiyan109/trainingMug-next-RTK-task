'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Photos
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/posts' ? styles.active : ''
          }`}
        href="/posts"
      >
        Posts
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/savedPhotos' ? styles.active : ''
          }`}
        href="/savedPhotos"
      >
        Saved Photos
      </Link>

      <Link
        className={`${styles.link} ${pathname === '/savedPosts' ? styles.active : ''
          }`}
        href="/savedPosts"
      >
        Saved Posts
      </Link>
    </nav>
  )
}
