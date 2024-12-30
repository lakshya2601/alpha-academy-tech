export interface CardData {
    svg: string; // Path to the SVG or image
    title: string; // Title of the card
    subtitle: string;
    description: string; // Description of the card
  }

  export const sampleData: CardData[] = [
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy Title",
      subtitle: "subtitle1",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy Title2",
      subtitle: "subtitle1",
      description:
        "Discover key analytics and metrics that drove enterprise success in 2021.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy Title3",
      subtitle: "subtitle1",
      description:
        "Gain insights into the market trends shaping the industry in 2021.",
    },
    // {
    //     svg: "/spiral-32-svgrepo-com.svg",
    //     title: "Dummy Title4 ",
    //     subtitle: "subtitle1",
    //     description:
    //       "Gain insights into the market trends shaping the industry in 2021.",
    //   },
  ];



  export interface CardData2 {
    svg: string; // Path to the SVG or image
    title: string; // Title of the card
    subtitle?: string;
    description: string; // Description of the card
  }

  export const sampleData2: CardData2[] = [
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy title",
      subtitle: "",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy Title2",
      subtitle: "",
      description:
        "Discover key analytics and metrics that drove enterprise success in 2021.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Dummy Title3",
      subtitle: "",
      description:
        "Gain insights into the market trends shaping the industry in 2021.",
    },
    {
        svg: "/spiral-32-svgrepo-com.svg",
        title: "Dummy Title4 ",
        subtitle: "",
        description:
          "Gain insights into the market trends shaping the industry in 2021.",
      },
  ];