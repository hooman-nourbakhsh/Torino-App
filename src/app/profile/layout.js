import Link from "next/link";
import Profile from "@icons/profile-black.svg";
import Transactions from "@icons/transaction.svg";
import Tours from "@icons/tours.svg";
import styles from "@/app/profile/layout.module.css";

export default function ProfileLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ul>
          <li>
            <Profile />
            <Link href="/profile">پروفایل</Link>
          </li>
          <li>
            <Tours />
            <Link href="/profile/my-tours">تور های من</Link>
          </li>
          <li>
            <Transactions />
            <Link href="/profile/transactions">تراکنش ها</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
