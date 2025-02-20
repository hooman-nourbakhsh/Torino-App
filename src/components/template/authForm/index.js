"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useSendOTP } from "@/services/mutations";
import SendOTPForm from "@/template/authForm/SendOTPForm";
import CheckOTPForm from "@/template/authForm/CheckOTPForm";
import ModalContainer from "@/modal/ModalContainer";
import Close from "@icons/close.svg";
import ArrowLeft from "@icons/arrow-left.svg";
import styles from "@/template/authForm/AuthForm.module.css";

export default function AuthForm({ isOpen, setIsOpen }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const { mutate, isPending } = useSendOTP();

  const sendOtp = (isResend = false) => {
    if (isPending) return;

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data.message);
          toast.info(data?.data.code);

          if (!isResend) {
            setStep(2);
          }
        },
        onError: (error) => {
          toast.error(error?.data.message);
        },
      }
    );
  };

  return (
    <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen} animationClassName={isOpen ? "fade__in" : "fade__out"}>
      <>
        {step === 1 && (
          <>
            <Close onClick={() => setIsOpen(false)} className={styles.modal__close} />
            <SendOTPForm mobile={mobile} setMobile={setMobile} setStep={setStep} sendOtp={sendOtp} />
          </>
        )}
        {step === 2 && (
          <>
            <ArrowLeft onClick={() => setStep(1)} className={styles.modal__close} style={{ transform: "scale(0.7)" }} />
            <CheckOTPForm mobile={mobile} setStep={setStep} setIsOpen={setIsOpen} sendOtp={sendOtp} />
          </>
        )}
      </>
    </ModalContainer>
  );
}
