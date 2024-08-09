
import React from 'react';

function Container({ children, className = "", padding = "px-4" }) {
  return (
    <div className={`max-w-7xl mx-auto ${padding} ${className}`}>
      {children}
    </div>
  );
}

export default Container;
