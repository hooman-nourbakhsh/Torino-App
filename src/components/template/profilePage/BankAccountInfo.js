import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankAccountSchema } from "@/schema/index";
import { e2p, debitCard } from "@/utils/replaceNumber";
import ModalContainer from "@/modal/ModalContainer";
import Edit from "@icons/edit.svg";
import styles from "@/template/profilePage/styles.module.css";

export default function BankAccountInfoForm({ userData, submitHandler, isOpen, setIsOpen }) {
  userData = userData?.payment;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
  });

  return (
    <div className={styles.form__container} style={{ margin: "24px auto" }}>
      <div className={styles.infoHeader}>
        <h2>اطلاعات حساب بانکی</h2>
        <div className={styles.submit}>
          <Edit />
          <button onClick={setIsOpen}>{"ویرایش اطلاعات"}</button>
        </div>
      </div>
      <div className={styles.infoGrid}>
        <div className={styles.row}>
          <span className={styles.label}>شماره حساب</span>
          <span className={styles.value}>{e2p(userData?.accountIdentifier) || "ثبت نشده است"}</span>

          <span className={styles.label}>شماره شبا</span>
          <span className={styles.value}>
            {userData?.shaba_code ? `IR ${e2p(userData?.shaba_code)}` : "ثبت نشده است"}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>شماره کارت</span>
          <span className={styles.value}>{debitCard(userData?.debitCard_code) || "ثبت نشده است"}</span>
        </div>
      </div>

      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        <form className={styles.form__edit} onSubmit={handleSubmit((data) => submitHandler({ payment: data }))}>
          <div className={styles.form__inputs}>
            <label>شماره حساب</label>
            <input type="text" defaultValue={userData?.accountIdentifier} {...register("accountIdentifier")} />
            <p className={styles.error}>{errors.accountIdentifier?.message || "‎"}</p>

            <label>شماره کارت</label>
            <input type="text" defaultValue={userData?.debitCard_code} {...register("debitCard_code")} />
            <p className={styles.error}>{errors.debitCard_code?.message || "‎"}</p>

            <label>شماره شبا</label>
            <input type="text" defaultValue={userData?.shaba_code} {...register("shaba_code")} />
            <p className={styles.error}>{errors.shaba_code?.message || "‎"}</p>

            <div className={styles.buttons}>
              <button type="submit">تایید</button>
              <button type="button" onClick={setIsOpen}>
                انصراف
              </button>
            </div>
          </div>
        </form>
      </ModalContainer>
    </div>
  );
}
