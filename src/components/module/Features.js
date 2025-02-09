import Image from "next/image";
import styles from "@/module/Features.module.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.features__item}>
        <div className={styles.features__item__icon}>
          <Image src="/images/discount.png" alt="discount" width={121} height={109} />
        </div>
        <div className={styles.features__item__content}>
          <h4>بصرفه ترین قیمت</h4>
          <h5>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</h5>
        </div>
      </div>
      <div className={styles.features__item}>
        <div className={styles.features__item__icon}>
          <Image src="/images/support.png" alt="support" width={109} height={99} />
        </div>
        <div className={styles.features__item__content}>
          <h4>پشتیبانی</h4>
          <h5>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</h5>
        </div>
      </div>
      <div className={styles.features__item}>
        <div className={styles.features__item__icon}>
          <Image src="/images/satisfaction.png" alt="satisfaction" width={104} height={104} />
        </div>
        <div className={styles.features__item__content}>
          <h4>رضایت کاربران</h4>
          <h5>رضایت بیش از 10هزار کاربر از تور های ما.</h5>
        </div>
      </div>
    </section>
  );
}
