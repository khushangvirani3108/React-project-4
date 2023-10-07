import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DEL } from "../Redux/Action/Action";
import img from "../logo.jpg"

const Header = () => {
  const dispatch = useDispatch();
  const [finalprice, setPrice] = useState(0);
  const getData = useSelector((State) => State.cartreducer.carts);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const del = (id) => {
    dispatch(DEL(id));
  };

  const total = () => {
    let price = 0;
    getData.map((el) => {
      price = el.price*el.qnty + price;
    });

    console.log("askdha",price)
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "150px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            <img src={img} alt='' height={100} width={100} />
            <span style={{margin:"auto 50px",}} className="fs-3">JDMSHIPPER</span>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 20, cursor: "pointer" }}
            ></i>
          </Badge>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {getData.length ? (
              <div class="card_details" style={{ width: "26rem" }}>
                <Table>
                  <thead>
                    <tr>
                      <th> Image</th>
                      <th>Car Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {getData.map((e, key) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink
                                id={key}
                                to={`/cart/${e.id}`}
                                onClick={handleClick}
                              >
                                <img
                                  src={e.image}
                                  style={{ height: "8rem", width: "10rem" }}
                                ></img>
                              </NavLink>
                            </td>
                            <td>
                              <p>{e.name}</p>
                              <p>Price : {e.price}</p>
                              <p>Quntity: {e.qnty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="fas fa-trash smaltrash"
                                  onClick={() => del(e.id)}
                                ></i>
                              </p>
                            </td>
                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i
                                className="fas fa-trash largetrash"
                                onClick={() => del(e.id)}
                              ></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <tr>
                      <td>
                        <p className="text-center">Total: ₹ {finalprice}</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{
                  width: "20rem",
                  position: "relative",
                  padding: "10px",
                }}
              >
                <i
                  onClick={handleClose}
                  className="fas fa-close smallclose"
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 10,
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your Card Empty</p>
              </div>
            )}
          </Menu>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
