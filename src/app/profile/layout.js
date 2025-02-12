"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@icons/profile-black.svg";
import Transactions from "@icons/transaction.svg";
import Tours from "@icons/tours.svg";
import styles from "@/app/profile/layout.module.css";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ul>
          <li className={pathname === "/profile" ? styles.active : ""}>
            <Profile />
            <Link href="/profile">پروفایل</Link>
          </li>
          <li className={pathname === "/profile/my-tours" ? styles.active : ""}>
            <Tours />
            <Link href="/profile/my-tours">تور های من</Link>
          </li>
          <li className={pathname === "/profile/transactions" ? styles.active : ""}>
            <Transactions />
            <Link href="/profile/transactions">تراکنش ها</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
