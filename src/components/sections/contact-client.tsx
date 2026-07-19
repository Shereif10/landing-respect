"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "@/lib/gsap";
import { FormField } from "@/components/ui/form-field";
import { TextInput } from "@/components/ui/text-input";
import { TextArea } from "@/components/ui/text-area";
import { SelectField, type SelectOption } from "@/components/ui/select-field";

type ContactFieldCopy = {
  label: string;
  placeholder: string;
};

type ContactFormFields = {
  fullName: ContactFieldCopy;
  company: ContactFieldCopy;
  email: ContactFieldCopy;
  phone: ContactFieldCopy;
  service: ContactFieldCopy;
  message: ContactFieldCopy;
};

interface ContactClientProps {
  heading: string;
  subheading: string;
  requiredIndicator: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
  privacyNote: string;
  fields: ContactFormFields;
  serviceItems: SelectOption[];
}

// Validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactClient({
  heading,
  subheading,
  requiredIndicator,
  submitLabel,
  sendingLabel,
  successMessage,
  errorMessage,
  privacyNote,
  fields,
  serviceItems,
}: ContactClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const resetStatusTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetStatusTimeout.current) clearTimeout(resetStatusTimeout.current);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      gsap.from([headingRef.current, ".contact-subheading"], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const formFields = formRef.current?.querySelectorAll("[data-form-field]");
      if (formFields) {
        gsap.from(formFields, {
          opacity: 0,
          x: 40,
          duration: 0.7,
          stagger: prefersReducedMotion ? 0 : 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }

      gsap.from(".contact-submit-button", {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.7,
        delay: formFields ? formFields.length * 0.12 + 0.1 : 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-privacy-note", {
        opacity: 0,
        duration: 0.6,
        delay: formFields ? formFields.length * 0.12 + 0.3 : 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [fields, serviceItems.length]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Web3Forms API
      const formData = new FormData();
      formData.append("access_key", "1939a4ab-6307-4ddb-9174-111363606b12");
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("company", data.company || "");
      formData.append("phone", data.phone || "");
      formData.append("service", data.service);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
      resetStatusTimeout.current = setTimeout(
        () => setSubmitStatus("idle"),
        5000,
      );
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      resetStatusTimeout.current = setTimeout(
        () => setSubmitStatus("idle"),
        5000,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "border-2 border-grey-1 rounded-lg px-4 py-3 text-base transition-[border-color,box-shadow] duration-300 focus:border-brand-normal focus:outline-none focus:ring-2 focus:ring-brand-normal/20";

  const errorClassName =
    "border-red-500 focus:border-red-500 focus:ring-red-500/20";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-[640px] flex-col gap-8 lg:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <h2
            ref={headingRef}
            className="text-grey-10 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="contact-subheading text-grey-9 text-lg leading-relaxed font-medium md:text-xl">
            {subheading}
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={(event) => handleSubmit(onSubmit)(event)}
          className="flex flex-col gap-6 lg:gap-8"
        >
          {/* Row 1: Full Name + Email */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
            {/* Full Name */}
            <div data-form-field>
              <FormField
                id="contact-full-name"
                label={fields.fullName.label}
                required
                requiredIndicator={requiredIndicator}
                error={errors.fullName?.message}
              >
                <TextInput
                  id="contact-full-name"
                  placeholder={fields.fullName.placeholder}
                  {...register("fullName")}
                  className={`${inputClassName} ${errors.fullName ? errorClassName : ""}`}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
                />
              </FormField>
            </div>

            {/* Email */}
            <div data-form-field>
              <FormField
                id="contact-email"
                label={fields.email.label}
                required
                requiredIndicator={requiredIndicator}
                error={errors.email?.message}
              >
                <TextInput
                  id="contact-email"
                  type="email"
                  placeholder={fields.email.placeholder}
                  {...register("email")}
                  className={`${inputClassName} ${errors.email ? errorClassName : ""}`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
              </FormField>
            </div>
          </div>

          {/* Row 2: Company + Phone */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
            {/* Company */}
            <div data-form-field>
              <FormField id="contact-company" label={fields.company.label}>
                <TextInput
                  id="contact-company"
                  placeholder={fields.company.placeholder}
                  {...register("company")}
                  className={inputClassName}
                />
              </FormField>
            </div>

            {/* Phone */}
            <div data-form-field>
              <FormField id="contact-phone" label={fields.phone.label}>
                <TextInput
                  id="contact-phone"
                  type="tel"
                  placeholder={fields.phone.placeholder}
                  {...register("phone")}
                  className={inputClassName}
                />
              </FormField>
            </div>
          </div>

          {/* Row 3: Service (Full Width) */}
          <div data-form-field>
            <FormField
              id="contact-service"
              label={fields.service.label}
              required
              requiredIndicator={requiredIndicator}
              error={errors.service?.message}
            >
              <SelectField
                id="contact-service"
                placeholder={fields.service.placeholder}
                options={serviceItems}
                {...register("service")}
                className={`${inputClassName} ${errors.service ? errorClassName : ""}`}
                aria-invalid={errors.service ? "true" : "false"}
                aria-describedby={errors.service ? "contact-service-error" : undefined}
              />
            </FormField>
          </div>

          {/* Row 4: Message (Full Width) */}
          <div data-form-field>
            <FormField
              id="contact-message"
              label={fields.message.label}
              required
              requiredIndicator={requiredIndicator}
              error={errors.message?.message}
            >
              <TextArea
                id="contact-message"
                rows={4}
                placeholder={fields.message.placeholder}
                {...register("message")}
                className={`${inputClassName} resize-none ${errors.message ? errorClassName : ""}`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
            </FormField>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={[
              "contact-submit-button",
              "mt-2 self-start px-12 py-4 lg:px-16 lg:py-5",
              "bg-brand-main text-brand-light text-lg font-bold lg:text-xl",
              "rounded-[12px_12px_96px_12px]",
              "border-brand-main border-2",
              "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out",
              "hover:bg-brand-light hover:text-brand-main hover:border-brand-main hover:-translate-y-1 hover:shadow-lg",
              "active:scale-95",
              "disabled:cursor-not-allowed disabled:opacity-60",
              "motion-reduce:transition-none",
            ].join(" ")}
          >
            {isSubmitting ? sendingLabel : submitLabel}
          </button>
        </form>

        {/* Submit Status Messages */}
        {submitStatus === "success" && (
          <div
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 p-4 text-center text-green-800"
          >
            ✓ {successMessage}
          </div>
        )}

        {submitStatus === "error" && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-800"
          >
            ✗ {errorMessage}
          </div>
        )}

        {/* Privacy Note */}
        <p className="contact-privacy-note text-grey-7 text-center text-sm leading-relaxed font-medium">
          {privacyNote}
        </p>
      </div>
    </section>
  );
}
