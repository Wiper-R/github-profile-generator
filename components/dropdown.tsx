"use client";
import React, {
  ComponentProps,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  createContext,
  useContext,
} from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils/cn";

// TODO: Rewrite whole logic

type DropdownProps = { isOpen?: boolean } & PropsWithChildren &
  ComponentProps<"div">;

type DropdownContext = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export function Dropdown({
  children,
  isOpen: _isOpen = false,
  className,
  ...props
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(_isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Use mousedown to catch clicks before blur
    document.addEventListener("mousedown", handleClickOutside as EventListener);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

type DropdownInputProps = ComponentProps<"input"> & {};

export function DropdownInput({ className, ...props }: DropdownInputProps) {
  const { setIsOpen } = useDropdownContext();
  return (
    <Input
      className={cn("text-sm", className)}
      onClick={() => setIsOpen(true)}
      {...props}
      type="search"
    />
  );
}

type DropdownItemsProps = PropsWithChildren & {};

export function DropdownItems({ children }: DropdownItemsProps) {
  const [canFitBelow, setCanFitBelow] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const { isOpen } = useDropdownContext();

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const updateDropdownHeight = () => {
      setDropdownHeight(current.scrollHeight);
    };

    const mutationObserver = new MutationObserver(updateDropdownHeight);
    mutationObserver.observe(current, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    updateDropdownHeight();

    return () => {
      mutationObserver.disconnect();
    };
  }, [children]);

  useEffect(() => {
    const checkFit = () => {
      const current = ref.current;
      if (!current) return;

      const windowHeight = window.innerHeight;
      const dropdownRect = current.getBoundingClientRect();

      const spaceBelow = windowHeight - dropdownRect.top;
      const spaceAbove = dropdownRect.top;

      const fitsBelow = spaceBelow >= dropdownHeight;

      const fitsAbove = spaceAbove >= dropdownHeight;

      if (fitsBelow) {
        setCanFitBelow(true);
      } else if (fitsAbove) {
        setCanFitBelow(false);
      } else {
        setCanFitBelow(true);
      }
    };

    if (isOpen) {
      checkFit();

      window.addEventListener("resize", checkFit);
      window.addEventListener("scroll", checkFit);

      return () => {
        window.removeEventListener("resize", checkFit);
        window.removeEventListener("scroll", checkFit);
      };
    }
  }, [dropdownHeight, isOpen]);

  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "absolute z-50 opacity-0 rounded-md my-2 w-full overflow-auto max-h-0 border-0",
        "transition-all bg-[var(--background)] shadow-lg",
        canFitBelow ? "top-full" : "bottom-full",
        isOpen && "opacity-100 max-h-44 border"
      )}
    >
      {children}
    </div>
  );
}

type DropdownItemProps = ComponentProps<"div"> & {
  onSelect?: () => void;
};

export function DropdownItem({
  className,
  onClick,
  onSelect,
  ...props
}: DropdownItemProps) {
  const { setIsOpen } = useDropdownContext();
  return (
    <div
      className={cn(
        "px-2 py-1 w-full cursor-pointer hover:bg-gray-800 flex gap-2 items-center",
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
        onSelect?.();
        setIsOpen(false);
      }}
      {...props}
    />
  );
}

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("useDropdownContext must be used within a Dropdown");
  return context;
};
