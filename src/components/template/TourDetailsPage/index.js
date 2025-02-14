import Link from "next/link";
import Image from "next/image";
import { getTypeTour } from "@/constants/typeTour";
import { e2p, sp } from "@/utils/replaceNumber";
import UserTick from "@icons/user-tick.svg";
import Map from "@icons/map.svg";
import Guarantee from "@icons/medal-star.svg";
import Routing from "@icons/routing.svg";
import Calendar from "@icons/calendar.svg";
import Capacity from "@icons/profile-2user.svg";
import Security from "@icons/security.svg";

import styles from '@/template/tourDetailsPage/styles.module.css'

export default function TourDetails({ tourData }) {
  console.log(tourData);
  return (
    <section className={styles.tourDetails}>
      <div className={styles.container}>
        <div className={styles.details}>
          <Image src={tourData.image} alt={tourData.title} width={397} height={265} />
          <div className={styles.details__content}>
            <h2>{tourData.title}</h2>
            <h3>{tourData.options.join(" ، ")}</h3>
            <ul className={styles.details__features}>
              <li>
                <UserTick />
                <span>تورلیدر از مبدا</span>
              </li>
              <li>
                <Map />
                <span>برنامه سفر</span>
              </li>
              <li>
                <Guarantee />
                <span>تضمین کیفیت</span>
              </li>
            </ul>
            <div className={styles.details__price}>
              <h4>
                {sp(tourData.price)}
                <span>تومان</span>
              </h4>
              <Link href="/checkout">رزرو و خرید</Link>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <ul>
            <li>
              <Routing /> <span>مبدا</span>
              <p>{tourData.origin.name}</p>
            </li>
            <li>
              <Calendar /> <span>تاریخ رفت</span>
              <p>{e2p(new Date(tourData.startDate).toLocaleDateString("fa-IR", { day: "2-digit", month: "long", year: "numeric" }))}</p>
            </li>
            <li>
              <Calendar /> <span>تاریخ برگشت</span>
              <p>{e2p(new Date(tourData.endDate).toLocaleDateString("fa-IR", { day: "2-digit", month: "long", year: "numeric" }))}</p>
            </li>
            <li>
              {getTypeTour(tourData.fleetVehicle).icon} <span>حمل و نقل</span>
              <p>{getTypeTour(tourData.fleetVehicle).label}</p>
            </li>
            <li>
              <Capacity /> <span>ظرفیت</span>
              <p>حداکثر {e2p(tourData.availableSeats)} نفر</p>
            </li>
            {tourData.insurance && (
              <li>
                <Security /> <span>بیمه</span>
                <p>بیمه ۵۰ هزار تومان</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
