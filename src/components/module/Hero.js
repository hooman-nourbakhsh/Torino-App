import Image from "next/image";
import styles from "@/module/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image src="/images/header_top.jpg" alt="banner" width={1440} height={350} priority />
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
    </section>
  );
}
