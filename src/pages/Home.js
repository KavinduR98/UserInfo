import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#0194ff", height: "65px" }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1" style={{color:"#fff", paddingLeft:"40rem"}}>Title</span>
          </div>
        </nav></div>
      <h1>Users</h1>
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <div className="user-cards">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
