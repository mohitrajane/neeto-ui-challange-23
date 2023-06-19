export const DUMMY_NOTES = [
  {
    id: crypto.randomUUID(),
    title: "How to grow Potatos",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: [{ id: "1", name: "Getting Started" }],
    status: "created",
    updatedAt: "2023-06-15T18:48:47.761Z",
    assignedContact: "1",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow Carrots",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: [{ id: "1", name: "Getting Started" }],
    status: "drafted",
    updatedAt: "2023-06-15T18:48:47.761Z",
    assignedContact: "3",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow Bananas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: [
      { id: "1", name: "Getting Started" },
      { id: "2", name: "Farming" },
    ],
    status: "drafted",
    updatedAt: "2023-06-15T18:48:47.761Z",
    assignedContact: "5",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow mangos",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: [{ id: "1", name: "Getting Started" }],
    status: "created",
    updatedAt: "2023-06-15T18:48:47.761Z",
    assignedContact: "2",
  },
];

export const DUMMY_CONTACTS = [
  {
    id: "1",
    name: "Oliver Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "oliver.s@example.com",
    createdAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: "2",
    name: "Sam Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "sam.s@example.com",
    createdAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: "3",
    name: "Rachel Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "rachel.s@example.com",
    createdAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: "4",
    name: "John Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "john.s@example.com",
    createdAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: "5",
    name: "James Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "james.s@example.com",
    createdAt: "2023-06-15T18:48:47.761Z",
  },
];

export const DUMMY_TAGS = [
  { id: "1", name: "Getting Started" },
  { id: "2", name: "Farming" },
];
