import { component$ } from "@builder.io/qwik";

const cardData = [
  {
    title: "Universitas",
    total: 104,
    image: "./assets/image-1.png",
  },
  {
    title: "Politeknik",
    total: 43,
    image: "./assets/image-2.png",
  },
  {
    title: "Akademi",
    total: 38,
    image: "./assets/image-3.png",
  },
  {
    title: "Institut",
    total: 21,
    image: "./assets/image-4.png",
  },
];

export const CategoriesSection = component$(() => {
  return (
    <div id="categories" class="h-screen">
      <div class="flex flex-col items-center space-y-4 text-center">
        <h1 class="text-5xl font-bold">Kami mengumpulkannya untukmu</h1>
        <p class="max-w-screen-md text-lg text-[#6B7280]">
          Para kontributor, telah mengumpulkan 241 daftar perguruan tinggi yang
          ada di Indonesia dengan kategori universitas, Politeknik, Institut dan
          akademi.
        </p>
      </div>
      <div class="mt-12 flex justify-center">
        <div class="grid w-2/4 grid-cols-1 gap-8 md:grid-cols-2">
          {cardData.map((card) => (
            <div
              key={card.title}
              class="group h-fit space-y-1 rounded-xl bg-sec-100 p-4 transition-colors duration-200 hover:bg-prim-300 hover:drop-shadow-2xl"
            >
              <div class="flex items-center justify-between">
                <h2 class="text-3xl font-bold text-prim-300 drop-shadow-2xl group-hover:text-white">
                  {card.total}
                </h2>
                <img
                  alt={card.title}
                  src={card.image}
                  width="180"
                  height="100"
                />
              </div>
              <h2 class="text-xl font-semibold text-prim-300 group-hover:text-sec-100">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
