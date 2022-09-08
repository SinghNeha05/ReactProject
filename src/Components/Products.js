import React from 'react';
import { Link , Outlet} from 'react-router-dom';

const Products = () => {

    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 },
      ];

    return (
        <>
            <input type="search" placeholder='Search Products'/>
            <nav>
                <Link to="faturedProducts" >Featured</Link>
                <Link to="newProducts" >New</Link>
            </nav>
            <Outlet/>
            <div>
                <h2>Loop Through an Array of Objects</h2>
                {users.map((user)=>{
                    return(
                        <div key={user.id}>
                            <li>{user.name}</li>
                        </div>
                    );
                })}

                
            </div>
        </>
    );
};

export default Products;