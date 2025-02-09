import { component$, useSignal, $ } from "@builder.io/qwik";
import { Modal } from "@qwik-ui/headless";
import { Button } from "../button";

interface IProps {
  label?: string;
}

export const MultiSelectModal = component$(({ label }: IProps) => {
  const value = useSignal("");
  const selectedTransportation = useSignal<string[]>([]);

  const transportations = ["Angkot", "Bus", "Ojek", "KRL", "Sepeda Listrik"];

  const toggleSelection = $((transport: string) => {
    if (selectedTransportation.value.includes(transport)) {
      selectedTransportation.value = selectedTransportation.value.filter(
        (item) => item !== transport,
      );
    } else {
      selectedTransportation.value = [
        ...selectedTransportation.value,
        transport,
      ];
    }
  });

  return (
    <div class="hover:cursor-pointer">
      <p class="mb-2 max-w-full overflow-x-hidden text-ellipsis font-medium">
        {label ?? "Transportasi terdekat"}
      </p>
      <Modal.Root>
        <Modal.Trigger class="modal-trigger w-full">
          <div class="flex items-start rounded-lg bg-gray-100 px-4 py-2 placeholder:text-gray-600">
            {value.value !== "" ? value.value : "Pilih transportasi ..."}
          </div>
        </Modal.Trigger>
        <Modal.Panel class="modal-panel rounded-md p-5">
          <Modal.Title class="mb-5 text-center text-xl font-bold">
            Pilih transportasi
          </Modal.Title>
          <div class="grid grid-cols-2 gap-4">
            {transportations.map((transport) => {
              const isSelected =
                selectedTransportation.value.includes(transport);
              return (
                <div
                  key={transport}
                  class="flex items-center space-x-2 rounded-md border border-black p-2"
                  onClick$={() => toggleSelection(transport)}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onClick$={() => toggleSelection(transport)}
                  />
                  <label>{transport}</label>
                </div>
              );
            })}
          </div>
          <footer class="mt-12 flex justify-end space-x-4">
            <Modal.Close class="modal-close">Cancel</Modal.Close>
            <Modal.Close class="modal-close">
              <Button title="Simpan" />
            </Modal.Close>
          </footer>
        </Modal.Panel>
      </Modal.Root>
    </div>
  );
});
