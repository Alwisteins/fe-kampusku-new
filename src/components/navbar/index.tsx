import { component$ } from "@builder.io/qwik";
import { IconNotePlus } from "~/components/icons/note-plus";
import { Button } from "../button";

const links = [
  {
    title: "Beranda",
    path: "/",
  },
  {
    title: "Peringkat",
    path: "/rank",
  },
  {
    title: "Kampus",
    path: "/campus",
  },
  {
    title: "Tentang Kami",
    path: "/about",
  },
];

export const Navbar = component$(() => {
  return (
    <div class="flex w-full items-center justify-around pt-4">
      <h1 class="text-prim-300 text-3xl font-bold">Kampusku</h1>
      <div class="space-x-10">
        {links.map((link) => (
          <a key={link.title} href={link.path}>
            {link.title}
          </a>
        ))}
      </div>
      <Button
        title="Kontribusikan Kampusmu"
        icon={<IconNotePlus />}
        iconAlign="right"
        class="py-3"
      />
    </div>
  );
});
