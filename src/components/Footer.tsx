import { Inter } from "@next/font/google";
import styles from "@/styles/Footer.module.scss";
import getFooterData from "../../lib/utils";
import { ObjectLiteralExpression } from "typescript";
import { StringifyOptions } from "querystring";

const inter = Inter({ subsets: ["latin"] });

interface footerData {
  footer: string,
  summary: string
}

export default function Footer({footerData}: {footerData: footerData}) {
  return (
    <>
      <section className={styles.wrapper}>
        <div>Logo</div>
        <p>{footerData.summary}</p>
        <ul>
          <li>
            <a>Instagram</a>
          </li>
          <li>Email</li>
        </ul>
      </section>
    </>
  );
}


