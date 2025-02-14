import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";
import { personalInfoSchema } from "@/schema/index";
import { PersianDate, SplitDate } from "@/utils/helper";
import { e2p } from "@/utils/replaceNumber";
import ModalContainer from "@/modal/ModalContainer";
import Edit from "@icons/edit.svg";
import styles from "@/template/profilePage/styles.module.css";

export default function PersonalInfoForm({ userData, submitHandler, isOpen, setIsOpen }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
  });

  useEffect(() => {
    if (userData?.birthDate) {
      setValue("birthDate", userData.birthDate);
    }
  }, [userData, setValue]);

  return (
    <div className={styles.form__container} style={{ margin: "24px auto" }}>
      <div className={styles.infoHeader}>
        <h2>اطلاعات شخصی</h2>
        <div className={styles.submit}>
          <Edit />
          <button onClick={setIsOpen}>{"ویرایش اطلاعات"}</button>
        </div>
      </div>
      <div className={styles.infoGrid}>
        <div className={styles.row}>
          <span className={styles.label}>نام و نام خانوادگی</span>
          <span className={styles.value}>
            {userData?.firstName || "ثبت نشده است"} {userData?.lastName}
          </span>
          <span className={styles.label}>کدملی</span>
          <span className={styles.value}>{e2p(userData?.nationalCode) || "ثبت نشده است"}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>جنسیت</span>
          <span className={styles.value}>{userData?.gender === "male" ? "مرد" : userData?.gender === "female" ? "زن" : "ثبت نشده است"}</span>
          <span className={styles.label}>تاریخ تولد</span>
          <span className={styles.value}>{userData?.birthDate ? PersianDate(userData.birthDate, "D MMM YYYY") : "ثبت نشده است"}</span>
        </div>
      </div>

      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        <form className={styles.form__edit} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.form__inputs}>
            <label>نام</label>
            <input type="text" defaultValue={userData?.firstName} {...register("firstName")} />
            <p className={styles.error}>{errors.firstName?.message || "‎"}</p>

            <label>نام خانوادگی</label>
            <input type="text" defaultValue={userData?.lastName} {...register("lastName")} />
            <p className={styles.error}>{errors.lastName?.message || "‎"}</p>

            <label>کدملی</label>
            <input type="number" defaultValue={userData?.nationalCode} {...register("nationalCode", { valueAsNumber: true })} />
            <p className={styles.error}>{errors.nationalCode?.message || "‎"}</p>

            <div className={styles.form__selects}>
              <label>جنسیت</label>
              <select {...register("gender")} defaultValue={userData?.gender}>
                <option value="female">زن</option>
                <option value="male">مرد</option>
              </select>

              <label>تاریخ تولد</label>
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    accentColor="#28a745"
                    position="center"
                    defaultValue={userData?.birthDate}
                    round="x2"
                    inputClass={styles.datePicker}
                    onChange={(e) => onChange(SplitDate(e.value))}
                  />
                )}
              />
            </div>
            <p className={styles.error}>{errors.birthDate?.message || "‎"}</p>

            <div className={styles.buttons}>
              <button type="submit">تایید</button>
              <button type="button" onClick={setIsOpen}>
                انصراف
              </button>
            </div>
          </div>
        </form>
      </ModalContainer>
    </div>
  );
}
