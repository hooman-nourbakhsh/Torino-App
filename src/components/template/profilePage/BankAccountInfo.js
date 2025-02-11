"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useGetUserData } from "@/services/queries";
import { useUpdateUserInfo } from "@/services/mutations";
import { bankAccountSchema } from "@/schema/index";
import { e2p, debitCard } from "@/utils/replaceNumber";
import ModalContainer from "@/modal/ModalContainer";
import Edit from "@icons/edit.svg";
import styles from "@/template/profilePage/styles.module.css";

export default function BankAccountInfo() {
  const { data: { data } = {} } = useGetUserData();
  const userData = data?.payment;
  const { mutate, isPending } = useUpdateUserInfo();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAuthModal = () => {
    setIsOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data.message);
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(`message: ${error?.data.message} - Code: ${error?.status}`);
          console.log(error);
        },
      }
    );
  };

  return (
    <div className={styles.form__container} style={{ margin: "24px auto" }}>
      <div className={styles.infoHeader}>
        <h2>اطلاعات حساب بانکی</h2>
        <div className={styles.submit}>
          <Edit />
          <button onClick={toggleAuthModal}>{"ویرایش اطلاعات"}</button>
        </div>
      </div>
      <div className={styles.infoGrid}>
        <div className={styles.row}>
          <span className={styles.label}>شماره حساب</span>
          <span className={styles.value}>{e2p(userData?.accountIdentifier) || "ثبت نشده است"}</span>

          <span className={styles.label}>شماره شبا</span>
          <span className={styles.value}>IR {e2p(userData?.shaba_code) || "ثبت نشده است"}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>شماره کارت</span>
          <span className={styles.value}>{debitCard(userData?.debitCard_code) || "ثبت نشده است"}</span>
        </div>
      </div>

      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        <form className={styles.form__edit} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.form__inputs}>
            <label>شماره حساب</label>
            <input type="text" defaultValue={userData?.accountIdentifier} {...register("accountIdentifier")} />
            <p className={styles.error}>{errors.accountIdentifier?.message || "‎"}</p>

            <label>شماره کارت</label>
            <input type="text" defaultValue={userData?.debitCard_code} {...register("debitCard_code")} />
            <p className={styles.error}>{errors.debitCard_code?.message || "‎"}</p>

            <label>شماره شبا</label>
            <input type="number" defaultValue={userData?.shaba_code} {...register("shaba_code")} />
            <p className={styles.error}>{errors.shaba_code?.message || "‎"}</p>

            <div className={styles.buttons}>
              <button type="submit">تایید</button>
              <button type="button" onClick={() => setIsOpen(false)}>
                انصراف
              </button>
            </div>
          </div>
        </form>
      </ModalContainer>
    </div>
  );
}
