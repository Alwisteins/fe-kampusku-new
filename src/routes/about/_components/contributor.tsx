import { component$ } from "@builder.io/qwik";
import { IconPeople } from "~/components/icons/people";

const cardData = [
  [
    { name: "John Doe", image: "/assets/profile-1.png" },
    { name: "Jane Smith", image: "/assets/profile-1.png" },
    { name: "Alice Brown", image: "/assets/profile-1.png" },
    { name: "Charlie White", image: "/assets/profile-1.png" },
    { name: "Emily Davis", image: "/assets/profile-1.png" },
    { name: "Daniel Johnson", image: "/assets/profile-1.png" },
    { name: "Sophia Moore", image: "/assets/profile-1.png" },
    { name: "Michael Taylor", image: "/assets/profile-1.png" },
  ],
  [
    { name: "Lucas Lee", image: "/assets/profile-1.png" },
    { name: "Olivia Wilson", image: "/assets/profile-1.png" },
    { name: "Ethan Harris", image: "/assets/profile-1.png" },
    { name: "Emma Clark", image: "/assets/profile-1.png" },
    { name: "Benjamin Martinez", image: "/assets/profile-1.png" },
    { name: "Ava Lewis", image: "/assets/profile-1.png" },
    { name: "Alexander Hall", image: "/assets/profile-1.png" },
    { name: "Isabella Allen", image: "/assets/profile-1.png" },
  ],
  [
    { name: "James Young", image: "/assets/profile-1.png" },
    { name: "Mia King", image: "/assets/profile-1.png" },
    { name: "William Scott", image: "/assets/profile-1.png" },
    { name: "Ella Green", image: "/assets/profile-1.png" },
    { name: "Henry Adams", image: "/assets/profile-1.png" },
    { name: "Grace Baker", image: "/assets/profile-1.png" },
    { name: "Samuel Nelson", image: "/assets/profile-1.png" },
    { name: "Chloe Hill", image: "/assets/profile-1.png" },
  ],
];

export const ContributorSection = component$(() => {
  return (
    <div id="about-us" class="h-screen space-y-12">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="flex w-fit items-center gap-2 rounded-2xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
          <IconPeople /> Para kontributor
        </div>
        <h1 class="w-[90%] text-5xl font-bold leading-tight">
          Puluhan kotributor yang membantu kami
        </h1>
        <p class="w-3/5 text-[#6B7280]">
          Terimakasih para kontributor yang telah membantu dalam membentuk
          platform ini
        </p>
      </div>
      <div class="space-y-4">
        {cardData.map((cardParent, parentIndex) => (
          <div
            key={parentIndex}
            class={`${parentIndex % 2 === 0 ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse"} flex space-x-4`}
          >
            {[...cardParent, ...cardParent].map((card, cardIndex) => (
              <div
                key={cardIndex}
                class={`${cardIndex % 2 === 0 ? "bg-sec-100" : "bg-prim-300"} justify-space-between flex h-14 min-w-60 items-center space-x-3 rounded-xl p-4 hover:drop-shadow-2xl`}
              >
                <img
                  alt={card.name}
                  src={card.image}
                  width="35"
                  height="35"
                  class="rounded-full"
                />
                <h2
                  class={`${cardIndex % 2 === 0 ? "text-black" : "text-sec-100"} text-md font-medium drop-shadow-2xl`}
                >
                  {card.name}
                </h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
