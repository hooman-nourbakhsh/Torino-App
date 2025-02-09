import { yekanbakh, vazirmatn } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata = {
  title: "تورینو",
  description: "سایت تور گردشگری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${yekanbakh.variable}`}>{children}</body>
    </html>
  );
}
