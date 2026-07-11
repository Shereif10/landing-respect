import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-3 font-sans text-lg font-[750] leading-[1.2] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main focus-visible:ring-offset-2";

const variantClasses = {
  primary:
    "radius-cta bg-brand-main px-8 py-6 text-grey-1 hover:bg-brand-main/90",
  secondary:
    "-mx-2 gap-2.5 border-b border-brand-main px-2 py-2 text-sm font-[650] ltr:tracking-[-0.07em] text-brand-main hover:opacity-80",
} as const;

type ButtonVariant = keyof typeof variantClasses;

type CommonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
