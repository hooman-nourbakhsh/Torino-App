import styles from "./ModalContainer.module.css";

export default function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__content__wrapper}>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  );
}
