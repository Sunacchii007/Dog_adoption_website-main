import React, { useState, useEffect } from "react";
import "./PetShop.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Product({ idPet }) {
    const [donnees, setDonnees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await axios.get(`http://localhost/Dog_adoption_website-main/api6/index.php`);
                setDonnees(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        getMessage();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
<>
<div className="Shop" style={ {background: "radial-gradient(circle at 10% 20%,rgb(220, 95, 0) ,rgb(207, 10, 10) )",padding:"1px" }}>
        <h1 className="PetShop-heading" style={{color:"#000000"}}>Welcome to your dream shop!</h1>
      </div>
      <div>
      <Link to="/cat" target="_blank" className="bttn_style_1" style={{width:"250px",textAlign:"center"}}>Cats Gallery</Link>
      <Link to="/dogs" target="_blank" className="bttn_style_2" style={{width:"250px",textAlign:"center"}}>Dogs Gallery</Link>
      <Link to="/product" target="_blank" className="bttn_style_3" style={{width:"250px",textAlign:"center"}}>Products Gallery</Link>
      </div>
        <div className="cards">
            {donnees.map((pet) => (
                <div key={pet.id} className="card"style={{width:"350px" , marginLeft:"60px" ,}}>
                    <img src={pet.image} alt="DoggoImg" className="card_img" />
                    <div className="card_info"  style={{backgroundColor:"#EEEEEE",padding:"25px",}}>
                        <span className="Dog_name" style={{color:"#CF0A0A",letterSpacing:"5px",}}><b style={{fontSize:"20px",}}><u>{pet.nom}</u></b></span>
                        <br />
                        <span className="Dog_info"><b style={{color:"#CF0A0A"}}>Prix:</b>{pet.prix} DH</span>
                        <br />
                        <Link to={`/adoption-form/${pet.id}`}  className="bttn_style_4">
                            Click to adopt me!
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Product;

