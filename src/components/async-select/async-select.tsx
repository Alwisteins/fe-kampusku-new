import { component$, QRL } from "@builder.io/qwik";

interface IProps {
  label: string;
  placeholder: string;
  options: { label: string; value: string }[] | [];
  onChange$: QRL<(value: string) => void>;
  disabled?: boolean;
  selectedValue?: string;
}

export const AsyncSelect = component$(
  ({
    label,
    placeholder,
    options,
    onChange$,
    disabled = false,
    selectedValue,
  }: IProps) => {
    return (
      <div class="flex w-full flex-col">
        <label class="mb-2 font-medium">{label}</label>
        <select
          disabled={disabled}
          value={
            options.find((option) => option.value === selectedValue)?.value ||
            ""
          }
          onChange$={(e) => onChange$((e.target as HTMLSelectElement).value)}
          class="w-full rounded-lg border-r-4 border-r-gray-100 bg-gray-100 px-4 py-2 disabled:bg-slate-200"
        >
          <option value="">{placeholder}</option>
          {options?.length
            ? options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))
            : null}
        </select>
      </div>
    );
  },
);
