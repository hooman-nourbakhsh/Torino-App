"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { toast } from "react-toastify";
import QueryString from "qs";
import { Date2Iso, flattenObject } from "@/utils/helper";
import useQueryParams from "@/hooks/queryParams";
import Origin from "@icons/location.svg";
import Destination from "@icons/global-search.svg";
import Calendar from "@icons/calendar-3.svg";
import styles from "@/module/SearchSection.module.css";

export default function SearchSection() {
  const { register, handleSubmit, control, reset } = useForm();
  const router = useRouter();
  const { getQuery } = useQueryParams();

  useEffect(() => {
    const { originId, destinationId } = getQuery("originId", "destinationId");

    reset({
      originId: originId || "",
      destinationId: destinationId || "",
    });
  }, [reset]);

  const submitHandler = (formData) => {
    const { originId, destinationId, date } = formData;
    if (!originId && !destinationId && !date) {
      toast.info("برای جستجو لطفاً یک مورد را نتخاب کنید");
      return;
    }

    const query = QueryString.stringify(flattenObject(formData));
    router.push(`/?${query}`);
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__form}>
        <form className={styles.search__field_group} onSubmit={handleSubmit(submitHandler)}>
          <div className={`${styles.search__field} ${styles.search__origin}`}>
            <Origin />
            <select id="origin" {...register("originId")}>
              <option value="" disabled hidden>
                مبدا
              </option>

              <option className={styles.originId} disabled>
                پرتردد
              </option>
              <option value="1">تهران</option>
              <option value="2">سنندج</option>
              <option value="3">مشهد</option>
            </select>
          </div>

          <div className={`${styles.search__field} ${styles.search__destination}`}>
            <Destination />
            <select id="destination" {...register("destinationId")}>
              <option value="" disabled hidden>
                مقصد
              </option>
              <option value="2">اربیل</option>
              <option value="3">ایتالیا</option>
              <option value="4">کیش</option>
              <option value="7">مازندران</option>
              <option value="9">سلیمانیه</option>
            </select>
          </div>

          <div className={`${styles.search__field} ${styles.search__date}`}>
            <Calendar />
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <DatePicker
                  round="x2"
                  accentColor="#28a745"
                  onChange={(e) => onChange({ startDate: Date2Iso(e.from), endDate: Date2Iso(e.to) })}
                  range
                  inputAttributes={{ placeholder: "تاریخ" }}
                />
              )}
            />
          </div>

          <button type="submit">جستجو</button>
        </form>
      </div>
    </div>
  );
}
