import Image from "next/image";
import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/ToursList.module.css";

export default function ToursList({ toursData }) {
  if (!toursData.length) return <h1>موردی یافت نشد</h1>;

  return (
    <section className={styles.tours}>
      <h3>همه تور ها</h3>
      <div className={styles.tours__list}>
        {toursData?.map((tour) => (
          <div className={styles.tours__item} key={tour.id}>
            <Image src={tour.image} alt={tour.title} width={278} height={159} />
            <div className={styles.tours__info}>
              <h4>{tour.title}</h4>
              <p className={styles.textEllipsis}>{tour.options.join(" - ")}</p>
            </div>
            <div className={styles.tours__details}>
              <Link href={`/tours/${tour.id}`}>رزرو</Link>
              <div className={styles.priceWrapper}>
                <strong className={styles.price}>{sp(tour.price)}</strong>
                <small className={styles.currency}>تومان</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
