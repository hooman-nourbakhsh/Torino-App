import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [
    { path: "../app/fonts/vazir/Vazirmatn-Thin.woff2", weight: "100", style: "normal" },
    { path: "../app/fonts/vazir/Vazirmatn-Light.woff2", weight: "300", style: "normal" },
    { path: "../app/fonts/vazir/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/vazir/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/vazir/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/vazir/Vazirmatn-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-vazirmatn",
});

export const yekanbakh = localFont({
  src: [
    { path: "../app/fonts/yekan/YekanBakh-Thin.woff2", weight: "100", style: "normal" },
    { path: "../app/fonts/yekan/YekanBakh-Light.woff2", weight: "300", style: "normal" },
    { path: "../app/fonts/yekan/YekanBakh-Regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/yekan/YekanBakh-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/yekan/YekanBakh-Bold.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/yekan/YekanBakh-Heavy.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-yekanbakh",
});
