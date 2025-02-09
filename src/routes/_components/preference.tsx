import { component$ } from "@builder.io/qwik";
import { Button } from "../../components/button";
import { IconSearch } from "../../components/icons/search";

const cardData = [
  {
    title: "Top Rangking",
    description:
      "Semakin tinggi peringkatnya, harus semakin semangat persiapannya ya.",
  },
  {
    title: "Deket Rumah",
    description:
      "Ga harus jauh-jauh buat bisa kuliah. kamu bisa nyari yang deket kok, jarak jangan jadi alasan ya.",
  },
  {
    title: "Akreditasi A+",
    description:
      "Salah satu faktor bagus buat menilai kualitas kampus yang baik untukmu",
  },
];

export const PreferenceSection = component$(() => {
  return (
    <div id="preference" class="h-screen">
      <div class="space-y-4 text-center">
        <h1 class="text-5xl font-bold">Apa preferensi kampus impianmu</h1>
        <p class="text-lg text-[#6B7280]">
          Beritahu kami, apa preferensi kampus impian yang kamu lebih sukai
        </p>
      </div>
      <div class="flex h-1/2 items-center justify-center gap-8">
        {cardData.map((card) => (
          <div
            key={card.title}
            class="group h-fit w-72 space-y-2 rounded-xl bg-sec-100 p-4 transition-colors duration-200 hover:bg-prim-300 hover:drop-shadow-xl"
          >
            <h2 class="text-2xl font-bold text-prim-300 group-hover:text-white">
              {card.title}
            </h2>
            <p class="text-sm text-[#6B7280] group-hover:text-sec-100">
              {card.description}
            </p>
            <div class="flex justify-end">
              <Button
                title="Cari"
                icon={<IconSearch />}
                iconAlign="right"
                class="bg-transparent text-prim-300 group-hover:text-sec-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
