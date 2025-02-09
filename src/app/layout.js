import { yekanbakh, vazirmatn } from "@/utils/fonts";
import QueryProvider from "@/providers/QueryProvider";
import Layout from "@/layout/Layout";
import { ToastContainer } from "react-toastify";
import "@/app/globals.css";

export const metadata = {
  title: "تورینو",
  description: "سایت تور گردشگری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${yekanbakh.variable}`}>
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
        <ToastContainer autoClose={2500} rtl={true} pauseOnHover={false} pauseOnFocusLoss={false} />
      </body>
    </html>
  );
}
