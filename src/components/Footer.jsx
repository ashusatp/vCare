import React from "react";

const Footer = ({
  title,
  contact1,
  contact2,
  email,
  address1,
  address2,
}) => {
  return (
    <React.Fragment>
      <footer className="bg-black w-full flex items-center justify-center text-white body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center  lg:justify-center md:flex-row md:flex-nowrap flex-wrap flex-col gap-5">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span className="ml-1 mt-2 text-xl">{title}</span>
            </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className=" w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Made by:
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600">{title}</p>
                </li>
                <li>
                  <p className="text-gray-600">
                    Contact no :{contact1},{contact2}
                  </p>
                </li>
                <li>
                  <p className="text-gray-600">Mail: {email}</p>
                </li>
                <li>
                  <p className="text-gray-600">{address1}</p>
                </li>
                <li>
                  <p className="text-gray-600">{address2}</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <section className="flex justify-center items-center bottom-0 left-0  text-lg w-full h-[10vh] bg-black text-gray-500 font-[AltoneTrial-Reg]">
        <div>© 2024 Vcare Groups</div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
