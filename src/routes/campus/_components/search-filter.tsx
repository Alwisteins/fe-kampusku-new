import { component$ } from "@builder.io/qwik";
import { IconSearch } from "~/components/icons/search";

export const SearchFilter = component$(() => {
  return (
    <div class="flex w-[90%] justify-between space-x-4 rounded-lg bg-prim-300 p-2">
      <div class="flex space-x-4">
        <select id="categories" class="w-36 rounded-lg p-1 text-sm">
          <option selected>Kategori</option>
          <option value="universitas">Universitas</option>
          <option value="politeknik">Politeknik</option>
          <option value="akademi">Akademi</option>
          <option value="institut">Institut</option>
        </select>
        <select id="akreditasi" class="w-36 rounded-lg p-1 text-sm">
          <option selected>Akreditasi</option>
          <option value="a">Akreditasi A</option>
          <option value="b">Akreditasi B</option>
          <option value="c">Akreditasi C</option>
        </select>
        <select id="lokasi" class="w-36 rounded-lg p-1 text-sm">
          <option selected>Lokasi</option>
          <option value="universitas">Universitas</option>
          <option value="politeknik">Politeknik</option>
          <option value="akademi">Akademi</option>
          <option value="institut">Institut</option>
        </select>
      </div>
      <div class="flex w-80 rounded-2xl bg-white px-4 py-1">
        <input
          type="email"
          placeholder="Cari nama kampus disini..."
          class="w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
        />
        <IconSearch className="text-gray-600" />
      </div>
    </div>
  );
});
