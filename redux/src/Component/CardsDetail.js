  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { DEL,ADD,DELONE} from "../Redux/Action/Action";
  const CardDetails = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [mydata, setData] = useState([]);
    console.log(mydata);
    const { id } = useParams();

    const getData = useSelector((State) => State.cartreducer.carts);

    const selectItem = () => {
      let selectitem = getData.filter((e) => {
        return e.id == id;
      });
      setData(selectitem);
    };

    useEffect(() => {
      selectItem();
    }, [id]);
    const del = (id) => {
      dispatch(DEL(id));
      history("/");
    };

    const DataSend = (e) => {
      console.log(e);
      dispatch(ADD(e));
    };
    const DataRemove = (e) => {
      console.log(e);
      dispatch(DELONE(e));
    };

    return (
      <div className="container mt-3">
        <h2>Cart Item Details :</h2>
        <section className="container mt-3">
          {mydata.map((ele,key) => {
            return (
              <>
                
                <div key={key} className="itemsdetail">
                  <div className="col-lg-5 items_img">
                    <img src={ele.image}  style={{width:"450",height:"400px"}} />
                  </div>
                  <div className="details m-2 col-lg-7">
                    <table>
                      <tr>
                        <td>
                          <p>
                            <strong>Name:</strong> {ele.name}
                          </p>
                          <p>
                            <strong>Price:</strong> $ {ele.price}
                          </p>
                          <p>
                            <strong>company :</strong> {ele.company}
                          </p>
                          <p>
                            <strong>Total :</strong> $ {ele.price * ele.qnty}
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              background: "#ddd",
                              cursor: "pointer",
                              color: "#111",
                              width: 100,
                            }}
                          >
                            <p onClick={ele.qnty<=1?()=>del(ele.id):()=>DataRemove(ele)} style={{ fontSize: 26, paddingLeft: 5 }}>-</p>
                            <p style={{ fontSize: 22 }}>{ele.qnty}</p>
                            <p onClick={()=>DataSend(ele)} style={{ fontSize: 26, paddingRight: 5 }}>+</p>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            &nbsp;<span
                              style={{
                                color: "#fff",
                                background: "green",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.srating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review:</strong> {ele.somedata}
                          </p>
                          <p>
                            <strong>Delete : </strong>{" "}
                            <i
                              className="fas fa-trash"
                              onClick={() => del(ele.id)}
                              style={{
                                color: "red",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </div>
    );
  };

  export default CardDetails;
