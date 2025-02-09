import Image from "next/image";
import styles from "@/module/WhyTorino.module.css";

export default function WhyTorino() {
  return (
    <section className={styles.whyTorino}>
      <div className={styles.whyTorino__content}>
        <div className={styles.whyTorino__title}>
          <div className={styles.circle}>
            <span className={styles.question}>؟</span>
          </div>
          <h2>
            چرا <strong>تورینو</strong> ؟
          </h2>
        </div>
        <h3>تور طبیعت گردی و تاریخی</h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را
          خریداری کنید.
        </p>
      </div>
      <div className={styles.whyTorino__slider}>
        <Image src={"/images/pic1.webp"} alt="pic" width={389} height={479} />
      </div>
    </section>
  );
}
