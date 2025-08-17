"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, Copy } from "lucide-react";
import "../styles//Account.css";
import { toast, Toaster } from "sonner";

interface AccountProps {
  title: string;
  accounts: { name: string; bank: string; account: string }[];
}

export default function Account({ title, accounts }: AccountProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setMaxHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);

  const handleCopy = async (account:string) => {
    try {
      await navigator.clipboard.writeText(account);
      toast.success("클립보드에 복사되었습니다!");
    } catch (err) {
      toast.error("복사에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="account-trigger" onClick={() => setOpen(!open)}>
        {title}
        <ChevronDown className={`account-icon ${open ? "rotate" : ""}`} />
      </div>

      <div
        ref={contentRef}
        className={`account-content ${open ? "open" : ""}`}
        style={{ maxHeight }}
      >
        {accounts.map(({ name, bank, account }) => (
          <div key={account} className="account-item">
            <div className="flex items-center gap-1">
              <Copy className="cursor-pointer" onClick={()=>handleCopy(account)}/> {name}
            </div>
            <div>
              {bank} {account}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
