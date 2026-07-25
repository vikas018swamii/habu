import '../styles/About.css'

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">About HABU EV INDUSTRY</h1>
          <p className="page-subtitle">
            India's Leading Manufacturer of Custom Mobile Vending Carts & Electric Vehicles
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview section">
        <div className="container">
          <h2 className="section-title">Our Products & Services</h2>
          <div className="overview-content card">
            <p>
              We are India's leading Manufacturers, Suppliers, Exporters, Dealers and Retailers of 
              Custom Food Trucks, Food Cart, Wine Cart, Vegetable Cart, Advertisement cart, Ice Cream Cart, 
              Panipuri Cart, Vending Cart, Fruit Cart, Momos Cart, Pizza Cart, Drinks Cart, Rajma Chawal Cart, 
              Display Cart, bagwani cart, shoes stall, water supply cart, poha samosa cart, halmet stall, 
              atm cart, campaigning cart, courier services cart, super fast delivery cart, imitation artificial 
              jawellery cart, musical band cart, car washing cart, khadi bhandar cart, std pcu cart, garbej cart, 
              tea cart, sugar can cart, chudi wala cart, housiery house cart, gift cart, digital marketing cart, 
              bouquet corner cart, dairy products cart, xerox copy cart, school van, photo frame center cart, and 
              supply of a great range of all kind of mobile vending carts.
            </p>
            <p>
              We specialize in custom design, modern fabrication and durable quality. We offer a range of sizes 
              and styles as well as variety of brands.
            </p>
          </div>
        </div>
      </section>

      {/* About HABU EV INDUSTRY */}
      <section className="habu-section section bg-light">
        <div className="container">
          <h2 className="section-title">HABU EV INDUSTRY</h2>
          <div className="habu-content">
            <div className="habu-text">
              <p>
                <strong>HABU EV INDUSTRY</strong> is the new age electric vehicle in the category of electric 
                two wheeler and customised three wheelers developed and produced in India by HABU EV INDUSTRY. 
                We are a fast evolving and expanding start up based in <strong>Jaipur, Rajasthan</strong> formed 
                by veterans from the automobile industries.
              </p>
              <p>
                Our Manufacturing and assembly line to produce the electric two wheeler and three wheelers is 
                situated in <strong>Jaipur, Rajasthan</strong> and it is capable of rolling out 
                <strong> 50+ vehicles per day</strong>. We aim to provide technology to every range of vehicle 
                user and to fit with every budget.
              </p>
              <p>
                We at Habu ev Industry work on <strong>Eco–friendly world class technology</strong> and set a 
                social responsible platform to make our earth pollution free and bring Green revolution and also 
                ensure you the best design, comfort, quality and assured after sales service and spare parts support. 
                Habu ev Industry aims to get sustainable and cost-effective Electric Vehicles in the market that 
                will lead to environmental benefits and also to establish benchmark that accelerates the Electric 
                dream of India.
              </p>
            </div>
            <div className="habu-stats">
              <div className="stat-item">
                <div className="stat-icon">🏭</div>
                <div className="stat-info">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Vehicles Per Day</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">📍</div>
                <div className="stat-info">
                  <div className="stat-value">Jaipur</div>
                  <div className="stat-label">Manufacturing Unit</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🚗</div>
                <div className="stat-info">
                  <div className="stat-value">2W & 3W</div>
                  <div className="stat-label">Electric Vehicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <h2 className="section-title">Mission & Vision</h2>
          <div className="mv-grid">
            <div className="mv-card card">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                We want to take this business to next level. Our Aim is to Emerge as one of the World's Best 
                Known company in the field of Electric vehicle industries. Our mission is to endeavor of making 
                the world Beautiful, Greener and Pollution free for the generations and motivate people by making 
                electric vehicle products which can be used in their daily routines while building India's first 
                Green Factory.
              </p>
            </div>
            <div className="mv-card card">
              <div className="mv-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To emerge as one of the World's Best Known company in the field of Electric vehicle industries. 
                We envision a future where electric vehicles are the primary mode of transport, contributing to 
                cleaner air and a healthier environment. Our vision is to establish India's first Green Factory 
                and accelerate the Electric dream of India through sustainable and cost-effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose HABU EV INDUSTRY?</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Eco-Friendly Technology</h3>
              <p>World class eco-friendly technology to make our earth pollution free and bring Green revolution.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✨</div>
              <h3>Quality & Design</h3>
              <p>Best design, comfort, quality with assured after sales service and spare parts support.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💰</div>
              <h3>Cost-Effective</h3>
              <p>Sustainable and cost-effective Electric Vehicles that fit with every budget and range of vehicle user.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏭</div>
              <h3>Manufacturing Excellence</h3>
              <p>Modern fabrication facility in Jaipur capable of producing 50+ vehicles per day with custom design options.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
