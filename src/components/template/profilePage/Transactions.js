import { useState } from "react";
import { e2p, sp } from "@/utils/replaceNumber";
import { getUUIDPart, PersianDate } from "@/utils/helper";
import Pagination from "@/module/Pagination";
import NothingFound from "@/element/NothingFound";
import styles from "@/template/profilePage/Transactions.module.css";

export default function Transactions({ transactionsData }) {
  if (!transactionsData || transactionsData.length === 0) {
    return <NothingFound />;
  }

  const [currentData, setCurrentData] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>تاریخ و ساعت</th>
              <th>مبلغ(تومان)</th>
              <th>نوع تراکنش</th>
              <th>شماره سفارش</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((transaction) => (
              <tr key={transaction.id}>
                <td>{e2p(PersianDate(transaction.createdAt))}</td>
                <td>{sp(transaction.amount)}</td>
                <td>{transaction.type === "Purchase" ? "ثبت نام در تور گردشگری" : ""}</td>
                <td>سفارش {getUUIDPart(transaction.id, 4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination data={transactionsData} onPageChange={setCurrentData} itemPerPage={6} />
    </div>
  );
}
