import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./FeaturedInfo.css";

export default function Featuredubfo() {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle"> Revenue</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2.272</span>
          <span className="featuredmoneyrate">
            {" "}
            -12.74 <ArrowDownward className="safis" />
          </span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle"> Sales</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$7.272</span>
          <span className="featuredmoneyrate">
            {" "}
            -2.7 <ArrowDownward className="safis" />
          </span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle"> Cost</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$22.272</span>
          <span className="featuredmoneyrate">
            +1.7 <ArrowUpward className="safi " />
          </span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
    </div>
  );
}
