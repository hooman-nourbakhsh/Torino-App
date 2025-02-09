"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useSendOTP } from "@/services/mutations";
import { isValidMobile } from "@/utils/validation";
import styles from "@/template/authForm/AuthForm.module.css";

export default function SendOTPForm({ mobile, setMobile, setStep }) {
  const { mutate, isPending } = useSendOTP();
  const [error, setError] = useState("");

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید");
    setError("");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data.message);
          toast.info(data?.data.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className={styles.form__otp}>
      <h4>ورود به تورینو</h4>
      <form onSubmit={sendOtpHandler}>
        <label className={styles.label__sendkOTP} htmlFor="phone">
          شماره موبایل خود را وارد کنید
        </label>
        <input type="tel" id="phone" placeholder="۰۹۱۲۰۰۰۰۰۰۰" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        {!!error && error}
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}
