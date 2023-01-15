import { useEffect, useState } from 'react';
import './Products.css';
import Card from '../Card/Card';


function Product() {
  const [items, setItems] = useState([]);
  const [searchParam] = useState(["color", "name", "type"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [q, setQ] = useState("");

  
  // fetching data here
  useEffect(()=>{
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then((res)=>res.json())
    .then((res)=>{
      setItems(res)},
      (error)=>{
        console.log(error)});
     },[]);

     const data=Object.values(items);
    //  console.log(data)
     function search(items){
        return items.filter((item)=>{
            if(item.name==filterParam)
            {
             
                return searchParam.some((ele)=>{
                    // console.log(ele)
                    return (
                        item[ele]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase())>-1);
                });
            } 
            else if(filterParam=="All") 
            {
                return searchParam.some((ele)=>{
                    return (
                        item[ele]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase())>-1);
                });
            }
        });
    }

  // console.log(items)
  return (
  <div>
     
     <div className='search'>

        <input type="search" placeholder="Search for..." value={q} onChange={(e) => setQ(e.target.value)} />
        <span >Search here</span>
     </div>
    <div className='productflex'>
        {/* filter data  */}
      <div className='filter'>  
        
          {/* Colour */}
        <h3   onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}>Colour</h3>
          <div>
            <input type="checkbox" name="Red" value="Red" />
            <label for="Red">Red</label>
            <br></br>
            <input type="checkbox" name="Blue" value="Blue" />
            <label for="Blue">Blue</label>
            <br></br>
            <input type="checkbox" name="Green" value="Green" />
            <label for="Green">Green</label>
          </div>

            {/* Gender */}
        <h3>Gender</h3>
          <div>
            <input type="checkbox" name="Men" value="Men" />
            <label for="Men">Men</label>
            <br></br>
            <input type="checkbox" name="Women" value="Women" />
            <label for="Women">Women</label>
            
          </div>


            {/* Price */}
        <h3>Price</h3>
          <div>
          <input type="checkbox" name="0-Rs250" value="0-Rs250" />
            <label for="0-Rs250">0-Rs250</label>
            <br></br>
            <input type="checkbox" name="Rs251-450" value="Rs251-450" />
            <label for="Rs251-450">Rs251-450</label>
            <br></br>
            <input type="checkbox" name="Above Rs450" value="Above Rs450" />
            <label for="Above Rs450">Above Rs450</label>
          </div>

            {/* type */}
        <h3>Type</h3>
          <div>
            <input type="checkbox" name="Polo" value="Polo" />
            <label for="Polo">Polo</label>
            <br></br>
            <input type="checkbox" name="Hoodie" value="Hoodie" />
            <label for="Hoodie">Hoodie</label>
            <br></br>
            <input type="checkbox" name="Basic" value="Basic" />
            <label for="Basic">Basic</label>
          </div>
        
        </div>
  
        {/* append part */}
        <div className='cardcss' >

        { search(data).map((ele)=>{
            return(
            <div  key={ele.id}>
                {/* send items to the cart  */}
                <Card key={ele.id} ele={ele}/>
            </div>
            )
        })}
        </div>  
    </div> 
</div>   
  );
}

export default Product;
