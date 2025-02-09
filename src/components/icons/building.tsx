import { component$ } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

export const IconBuilding = component$(
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
          d="M10.8333 18.3333H4.16666C2.49999 18.3333 1.66666 17.5 1.66666 15.8333V9.16667C1.66666 7.5 2.49999 6.66667 4.16666 6.66667M10.8333 18.3333C9.16666 18.3333 8.33332 17.5 8.33332 15.8333M10.8333 18.3333H15.8333C17.5 18.3333 18.3333 17.5 18.3333 15.8333V4.16667C18.3333 2.5 17.5 1.66667 15.8333 1.66667H10.8333C9.16666 1.66667 8.33332 2.5 8.33332 4.16667M4.16666 6.66667H8.33332M4.16666 6.66667V5C4.16666 4.08333 4.91666 3.33333 5.83332 3.33333H8.42498C8.35831 3.58333 8.33332 3.85833 8.33332 4.16667M8.33332 6.66667V15.8333M8.33332 6.66667V4.16667M8.33332 15.8333V4.16667M11.6667 6.66667V10.8333M15 6.66667V10.8333M4.99999 10.8333V14.1667M14.1667 14.1667H12.5C12.0417 14.1667 11.6667 14.5417 11.6667 15V18.3333H15V15C15 14.5417 14.625 14.1667 14.1667 14.1667Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);
