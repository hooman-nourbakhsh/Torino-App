import { object, string, number } from "yup";

export const userInfo = object({
  email: string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "فرمت ایمیل معتبر نیست")
    .required("لطفاً ایمیل خود را وارد کنید"),
});

export const personalInfoSchema = object({
  firstName: string().min(2, "نام باید حداقل ۲ کاراکتر باشد").max(20, "نام نمی‌تواند بیشتر از ۲۰ کاراکتر باشد").required("لطفاً نام را وارد کنید"),
  lastName: string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد")
    .max(30, "نام خانوادگی نمی‌تواند بیشتر از ۳۰ کاراکتر باشد")
    .required("لطفاً نام خانوادگی را وارد کنید"),
  nationalCode: number()
    .typeError("لطفاً کد ملی را وارد کنید")
    .test("len", "کد ملی باید دقیقاً ۱۰ رقم باشد", (val) => val && val.toString().length === 10),
  birthDate: string().required("لطفاً تاریخ تولد را وارد کنید"),
  gender: string().required("لطفاً جنسیت را انتخاب کنید"),
});

export const bankAccountSchema = object({
  shaba_code: string().length(24, "شماره شبا باید ۲۴ رقم باشد").required("لطفاً شماره شبا را وارد کنید"),
  debitCard_code: string().length(16, "شماره کارت باید ۱۶ رقم باشد").required("لطفاً شماره کارت را وارد کنید"),
  accountIdentifier: string()
    .min(10, "شماره حساب نباید کمتر از ۱۰ رقم باشد")
    .max(16, "شماره حساب نباید بیشتر از ۱۶ رقم باشد")
    .required("لطفاً شماره حساب را وارد کنید"),
});
