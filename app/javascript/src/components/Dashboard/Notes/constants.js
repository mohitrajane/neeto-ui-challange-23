import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const DUMMY_NOTES = [
  {
    id: crypto.randomUUID(),
    title: "How to grow Potatos",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: ["Getting Started"],
    status: "created",
    updatedAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow Carrots",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: ["Getting Started"],
    status: "drafted",
    updatedAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow Bananas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: ["Getting Started", "farming"],
    status: "drafted",
    updatedAt: "2023-06-15T18:48:47.761Z",
  },
  {
    id: crypto.randomUUID(),
    title: "How to grow mangos",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum dolores libero expedita eum nobis exercitationem quaerat quibusdam iusto voluptates.",
    tags: ["Getting Started"],
    status: "created",
    updatedAt: "2023-06-15T18:48:47.761Z",
  },
];

export const DUMMY_USER = {
  name: "Oliver Smith",
  imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
};
