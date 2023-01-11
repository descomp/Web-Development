import Navbar from "./Navbar";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Venue() {
  var uri = "http://localhost:5000/";
  var navi = useNavigate();
  const [Nm, setnms] = useState();
  const [phon, setcot] = useState();

  const [meeting, setMeeting] = useState({ Name: "", Price: 0 });
  const [cry, setCry] = useState({ Name: "", Price: 0 });
  const [check, setCheck] = useState({});
  const [total, settotal] = useState(0);

  const [arr4, setarr4] = useState([]);
  //   console.log(meeting);
  //   console.log(cry)
  // console.log(check);

  var Price = meeting.Price + cry.Price + total;
  const arr = [
    { Name: "Large Meeting", Price: 50000 },
    { Name: "Conference", Price: 25000 },
    { Name: "Birthday Party", Price: 35000 },
    { Name: "Reception Party", Price: 200000 },
  ];

  const handleChange = (e) => {
    setMeeting(arr[e.target.value]);
  };
  const arr2 = [
    { Name: "Crystal Ballroom", Price: 50000 },
    { Name: "Plaza Terrace Garden", Price: 25000 },
    { Name: "Quourum", Price: 35000 },
    { Name: "Regency", Price: 200000 },
  ];

  const handleChange2 = (e) => {
    setCry(arr2[e.target.value]);
  };

  const arr3 = [
    { Name: "Accomodation", Price: 40000 },
    { Name: "Banquet", Price: 20000 },
    { Name: "Sound & Audio", Price: 5000 },
    { Name: "Flowers", Price: 2000 },
    { Name: "Transfers", Price: 2000 },
  ];

  const handleChange3 = (e, x, y) => {
    // console.log(x, y);
    if (e.target.checked) {
      settotal(total + y);
      setarr4([
        ...arr4,
        {
          name: x,
          price: y,
        },
      ]);
    } else {
      settotal(total - y);
      var ab = arr4.findIndex((item) => {
        return item.name == x;
      });
      console.log(ab);

      arr4.splice(ab, 1);
    }
  };

  function neha2(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var Meeting = data.get("meeting");
    var Company = data.get("company");
    var Event = data.get("event");
    var Cry = data.get("cry");
    var Date = data.get("date");
    var Check1 = data.get("check1");
    var Check2 = data.get("check2");
    var Check3 = data.get("check3");
    var Check4 = data.get("check4");
    var Check5 = data.get("check5");
    var Name = data.get("name");
    var Lname = data.get("lname");
    var Email = data.get("email");
    var Phone = data.get("phone");
    var Price = data.get('Price');

    // console.log(email);
    // console.log(password);
    var reg = /[A-Za-z ]/;

    for (var i = 0; i <= Name.length; i++) {
      if (reg.test(Name[i])) {
        if (i == Name.length) {
          // console.log("alphabets")
          setnms(Name);
        }
        // else{
        // 	alert("enter alphabets only")
        // 	data.get('name')
      } else {
        alert("please enter alphabets");
        e.target.name.focus();

        return false;
      }
    }
    if (Phone.length == 10) {
      // alert("six")
      setcot(Phone);
    } else {
      alert("Please fill the 10 digit phone numbers");
      e.target.Phone.focus();
      return false;
    }

    var Ab = data.get("data1");

    var utc = new Date().toJSON().slice(0, 10);

    console.log(utc);
    var data1;
    if (Ab == utc || Ab > utc) {
      // alert("current date")
      data1 = Ab;

      var venuedata = {
        meeting: Meeting,
        company: Company,
        event: Event,
        cry: Cry,
        Ab1: Ab,
        check1: Check1,
        check2: Check2,
        check3: Check3,
        check4: Check4,
        check5: Check5,
        name: Name,
        lname: Lname,
        email: Email,
        phone: Phone,
        Price: Price,
      };
      axios.post(uri + "venue", venuedata).then((succ) => {
        console.log("Data successfully send");
        if ((succ.data = "added")) {
          alert("Data is successfully added");
        } else {
          alert("Data is not added");
        }
      });
    } else if (Ab < utc) {
      alert("past date");
    } else {
      alert("enter date");
    }
    e.target.reset();
  }

  return (
    <div>
      <center>
        <button className="btn btn-info" data-toggle="modal" data-target="#id1">
          Book this Venue
        </button>
      </center>
      <div className="modal" role="dialog" id="id1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <button className="close " data-dismiss="modal">
                  X
                </button>
              </div>
              <div
                className="modal-body col-lg-12 col-md-12 col-sm-12 col-xs-12"
                style={{ fontFamily: "EB Garamond" }}
              >
                <p>Indian Accent Restaurant</p>
                <h2 style={{ color: "rgb(151,97,7)" }}>
                  Contact an Event Planner
                </h2>
                <p>Please enter all the fields to help you serve</p>
                <hr />
                <form onSubmit={neha2}>
                  <div
                    className="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                    style={{ fontFamily: "EB Garamond" }}
                  >
                    <h3 style={{ color: "rgb(151,97,7)" }}>Event Details</h3>
                    <select
                      className="form-control"
                      name="meeting"
                      onChange={handleChange}
                    >
                      {/* <option>Small Meeting</option>
                                            <option>Large Meeting</option>
                                            <option>Conference</option>
                                            <option>Birthday Party</option>
                                            <option>Reception Party</option> */}
                      {arr.map((val, index) => (
                        <option value={index}>{val.Name}</option>
                      ))}
                    </select>
                    <br />
                    {/* <select className='form-control' name='meeting'>
                                            <option>10000</option>
                                            <option>20000</option>
                                            <option>40000</option>
                                        </select><br/> */}
                    <input
                      type={"text"}
                      className="form-control"
                      name="company"
                      maxlength="20"
                      placeholder="Company Name"
                    />
                    <br />
                    <input
                      type={"text"}
                      className="form-control"
                      name="event"
                      maxlength="20"
                      placeholder="Event Name"
                    />
                    <br />
                    <select
                      className="form-control"
                      name="cry"
                      onChange={handleChange2}
                    >
                      {arr2.map((val, index) => (
                        <option value={index}>{val.Name}</option>
                      ))}
                      {/* <option>Crystal Ballroom</option>
                      <option>Plaza Terrace Garden</option>
                      <option>Quourum</option>
                      <option>Regency</option> */}
                    </select>
                    <br />
                    <input
                      type={"date"}
                      className="form-control"
                      name="data1"
                    />
                    <br />
                    <hr />
                    <h3 style={{ color: "rgb(151,97,7)" }}>
                      Additional Requirements
                    </h3>
                    {arr3.map(({ Name, Price }, index) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          onChange={(e) => handleChange3(e, Name, Price)}
                        />
                        <label
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 20,
                            width: "100px",
                          }}
                        >
                          <p>{Name}</p>
                          <p>{Price}</p>
                        </label>
                      </div>
                    ))}
                    {/* <h2>{check}</h2> */}
                    <hr />
                    <h3
                      style={{
                        color: "rgb(151,97,7)",
                        fontFamily: "EB Garamond",
                      }}
                    >
                      Contact Info
                    </h3>
                    <input
                      type={"text"}
                      className="form-control"
                      name="name"
                      placeholder="Enter your first name"
                      maxlength="20"
                    />
                    <br />
                    <input
                      type={"text"}
                      className="form-control"
                      name="lname"
                      placeholder="Enter your last name"
                      maxlength="20"
                    />
                    <br />
                    <input
                      type={"email"}
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <br />
                    <input
                      type={"number"}
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                      maxlength="10"
                    />
                    <br />
                    <p>
                      This site is protected by CAPTACHA and the Google
                      <br />
                      Privacy Policy and Terms of Service apply
                    </p>
                    <br />
                    <div>
                      <h4>
                        {meeting.Name && (
                          <>
                            {meeting.Name} &nbsp; {meeting.Price}
                          </>
                        )}
                      </h4>
                      <h4>
                        {cry.Name && (
                          <>
                            {cry.Name} &nbsp; {cry.Price}
                          </>
                        )}
                      </h4>

                      {arr4.map((row) => (
                        <>
                          <h4>
                            {" "}
                            {row.name}&nbsp;&nbsp;&nbsp;{row.price}
                          </h4>
                        </>
                      ))}
                      {/* <h4> Additional Requirements Total {total}</h4> */}
                      {/* <h4>{check.Name} &nbsp; {check.Price}</h4> */}
                      {/* <h4>Total &nbsp; {meeting.Price + cry.Price }</h4> */}
                        
                      {total > 0 && (
                        <h4>
                          Your Total &nbsp; {meeting.Price + cry.Price + total}
                        </h4>
                      )}
                    </div>

                    <input
                      type={"submit"}
                      className="btn btn-danger"
                      value="SUBMIT ENQUIRY"
                    />
                    <br />
                  </div>
                  {/* {meeting.Name}
                  {meeting.Price} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
