import { component$ } from "@builder.io/qwik";

export const IconRankColor = component$(
  ({ className, style }: { className?: string; style?: string }) => {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style={style}
        class={className}
      >
        <rect width="70" height="70" fill="url(#pattern0_94_479)" />
        <defs>
          <pattern
            id="pattern0_94_479"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_94_479" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_94_479"
            width="100"
            height="100"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
);
