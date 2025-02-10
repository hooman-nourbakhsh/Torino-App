import Image from "next/image";
import Link from "next/link";
import { e2p } from "@/utils/replaceNumber";
import styles from "@/layout/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__info}>
          <div className={styles.footer__site__links}>
            <h3>تورینو</h3>
            <Link href="#">درباره ما</Link>
            <Link href="#">تماس با ما</Link>
            <Link href="#">چرا تورینو</Link>
            <Link href="#">بیمه مسافرتی</Link>
          </div>
          <div className={styles.footer__customer__links}>
            <h3>خدمات مشتریان</h3>
            <Link href="#">پشتیبانی آنلاین</Link>
            <Link href="#">راهنمای خرید</Link>
            <Link href="#">راهنمای استرداد</Link>
            <Link href="#">پرسش و پاسخ</Link>
          </div>
        </div>
        <div className={styles.legal}>
          <div className={styles.legal__info}>
            <Image src="/images/logo.png" alt="logo-torino" width={146} height={44} />
            <p>
              تلفن پشتیبانی: <span>{e2p("8574-021")}</span>
            </p>
          </div>
          <div className={styles.legal__logo}>
            <Image src="/images/airline.png" alt="airline" width={78} height={74} />
            <Image src="/images/passenger.png" alt="passenger" width={71} height={74} />
            <Image src="/images/ecunion.png" alt="ecunion" width={68} height={74} />
            <Image src="/images/samandehi.png" alt="samandehi" width={67} height={74} />
            <Image src="/images/aira.png" alt="aira" width={68} height={74} />
          </div>
        </div>
      </footer>
      <span className="line"></span>
      <small style={{ display: "block", textAlign: "center", fontSize: "15px", color: "#000", margin: "15px 0" }}>
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </small>
    </>
  );
}
