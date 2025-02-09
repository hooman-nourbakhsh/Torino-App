import Image from "next/image";
import Call from "@icons/call.svg";
import { e2p } from "@/utils/replaceNumber";
import styles from "@/module/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <div className={styles.cta__text}>
          <strong>
            خرید تلفنی از <span>تورینو</span>
          </strong>
          <p>به هرکجا که میخواهید!</p>
        </div>
        <Image src="/images/cta.png" alt="cta" width={300} height={225} />
      </div>
      <div className={styles.cta__overlay}>
        <div className={styles.cta__overlay__text}>
          <strong>{e2p("021-1840")}</strong>
          <Call />
        </div>
        <button>اطلاعات بیشتر</button>
      </div>
    </section>
  );
}
