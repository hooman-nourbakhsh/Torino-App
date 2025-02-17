import { useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "zaman";
import { personalInfoSchema } from "@/schema/index";
import { SplitDate } from "@/utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { e2p, sp } from "@/utils/replaceNumber";
import User from "@icons/profile-black.svg";
import styles from "@/template/checkoutPage/styles.module.css";

export default function Checkout({ userData, basketData, submitHandler }) {
  const filteredSchema = personalInfoSchema.pick(["nationalCode", "birthDate", "gender"]);

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(filteredSchema),
    defaultValues: {
      fullName: userData?.firstName && userData?.lastName ? `${userData?.firstName || ""} ${userData?.lastName || ""}` : undefined,
    },
  });

  useEffect(() => {
    if (errors.nationalCode?.message) {
      toast.error(errors.nationalCode.message);
    } else if (errors.birthDate?.message) {
      toast.error(errors.birthDate.message);
    } else if (errors.gender?.message) {
      toast.error(errors.gender.message);
    }
  }, [errors]);

  return (
    <section className={styles.checkout}>
      <div className={styles.container}>
        <div className={styles.checkout__userInfo}>
          <div className={styles.userInfo__icon}>
            <User />
            <span>مشخصات مسافر</span>
          </div>
          <form>
            <div className={styles.userInfo__inputs}>
              <input type="text" {...register("fullName")} placeholder="نام و نام خانوادگی" />

              <input type="number" defaultValue={userData?.nationalCode} {...register("nationalCode", { valueAsNumber: true })} placeholder="کدملی" />

              <Controller
                control={control}
                name="birthDate"
                defaultValue={userData?.birthDate}
                render={({ field: { onChange } }) => (
                  <DatePicker
                    accentColor="#28a745"
                    position="center"
                    defaultValue={userData?.birthDate}
                    round="x2"
                    inputClass={styles.datePicker}
                    onChange={(e) => onChange(SplitDate(e.value))}
                    inputAttributes={{ placeholder: "تاریخ تولد" }}
                  />
                )}
              />
              <select {...register("gender")} defaultValue={userData?.gender || ""}>
                <option value="" disabled hidden>
                  جنسیت را انتخاب کنید
                </option>
                <option value="female">زن</option>
                <option value="male">مرد</option>
              </select>
            </div>
          </form>
        </div>
        <div className={styles.checkout__orderInfo}>
          <div className={styles.checkout__title}>
            <h3>{basketData?.title}</h3>
            <h4>{e2p(basketData?.options.slice(0, 1))}</h4>
          </div>
          <div className={styles.checkout__price}>
            <span>قیمت نهایی</span>
            <strong>
              {sp(basketData?.price)} <span>تومان</span>
            </strong>
          </div>
          <button onClick={handleSubmit(submitHandler)}>ثبت و خرید نهایی</button>
        </div>
      </div>
    </section>
  );
}
