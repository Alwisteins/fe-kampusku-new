import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation, DocumentHead } from "@builder.io/qwik-city";
import { IconRankColor } from "~/components/icons/rank-color";
import { IconLocation } from "~/components/icons/location";
import { IconBuilding } from "~/components/icons/building";
import { IconRanking } from "~/components/icons/ranking";
import { SearchFilter } from "./_components/search-filter";

export type TRankType = "national" | "international" | null;

const cardData = [
  {
    title: "Universitas Indonesia",
    national_rank: 1,
    international_rank: 537,
    location: "Depok, Indonesia",
    total_faculty: 23,
    accreditation: "A+",
    image: "/assets/image-2.png",
  },
  {
    title: "Universitas Gajah Mada",
    national_rank: 2,
    international_rank: 677,
    location: "Sleman, Yogyakarta",
    total_faculty: 18,
    accreditation: "A",
    image: "/assets/image-3.png",
  },
  {
    title: "Institut Teknologi Bandung",
    national_rank: 3,
    international_rank: 752,
    location: "Bandung, Jawa Barat",
    total_faculty: 12,
    accreditation: "A",
    image: "/assets/image-1.png",
  },
];

export default component$(() => {
  const location = useLocation();
  const type = useSignal<TRankType>(null);

  useTask$(({ track }) => {
    track(() => location.url.search);
    const currentType = location.url.searchParams.get("type") as TRankType;
    type.value = currentType;
  });

  return (
    <div class="mt-8 h-screen">
      <div class="flex flex-col items-center justify-center">
        <div class="flex items-center space-x-2">
          <h2 class="text-2xl font-bold text-prim-300">Kampus</h2>
          <IconRankColor />
        </div>
        <p class="text-[#6B7280]">Tempat nyari kampus paling flexibel</p>
      </div>
      <div class="mt-6 flex justify-center">
        <SearchFilter />
      </div>
      <div class="mt-6 flex flex-col items-center space-y-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            class="group flex h-28 w-[80%] items-center justify-between rounded-xl bg-sec-100 px-4 hover:bg-prim-300 hover:drop-shadow-2xl"
          >
            <div class="flex items-center space-x-2">
              <img src={card.image} alt={card.title} width="180" height="100" />
              <div>
                <h3 class="text-xl font-bold group-hover:text-white">
                  {card.title}
                </h3>
                <p class="flex items-center text-sm text-[#6B7280] group-hover:text-white">
                  <IconLocation className="mr-1 h-4 w-4" />
                  {card.location}
                </p>
                <div class="mt-1 flex space-x-2">
                  <p class="flex items-center text-sm text-[#6B7280] group-hover:text-white">
                    <IconBuilding className="mr-1 h-4 w-4" />
                    {card.total_faculty} Fakultas
                  </p>
                  <p class="flex items-center text-sm text-[#6B7280] group-hover:text-white">
                    <IconRanking className="mr-1 h-4 w-4" />
                    Akreditasi {card.accreditation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Campus - Kampusku",
  meta: [
    {
      name: "description",
      content:
        "Kampusku merupakan platform untuk berbagi & mencari tahu informasi kampus di Indonesia.",
    },
  ],
};
