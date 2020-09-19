import React from "react";
import "./SubHeader.css";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

function SubHeader() {
  const subHeadList = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
  ];

  return (
    <div className="subHeader">
      {subHeadList.map((value) => (
        <div className="subHeader__electronics">
          <p>{value}</p>
          <ExpandMoreOutlinedIcon style={{ fontSize: 14 }} />
        </div>
      ))}

      <div className="subHeader__electronics">
        <p>Flights</p>
      </div>
      <div className="subHeader__electronics">
        <p>Offer Zone</p>
      </div>
    </div>
  );
}

export default SubHeader;
