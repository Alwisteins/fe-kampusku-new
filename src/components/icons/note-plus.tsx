import { component$ } from "@builder.io/qwik";

export const IconNotePlus = component$(
  ({ className, style }: { className?: string; style?: string }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={className}
        style={style}
      >
        <path
          d="M8.67157 18H4.67156C3.56699 18 2.67156 17.1045 2.67157 16L2.67165 4.00002C2.67165 2.89545 3.56708 2.00003 4.67165 2.00003H13.6719C14.7764 2.00003 15.6719 2.89546 15.6719 4.00003V9.50003M14.5 17.6569V14.8285M14.5 14.8285V12M14.5 14.8285L11.6716 14.8285M14.5 14.8285L17.3284 14.8285M6.17188 6.00003H12.1719M6.17188 9.00003H12.1719M6.17188 12H9.17188"
          stroke="#FBFBFB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);
