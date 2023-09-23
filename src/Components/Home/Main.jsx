import React, { useEffect, useState } from "react";
import jazzyPic from "../../assets/body-picture-1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Styles/Main.css";
import Spinner from "react-bootstrap/Spinner";
import heartImg from '../../assets/fav-emoji.jpg'
import breadImg from '../../assets/bread.jpg'
import eggImg from '../../assets/egg.jpg'
import leafImg from '../../assets/leaf.jpg'
import cheeseImg from '../../assets/cheese.jpg'
import onionImg from '../../assets/Onion.jpg'


const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const dataUrl = "https://eggys.onrender.com/jazzyburger/all";

  const getFetchedData = async () => {
    // fetch('https://eggys.onrender.com/jazzyburger/all')
    // .then((res) => res.json())
    // .then((json) => console.log(json))

    try {
      const fetchedData = await fetch(dataUrl);
      const response = await fetchedData.json();
      console.log(response);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);
  return (
    <main className="my-5 row">
      <div className="d-none d-lg-block col-lg-3">
        <img src={jazzyPic} alt="jazzys-pic" className="w-100 h-100" />
      </div>

      <div className="col-sm-12 col-lg-9">
        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <div className=" d-flex flex-wrap justify-content-between align-items-center gap-4">
            {data.map((datum) => {
              const { _id, title, image, description, price } = datum;
              return (
                <Card key={_id} className="rounded-4 card-inner position-relative">
                  <Card.Img variant="top" src={image} className="w-100" />
                  <Card.Img variant="top" src={heartImg} className="w-25 position-absolute top-0 end-0 rounded-pill p-2" />
                  <Card.Body>
                    <Card.Title className="fs-6"> {title}</Card.Title>
                    <Card.Text className="fs-5">
                      <span className="fw-lighter">Total Price </span>
                      <br />
                      <span className="fw-normal">#{price}.00</span>
                    </Card.Text>
                    <div className="my-3 d-flex justify-content-between">
                        <Card.Img variant="botto" src={cheeseImg} />
                        <Card.Img variant="botto" src={onionImg} />
                        <Card.Img variant="botto" src={leafImg} />
                        <Card.Img variant="botto" src={breadImg} />
                        <Card.Img variant="botto" src={eggImg} />
                    </div>
                    <Button variant="danger" className="w-100">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
