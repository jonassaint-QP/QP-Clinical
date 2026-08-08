// components/LeavesSiteModal.tsx
import React from 'react';

interface LeavesSiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LeavesSiteModal: React.FC<LeavesSiteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020501]/85 backdrop-blur-sm">
      <div className="w-full max-w-lg border border-[#3E6830] bg-[#153009] p-6 shadow-2xl">
        <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">
          Leaving Clinical Portal
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-[#C0BFBC]">
          You're leaving the Queer Pathways clinical portal and heading to our retail storefront at <span className="font-semibold text-[#CCDEE0]">queerpathways.com</span>. Your clinical data stays here. Browse freely.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border border-[#CBB26A] bg-transparent px-4 py-2 text-sm text-[#CCDEE0] transition-colors hover:bg-[#0A1D08]"
          >
            Stay in Sanctuary
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#D3B127] px-4 py-2 text-sm font-bold text-[#020501] transition-colors hover:bg-[#CBB26A]"
          >
            Proceed to Storefront
          </button>
        </div>
      </div>
    </div>
  );
};