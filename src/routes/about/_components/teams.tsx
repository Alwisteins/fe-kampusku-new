import { component$ } from "@builder.io/qwik";
import { IconPeople } from "~/components/icons/people";

const cardData = [
  {
    name: "Alwi Wahyu W.",
    role: "UI UX Designer",
    image: "/assets/alwi.jpg",
  },
];

export const TeamsSection = component$(() => {
  return (
    <div id="about-us" class="h-screen space-y-12">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="flex w-fit items-center gap-2 rounded-2xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
          <IconPeople /> Team kami
        </div>
        <h1 class="text-5xl font-bold leading-tight">
          Dibalik terbentuknya platform ini
        </h1>
        <p class="w-3/5 text-[#6B7280]">
          Terimakasih para pengembang yang telah membantu dalam membentuk
          platform ini
        </p>
      </div>
      <div>
        {cardData.map((card) => (
          <div key={card.name} class="flex flex-col items-center space-y-4">
            <img
              alt={card.name}
              src={card.image}
              width="150"
              height="150"
              class="rounded-full"
            />
            <div class="text-center">
              <h2 class="text-md font-semibold">{card.name}</h2>
              <p class="text-sm text-gray-600">{card.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
