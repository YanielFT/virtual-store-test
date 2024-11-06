import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
  label?: string;
  helperText?: React.ReactNode;
  row?: boolean;
  className?: string;
}

const RadioGroupField: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  helperText,
  row,
  className,
  ...other
}) => {
  const { control } = useFormContext();

  const labelledby = label ? `${name}-${label}` : "";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} radio-group-container`}>
          {label && (
            <label
              className="block mb-2 text-sm font-medium text-gray-900 capitalize"
              id={labelledby}
            >
              {label}
            </label>
          )}

          <div
            className={`radio-group ${row ? "radio-group-row" : ""}`}
            aria-labelledby={labelledby}
            {...other}
          >
            {options.map((option) => (
              <label key={option.value} className={"mr-3 "}>
                <input
                  type="radio"
                  {...field}
                  checked={field.value === option.value}
                  onChange={() => field.onChange(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>

          {(!!error || helperText) && (
            <div
              className="helper-text"
              style={{ color: error ? "red" : "black" }}
            >
              {error ? error.message : helperText}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default RadioGroupField;
