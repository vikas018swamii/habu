import { useState } from 'react'
import '../styles/Dealer.css'

const Dealer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! Our team will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      experience: '',
      investment: '',
      message: ''
    })
  }

  const partnershipBenefits = [
    {
      icon: '🚀',
      title: "India's First Zero Shutdown Franchising Format",
      description: 'Fast and fearless franchise growth. The safest unstoppable growth format with zero risks, low costs and zero overheads.'
    },
    {
      icon: '🤝',
      title: 'Trust & Relationship',
      description: 'We believe trust is the core of professional relationships. We work hand in hand building trustworthy relationships with our employees, dealers, distributors and customers.'
    },
    {
      icon: '🎓',
      title: 'Training',
      description: 'Comprehensive training for Business Operations, Network Expansion, Products, Business Processes, and DMS portal. Training for Sales staff, Customer Interactions, Mechanics and Engineers.'
    },
    {
      icon: '📢',
      title: 'Marketing & Advertising',
      description: 'Continuous social media promotion, advertising and PR support to highlight your showroom. Marketing strategies to promote products and attract more customers.'
    },
    {
      icon: '✨',
      title: 'Design & Quality',
      description: 'Full customization and unlimited modern energy-efficient options. Beautifully designed vehicles with rigorous quality inspection by trained and experienced quality checking departments.'
    },
    {
      icon: '🎁',
      title: 'Incentive',
      description: 'HABU EV INDUSTRY offers attractive incentive schemes including bonuses, merit increases and rewards for dealers and employees who meet sales targets. Special Festival Offers available.'
    },
    {
      icon: '🛡️',
      title: 'Year Warranty',
      description: 'HABU is offering warranty of 1 to 3 years to its dealers. Exclusive app-based warranty management system for efficient and speedy facility to end customers.'
    }
  ]

  const dealershipRequirements = [
    { label: 'Show Room Area', value: '600 to 1200 Sq Ft' },
    { label: 'Service Area', value: '150 - 200 Sq Ft' },
    { label: 'Inventory', value: '4 to 40 Vehicles' },
    { label: 'Spare Part Order', value: 'Rs 50,000/-' },
    { label: 'Total Investment', value: '₹5 Lakh to ₹15 Lakh (Approximate)' }
  ]

  const requiredDocuments = [
    'Aadhar Card',
    'PAN Card (Individual and Firm)',
    'GST Certificate',
    'Company incorporation certificate',
    'Showroom Address Proof',
    'Showroom Photographs',
    'Bank details with Statements Current',
    'ITR of Last one year if available',
    'One Blank Cheque along with UTR NO (RTGS/NEFT) of Security Deposit'
  ]

  const tools = [
    'Basic Tools',
    'Soldering Iron',
    'Allen Key Set',
    'Multimeter',
    'Blower',
    'Socket Set'
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="dealer-hero section">
        <div className="container">
          <h1 className="page-title">Why You Must Partner With HABU EV INDUSTRY</h1>
          <p className="page-subtitle">
            India's First Zero Shutdown Franchising Format - Fast and Fearless Franchise Growth
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <h2 className="section-title">Partnership Benefits</h2>
          <p className="section-subtitle">
            The safest unstoppable growth format with zero risks, low costs and zero overheads
          </p>
          <div className="benefits-grid">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealership Policy */}
      <section className="policy-section section bg-light">
        <div className="container">
          <h2 className="section-title">Dealership Policy & Category</h2>
          <div className="policy-content">
            <div className="policy-text card">
              <p>
                Our dealer network is spread all over India like <strong>Rajasthan, Haryana, Bihar, 
                Chhattisgarh, Assam, Gujarat, M.P, U.P, J&K</strong> etc. We have plans of expansion 
                and soon we will be tapping dealers across India and grow our network exponentially.
              </p>
              <p>
                Currently, the company is in the process of expanding and launching these vehicles on 
                <strong> PAN India level</strong>, hence we have opened our Dealerships across India. 
                As we all know, Electric Vehicle market is booming day by day along with so much support 
                from the Government in form of subsidy, it's a great opportunity for all of you to get 
                into this business and become a member of our <strong>HABU EV family</strong>.
              </p>
              <p className="highlight-text">
                <strong>Pre-Bookings are going on. Book your AREA today!!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Requirements */}
      <section className="requirements-section section">
        <div className="container">
          <h2 className="section-title">Dealership Prerequisites</h2>
          <div className="requirements-grid">
            {dealershipRequirements.map((req, index) => (
              <div key={index} className="requirement-card card">
                <div className="requirement-label">{req.label}</div>
                <div className="requirement-value">{req.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom & Setup */}
      <section className="setup-section section bg-light">
        <div className="container">
          <h2 className="section-title">Showroom & Setup Details</h2>
          <div className="setup-grid">
            <div className="setup-card card">
              <h3>🏢 Showroom Interior & Exterior</h3>
              <p>
                The design will be provided by Company & the preparation will be done by Dealer using 
                the local resources. Showroom & Service Facility Design / Approved by HABU EV Industry's Authority.
              </p>
            </div>
            <div className="setup-card card">
              <h3>👥 Manpower</h3>
              <p>
                The success of your dealership relies not on the quantity of the employees. It relies on 
                the quality of the employees.
              </p>
              <ul>
                <li><strong>4-6 Manpower</strong> (Sales & Service)</li>
              </ul>
            </div>
            <div className="setup-card card">
              <h3>🔧 Tools</h3>
              <p>The most important tools for vehicle repair and modification:</p>
              <ul className="tools-list">
                {tools.map((tool, index) => (
                  <li key={index}>✓ {tool}</li>
                ))}
              </ul>
            </div>
            <div className="setup-card card">
              <h3>🏭 Workshop Setup</h3>
              <p>
                Some customers can be extremely picky when it comes to their vehicles. They often pay 
                large sums of money for their services, maintenance and modification, which gives them 
                the right to be discerning. Making vehicle owners feel at ease is part of the job of 
                an dealer by making an excellent workshop. <strong>HABU EV Industry is helping in making 
                of the workshop.</strong> Once the services get started the setup can be provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="documents-section section">
        <div className="container">
          <h2 className="section-title">Required Documents</h2>
          <p className="section-subtitle">
            Please fill the Application Form and send it back to us with stamp and signature along with the following documents:
          </p>
          <div className="documents-grid">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="document-item card">
                <span className="doc-icon">📄</span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="terms-section section bg-light">
        <div className="container">
          <h2 className="section-title">Terms & Conditions</h2>
          <div className="terms-content card">
            <ul className="terms-list">
              <li>All dealers will be appointed by the distributors but the dealers agreement has to send company then only <strong>LOI (Letter of Intent)</strong> will be issued (Valid for 11 months).</li>
              <li>For all dealers <strong>LOC (Letter of Confirmation)</strong> will issued after completion as the <strong>CI (Corporate Identity)</strong>.</li>
              <li>Company will give certain District area wise distribution & he/she will appoint a new dealer network or Company will provide support of enquiries for dealer network this territory.</li>
              <li>Supply period within <strong>7 – 15 days</strong> after indent the order. <strong>Minimum 40 units order</strong>.</li>
              <li>Before delivery <strong>7 days in advance full payment</strong> to be done as per Performa invoice.</li>
              <li>Special tools will be supplied base on the order along with payment.</li>
              <li>Distributors Interior Cost will be on <strong>50%</strong>.</li>
              <li>Dealer wise enquiries has to send to H.O. with name, mobile no., model, location on weekend basis as per the Online format.</li>
              <li>Payment to be made through <strong>HDFC Bank Branch Villa Station Account No. 50200090408262 IFSC CODE HDFC0006364</strong>.</li>
              <li>Company having the right to terminate to whom so ever without any clause by giving either or one month prior notice.</li>
              <li>Any legal complicity it has to be in <strong>JAIPUR jurisdiction court only</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="form-section section">
        <div className="container">
          <h2 className="section-title">Apply for Dealership</h2>
          <p className="section-subtitle">
            Fill out the form below and our team will get in touch with you
          </p>
          <div className="form-container">
            <form className="dealer-form card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">Business Experience (Years)</label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years of experience"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="investment">Expected Investment Range</label>
                  <select
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="5-10">₹5-10 Lakhs</option>
                    <option value="10-15">₹10-15 Lakhs</option>
                    <option value="15+">₹15+ Lakhs</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your business goals and expectations"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large form-submit">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dealer
