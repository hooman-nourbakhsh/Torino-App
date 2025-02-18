"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { e2p, p2e } from "@/utils/replaceNumber";
import { mobileNumberSchema } from "@/schema/index";
import styles from "@/template/authForm/AuthForm.module.css";

export default function SendOTPForm({ mobile, setMobile, sendOtp }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mobileNumberSchema),
    defaultValues: { mobile },
  });

  const changeHandler = (e) => {
    const englishValue = p2e(e.target.value);
    setMobile(englishValue);
    setValue("mobile", englishValue);
  };

  const sendOtpHandler = () => {
    sendOtp(false);
  };

  return (
    <div className={styles.form__otp}>
      <h4>ورود به تورینو</h4>
      <form onSubmit={handleSubmit(sendOtpHandler)}>
        <label className={styles.label__sendkOTP}>شماره موبایل خود را وارد کنید</label>
        <input type="text" {...register("mobile")} value={e2p(mobile)} onChange={changeHandler} style={{ textAlign: "left" }} autoComplete="off" />
        <p className={styles.validation}>{errors.mobile?.message || "‎"}</p>
        <button type="submit" style={{ marginTop: "35px" }}>
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
