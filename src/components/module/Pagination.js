import { useState, useEffect } from "react";
import styles from "@/module/Pagination.module.css";

export default function Pagination({ data, onPageChange, itemPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemPerPage);

  useEffect(() => {
    const currentData = data?.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    onPageChange(currentData);
  }, [currentPage, data, onPageChange]);

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
        قبلی
      </button>

      <span>{`${currentPage} از ${totalPages}`}</span>

      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
        بعدی
      </button>
    </div>
  );
}
