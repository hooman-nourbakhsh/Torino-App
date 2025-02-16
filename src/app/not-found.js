import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="errorContainer">
      <div className="errorContext">
        <h2 className="errorText">صفحه مورد نظر یافت نشد!</h2>
        <Link href="/" className="retryButton">
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Image src="/images/ErrorTV.webp" alt="404Page" width={350} height={280} />
    </div>
  );
}
