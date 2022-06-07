import React from "react";
import { Link } from 'react-router-dom';
import PropertyCard from "../Properties";



const Ownerportal = ({ properties, title }) => {
  if (!properties.length) {
    return <h3>No Properties Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">George's Rental</h3>
      <div className="flex-row justify-space-between my-4">
        {/* {property &&
          property.map((property) => (
            <div key={property._id} className="col-12 col-xl-6"> */}
              <PropertyCard />

                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/owner`}>
                </Link>
              
            {/* </div> */}
          {/* ))} */}
      </div>
    </div>
  );
};

export default Ownerportal;