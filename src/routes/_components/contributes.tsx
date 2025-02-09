import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { IconNotePlus } from "../../components/icons/note-plus";
import { Button } from "../../components/button";

export const ContributesSection = component$(() => {
  const navigate = useNavigate();

  return (
    <div id="hero" class="flex h-screen items-center justify-around">
      <div class="flex justify-end">
        <img
          alt="Hero Image"
          src="./assets/contributes-img.svg"
          width={400}
          height={400}
        />
      </div>
      <div class="w-1/2 space-y-4">
        <h1 class="text-5xl font-bold leading-tight">
          Yuk! bantu mereka temukan kampusmu
        </h1>
        <p class="text-[#6B7280]">
          Berkontribusi sekarang dalam menambahkan kampusmu disini agar mereka
          dapat menemukan informasi tentang kampusmu
        </p>
        <div class="flex space-x-2">
          <Button
            title="Kontribusi sekarang"
            icon={<IconNotePlus />}
            iconAlign="right"
            onClick$={() => navigate("/contributes")}
          />
        </div>
      </div>
    </div>
  );
});
