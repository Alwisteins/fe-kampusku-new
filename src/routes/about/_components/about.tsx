import { component$ } from "@builder.io/qwik";
import { IconPeople } from "~/components/icons/people";

export const AboutUsSection = component$(() => {
  return (
    <div
      id="about-us"
      class="flex h-screen flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="flex w-fit items-center gap-2 rounded-2xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
        <IconPeople /> Tentang kami
      </div>
      <h1 class="text-5xl font-bold leading-tight">
        Kami ingin membantu{" "}
        <span class="inline-block bg-gradient-to-r from-[#3B82F6] to-[#2F68C5] bg-clip-text text-transparent">
          pendidikan
        </span>{" "}
        di Indonesia
      </h1>
      <p class="w-3/5 text-[#6B7280]">
        Melalui kemudahan informasi mengenai kampus di Indonesia. Kami berharap
        dapat meningkatkan minat generasi muda untuk melanjutkan pendidikan
        mereka.
      </p>
    </div>
  );
});
