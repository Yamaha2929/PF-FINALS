// Import necessary React components and styles
import React from 'react';
import './App.css'; 

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PALENGKEROS</h1>
      </div>
      <div id="root"></div>

      <ul className="menu">
        <li><a href="#" className="active">HOME</a></li>
        <li><a href="about.html">ABOUT US</a></li>
        <li><a href="contact.html">CONTACT US</a></li>
        <li><a href=""><i className="fas fa-shopping-cart"></i></a></li>
        <li className="logout-btn"><a href="loginform.html">Logout</a></li>
      </ul>
    </nav>
  );
};

// Content component
const Content = () => {
  return (
    <section className="content">
      <h1>Public Market Products</h1>
      <p>Get now!!!</p>
      <button><a href="#footer"></a>Shop Now</button>
    </section>
  );
};

// RecommendedItems component
const RecommendedItems = () => {
  return (
    <div>
      <h1 className="recommend">Recommended Items</h1>
      { 
      <section class="sec">
    <div class="products">

       
        <div class="card">
            <div class="img"><img src="6.gif" alt=""></img></div>
            <div class="desc">Fish Product</div>
            <div class="box">
                <div class="price">Get Now</div>
                <button class="btn"><a href="fish.html">View</a></button>
            </div>
        </div>
  
        
          <div class="card">
            <div class="img"><img src="5.jpg" alt=""></img></div>
            <div class="desc">Fruit Product</div>
            <div class="box">
                <div class="price">Get Now</div>
                <button class="btn"><a href="fruit.html">View</a></button>
            </div>
        </div>
     

          
          <div class="card">
            <div class="img"><img src="4.jpg" alt=""></img></div>
            <div class="desc">Meat Product</div>
            <div class="box">
                <div class="price">Get Now</div>
                <button class="btn"><a href="meat.html">View</a></button>
            </div>
        </div>
   

        
          <div class="card">
            <div class="img"><img src="3.png" alt=""></img></div>
            <div class="desc">Vegetable Product</div>
            <div class="box">
                <div class="price">Get Now</div>
                <button class="btn"><a href="vegetable.html">View</a></button>
            </div>
        </div>
    </div>
  
</section>}
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>Copyrights at <a href="">PALENGKEROS</a></p>
    </footer>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <RecommendedItems />
      <Footer />
    </div>
  );
};

export default App;
