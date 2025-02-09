import { component$ } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

export const IconLeftArrow = component$(
  ({ className }: { className?: string }) => {
    const defaultClass = "transition-colors duration-200";
    const mergedClass = mergeClasses(defaultClass, className);

    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={mergedClass}
      >
        <path
          d="M13 15L8 10L13 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);
