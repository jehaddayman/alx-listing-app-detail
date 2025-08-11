import React from "react";
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="mt-2">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap mt-2">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 m-1 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Content */}
        <div>
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
