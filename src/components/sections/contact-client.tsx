"use client";

import { useLayoutEffect, useRef, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormField } from "@/components/ui/form-field";
import { TextInput } from "@/components/ui/text-input";
import { TextArea } from "@/components/ui/text-area";
import { SelectField, type SelectOption } from "@/components/ui/select-field";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  privacyNote: string;
  fields: ContactFormFields;
  serviceItems: SelectOption[];
}

export function ContactClient({
  heading,
  subheading,
  requiredIndicator,
  submitLabel,
  privacyNote,
  fields,
  serviceItems,
}: ContactClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduce-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // Heading + subheading fade in
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

      // Form fields stagger entrance
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

      // Submit button entrance
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

      // Privacy note fade
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Backend integration
  };

  const inputClassName =
    "border-2 border-grey-1 rounded-lg px-4 py-3 text-base transition-[border-color,box-shadow] duration-300 focus:border-brand-normal focus:outline-none focus:ring-2 focus:ring-brand-normal/20";

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
          onSubmit={handleSubmit}
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
              >
                <TextInput
                  id="contact-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder={fields.fullName.placeholder}
                  required
                  aria-required="true"
                  className={inputClassName}
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
              >
                <TextInput
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={fields.email.placeholder}
                  required
                  aria-required="true"
                  className={inputClassName}
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
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={fields.company.placeholder}
                  className={inputClassName}
                />
              </FormField>
            </div>

            {/* Phone */}
            <div data-form-field>
              <FormField id="contact-phone" label={fields.phone.label}>
                <TextInput
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={fields.phone.placeholder}
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
            >
              <SelectField
                id="contact-service"
                name="service"
                placeholder={fields.service.placeholder}
                options={serviceItems}
                required
                aria-required="true"
                className={inputClassName}
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
            >
              <TextArea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={fields.message.placeholder}
                required
                aria-required="true"
                className={inputClassName + " resize-none"}
              />
            </FormField>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={[
              "contact-submit-button",
              "mt-2 self-start px-12 py-4 lg:px-16 lg:py-5",
              "bg-brand-main text-brand-light text-lg font-bold lg:text-xl",
              "rounded-[12px_12px_96px_12px]",
              "border-brand-main border-2",
              "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out",
              "hover:bg-brand-light hover:text-brand-main hover:border-brand-main hover:-translate-y-1 hover:shadow-lg",
              "active:scale-95",
              "motion-reduce:transition-none",
            ].join(" ")}
          >
            {submitLabel}
          </button>
        </form>

        {/* Privacy Note */}
        <p className="contact-privacy-note text-grey-7 text-center text-sm leading-relaxed font-medium">
          {privacyNote}
        </p>
      </div>
    </section>
  );
}
