import { component$ } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

export const IconTools = component$(({ className }: { className?: string }) => {
  const defaultClass = "transition-colors duration-200";
  const mergedClass = mergeClasses(defaultClass, className);

  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={mergedClass}
    >
      <path
        d="M17.9845 6.14586C17.973 6.01233 17.675 5.7559 17.5488 5.71016C17.4224 5.66414 17.2809 5.69547 17.1858 5.79007L15.2778 7.69807L12.7995 5.21978L14.7456 3.28093C14.8409 3.18614 14.872 3.04511 14.8261 2.91937C14.7797 2.79338 14.4742 2.52646 14.3398 2.51489C13.1579 2.41344 11.9998 2.83384 11.1625 3.66812C10.0158 4.81065 9.71209 6.47907 10.2498 7.90119C10.1911 7.95052 10.1331 8.0028 10.0759 8.05916L3.57954 14.1661C3.57724 14.1683 3.57498 14.1707 3.57251 14.1729C2.80851 14.9341 2.80851 16.1725 3.57251 16.9338C4.33662 17.6949 5.57065 17.6856 6.33452 16.9245C6.33781 16.9214 6.34083 16.9184 6.34384 16.9149L12.4204 10.3927C12.4758 10.3373 12.5272 10.2793 12.5757 10.2197C14.0036 10.7564 15.6794 10.4546 16.8271 9.31134C17.6642 8.477 18.0865 7.32319 17.9845 6.14586Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
});
