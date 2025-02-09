import { component$ } from "@builder.io/qwik";
import { LocationModal } from "~/components/location-modal/location-modal";
import { MultiSelectModal } from "~/components/multi-select-modal/multi-select-modal";

export const LocationStep = component$(() => {
  return (
    <div class="flex w-full flex-col items-center">
      <h3 class="text-center text-2xl font-semibold">Lokasi</h3>
      <div class="mt-6 grid w-3/5 grid-cols-2 gap-x-12 gap-y-6">
        <LocationModal />
        <MultiSelectModal />
      </div>
    </div>
  );
});
