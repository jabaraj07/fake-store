import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home1 = ({ food, addcart }) => {
  const [data, setdata] = useState(food)
  const handleinput = (event)=>{  
    const filteredProducts = food.filter(product =>
      product.title.toLowerCase().includes(event.toLowerCase()))

      // const sortedProducts = filteredProducts.sort((a, b) =>
      //   a.title.localeCompare(b.title)
    // );
    setdata(filteredProducts)   
  }
  return (
    <>
      <div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <input type="text"  placeholder="Search Products" onChange={(event)=>handleinput(event.target.value)} style={{width:500,height:50,marginTop:10,fontSize:35}}/>
        </div>
        {data.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: 400,
                      height: 550,
                      backgroundColor: "gray",
                      margin: 10,
                    }}
                  >
                    <h3>TITLE : {item.title}</h3>
                    <h3>PRICE : {item.price}</h3>
                    <h5>DESCRIPTION : {item.description}</h5>
                    <h3>CATEGORY : {item.category}</h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "10px",
                      }}
                    >
                      {" "}
                      <img src={item.image} width={250} height={170} />
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
                          height: "40px",
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
          <h4>No Products found</h4>
          </>
        )}
      </div>
    </>
  );
};

export default Home1;
