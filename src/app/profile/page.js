"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { useGetUserData } from "@/services/queries";
import { useUpdateUserInfo } from "@/services/mutations";
import UserInfoForm from "@/template/profilePage/UserInfo";
import PersonalInfoForm from "@/template/profilePage/PersonalInfo";
import BankAccountInfoForm from "@/template/profilePage/BankAccountInfo";
import styles from "@/app/profile/page.module.css";

export default function ProfilePage() {
  const { data: { data } = {}, isLoading, refetch } = useGetUserData();
  const { mutate, isPending } = useUpdateUserInfo();

  const [modalStates, setModalStates] = useState({
    userInfo: false,
    personalInfo: false,
    bankAccount: false,
  });

  const toggleModal = (modalName) => {
    setModalStates((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };

  if (isLoading) return <FadeLoader color="#28a745" speedMultiplier={2} cssOverride={{ margin: "5% auto" }} />;

  if (!data)
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>مشکلی وجود دارد، لطفاً دوباره تلاش کنید.</p>
        <button onClick={() => refetch()} className={styles.retryButton}>
          بارگیری مجدد
        </button>
      </div>
    );

  const submitHandler = (data) => {
    if (isPending) return;
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data.message);
        setModalStates({
          userInfo: false,
          personalInfo: false,
          bankAccount: false,
        });
      },
      onError: (error) => {
        toast.error(`message: ${error?.data.message} - Code: ${error?.status}`);
        console.log(error);
      },
    });
  };

  return (
    <div>
      <UserInfoForm userData={data} submitHandler={submitHandler} isOpen={modalStates.userInfo} setIsOpen={() => toggleModal("userInfo")} />
      <PersonalInfoForm userData={data} submitHandler={submitHandler} isOpen={modalStates.personalInfo} setIsOpen={() => toggleModal("personalInfo")} />
      <BankAccountInfoForm userData={data} submitHandler={submitHandler} isOpen={modalStates.bankAccount} setIsOpen={() => toggleModal("bankAccount")} />
    </div>
  );
}
