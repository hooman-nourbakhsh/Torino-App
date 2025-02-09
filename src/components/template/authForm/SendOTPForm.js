import styles from "@/template/authForm/AuthForm.module.css";

export default function SendOTPForm({ mobile, setMobile }) {
  return (
    <div className={styles.form__otp}>
      <h4>ورود به تورینو</h4>
      <form>
        <label className={styles.label__sendkOTP} htmlFor="phone">
          شماره موبایل خود را وارد کنید
        </label>
        <input type="tel" id="phone" placeholder="۰۹۱۲۰۰۰۰۰۰۰" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}
