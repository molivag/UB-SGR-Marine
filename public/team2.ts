type Tmember = {
  id: number;
  current: boolean,
  name: string;
  category: string;
  department: string;
  group: string;
  email: string;
  orcid: string;
  scholar: string;
  website: string;
  socialmedia: string;
  imageID: string;
  description: string;
};
 {/*  1=current member;   0=former meber */}
export const team: Tmember[] = [
  {
    id: 1,
    current: true ,
    name: "Marta Pascual Berniola",
    category: "Senior",
    department: " ---- ",
    group: " ",
    email: " ",
    orcid: " ",
    scholar:"",
    website:"",
    socialmedia:"",
    imageID: "MartaP2",
    description:
    " I am an evolutionary marine biologist highly interested in genomics, transcriptomics, and symbiont communities. My research combines morphology, ecology, and molecular biology to understand how marine organisms evolve, speciate, adapt, and colonize new habitats. My skills include reference genome assembly and annotation, chromosomal structural variants identification, population structure analyses, adaptation signal detection, demography reconstruction, phylogeography, protein modeling, and analysis of microbiome symbiotic communities.",
  },
  {
    id: 2,
    imageID: "CintaP",
    department: " ---- ",
    image: "guitarra_02",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Senior",
  },
  {
    id: 3,
    imageID: "FrancescM",
    image: "guitarra_03",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Senior",
  },
  {
    id: 4,
    name: "Gisela Marin",
    image: "guitarra_04",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Ph.D. Student",
  },
  {
    id: 5,
    name: "HelenaV",
    image: "guitarra_05",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Ph.D. Student",
  },
  {
    id: 6,
    name: "CarlesG",
    image: "guitarra_01",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Post-Doc",
  },
  {
    id: 7,
    imageID: "OwenB",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    category: "Senior",
  },
];
