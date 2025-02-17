"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/template/authForm";
import { useGetUserData } from "@/services/queries";

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);
  const { data } = useGetUserData();
  const router = useRouter();

  useEffect(() => {
    if (data?.data) {
      router.replace("/");
    }
  }, [data, router]);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  return <AuthForm isOpen={isOpen} setIsOpen={setIsOpen} />;
}
