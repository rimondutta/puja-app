import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex h-full min-h-screen flex-col items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
