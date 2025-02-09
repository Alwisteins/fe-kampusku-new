import { component$ } from "@builder.io/qwik";
import { Input } from "~/components/input";

export const BasicInformationStep = component$(() => {
  const campusType = ["Swasta", "Negeri", "Internasional"];
  const campusAccreditation = ["A", "B", "C"];
  const campusCategories = ["Universitas", "Politeknik", "Akademi", "Institut"];

  return (
    <div class="flex w-full flex-col items-center">
      <h3 class="text-center text-2xl font-semibold">Informasi Dasar</h3>
      <div class="mt-6 grid w-3/5 grid-cols-2 gap-x-12 gap-y-6">
        <Input label="Nama Kampus" placeholder="Input nama kampus..." />
        <Input
          label="Tipe Kampus"
          placeholder="Pilih tipe kampus"
          type="select"
          options={campusType.map((type) => ({
            label: type,
            value: type.toLowerCase(),
          }))}
        />
        <Input
          label="Akreditasi kampus"
          placeholder="Pilih akreditasi kampus"
          type="select"
          options={campusAccreditation.map((accreditation) => ({
            label: `Akreditasi ${accreditation}`,
            value: accreditation,
          }))}
        />
        <Input
          label="Kategori Kampus"
          placeholder="Pilih kategori kampus"
          type="select"
          options={campusCategories.map((category) => ({
            label: category,
            value: category.toLowerCase(),
          }))}
        />
        <Input
          label="Visi"
          placeholder="Input visi kampus..."
          type="textarea"
        />
        <Input
          label="Misi"
          placeholder="Input misi kampus..."
          type="textarea"
        />
      </div>
    </div>
  );
});
