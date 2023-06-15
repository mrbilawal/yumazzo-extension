import React, { forwardRef } from "react";
import { cls } from "../../utils/helpers";

interface TextAreaProps {
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  htmlFor?: string;
  errors?: Record<string, any>;
  maxLength?: number;
}

const classes = {
  base: "input",
  error: "border-red placeholder-red focus:border-red",
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      name,
      placeholder,
      label,
      htmlFor,
      errors,
      maxLength,
      ...props
    },
    ref
  ) => {
    
    return (
      <div className="w-full flex flex-col">
        {label && (
          <label className="block text-sm font-semibold mb-2" htmlFor={htmlFor}>
            {label}
          </label>
        )}
        <textarea
          className={cls(
            classes.base,
            errors?.[name] && classes.error,
            className
          )}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />

        {errors && errors[name] && (
          <p className="flex mt-1.25 text-xs lg:text-ss text-red">
            <span className="ml-1">{errors[name]?.message}</span>
          </p>
        )}
      </div>
    );
  }
);

export default TextArea;
