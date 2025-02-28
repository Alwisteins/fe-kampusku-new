import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { LocationModal } from "~/components/location-modal/location-modal";
import { MultiSelectModal } from "~/components/multi-select-modal/multi-select-modal";
import { Button } from "~/components/button";
import { IconAdd } from "~/components/icons/add";

interface IBranch {
  location: {
    province: string;
    city: string;
  };
  transportations: string[];
}

export const LocationStep = component$(() => {
  const branches = useSignal<IBranch[]>([]);

  const handleAddBranch = $(() => {
    branches.value = [
      ...branches.value,
      {
        location: { province: "", city: "" },
        transportations: [],
      },
    ];
  });

  return (
    <div class="flex w-full flex-col items-center">
      <h3 class="text-center text-2xl font-semibold">Lokasi</h3>
      <div class="mt-6 grid w-3/5 grid-cols-2 gap-x-12">
        <LocationModal />
        <MultiSelectModal />
      </div>
      {branches.value.map((branch, index) => (
        <div key={index} class="mt-6 grid w-3/5 grid-cols-2 gap-x-12">
          <LocationModal label={`Cabang ${index + 1}`} />
          <MultiSelectModal />
        </div>
      ))}
      <div class="mt-6 flex justify-center">
        <Button
          title="Tambah Cabang"
          icon={<IconAdd />}
          iconAlign="left"
          onClick$={handleAddBranch}
        />
      </div>
    </div>
  );
});
