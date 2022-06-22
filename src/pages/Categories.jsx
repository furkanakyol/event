import React from "react";
import HelloText from "../components/HelloText";
import SuggestedCommunities from "../components/SuggestedCommunities";
import useSWR from "swr";
import { Link } from "react-router-dom";
const Categories = () => {
  const { data, error } = useSWR(
    process.env.REACT_APP_DEF_URL + "categories"
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="categories">
      <HelloText />
      <div className="flex">
        <div className="left-side">
          <div className="categories-lists">
            {data.map((data) => (
              <Link to={data.categories_link}>
                <div className="categories-single">
                  <div className="categories-img">
                    <img
                      src={data.categories_image}
                      alt={data.categories_image}
                    />
                  </div>
                  <div className="categories-body">
                    <p style={{color:"black"}}>{data.categories_name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="right-side">
          <SuggestedCommunities />
        </div>
      </div>
    </div>
  );
};

export default Categories;
