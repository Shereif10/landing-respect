import type { InputHTMLAttributes } from "react";

export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-md border border-grey-2 bg-background px-4 py-3 text-base font-medium text-grey-10 placeholder:text-grey-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main focus-visible:ring-offset-2 ${className}`}
    />
  );
}
