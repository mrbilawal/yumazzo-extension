import React, { forwardRef, useState } from "react";
// import { ErrorMessage } from "@hookform/error-message";
import { cls } from "../../utils/helpers";
// import { ExclamationIcon } from "@heroicons/react/outline";
// import EyeIcon from "@assets/icons/account/Eye.svg";

interface InputProps {
  type: string;
  className?: string;
  leadingIconComponent?: () => React.ReactNode;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  htmlFor?: string;
  description?: string;
  errors?: Record<string, any>;
  maxLength?: number;
  isPasswordInput?: boolean;
}

const classes = {
  base: "input",
  leadingIcon: "pl-10",
  error: "border-red placeholder-red focus:border-red",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      className,
      leadingIconComponent,
      name,
      autoComplete,
      placeholder,
      label,
      htmlFor,
      description,
      errors,
      maxLength,
      isPasswordInput = false,
      ...props
    },
    ref
  ) => {


    return (
      <>
        <div className="w-full flex flex-col">
          {label && (
            <label className="block text-sm font-semibold mb-2" htmlFor={htmlFor}>
              {label}
            </label>
          )}
          <input
            type={type}
            className={cls(
              classes.base,
              errors?.[name] && classes.error,
              className
            )}
            name={name}
            autoComplete={autoComplete}
            placeholder={placeholder}
            ref={ref}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (type === "number") {
                const value = e.currentTarget.value;
                if (e.key === "e" || e.key === ".") {
                  e.preventDefault();
                  e.stopPropagation();
                } else if (
                  maxLength &&
                  value.length >= maxLength &&
                  e.key !== "Backspace" &&
                  e.key !== "Tab" &&
                  e.key !== "ArrowUp" &&
                  e.key !== "ArrowDown" &&
                  e.key !== "ArrowLeft" &&
                  e.key !== "ArrowRight"
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
            }}
            {...props}
          />

          {errors && errors[name] && (
            <p className="flex mt-1.25 text-xs lg:text-ss text-red">
              <span className="ml-1">{errors[name]?.message}</span>
            </p>
          )}
        </div>
      </>
    );
  }
);

export default Input;
