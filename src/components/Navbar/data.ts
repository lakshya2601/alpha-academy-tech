// Define the interface for dropdown items
interface DropdownItem {
    name: string;
    route: string;
}

// Define the interface for options
interface Option {
    label: string;
    dropdown?: DropdownItem[];
    route?: string; 
}

// Update the options array to use the Option interface
export const options: Option[] = [
    {
      label: "Home",
      route: "/", // Add a route for Home
    },
    {
      label: "Our Firm",
      route: "/our-firm"
      // dropdown: [
      //   { name: "Sub-option 1A", route: "/option1/sub1a" },
      //   { name: "Sub-option 1B", route: "/option1/sub1b" },
      // ],
    },
    {
      label: "Services",
      route:"/services",
      // dropdown: [
      //   { name: "Sub-option 3A", route: "/option3/sub3a" },
      //   { name: "Sub-option 3B", route: "/option3/sub3b" },
      // ],
    },
    {
      label: "Pricing",
      
      dropdown: [
        { name: "Payments", route: "/option3/sub3a" },
        
      ],
    },
    {
      label: "Contact Us",
      route: "/ContactUs", // Add a route for Home
    },
  ];
  