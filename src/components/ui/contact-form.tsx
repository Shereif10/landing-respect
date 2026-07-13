"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { TextInput } from "@/components/ui/text-input";
import { TextArea } from "@/components/ui/text-area";
import { SelectField, type SelectOption } from "@/components/ui/select-field";

export type ContactFieldCopy = {
  label: string;
  placeholder: string;
};

export type ContactFormFields = {
  fullName: ContactFieldCopy;
  company: ContactFieldCopy;
  email: ContactFieldCopy;
  phone: ContactFieldCopy;
  service: ContactFieldCopy;
  message: ContactFieldCopy;
};

/**
 * No backend integration exists yet. Submitting only stops the browser's
 * default navigation — native HTML validation (`required`, `type="email"`)
 * still runs, but nothing is sent anywhere.
 */
export function ContactForm({
  fields,
  requiredIndicator,
  submitLabel,
  items,
}: {
  fields: ContactFormFields;
  requiredIndicator: string;
  submitLabel: string;
  items: SelectOption[];
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
        />
      </FormField>

      <FormField id="contact-company" label={fields.company.label}>
        <TextInput
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={fields.company.placeholder}
        />
      </FormField>

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
        />
      </FormField>

      <FormField id="contact-phone" label={fields.phone.label}>
        <TextInput
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={fields.phone.placeholder}
        />
      </FormField>

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
          options={items}
          required
          aria-required="true"
        />
      </FormField>

      <FormField
        id="contact-message"
        label={fields.message.label}
        required
        requiredIndicator={requiredIndicator}
      >
        <TextArea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={fields.message.placeholder}
          required
          aria-required="true"
        />
      </FormField>

      <Button type="submit" variant="primary" className="self-start">
        {submitLabel}
      </Button>
    </form>
  );
}
