import React from 'react'

const Cart = ({choosecart,deletecart,totalval,empty}) => {
  return (
    <>

<div style={{justifyContent:"space-around",display:"flex",alignItems:"center",backgroundColor:"yellow",position:"sticky",top:50,flexWrap:"wrap"}}>
          <h1>YOUR ORDERED ITEMS</h1>
          <h5 style={{fontSize:30,color:"red"}}>TOTAL : ${totalval()} </h5>
          <button onClick={empty}>EMPTY CART</button>

          </div>
    
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {
        choosecart.length > 0 ? 
        <>
        
          {
            choosecart.map((item,index)=>{
              return (

                    <div key={index} >
                    <div key={index} style={{backgroundColor:"gray",height:350,width:300 ,textAlign:"center",margin:10,padding:10}}>
                    <h5 style={{fontSize:15}}>TITLE : {item.title}</h5>
                    <img  style={{margin:10}} src={item.image} width={150} height={150} /><br/>
                    <h2>PRICE : ${item.price}</h2>
                    <button style={{marginTop:10,padding:10,fontSize:15,backgroundColor:"red"}} onClick={()=>deletecart(index)}>REMOVE </button>
                </div>
                </div>
              )
            })
          }
          <br/>
        {/* </div> */}
        </> 
        : 
        <>
        <div style={{backgroundColor:"gray",width:"100%",height:"86vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30}}>
        <h3>YOUR CART IS EMPTY</h3>
        </div>

        </>
    }
    </div>
    </>
  )
}

export default Cart