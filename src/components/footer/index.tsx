import { component$ } from "@builder.io/qwik";

const navMenu = [
  {
    title: "Beranda",
    navLinks: [
      {
        title: "Hero Section",
        link: "#",
      },
      {
        title: "Preferensi kampus",
        link: "#preference",
      },
      {
        title: "Kategori kampus",
        link: "#categories",
      },
      {
        title: "Kotributor",
        link: "#contributor",
      },
      {
        title: "Kotribusi",
        link: "#contributes",
      },
    ],
  },
  {
    title: "Peringkat",
    navLinks: [
      { title: "Nasional", link: "#nasional" },
      { title: "Internasional", link: "#internasional" },
    ],
  },
  {
    title: "Kampus",
    navLinks: [
      { title: "Universitas", link: "#universitas" },
      { title: "Politeknik", link: "#politeknik" },
      { title: "Institut", link: "#institut" },
      { title: "Akademi", link: "#akademi" },
      { title: "Akreditasi A+", link: "#akreditasi" },
      { title: "Jarak Terdekat", link: "#jarak" },
    ],
  },
  {
    title: "Tentang Kami",
    navLinks: [
      { title: "Siapa kami", link: "#about" },
      { title: "Apa yang kami lakukan", link: "#" },
      { title: "Bergabung bersama kami", link: "#" },
    ],
  },
];

export const Footer = component$(() => {
  return (
    <footer class="flex items-start justify-between bg-[#FBFBFB] p-20 text-[#6B7280]">
      <div class="space-y-2">
        <h3 class="text-2xl font-bold text-prim-300">Kampusku</h3>
        <p>Bantu kamu cari referensi kampus impianmu</p>
      </div>
      <div class="flex space-x-8">
        {navMenu.map((menu, menuIndex) => (
          <div key={menuIndex}>
            <p class="text-prim-300">{menu.title}</p>
            <div class="mt-4 flex max-w-40 flex-col space-y-2">
              {menu.navLinks.map((link, linkIndex) => (
                <a class="hover:text-prim-300" key={linkIndex} href={link.link}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
});
