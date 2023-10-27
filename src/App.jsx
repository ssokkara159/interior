import { BiPlay, BiCheck } from "react-icons/bi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import "./App.css";

function App() {
  const arr = [
    "/chair.png",
    "/sofa.png",
    "/armchair.png",
    "/furniture.png",
    "/couch.png",
  ];
  const arr2 = [
    "100% Safe",
    "Worldwide service",
    "Eco friendly",
    "liveryFastest des",
    "Safe delivery",
  ];
  return (
    <div className="App">
      <div className="first_container">
        <div className="left">
          <div className="header">
            <div className="logo">Curoot</div>
            <div className="nav_item">Home</div>
            <div className="nav_item"> category</div>
            <div className="nav_item">Shop</div>
            <div className="nav_item">Contact</div>
          </div>

          <div className="bold">Lux & Comfort.</div>
          <div className="dis">
            Cantata One is a high contrast extended Didone style text face. In
            addition to being useful in medium to large text sizes.
          </div>

          <div className="buttons">
            <div className="shop">SHOP NOW</div>
            <div className="watch">
              <div className="play">
                <BiPlay />
              </div>
              WATCH VIDEO
            </div>
          </div>
        </div>
        <div className="right">
          <div className="cart shop">CART(2)</div>
          <div className="prev_next shop">
            <div>
              <FaLessThan
                style={{
                  fontSize: "1vw",
                }}
              />{" "}
              &nbsp; PREV
            </div>{" "}
            |
            <div>
              NEXT &nbsp;{" "}
              <FaGreaterThan
                style={{
                  fontSize: "1vw",
                }}
              ></FaGreaterThan>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1603794067453-a200eec4c0e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="second_container">
        <div className="head_2">
          <div className="for_you">
            Featured
            <br /> For You
          </div>
          <div className="dis">
            Cantata One is a high contrast extended Didone style text face. In
            addition to being useful in medium to large text sizes.
          </div>
        </div>
        <div className="row1">
          <div className="image1">
            <div>
              <img
                src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="dis2">
              <span>01</span>
              <span>White-wodden furnutures</span>
            </div>
          </div>

          <div className="image2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1493150134366-cacb0bdc03fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="dis2">
              <span>02</span>
              <span>Yello Peeled sofa</span>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="image1">
            <div>
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="dis2">
              <span>03</span>
              <span>Rainbow family couch</span>
            </div>
          </div>

          <div className="image2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1473456831432-0dce9883347b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt=""
              />
            </div>
            <div className="dis2">
              <span>04</span>
              <span>Decent orange</span>
            </div>
          </div>
        </div>
      </div>

      <div className="third_container">
        <div className="for_you head_3">
          <div>
            We Got you <br />
            All Covered
          </div>
          <div className="style_text">ABOUT US</div>
        </div>
        <div className="slider">
          <div className="icons">
            <div>
              {arr.map((src) => {
                return (
                  <div className="icon">
                    <img src={src} alt="" />
                    <div>Image</div>
                  </div>
                );
              })}
            </div>
            <div>
              {arr.reverse().map((src) => {
                return (
                  <div className="icon">
                    <img src={src} alt="" />
                    <div>Image</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="arrow">
            <FaGreaterThan />
          </div>
        </div>
      </div>

      <div className="four_container">
        <div className="left_4">
          <div className="chair">
            <img src="/chair4.png" alt="" />
            <div className="card">
              <div className="dp">
                {" "}
                <img
                  src="https://images.statusfacebook.com/profile_pictures/selena_gomez/selena_gomez_profile_pictures_22.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <div className="name"> Dianne Russell </div>
                <div className="about">
                  Cantata One is a high contrast extended Didone style text
                  face. In addition to being useful
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_4">
          <div style={{ padding: 0 }} className="for_you">
            What Makes Us <br />
            Different From <br />
            Others
          </div>
          <div className="dis">
            Cantata One is a high contrast extended Didone style text face. In
            addition to being useful in
          </div>
          <div className="checks">
            {arr2.map((text) => {
              return (
                <div className="check">
                  <div className="play">
                    <BiCheck />
                  </div>
                  <div>{text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="five_container">
        <div className="for_you">Instagram : Curoot</div>
        <div className="images_con">
          <div>
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <div className="insta">
              <img src="instagram.svg" alt="" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="six_container">
        <div className="logo_heading">Fetured In</div>
        <div className="logos">
          <img src="/Capture.png" alt="" />
          <img src="/Capture2.png" alt="" />
          <img src="/Capture3.png" alt="" />
          <img src="/Capture4.png" alt="" />
          <img src="/Capture5.png" alt="" />
        </div>
      </div>

      <div className="footer">
        <div className="upper">
          <div className="f_info">
            <div>Curoot</div>
            <div className="f_logo">
              <img src="/linkedin.png" alt="" />
              <img src="/facebook.png" alt="" />
              <img src="/twitter.png" alt="" />
              <img src="/instagram.svg" alt="" />
            </div>
            <div className="f dis">
              Cantata One is a high contrast extended Didone style text face. In
              addition to being useful in medium to large text sizes.
            </div>
          </div>
          <div className="list1 dis">
            <h3>House & Features</h3>
            <ul>
              <li>Reviews & ratings</li>
              <li>Community Q & A</li>
              <li>Social Marketing</li>
              <li>Product Manager @ Slack</li>
              <li>Analysis</li>
            </ul>
          </div>
          <div className="list2 dis">
            <h3>Customer Care</h3>
            <ul>
              <li>Help center</li>
              <li>Concact Support</li>
              <li>Release notes</li>
              <li>FAQ</li>
              <li>Social</li>
            </ul>
          </div>

          <div className="list3 dis">
            <h3>Buy & Sell</h3>
            <ul>
              <li>About us</li>
              <li>Press rooms</li>
              <li>Team</li>
              <li>We hiring!</li>
              <li>Articles</li>
            </ul>
          </div>
        </div>
        <div className="lower">
          <div className="line"></div>
          <div>
            <AiOutlineCopyrightCircle />
            Copyright 2020 by Mayad Ahmed. All rights reserved.
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
