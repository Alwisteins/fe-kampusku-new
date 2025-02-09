import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AboutUsSection } from "./_components/about";
import { WhatWeDoSection } from "./_components/what-we-do";
import { TeamsSection } from "./_components/teams";
import { ContributorSection } from "./_components/contributor";
import { JoinWithUsSection } from "./_components/join-with-us";

export default component$(() => {
  return (
    <div class="space-y-24">
      <AboutUsSection />
      <WhatWeDoSection />
      <TeamsSection />
      <ContributorSection />
      <JoinWithUsSection />
    </div>
  );
});

export const head: DocumentHead = {
  title: "About - Kampusku",
  meta: [
    {
      name: "description",
      content:
        "Kampusku merupakan platform untuk berbagi & mencari tahu informasi kampus di Indonesia.",
    },
  ],
};
