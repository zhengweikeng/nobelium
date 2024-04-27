import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import styles from '@/components/social.module.css'

const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full dark:text-gray-400 transition-all ${!fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
        }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <div className={`text-gray-500 ${styles.copyright}`}>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </div>
          <div className={styles.social}>
            {BLOG.socialLinks.github && (
              <a
                className={styles.github}
                href={BLOG.socialLinks.github}
                title={`GitHub ${BLOG.author}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            )}
            {BLOG.socialLinks.twitter && (
              <a
                className={styles.twitter}
                href={BLOG.socialLinks.twitter}
                title={`X ${BLOG.author}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter />
              </a>
            )}
            {BLOG.socialLinks.jike && (
              <a
                className={styles.jike}
                href={BLOG.socialLinks.jike}
                title={`Jike ${BLOG.author}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="8" fill="#E9D996" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8333 6.61111V15.5556C12.8333 18.2778 8.94444 18.2778 8.94444 18.2778L9.72222 21.3889C9.72222 21.3889 16.3333 21 16.3333 15.5556V6.61111H12.8333Z" fill="white" />
                  <path d="M16.3333 15.5556C16.3333 21 9.72222 21.3889 9.72222 21.3889L10.8889 22.5556C10.8889 22.5556 12.9083 22.4069 14.7778 21.3889C15.5556 20.9654 17.8889 19.4444 17.8889 17.1111V7.77778L16.3333 6.61111V15.5556Z" fill="#5EB8F9" />
                </svg>
              </a>
            )}
            {BLOG.socialLinks.instagram && (
              <a
                className={styles.instagram}
                href={`BLOG.socialLinks.instagram`}
                title={`Instagram ${BLOG.author}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagramSquare />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
