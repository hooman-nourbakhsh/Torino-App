"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(String(searchParams));

  const addQuery = (key, value) => {
    value = String(value);
    params.set(key, value);
    router.replace(`?${params}`);
  };

  const removeQuery = (key) => {
    params.delete(key);
    router.replace(`?${params}`);
  };

  const getQuery = (...keys) => {
    return keys.reduce((acc, key) => ({ ...acc, [key]: params.get(key) }), {});
  };

  return { addQuery, removeQuery, getQuery };
}
