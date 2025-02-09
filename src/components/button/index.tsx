import { component$, QwikJSX, PropFunction } from "@builder.io/qwik";
import { mergeClasses } from "~/utils/merge-classes";

interface ButtonProps {
  title: string;
  icon?: QwikJSX.Element;
  iconAlign?: "left" | "right";
  class?: string;
  onClick$?: PropFunction<() => void>;
}

export const Button = component$<ButtonProps>(
  ({ title, icon, iconAlign, class: userClass, onClick$, ...props }) => {
    const defaultClass =
      "group flex items-center gap-2 rounded-md bg-prim-300 px-4 py-2 text-white transition-colors duration-200";
    const mergedClass = mergeClasses(defaultClass, userClass);

    return (
      <button class={mergedClass} onClick$={onClick$} {...props}>
        {icon && iconAlign === "left" && icon}
        {title}
        {icon && iconAlign === "right" && icon}
      </button>
    );
  },
);
