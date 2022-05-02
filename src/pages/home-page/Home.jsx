import '../../styles/project.css';
import './home.css';
import {Banner, Headphones, Game, PC} from '../../assets';
import React from "react";
import {Link} from "react-router-dom";

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
                <p className="description">Every device sold in meta store is compatible with the VR</p>
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

            <div className="card  card-shadow">
                <div className="card-image fit">
                    <img src={Headphones} alt="Headphones" />
                </div>
                <div className="card-heading">
                    HeadPhones
                </div>
                <p className="tag">soundzy</p>
                <div className="card-description">
                    Best in sound
                </div>
                <div className="card-button">
                    <Link to="/Products">
                    <button className="card-buy" >Explore</button>
                    </Link>
                </div>
            </div>

            <div className="card card-shadow">
                <div className="card-image fit">
                    <img src={Game} alt="Games" />
                </div>
                <div className="card-heading">
                    Gaming Computers
                </div>
                <p className="tag">nextgen</p>
                <div className="card-description">
                    Best in Speed
                </div>
                <div className="card-button">
                    <Link to="/Products">
                    <button className="card-buy">Explore</button>
                    </Link>

                </div>
            </div>

            <div className="card card-shadow">
                <div className="card-image fit">
                    <img src={PC} alt="Personal Computer" />
                </div>
                <div className="card-heading">
                    Laptops
                </div>
                <p className="tag">perfect</p>
                <div className="card-description">
                    Best in Performance
                </div>
                <div className="card-button">
                    <Link to="/Products">
                    <button className="card-buy">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

);
}