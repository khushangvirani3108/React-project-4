import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Action/Action";
const Cards = () => {


  const [data, setData] = useState(CardData);

  const dispatch = useDispatch();
  const DataSend = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div className="bg-dark m-0">
      <div className="container mt-3 ">
      <div className="row d-flex justify-content-center aligh-item-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "25rem", border: "10px solid #fff",backgroundColor:'#212529',color:"#fff" }}
                className="mt-4 mx-3 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.image}
                  style={{ height: "16rem",borderRadius:"20px" }}
                  className="mt-2"
                  
                />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Title>{element.company}</Card.Title>
                  <Card.Text>
                    <p>Price: $ {element.price}</p>
                  </Card.Text>
                  <Button variant="primary" onClick={() => DataSend(element)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Cards;
