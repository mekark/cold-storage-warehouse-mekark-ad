import { ReactNode } from "react";

type EnquiryFormButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export default function EnquiryFormButton({
  children,
  className = "",
  showArrow = false,
}: EnquiryFormButtonProps) {
  return (
    <a href="#enquiry-form" className={className}>
      {children}
      {showArrow && <span className="ml-3 text-[22px]">→</span>}
    </a>
  );
}
