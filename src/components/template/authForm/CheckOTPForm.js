"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OtpInput from "react18-input-otp";
import { useCheckOTP } from "@/services/mutations";
import { e2p } from "@/utils/replaceNumber";
import styles from "@/template/authForm/AuthForm.module.css";

export default function CheckOTPForm({ mobile, setStep, setIsOpen, sendOtp }) {
  const { mutate, isPending } = useCheckOTP();
  const [code, setCode] = useState("");
  const [hasError, setHasError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const changeHandler = (enteredOtp) => {
    setCode(enteredOtp);
    if (hasError) setHasError(false);
  };

  const resendOTPHandler = () => {
    sendOtp(true);
    setTimeLeft(30);
    setCanResend(false);
  };

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: () => {
          toast.success("ورود با موفقیت انجام شد");
          setHasError(false);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          setHasError(true);
          toast.error(error?.data.message);
        },
      }
    );
  };

  return (
    <div className={`${styles.form__otp} ${styles.check__otp}`}>
      <h4>کد تایید را وارد کنید.</h4>
      <form onSubmit={checkOtpHandler}>
        <label className={styles.label__checkOTP} htmlFor="phone">
          کد تایید به شماره <span>{e2p(mobile)}</span> ارسال شد
        </label>
        <OtpInput
          value={code}
          onChange={changeHandler}
          numInputs={6}
          hasErrored={hasError}
          isInputNum={true}
          shouldAutoFocus={true}
          containerStyle={{ direction: "ltr", justifyContent: "center" }}
          inputStyle={{
            color: "#000000",
            fontSize: "1.5rem",
            width: "58px",
            height: "53px",
            borderRadius: "6px",
            marginLeft: "12px",
          }}
          errorStyle={{ border: "2px solid red" }}
        />
        <div className={styles.resend}>
          <span className={!canResend || isPending ? styles.show : styles.hide}>
            ارسال مجدد کد تا{" "}
            {e2p(
              Math.floor(timeLeft / 60)
                .toString()
                .padStart(2, "0")
            )}
            :{e2p((timeLeft % 60).toString().padStart(2, "0"))}
          </span>
          <button type="button" onClick={resendOTPHandler} className={!canResend || isPending ? styles.hide : styles.show}>
            ارسال مجدد کد
          </button>
        </div>
        <button type="submit" disabled={isPending || code.length !== 6}>
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}
