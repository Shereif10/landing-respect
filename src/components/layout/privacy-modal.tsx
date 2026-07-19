"use client";

import { useEffect, useId, useRef } from "react";
import { useScrollLock } from "@/components/providers/smooth-scroll-provider";

export type PrivacyPolicySection = {
  heading: string;
  body: string;
};

export type PrivacyPolicyContent = {
  title: string;
  intro: string;
  closeLabel: string;
  gotIt: string;
  sections: PrivacyPolicySection[];
};

export function PrivacyModal({
  isOpen,
  onClose,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  content: PrivacyPolicyContent;
}) {
  const titleId = useId();
  const triggerRef = useRef<Element | null>(null);
  const { pause, resume } = useScrollLock();

  // Locks background scroll and hands Lenis control back to the browser
  // while the modal is open, restoring both exactly on close/unmount.
  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement;

    const scrollY = window.scrollY;
    const { body } = document;
    const previousBodyStyle = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    // position:fixed (not just overflow:hidden) is what actually stops
    // background scroll/rubber-banding on iOS Safari — plain overflow:hidden
    // on body is routinely ignored there for touch scrolling.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    // Lenis intercepts wheel/touch input globally to drive its own smoothed
    // scroll of the page — that's what was hijacking scroll gestures made
    // over the modal and routing them to the background instead of the
    // modal's native overflow-y-auto content. Stopping it hands scrolling
    // back to the browser entirely while the modal is open.
    pause();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.position = previousBodyStyle.position;
      body.style.top = previousBodyStyle.top;
      body.style.left = previousBodyStyle.left;
      body.style.right = previousBodyStyle.right;
      body.style.width = previousBodyStyle.width;
      body.style.overflow = previousBodyStyle.overflow;
      window.scrollTo(0, scrollY);

      resume();
      document.removeEventListener("keydown", handleKeyDown);

      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose, pause, resume]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-grey-10/40 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="bg-brand-light relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "16px 16px 96px 16px",
        }}
      >
        <button
          onClick={onClose}
          className="text-grey-10 hover:text-brand-main absolute top-6 end-6 z-10 text-2xl transition-colors"
          aria-label={content.closeLabel}
        >
          ✕
        </button>

        {/* Only this region scrolls — kept separate from the dialog's outer
            frame so the close button (positioned relative to that frame)
            stays put regardless of how far the content is scrolled.
            data-lenis-prevent is a defense-in-depth belt-and-suspenders:
            Lenis is already fully stopped above, but this also tells it to
            ignore input here if it were ever active. overscroll-contain
            stops scroll/bounce from chaining to the page once this
            reaches its own top/bottom. */}
        <div
          className="overflow-y-auto overscroll-contain p-8"
          data-lenis-prevent
        >
          <div className="space-y-6">
            <h2
              id={titleId}
              className="text-brand-main text-3xl font-bold"
            >
              {content.title}
            </h2>

            <p className="text-grey-9 leading-relaxed">{content.intro}</p>

            {content.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h3 className="text-grey-10 text-xl font-bold">
                  {section.heading}
                </h3>
                <p className="text-grey-9 leading-relaxed">{section.body}</p>
              </section>
            ))}

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
              {content.gotIt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
