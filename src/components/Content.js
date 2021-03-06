import React from 'react';
import egg3 from '../images/egg1.jpg'
import egg1 from '../images/egg1.jpeg'

const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src={egg3}alt="" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Muffins</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>
         <div className="menu-card">
         <img src={egg1}alt="" className="h-full rounded mb-20 shadow" />
         <div className="center-content">
             <h2 className="text-2xl mb-2">Egg Muffins</h2>
             <p className="mb-2">Crispy, delicious, and nutritious</p>
             <span>$16</span>
         </div>
     </div>
     </>
    );
};

export default Content;