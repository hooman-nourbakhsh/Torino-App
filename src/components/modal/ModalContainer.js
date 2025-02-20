import { useEffect } from "react";
import styles from "@/modal/ModalContainer.module.css";

export default function ModalContainer({ children, isOpen, animationClassName }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__content__wrapper}>
        <div className={`${styles.modal__content} ${styles[animationClassName]}`}>{children}</div>
      </div>
    </div>
  );
}
