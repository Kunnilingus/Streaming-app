import { FC, useEffect, useRef, useState } from "react";
import "./select.css";
import arrow from "./arrow.png";

type Option = { title: string; value: string };
type OptionProps = {
  option: Option;
  onClick: (value: Option["value"]) => void;
};
type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: Option["value"]): React.MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value);
      }
    };

    option.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <li
      className="option"
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </li>
  );
};

const Select: FC<SelectProps> = (props: SelectProps) => {
  const {
    onClose,
    onChange,
    mode = "rows",
    options,
    status = "default",
    selected,
    placeholder,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);
  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleClick = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };

    placeholderEl.addEventListener("keydown", handleClick);

    return () => {
      placeholderEl.removeEventListener("keydown", handleClick);
    };
  }, []);
  const handleOptionClick = (value: Option["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: React.MouseEventHandler<
    HTMLDivElement
  > = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="selectWrapper"
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className="arrow">
        <img src={arrow} alt="arrow" />
      </div>
      <div
        className="placeholder"
        data-status={status}
        data-selected={!!selected?.value}
        ref={placeholderRef}
        onClick={handlePlaceHolderClick}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className="select">
          {options.map((option) => (
            <OptionEl
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
