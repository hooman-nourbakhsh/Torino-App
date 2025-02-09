import Image from "next/image";
import Link from "next/link";
import Profile from "@icons/profile.svg";
import styles from "@/layout/Header.module.css";

export default function Header() {
  return (
    <header className={styles.nav}>
      <Image src={"/images/Logo.png"} alt="logo" width={144} height={44} />

      <div className={styles.nav__list}>
        <ul>
          <li>
            <Link href="/" className={styles.active}>
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href="#">خدمات گردشگری</Link>
          </li>
          <li>
            <Link href="#">درباره ما</Link>
          </li>
          <li>
            <Link href="#">تماس با ما</Link>
          </li>
        </ul>
      </div>
      <button className={styles.nav__profile}>
        <Profile /> ورود | ثبت نام
      </button>
    </header>
  );
}
