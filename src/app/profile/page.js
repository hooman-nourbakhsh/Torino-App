"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGetUserData } from "@/services/queries";
import { useUpdateUserInfo } from "@/services/mutations";
import Loading from "@/app/profile/loading";
import Error from "@/app/error";
import NothingFound from "@/element/NothingFound";
import UserInfoForm from "@/template/profilePage/UserInfo";
import PersonalInfoForm from "@/template/profilePage/PersonalInfo";
import BankAccountInfoForm from "@/template/profilePage/BankAccountInfo";

export default function ProfilePage() {
  const { data: { data } = {}, isLoading, error, refetch } = useGetUserData();
  const { mutate, isPending } = useUpdateUserInfo();

  const [modalStates, setModalStates] = useState({
    userInfo: false,
    personalInfo: false,
    bankAccount: false,
  });

  if (isLoading) return <Loading />;

  if (error) return <Error reset={refetch} />;

  if (!data || data.length === 0) return <NothingFound />;

  const toggleModal = (modalName) => {
    setModalStates((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };

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
      <PersonalInfoForm
        userData={data}
        submitHandler={submitHandler}
        isOpen={modalStates.personalInfo}
        setIsOpen={() => toggleModal("personalInfo")}
      />
      <BankAccountInfoForm
        userData={data}
        submitHandler={submitHandler}
        isOpen={modalStates.bankAccount}
        setIsOpen={() => toggleModal("bankAccount")}
      />
    </div>
  );
}
