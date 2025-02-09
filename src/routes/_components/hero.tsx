import { component$ } from "@builder.io/qwik";
import { IconGraduationCap } from "~/components/icons/graduation-cap";
import { IconSearch } from "~/components/icons/search";
import { Button } from "../../components/button";

export const HeroSection = component$(() => {
  return (
    <div id="hero" class="flex h-screen items-center justify-around">
      <div class="w-1/2 space-y-4">
        <div class="flex w-fit items-center gap-2 rounded-xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
          <IconGraduationCap /> Tempat nyari kampus se-indonesia
        </div>
        <h1 class="text-5xl font-bold leading-tight">
          Bantu kamu cari referensi kampus{" "}
          <span class="inline-block bg-gradient-to-r from-[#3B82F6] to-[#2F68C5] bg-clip-text text-transparent">
            impianmu
          </span>
        </h1>
        <p class="text-[#6B7280]">
          Menyajikan informasi berbagai macam universitas, politeknik, institut,
          maupun akademi yang ada di indonesia
        </p>
        <div class="flex space-x-2">
          <Button
            title="Cari sekarang"
            icon={<IconSearch />}
            iconAlign="right"
          />
          <Button title="Tentang kami" class="bg-transparent text-[#3b82f6]" />
        </div>
      </div>
      <div class="flex justify-end">
        <img
          alt="Hero Image"
          src="./assets/hero-img.svg"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
});
