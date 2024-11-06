import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const TextField = ({ name, label, placeholder, type }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full max-w-[600px]">
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 capitalize"
          >
            {label}
          </label>
          <input
            {...field}
            value={field.value}
            onChange={(e) =>
              type == "number"
                ? field.onChange(Number(e.target.value))
                : field.onChange(e.target.value)
            }
            name={name}
            type={`${type ?? "text"}`}
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {error && (
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-red-500"
            >
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default TextField;
