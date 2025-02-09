"use client";

import { useState } from "react";
import  SendOTPForm  from "@/template/authForm/SendOTPForm";
import  CheckOTPForm  from "@/template/authForm/CheckOTPForm";
import ModalContainer from "@/modal/ModalContainer";

export default function AuthForm({ isOpen, setIsOpen }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm mobile={mobile} setStep={setStep} setIsOpen={setIsOpen} />
        </ModalContainer>
      )}
    </>
  );
}
