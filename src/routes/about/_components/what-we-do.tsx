import { component$ } from "@builder.io/qwik";
import { IconTools } from "~/components/icons/tools";

export const WhatWeDoSection = component$(() => {
  return (
    <div id="what-we-do" class="">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="flex w-fit items-center gap-2 rounded-2xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
          <IconTools /> Apa yang kami lakukan
        </div>
        <h1 class="text-5xl font-bold leading-tight">
          Apa sih yang kami bantu?
        </h1>
        <p class="w-3/5 text-[#6B7280]">
          Bersama para kontributor, kami membantu kamu dengan cara
          memperkenalkan berbagai kampus di Indonesia agar menjadi referensimu,
          menaikan minatmu dan penghubungmu
        </p>
      </div>
      <div class="my-10 flex items-center justify-center">
        <div class="space-y-6">
          <div class="group ml-12 h-fit w-72 rotate-3 transform space-y-2 rounded-xl bg-sec-100 p-4 transition-all duration-200 hover:bg-prim-300 hover:drop-shadow-xl">
            <h2 class="text-xl font-bold text-prim-300 group-hover:text-white">
              Jadi Referensimu
            </h2>
            <p class="text-sm text-[#6B7280] group-hover:text-sec-100">
              Biar kamu ga bingung nentuin kampus yang cocok bagimu
            </p>
          </div>

          <div class="group h-fit w-72 space-y-2 rounded-xl bg-sec-100 p-4 transition-colors duration-200 hover:bg-prim-300 hover:drop-shadow-xl">
            <h2 class="text-xl font-bold text-prim-300 group-hover:text-white">
              Naikin Minatmu
            </h2>
            <p class="text-sm text-[#6B7280] group-hover:text-sec-100">
              Biar kamu makin yakin dengan pilihanmu untuk masa depan
            </p>
          </div>
          <div class="group ml-16 h-fit w-72 rotate-3 transform space-y-2 rounded-xl bg-sec-100 p-4 transition-colors duration-200 hover:bg-prim-300 hover:drop-shadow-xl">
            <h2 class="text-xl font-bold text-prim-300 group-hover:text-white">
              Jadi Penghubungmu
            </h2>
            <p class="text-sm text-[#6B7280] group-hover:text-sec-100">
              Titik temu buat pencari kampus dan pihak kampus.
            </p>
          </div>
        </div>

        <img
          src="/assets/what-we-do.svg"
          alt="what we do"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
});
