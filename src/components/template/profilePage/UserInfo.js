import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userInfo } from "@/schema/index";
import { e2p } from "@/utils/replaceNumber";
import ModalContainer from "@/modal/ModalContainer";
import Edit from "@icons/edit.svg";
import styles from "@/template/profilePage/styles.module.css";

export default function UserInfoForm({ userData, submitHandler, isOpen, setIsOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInfo),
  });

  return (
    <div className={styles.form__container}>
      <div className={styles.infoHeader}>
        <h2>اطلاعات حساب کاربری</h2>
        <div className={styles.submit}>
          <Edit />
          <button onClick={setIsOpen}>{userData?.email ? "ویرایش اطلاعات" : "افزودن"}</button>
        </div>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.row}>
          <span>شماره موبایل</span>
          <span>{e2p(userData?.mobile) || "ثبت نشده است"}</span>
          <span>ایمیل</span>
          <span>{userData?.email || "ثبت نشده است"}</span>
        </div>
      </div>

      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        <form className={styles.form__edit} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.form__inputs}>
            <label>ایمیل</label>
            <input type="email" defaultValue={userData?.email} {...register("email")} style={{ textAlign: "left" }} />
            <p className={styles.error}>{errors.email?.message || "‎"}</p>

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
