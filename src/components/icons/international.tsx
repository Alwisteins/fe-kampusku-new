import { component$ } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

export const Iconinternational = component$(
  ({ className }: { className?: string }) => {
    const defaultClass = "transition-colors duration-200";
    const mergedClass = mergeClasses(defaultClass, className);

    return (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={mergedClass}
      >
        <path
          d="M17.625 14.9609L14.8846 11.7308H13.1538L12 10.5769L14.3077 7.11538H18.3462M7.96154 4.23077L9.1853 5.45453C9.84288 6.11211 10.0453 7.09829 9.69992 7.96174V7.96174C9.34688 8.84434 8.49206 9.42308 7.54147 9.42308H5.07692M19.5 10C19.5 14.1421 16.1421 17.5 12 17.5C7.85786 17.5 4.5 14.1421 4.5 10C4.5 5.85786 7.85786 2.5 12 2.5C16.1421 2.5 19.5 5.85786 19.5 10Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);
