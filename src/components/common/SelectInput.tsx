import React, { Fragment, forwardRef, Ref } from "react";
import { cls } from "../../utils/helpers";
// import { ExclamationIcon } from "@heroicons/react/outline";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const classes = {
  base: "input",
  error: "!border-red !text-red !placeholder-red ",
  variant: {
    main: "py-2 ",
    table: "py-1 xl:py-2",
  },
};

interface Option {
  id: number;
  name: string;
  className?: string;
}

type Variant = "main" | "table";

interface SelectProps {
  className?: string;
  options: Option[];
  variant?: Variant;
  selected?: Option;
  setSelected: (option: Option) => void;
  label?: string;
  description?: string;
  errors?: Record<string, any>;
  placeholder?: string;
  name: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      options,
      variant = "main",
      selected,
      setSelected,
      label,
      description,
      errors,
      placeholder,
      name,
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <Listbox value={selected} onChange={setSelected} ref={ref} {...props}>
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label className="block text-ss font-semibold mb-2 xl:text-sm">
                {label}
              </Listbox.Label>
            )}
            <div className="relative">
              <Listbox.Button
                className={cls(
                  classes.base,
                  classes.variant[variant],
                  errors && errors[name] && classes.error,
                  className
                )}
              >
                <div className="flex items-center gap-3">
                  {selected?.className && (
                    <span
                      className={cls(
                        selected?.className,
                        "flex-shrink-0 inline-block h-5 w-5"
                      )}
                    />
                  )}
                  <span
                    className={cls(
                      `block truncate`,
                      !selected?.name ? "text-[#b4b6c2]" : "",
                      errors && errors[name] && classes.error
                    )}
                  >
                    {selected?.name ? selected?.name : placeholder}
                  </span>
                </div>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-100 w-full shadow-lg max-h-40 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {Array.isArray(options) &&
                    options.map((option, index) => (
                      <Listbox.Option
                        key={`opt-${index}`}
                        className={({ selected, active }) =>
                          cls(
                            selected
                              ? "bg-[#b4b6c2] text-white"
                              : "bg-[#181f30]",
                            "cursor-pointer select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={option}
                      >
                        {({ active }) => {
                          const isSelected = !!selected?.id
                            ? selected?.id === option?.id
                            : selected?.name === option?.name;
                          return (
                            <>
                              <div className="flex items-center gap-3">
                                {option?.className && (
                                  <span
                                    className={cls(
                                      option?.className,
                                      "flex-shrink-0 inline-block h-5 w-5 rounded-xs"
                                    )}
                                    aria-hidden="true"
                                  />
                                )}
                                <span
                                  className={cls(
                                    isSelected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {option?.name}
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
              {errors && errors[name] && (
                <p className="flex mt-1.25 text-xs lg:text-ss text-red">
                  <span className="ml-1">{errors[name]?.message}</span>
                </p>
              )}
            </div>
          </>
        )}
      </Listbox>
    );
  }
);

export default Select;
