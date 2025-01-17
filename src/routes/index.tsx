import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/home/hero";
import { PreferenceSection } from "~/components/home/preference";

export default component$(() => {
  return (
    <div class="space-y-24">
      <HeroSection />
      <PreferenceSection />
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
