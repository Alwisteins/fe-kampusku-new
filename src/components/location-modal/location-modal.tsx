import {
  component$,
  useSignal,
  useResource$,
  Resource,
  $,
} from "@builder.io/qwik";
import { IconLocation } from "../icons/location";
import { Modal } from "@qwik-ui/headless";
import { AsyncSelect } from "../async-select/async-select";
import { Button } from "../button";

interface IProps {
  label?: string;
}

type IRegion = {
  id: string;
  name: string;
};

export const LocationModal = component$(({ label }: IProps) => {
  const value = useSignal("");
  const selectedProvinces = useSignal("");
  const selectedCities = useSignal("");

  const provinces = useResource$(async () => {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`,
    );
    return await response.json();
  });

  const cities = useResource$(async ({ track }) => {
    track(() => selectedProvinces.value);

    if (selectedProvinces.value !== "") {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinces.value}.json`,
      );
      return await response.json();
    }
  });

  const handleSave = $(async () => {
    const province = (await provinces.value).find(
      (p: any) => p.id === selectedProvinces.value,
    );
    const city = (await cities.value)?.find(
      (c: any) => c.id === selectedCities.value,
    );

    if (province && city) {
      const address = `${city.name}, ${province.name}`;
      value.value =
        address.length > 25 ? address.slice(0, 25) + "..." : address;
    }
  });

  return (
    <div class="hover:cursor-pointer">
      <p class="mb-2 max-w-full overflow-x-hidden text-ellipsis font-medium">
        {label ?? "Lokasi"}
      </p>
      <Modal.Root>
        <Modal.Trigger class="modal-trigger w-full">
          <div class="flex items-start rounded-lg bg-gray-100 px-4 py-2 placeholder:text-gray-600">
            <IconLocation className="mr-1 text-gray-600" />
            {value.value !== "" ? value.value : "Pilih lokasi ..."}
          </div>
        </Modal.Trigger>
        <Modal.Panel class="modal-panel rounded-md p-5">
          <Modal.Title class="mb-5 text-center text-xl font-bold">
            Pilih lokasi
          </Modal.Title>
          <div class="flex flex-col space-y-4">
            <Resource
              value={provinces}
              onPending={() => (
                <AsyncSelect
                  label="Provinsi"
                  placeholder="Pilih provinsi"
                  options={[]}
                  onChange$={() => ""}
                  disabled={true}
                />
              )}
              onResolved={(data: IRegion[]) => (
                <AsyncSelect
                  label="Provinsi"
                  placeholder="Pilih provinsi"
                  options={
                    data
                      ? data.map((province) => ({
                          label: province.name,
                          value: province.id,
                        }))
                      : []
                  }
                  onChange$={$((value: string) => {
                    selectedProvinces.value = value;
                    selectedCities.value = "";
                  })}
                  selectedValue={selectedProvinces.value}
                />
              )}
            />
            <Resource
              value={cities}
              onPending={() => (
                <AsyncSelect
                  label="Kota"
                  placeholder="Pilih kota"
                  options={[]}
                  onChange$={() => ""}
                  disabled={true}
                />
              )}
              onResolved={(data: IRegion[]) => (
                <AsyncSelect
                  label="Kota"
                  placeholder="Pilih kota"
                  options={
                    data
                      ? data.map((city) => ({
                          label: city.name,
                          value: city.id,
                        }))
                      : []
                  }
                  onChange$={$(
                    (value: string) => (selectedCities.value = value),
                  )}
                  disabled={selectedProvinces.value === ""}
                  selectedValue={selectedCities.value}
                />
              )}
            />
          </div>
          <footer class="mt-12 flex justify-end space-x-4">
            <Modal.Close class="modal-close">Cancel</Modal.Close>
            <Modal.Close class="modal-close">
              <Button title="Simpan" onClick$={handleSave} />
            </Modal.Close>
          </footer>
        </Modal.Panel>
      </Modal.Root>
    </div>
  );
});
