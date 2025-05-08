import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <Jumbotron />

                <div className="row">
                    <Card 
                        title="Card Title 1" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                    />
                    <Card 
                        title="Card Title 2" 
                        text="Pellentesque habitant morbi tristique senectus et netus." 
                    />
                    <Card 
                        title="Card Title 3" 
                        text="Fusce dapibus tellus ac cursus commodo." 
                    />
                    <Card 
                        title="Card Title 4" 
                        text="Donec ullamcorper nulla non metus auctor fringilla." 
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
