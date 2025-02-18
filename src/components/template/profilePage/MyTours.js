import { useState } from "react";
import { e2p, sp } from "@/utils/replaceNumber";
import { getUUIDPart, PersianDate } from "@/utils/helper";
import { getTypeTour } from "@/constants/typeTour";
import { getTourStatus } from "@/utils/tourStatus";
import Pagination from "@/module/Pagination";
import Tours from "@icons/tours.svg";
import styles from "@/template/profilePage/MyTours.module.css";

export default function MyTours({ myTours }) {
  const [currentData, setCurrentData] = useState([]);

  const renderTourCard = (tour) => {
    const { label, color } = getTourStatus(tour.startDate, tour.endDate);
    const tourType = getTypeTour(tour.fleetVehicle);
    const tourNumber = e2p(getUUIDPart(tour.id, 2));
    const formattedStartDate = PersianDate(tour.startDate, "dddd D MMM YYYY");
    const formattedEndDate = PersianDate(tour.endDate, "dddd D MMM YYYY");

    return (
      <div className={styles.wrapper} key={tour.id + Math.floor(Math.random() * 1000) + 1}>
        <div className={styles.tour__header}>
          <h4>
            <Tours />
            {tour.title}
          </h4>
          <h4>
            {tourType.icon}
            سفر با {tourType.label}
          </h4>
          <span className={`${styles.statusBadge} ${styles[color]}`}>{label}</span>
        </div>
        <div className={styles.tour__details}>
          <p>
            <strong>
              {tour.origin.name} به {tour.destination.name}
            </strong>
            <span> • </span>
            {formattedStartDate}
          </p>
          <p>
            <strong>تاریخ برگشت</strong> <span> • </span> {formattedEndDate}
          </p>
        </div>
        <div className={styles.tour__info}>
          <p>
            شماره تور <strong>{tourNumber}</strong>
          </p>
          <span></span>
          <p>
            مبلغ پرداخت‌شده
            <strong>
              {sp(tour.price)} <span>تومان</span>
            </strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {currentData?.map(renderTourCard)}
      <Pagination data={myTours} onPageChange={setCurrentData} itemPerPage={6} />
    </div>
  );
}
