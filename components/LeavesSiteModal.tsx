// components/LeavesSiteModal.tsx
import { useEffect, useRef } from 'react';

interface LeavesSiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LeavesSiteModal({
  isOpen,
  onClose,
  onConfirm,
}: LeavesSiteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const stayButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const overlay = modalRef.current?.parentElement;
    const backgroundElements = overlay?.parentElement
      ? Array.from(overlay.parentElement.children).filter(
          (element): element is HTMLElement => element instanceof HTMLElement && element !== overlay,
        )
      : [];
    const backgroundState = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
      ariaHidden: element.getAttribute('aria-hidden'),
    }));

    for (const element of backgroundElements) {
      element.inert = true;
      element.setAttribute('aria-hidden', 'true');
    }

    document.body.style.overflow = 'hidden';
    stayButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      for (const { element, inert, ariaHidden } of backgroundState) {
        element.inert = inert;
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      }
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020501]/85 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="leaves-site-title"
        aria-describedby="leaves-site-description"
        className="w-full max-w-lg border border-[#3E6830] bg-[#153009] p-6 shadow-2xl"
      >
        <h2 id="leaves-site-title" className="mb-4 text-xl font-bold text-[#CBB26A]">
          Leaving Clinical Portal
        </h2>
        <p id="leaves-site-description" className="mb-6 text-sm leading-relaxed text-[#C0BFBC]">
          You're leaving the Queer Pathways clinical portal and heading to our retail storefront at <span className="font-semibold text-[#CCDEE0]">queerpathways.com</span>. Your clinical data stays here. Browse freely.
        </p>
        <div className="flex flex-wrap justify-end gap-4">
          <button
            ref={stayButtonRef}
            type="button"
            onClick={onClose}
            className="border border-[#CBB26A] bg-transparent px-4 py-2 text-sm text-[#CCDEE0] transition-colors hover:bg-[#0A1D08]"
          >
            Stay in Sanctuary
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="bg-[#D3B127] px-4 py-2 text-sm font-bold text-[#020501] transition-colors hover:bg-[#CBB26A]"
          >
            Proceed to Storefront
          </button>
        </div>
      </div>
    </div>
  );
}
