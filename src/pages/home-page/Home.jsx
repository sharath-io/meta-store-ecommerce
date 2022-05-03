import '../../styles/project.css';
import './home.css';
import {Banner} from '../../assets';
import React from "react";
import {Link} from "react-router-dom";
import {cardData} from "../../utils/cardData.js"

export function Home(){
return (
<div className="page-content">
    <div className="main-content">
        <div className="main-image">
            <img className="banner-img fit" src={Banner} alt="laptop" />
        </div>
        <div className="text-overlap flex-center">
            <div className="meta-info">
                <i className="fa fa-bolt"></i> Meta Store
                <p className="description">Get your physical devices for virtual world</p>
                <div className="card-button">
                    <Link to="/Products">
                    <button className="card-buy">Meta devices</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div className="categories" id="explore-categories">
        Shop By categories

        <div className="card-container">
            {
             cardData.map(cardItem =>(
              <div className="card  card-shadow"  key ={cardItem.id}>
                <div className="card-image fit">
                    <img src={cardItem.image} alt={cardItem.Heading} />
                </div>
                <div className="card-heading">
                    {cardItem.Heading}
                </div>
                <p className="tag">{cardItem.caption}</p>
                <div className="card-description">
                    {cardItem.description}
                </div>
                <div className="card-button">
                    <Link to="/Products">
                      <button className="card-buy">Explore</button>
                    </Link>
                </div>
               </div>
           ))
            }
        </div>
    </div>
</div>

);
}