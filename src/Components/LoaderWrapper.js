"use client";
import React, { useState } from "react";
import Loader from "@/Components/Loader";

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        children
      )}
    </>
  );
};

export default LoaderWrapper;
