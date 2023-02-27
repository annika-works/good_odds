import styles from "@/styles/Footer.module.scss";
import Image from 'next/image'

interface footerData {
  footer: string,
  summary: string
}

export default function Footer({footerData}: {footerData: footerData}) {
  return (
    <>
      <section className={styles.footerSection}>
        <div className={styles.footerSection__firstRow}>
          <img className={styles.footerSection__logo} src="/assets/go_logo_sw.png" alt="Good Odds Logo"/>
          <p className={styles.footerSection__description}>We are <span><img src='/assets/go_wide.png' alt="Good Odds Logo"/></span>, a studio for communication focused on branding, illustration, print products and websites.</p>
        </div>
        <div className={styles.footerSection__secondRow}>
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
}


