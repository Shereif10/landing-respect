import type { ReactNode } from "react";

/**
 * Label + control wrapper shared by every field in ContactForm. The caller
 * passes the same `id` to both FormField and its child control so the
 * `<label>` stays correctly associated via `htmlFor`.
 */
export function FormField({
  id,
  label,
  required = false,
  requiredIndicator,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  requiredIndicator?: string;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-grey-10">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-brand-main">
              {" "}
              *
            </span>
            {requiredIndicator && (
              <span className="sr-only"> {requiredIndicator}</span>
            )}
          </>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
