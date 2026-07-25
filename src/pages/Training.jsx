import { Link } from 'react-router-dom'
import '../styles/Training.css'

const Training = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of hands-on experience'
    },
    {
      icon: '🔧',
      title: 'Hands-on Training',
      description: 'Practical workshops with real vehicles and equipment'
    },
    {
      icon: '📜',
      title: 'Certification',
      description: 'Receive recognized certificates upon course completion'
    },
    {
      icon: '💼',
      title: 'Job Placement',
      description: 'Career support and placement assistance for graduates'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with industry professionals and fellow students'
    },
    {
      icon: '📚',
      title: 'Updated Curriculum',
      description: 'Stay current with latest EV technologies and industry trends'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="training-hero section">
        <div className="container">
          <h1 className="page-title">School of Electric Vehicle Technology</h1>
          <p className="page-subtitle">
            Build your career in the future of mobility. Learn from experts and become part of India's EV revolution.
          </p>
        </div>
      </section>

      {/* About EV Industry Section */}
      <section className="ev-industry-section section">
        <div className="container">
          <div className="ev-industry-content card">
            <h2 className="section-title">इलेक्ट्रिक व्हीकल इंडस्ट्री में कैरियर का भविष्य</h2>
            <div className="ev-industry-text">
              <p>
                जब बाज़ार में कोई नई और लोकप्रिय तकनीक आती है, तो वह निवेश और कैरियर के नए अवसर पैदा करती है। 
                आज इलेक्ट्रिक व्हीकल (EV) इंडस्ट्री तेज़ी से उभरती हुई ऐसी ही एक इंडस्ट्री है, जो ऑयल इंडस्ट्री 
                की तुलना में अधिक टिकाऊ और भविष्य-उन्मुख मानी जा रही है।
              </p>
              <p>
                इलेक्ट्रिक वाहनों में लगातार नई तकनीकों और innovations का विकास हो रहा है। यह न केवल पर्यावरण 
                के लिए लाभदायक है, बल्कि आने वाले समय में यह आम लोगों की ज़िंदगी का अहम हिस्सा बनने वाला है। 
                प्रदूषण को कम करने और ऊर्जा की बचत के लिए EV एक प्रभावी समाधान के रूप में सामने आया है।
              </p>
              <p>
                EV इंडस्ट्री ऑटोमोबाइल सेक्टर में एक बड़ा परिवर्तन ला रही है। भारत सरकार पेट्रोल और डीज़ल वाहनों 
                को चरणबद्ध तरीके से कम करने और इलेक्ट्रिक वाहनों को बढ़ावा देने के लिए कई योजनाएँ और नीतियाँ लागू 
                कर रही है। अनुमान है कि आने वाले वर्षों में इस सेक्टर से करोड़ों नए रोज़गार के अवसर पैदा होंगे और 
                2030 तक हज़ारों स्टार्टअप्स EV सेक्टर से जुड़ सकते हैं। इस क्षेत्र में करियर की संभावनाएँ बेहद उज्ज्वल हैं।
              </p>
              <div className="course-objective">
                <h3>कोर्स का उद्देश्य</h3>
                <p>
                  इस कोर्स/प्रोजेक्ट को शुरू करने का मुख्य उद्देश्य युवाओं को इलेक्ट्रिक व्हीकल इंडस्ट्री से जुड़ी 
                  आधुनिक स्किल्स प्रदान करना है, ताकि वे इंडस्ट्री-रेडी बन सकें और कुशल मानव संसाधन के रूप में 
                  देश के विकास में योगदान दे सकें।
                </p>
                <p>
                  इस कोर्स में प्रवेश के लिए किसी विशेष डिग्री या उम्र की सीमा नहीं है। कोई भी इच्छुक व्यक्ति इसे 
                  कर सकता है। कोर्स पूरा करने के बाद छात्रों को बैटरी टेक्नोलॉजी, मोटर सिस्टम, चार्जिंग इंफ्रास्ट्रक्चर 
                  और EV से जुड़ी आधुनिक तकनीकों की संपूर्ण जानकारी दी जाएगी, जिससे वे भविष्य में इस तेज़ी से बढ़ते 
                  सेक्टर में अपना सफल कैरियर बना सकें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Training Programs?</h2>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card card">
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diploma Courses Section */}
      <section className="courses-section section bg-light">
        <div className="container">
          <h2 className="section-title">Diploma Programs</h2>
          <p className="section-subtitle">
            Comprehensive diploma programs for in-depth knowledge and expertise
          </p>
          <div className="courses-grid">
            <div className="course-card card">
              <div className="course-header">
                <h3>Diploma in E-Rickshaw Mechanic</h3>
                <div className="course-badge">
                  <span className="badge-duration">Diploma</span>
                </div>
              </div>
              <p className="course-description">
                Comprehensive training program covering all aspects of E-Rickshaw mechanics, 
                maintenance, repair, and diagnostics.
              </p>
              <button className="btn btn-primary course-btn">Enroll Now</button>
            </div>
            <div className="course-card card">
              <div className="course-header">
                <h3>Diploma in E-Scooty / Bike Mechanic</h3>
                <div className="course-badge">
                  <span className="badge-duration">Diploma</span>
                </div>
              </div>
              <p className="course-description">
                Specialized diploma program for E-Scooty and E-Bike mechanics. Learn advanced 
                repair techniques and maintenance procedures.
              </p>
              <button className="btn btn-primary course-btn">Enroll Now</button>
            </div>
            <div className="course-card card">
              <div className="course-header">
                <h3>Diploma in Spray Painting Technology</h3>
                <div className="course-badge">
                  <span className="badge-duration">Diploma</span>
                </div>
              </div>
              <p className="course-description">
                Master the art of spray painting for electric vehicles. Learn modern techniques, 
                color matching, and finishing processes.
              </p>
              <button className="btn btn-primary course-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Courses Section */}
      <section className="courses-section section">
        <div className="container">
          <h2 className="section-title">Certificate Programs</h2>
          <p className="section-subtitle">
            Specialized certificate courses for focused skill development
          </p>
          <div className="certificate-grid">
            <div className="certificate-card card">
              <div className="certificate-icon">🔧</div>
              <h3>Certificate in E-Rickshaw Assembling</h3>
              <p>Learn complete assembly process of E-Rickshaws from components to finished vehicle.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">🛵</div>
              <h3>Certificate in E-Scooty / Bike Assembling</h3>
              <p>Master the assembly techniques for E-Scooty and E-Bike vehicles.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">⚡</div>
              <h3>Certificate in Electric Vehicle Wiring Technician</h3>
              <p>Specialized training in EV electrical systems, wiring, and circuit troubleshooting.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">🎛️</div>
              <h3>Certificate in Controller Repair</h3>
              <p>Learn to diagnose, repair, and maintain EV controllers and control systems.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">⚙️</div>
              <h3>Certificate in Electric Vehicle Motor Repair</h3>
              <p>Comprehensive training in EV motor maintenance, repair, and troubleshooting.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">�</div>
              <h3>Certificate in Electric Vehicle Systems Maintenance</h3>
              <p>Learn to maintain EV electrical systems, power delivery, and performance optimization.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">🧰</div>
              <h3>Certificate in Electric Vehicle Diagnostics</h3>
              <p>Specialized course on EV system diagnostics, safety protocols, and preventive maintenance.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
            <div className="certificate-card card">
              <div className="certificate-icon">🪑</div>
              <h3>Certificate in Seat Making Business</h3>
              <p>Learn seat manufacturing, upholstery, and customization for electric vehicles.</p>
              <button className="btn btn-secondary certificate-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Placement Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Expert Trainers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="enrollment-section section bg-light">
        <div className="container">
          <div className="enrollment-content">
            <h2>Ready to Start Your EV Career?</h2>
            <p>
              Join thousands of successful graduates who are now working in the EV industry. 
              Take the first step towards a rewarding career in electric mobility.
            </p>
            <div className="enrollment-buttons">
              <button className="btn btn-primary btn-large">Apply Now</button>
              <Link to="/dealer" className="btn btn-secondary btn-large">
                Become a Dealer
              </Link>
            </div>
            <div className="enrollment-info">
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Call Us:</strong>
                  <p>+91 1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Email Us:</strong>
                  <p>training@habuev.in</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Visit Us:</strong>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Training
