import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Seaside Villa",
    rating: 4.8,
    address: { city: "Alexandria", country: "Egypt" },
    image: "/images/villa.jpg",
    description: "Beautiful seaside villa with amazing views.",
    category: ["WiFi", "Pool", "Kitchen", "Air conditioning"],
    price: 150,
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing place! Highly recommend."
      },
      {
        name: "Jane Smith",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Beautiful view but a bit far from downtown."
      }
    ]
  }
];
