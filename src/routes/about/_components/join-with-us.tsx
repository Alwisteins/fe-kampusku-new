import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { IconPeople } from "~/components/icons/people";
import { Button } from "~/components/button";
import { IconNotePlus } from "~/components/icons/note-plus";

export const JoinWithUsSection = component$(() => {
  const navigate = useNavigate();

  return (
    <div
      id="about-us"
      class="flex h-screen flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="flex w-fit items-center gap-2 rounded-2xl bg-[#EFF5FF] px-3 py-1 text-[#3B82F6]">
        <IconPeople /> Bergabung bersama kami
      </div>
      <h1 class="text-5xl font-bold leading-tight">
        Bantu kami menemukan kampusmu
      </h1>
      <p class="w-3/5 text-[#6B7280]">
        Para calon mahasiswa membutuhkan informasi kampus-kampus yang ada di
        indonesia untuk menjadi pilihan belajar mereka selama 4 tahun. Bantu
        mereka menemukan kampusmu dengan berkontribusi disini.
      </p>
      <Button
        title="Kontribusikan Kampusmu"
        icon={<IconNotePlus />}
        iconAlign="right"
        class="py-3"
        onClick$={() => navigate("/contributes")}
      />
    </div>
  );
});
