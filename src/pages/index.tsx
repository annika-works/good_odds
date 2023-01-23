import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Footer from '@/components/Footer'
import getFooterData from "../../lib/utils"

const inter = Inter({ subsets: ['latin'] })

interface footerData {
  footer: string,
  summary: string
}

export default function Home({footerData}: {footerData: footerData}) {
  return (
    <>
      <Head>
        <title>Good Odds Studio</title>
        <meta name="description" content="Professional Design Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          Hello
          <Footer footerData={footerData}/>
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
    const footerData = await getFooterData();
    return { footerData };
  };