"use client";
import Image from "next/image";

export default function Error({ reset }) {
  return (
    <div className="errorContainer">
      <div className="errorContext">
        <h2 className="errorText">اتصال با سرور برقرار نیست!</h2>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
        <button onClick={() => reset()} className="retryButton">
          بارگیری مجدد
        </button>
      </div>
      <Image src="/images/Error.webp" alt="notfoundPage" width={300} height={220} priority={true} />
    </div>
  );
}
