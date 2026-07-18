export function PrivacyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="bg-grey-10/40 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-brand-light relative max-h-[80vh] w-full max-w-2xl overflow-y-auto p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "16px 16px 96px 16px",
        }}
      >
        <button
          onClick={onClose}
          className="text-grey-10 hover:text-brand-main absolute top-6 end-6 text-2xl transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="space-y-6">
          <h2 className="text-brand-main text-3xl font-bold">
            Privacy & Policy
          </h2>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              1. Information We Collect
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We collect information you provide directly to us, such as your
              name, email address, phone number, and company details when you
              contact us or request our services.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              2. How We Use Your Information
            </h3>
            <p className="text-grey-9 leading-relaxed">
              Your information is used to provide and improve our services,
              respond to your inquiries, and comply with legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">3. Data Security</h3>
            <p className="text-grey-9 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              4. Cookies and Tracking
            </h3>
            <p className="text-grey-9 leading-relaxed">
              Our website uses cookies to enhance your experience and analyze
              traffic patterns.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">5. Your Rights</h3>
            <p className="text-grey-9 leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. Contact us at info@respect-solutions.com.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              6. Third-Party Links
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We are not responsible for the privacy practices of third-party
              websites linked from our site.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              7. Changes to This Policy
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We may update this privacy policy from time to time. Changes will
              be posted on our website with an updated date.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">8. Contact Us</h3>
            <p className="text-grey-9 leading-relaxed">
              If you have any questions, please contact us at
              info@respect-solutions.com.
            </p>
          </section>

          <button
            onClick={onClose}
            className={[
              "mt-8 w-full px-8 py-3 text-sm font-bold",
              "text-brand-light bg-brand-main",
              "rounded-[12px_12px_96px_12px]",
              "transition-[transform,box-shadow] duration-300 ease-out",
              "hover:-translate-y-1 hover:shadow-lg",
            ].join(" ")}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
