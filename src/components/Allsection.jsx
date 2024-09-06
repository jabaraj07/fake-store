import React from "react";
import { useNavigate } from "react-router-dom";

const Allsection = () => {

  const nav  = useNavigate()

  const handlehome = (x)=>{
    nav(`/${x}`)
  }
  return (
    <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",marginTop:60}}>
      <div
      style={{
        backgroundColor: "red",
        width: "17%",
        height: "300px",
        border: "5px,solid,black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginLeft:20,
        cursor:"pointer"
      }}
    >
      {/* <h1 onClick={()=>handlehome('Home')}>HOME PAGE</h1> */}
      <div style={{display:"flex",flexDirection:"column",fontSize:30,justifyContent:"center"}} onClick={()=>handlehome('Home')}> <img style={{marginBottom:10}} src="https://tse1.mm.bing.net/th?id=OIP.DoO4dhkMU8FAvzMDz6lqcQHaE6&pid=Api&P=0&h=180" width={200} height={150} />HOME PAGE</div>

    </div>  

    <div
      style={{
        backgroundColor: "red",
        width: "17%",
        height: "300px",
        border: "5px,solid,black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginLeft:20,
        cursor:"pointer"
      }}
    >
      <div style={{display:"flex",flexDirection:"column",fontSize:30,justifyContent:"center"}} onClick={()=>handlehome('Mens')}> <img style={{marginBottom:10}} src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" width={200} height={150} />Mens Section</div>

    </div> 

    <div
      style={{
        backgroundColor: "red",
        width: "17%",
        height: "300px",
        border: "5px,solid,black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginLeft:20,
        cursor:"pointer"
      }}
    >
      <div style={{display:"flex",flexDirection:"column",fontSize:30,justifyContent:"center"}} onClick={()=>handlehome('Womens')}> <img style={{marginBottom:10}} src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" width={200} height={150} />Womens Section</div>

    </div> 

    <div
      style={{
        backgroundColor: "red",
        width: "17%",
        height: "300px",
        border: "5px,solid,black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginLeft:20,
        cursor:"pointer"
      }}
    >
      <div style={{display:"flex",flexDirection:"column",fontSize:30,justifyContent:"center"}} onClick={()=>handlehome('Electronics')}> <img style={{marginBottom:10}} src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" width={230} height={150} /> Electronics Section</div>

    </div> 

    <div
      style={{
        backgroundColor: "red",
        width: "17%",
        height: "300px",
        border: "5px,solid,black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginLeft:20,
        cursor:"pointer"
      }}
    >
      <div style={{display:"flex",flexDirection:"column",fontSize:30}} onClick={()=>handlehome('Jewelery')}> <img style={{marginBottom:10}} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" width={200} height={150} /> Jewelery Section</div>
    </div> 

    </div>
  );
};

export default Allsection;
