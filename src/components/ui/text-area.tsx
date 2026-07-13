import type { TextareaHTMLAttributes } from "react";

export function TextArea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full resize-y rounded-md border border-grey-2 bg-background px-4 py-3 text-base font-medium text-grey-10 placeholder:text-grey-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main focus-visible:ring-offset-2 ${className}`}
    />
  );
}
