import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";

import Card from "../Card";
import Caarousel from "../Carousel";

function Home() {
  // Use useState to initialize state variables
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState(" ");

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix the typo here
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFoodItem(data[0]);
        setFoodCat(data[1]);
        console.log("FUll data is here ", data);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const handleSearch = async (searchQuery) => {
    setSearch(searchQuery);
    try {
      const response = await fetch("http://localhost:5000/api/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix the typo here
        },
        body: JSON.stringify({ name: search }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("FUll data is here ", data);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <NavBar />
      <Caarousel onSearch={handleSearch} />
      <div className="container">
        {foodItem.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item, index) => item.CategoryName === data.CategoryName
                      )
                      .map((filterItems) => {
                        console.log(
                          "ENtered map filteritems name ",
                          filterItems.name
                        );
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 mr-3 col-lg-3"
                          >
                            <Card
                              foodItem={filterItems}
                              options={filterItems?.options?.[0] || ""}
                            >
                              {" "}
                            </Card>
                          </div>
                        );
                      })
                  ) : (
                    <div> No such data </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Home;
