import { component$ } from "@builder.io/qwik";
import { IconNotePlus } from "~/components/icons/note-plus";
import { Button } from "../button";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

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
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div class="flex w-full items-center justify-around pt-4">
      <h1 class="text-3xl font-bold text-prim-300">Kampusku</h1>
      <div class="space-x-10">
        {links.map((link) => {
          const isActive =
            link.path === "/"
              ? location.url.pathname === "/"
              : location.url.pathname.startsWith(link.path);
          return (
            <a
              class={`rounded-3xl px-4 py-2 ${
                isActive
                  ? "bg-prim-300 text-white"
                  : "hover:bg-prim-300 hover:text-white"
              }`}
              key={link.title}
              href={link.path}
            >
              {link.title}
            </a>
          );
        })}
      </div>
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
