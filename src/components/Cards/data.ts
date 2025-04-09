export interface CardData {
    svg: string; // Path to the SVG or image
    title: string; // Title of the card
    subtitle: string;
    description: string; // Description of the card
  }

  export const sampleData: CardData[] = [
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "RRR (Risk Reward Ratio)",
      subtitle: "Risk Management",
      description:
        "The risk-reward ratio is the cornerstone of smart investing—taking calculated risks can lead to greater rewards, but understanding and managing those risks is what ensures long-term success.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Experienced R&D Team",
      subtitle: "Research Excellence",
      description:
        "In the stock market, an experienced R&D team is like a compass—analyzing trends, uncovering opportunities, and navigating risks to drive informed investment decisions.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Back Tested Strategies",
      subtitle: "Proven Methods",
      description:
        "Back tested strategies transform market data into confidence—because past performance refines future success.",
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
      title: "Smart Financial Planning",
      subtitle: "",
      description:
        "Build a strong financial foundation with expert planning and strategy.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Data-Driven Investment Strategies",
      subtitle: "",
      description:
        "Leverage key market analytics and insights to make informed investment decisions.",
    },
    {
      svg: "/spiral-32-svgrepo-com.svg",
      title: "Market Trends & Insights",
      subtitle: "",
      description:
        "Stay ahead with deep analysis of financial market movements and opportunities.",
    },
    {
        svg: "/spiral-32-svgrepo-com.svg",
        title: "Wealth Growth & Security",
        subtitle: "",
        description:
          "Optimize and protect your wealth with long-term financial strategies tailored to your goals.",
      },
  ];