import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p className="m-3">I am Home section</p>
      <Link to={"/textForm"}>
        <button type="button" className="btn btn-primary m-2">
          Go to Form Section
        </button>
      </Link>
    </div>
  );
}
