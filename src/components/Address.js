import React from "react";
import "./Address.css";

function Address() {
  return (
    <>
      <form>
        <div className="add__container">
          <div className="add__street">
            <label>Street:-</label>
            <input type="text" />
          </div>
          <div className="add__country">
            <label>Country:-</label>
            <input type="text" />
          </div>
          <div className="add__zip">
            <label>Zip:-</label>
            <input type="number" />
          </div>
        </div>
      </form>
    </>
  );
}
export default Address;
