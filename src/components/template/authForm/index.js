"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useSendOTP } from "@/services/mutations";
import SendOTPForm from "@/template/authForm/SendOTPForm";
import CheckOTPForm from "@/template/authForm/CheckOTPForm";
import ModalContainer from "@/modal/ModalContainer";

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
    <>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm mobile={mobile} setMobile={setMobile} setStep={setStep} sendOtp={sendOtp} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm mobile={mobile} setStep={setStep} setIsOpen={setIsOpen} sendOtp={sendOtp} />
        </ModalContainer>
      )}
    </>
  );
}
