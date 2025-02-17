"use client";

import { Suspense } from "react";
import Link from "next/link";
import useQueryParams from "@/hooks/queryParams";
import { PersianDate } from "@/utils/helper";
import { e2p } from "@/utils/replaceNumber";
import Checkmark from "@icons/checkmark.svg";
import RejectRed from "@icons/rejectRed.svg";
import styles from "@/app/payment/styles.module.css";

function PaymentContent() {
  const { getQuery } = useQueryParams();
  const { status, orderId } = getQuery("status", "orderId");

  if (status === "success")
    return (
      <div className={styles.container}>
        <Checkmark />
        <h2>پرداخت با موفقیت انجام شد.</h2>
        <p>
          <span>کد رهگیری :</span> {e2p(orderId)}
        </p>
        <p>
          <span>تاریخ :</span> {PersianDate(Date.now())}
        </p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    );

  return (
    <div className={styles.container}>
      <RejectRed />
      <h2 style={{ color: "red" }}>پرداخت شما ناموفق بود!</h2>
      <p>
        <span>کد رهگیری :</span> {e2p(orderId)}
      </p>
      <p>اگر مبلغی از حساب شما کسر شده باشد، طی ۷۲ ساعت آینده به حسابتان واریز می‌شود.</p>
      <Link href="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense>
      <PaymentContent />
    </Suspense>
  );
}
