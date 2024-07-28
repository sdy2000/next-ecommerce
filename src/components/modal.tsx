'use client'

import { useEffect, useRef } from "react";

import { toggleModal } from "@/lib/features";
import { useAppDispatch } from "@/lib/hooks";

interface ClickOutsideHandlerProps {
  className?:string;
  children: React.ReactNode;
}

export const Modal = ({ children,className }: ClickOutsideHandlerProps) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      dispatch(toggleModal(""))
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return <div className={className} ref={wrapperRef}>{children}</div>;
};

