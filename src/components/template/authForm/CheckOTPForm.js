"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";
import { e2p } from "@/utils/replaceNumber";
import styles from "@/template/authForm/AuthForm.module.css";

export default function CheckOTPForm({ mobile }) {
  const [code, setCode] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleChange = (enteredOtp) => {
    setCode(enteredOtp);
    if (hasError) setHasError(false);
  };

  return (
    <div className={styles.form__otp}>
      <h4>کد تایید را وارد کنید.</h4>
      <form>
        <label className={styles.label__checkOTP} htmlFor="phone">
          کد تایید به شماره <span>{e2p(mobile)}</span> ارسال شد
        </label>
        <OtpInput
          value={code}
          onChange={handleChange}
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

        <button type="submit" disabled={code.length !== 6}>
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}
