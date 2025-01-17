import { component$, QwikIntrinsicElements, QwikJSX } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

interface ButtonProps {
  title: string;
  icon?: QwikJSX.Element;
  iconAlign?: "left" | "right";
  class?: string;
}

export const Button = component$<ButtonProps>(
  ({ title, icon, iconAlign, class: userClass, ...props }) => {
    const defaultClass =
      "flex items-center gap-2 rounded-md bg-prim-300 px-4 py-2 text-white";
    const mergedClass = mergeClasses(defaultClass, userClass);

    return (
      <button class={mergedClass} {...props}>
        {icon && iconAlign === "left" && icon}
        {title}
        {icon && iconAlign === "right" && icon}
      </button>
    );
  },
);
