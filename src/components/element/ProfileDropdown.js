"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { setCookie } from "@/utils/cookie";
import { e2p } from "@/utils/replaceNumber";
import Profile from "@icons/profile.svg";
import User from "@icons/profile-white.svg";
import LogoutIcon from "@icons/logout.svg";
import ArrowDown from "@icons/arrow-down.svg";
import styles from "@/element/ProfileDropdown.module.css";

export default function ProfileDropdown({ user }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutHandler = () => {
    setCookie("accessToken", "", -1);
    setCookie("refreshToken", "", -1);
    toast.success("خروج موفق! به امید دیدار مجدد 😊");
    queryClient.clear();
    router.replace("/");
    router.refresh();
  };

  return (
    <div className={styles.profile__dropdown} ref={dropdownRef}>
      <button className={styles.profile__button} onClick={() => setIsOpen((prev) => !prev)}>
        <Profile /> <span>{e2p(user.mobile)}</span> <ArrowDown />
      </button>

      {isOpen && (
        <div className={styles.dropdown__menu}>
          <div className={styles.profile__header}>
            <User /> <span>{e2p(user.mobile)}</span>
          </div>
          <Link href="/profile" className={styles.menu__item} onClick={() => setIsOpen((prev) => !prev)}>
            <User /> اطلاعات حساب کاربری
          </Link>
          <div className={styles.divider}></div>
          <button onClick={logoutHandler} className={styles.menu__item__logout}>
            <LogoutIcon /> خروج از حساب کاربری
          </button>
        </div>
      )}
    </div>
  );
}
