import React from "react";

const Mens = ({ food, addcart }) => {
  const filterdata = food.filter((item) => {
    return item.category == "men's clothing";
  });
  return (
    <div>
      {filterdata.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {filterdata.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: 350,
                    height: 400,
                    backgroundColor: "gray",
                    margin: 10,
                    marginTop:80
                  }}
                >
                  <h3>TITLE : {item.title}</h3>
                  <h3>PRICE : {item.price}</h3>
                  {/* <h5>DESCRIPTION : {item.description}</h5> */}
                  <h3>CATEGORY : {item.category}</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      width={250}
                      height={150}
                      style={{ display: "flex", justifyContent: "center" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "10px",
                    }}
                  >
                    <h3>RATE : ${item.rating.rate}</h3>
                    <h3>COUNT : {item.rating.count}</h3>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      style={{
                        width: "300px",
                        marginTop: "10px",
                        height: "50px",
                      }}
                      onClick={() => addcart(item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h4>No Products Found</h4>
        </>
      )}
    </div>
  );
};

export default Mens;
