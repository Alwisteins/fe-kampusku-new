import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/routes/_components/hero";
import { PreferenceSection } from "~/routes/_components/preference";
import { CategoriesSection } from "~/routes/_components/categories";
import { ContributorSection } from "~/routes/_components/contributor";
import { ContributesSection } from "~/routes/_components/contributes";

export default component$(() => {
  return (
    <div class="space-y-24">
      <HeroSection />
      <PreferenceSection />
      <CategoriesSection />
      <ContributorSection />
      <ContributesSection />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home - Kampusku",
  meta: [
    {
      name: "description",
      content:
        "Kampusku merupakan platform untuk berbagi & mencari tahu informasi kampus di Indonesia.",
    },
  ],
};
