import { component$ } from "@builder.io/qwik";

interface IProps {
  label: string;
  placeholder: string;
  type?: "text" | "textarea" | "select";
  options?: { label: string; value: string }[];
}

export const Input = component$(
  ({ label, placeholder, type = "text", options }: IProps) => {
    return (
      <div class="flex w-full flex-col">
        <label class="mb-2 font-medium">{label}</label>
        {type === "text" && (
          <input
            type="text"
            placeholder={placeholder}
            class="w-full rounded-lg bg-gray-100 px-4 py-2 placeholder:text-gray-600"
          />
        )}
        {type === "textarea" && (
          <textarea
            placeholder={placeholder}
            class="w-full rounded-lg bg-gray-100 px-4 py-2 placeholder:text-gray-600"
          />
        )}
        {type === "select" && (
          <select class="w-full rounded-lg border-r-4 border-r-gray-100 bg-gray-100 px-4 py-2">
            <option value="">{placeholder}</option>
            {options?.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  },
);
