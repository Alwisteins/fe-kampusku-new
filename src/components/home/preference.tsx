import { component$ } from "@builder.io/qwik";
import { Button } from "../button";
import { IconSearch } from "../icons/search";

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
      <div class="flex h-1/2 items-center justify-center space-x-4">
        {cardData.map((card) => (
          <div
            key={card.title}
            class="h-fit w-72 space-y-2 rounded-xl bg-sec-100 p-4"
          >
            <h2 class="text-2xl font-bold text-prim-300">{card.title}</h2>
            <p class="text-sm text-[#6B7280]">{card.description}</p>
            <div class="flex justify-end">
              <Button
                title="Cari"
                icon={<IconSearch />}
                iconAlign="right"
                class="bg-transparent text-prim-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
