import type { SelectHTMLAttributes } from "react";

export type SelectOption = {
  id: string;
  label: string;
};

export function SelectField({
  options,
  placeholder,
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  placeholder?: string;
}) {
  return (
    <select
      {...props}
      defaultValue=""
      className={`w-full rounded-md border border-grey-2 bg-background px-4 py-3 text-base font-medium text-grey-10 placeholder:text-grey-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main focus-visible:ring-offset-2 ${className}`}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
