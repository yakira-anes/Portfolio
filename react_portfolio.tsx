import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [theme, setTheme] = useState('light');
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const skills = [
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Creating memorable brand identities that capture the essence of your business and resonate with your target audience.'
    },
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and seamless experiences that prioritize usability and visual appeal.'
    },
    {
      icon: '🏢',
      title: 'Visual Identity',
      description: 'Developing comprehensive brand systems including color palettes, typography, and visual guidelines.'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive, performant websites using modern technologies like React, JavaScript, and CSS.'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'InnovateTech Logo',
      description: 'Modern logo design for a technology startup, featuring clean lines and a forward-thinking aesthetic.',
      category: 'logos',
      image: 'Tech Startup Logo',
      tags: ['Logo Design', 'Branding']
    },
    {
      id: 2,
      title: 'ShopFlow Mobile App',
      description: 'Complete UI/UX design for an e-commerce mobile application with focus on user conversion and engagement.',
      category: 'uiux',
      image: 'E-commerce App UI',
      tags: ['UI Design', 'UX Research', 'Mobile']
    },
    {
      id: 3,
      title: 'Bella Vista Restaurant',
      description: 'Complete visual identity system including logo, menu design, and brand guidelines for an upscale restaurant.',
      category: 'identity',
      image: 'Restaurant Brand Identity',
      tags: ['Brand Identity', 'Print Design']
    },
    {
      id: 4,
      title: 'Creative Agency Website',
      description: 'Responsive website development with modern animations and optimized performance for a creative agency.',
      category: 'web',
      image: 'Portfolio Website',
      tags: ['React', 'CSS3', 'JavaScript']
    },
    {
      id: 5,
      title: 'FitLife Gym Logo',
      description: 'Dynamic logo design for a fitness center, emphasizing strength, movement, and energy.',
      category: 'logos',
      image: 'Fitness Brand Logo',
      tags: ['Logo Design', 'Sports']
    },
    {
      id: 6,
      title: 'SecureBank Mobile UI',
      description: 'Intuitive and secure mobile banking interface design with emphasis on accessibility and user trust.',
      category: 'uiux',
      image: 'Banking App Interface',
      tags: ['UI Design', 'Fintech', 'Security']
    }
  ];

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@anesragoub.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+213 XXX XXX XXX'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Algiers, Algeria'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      backgroundColor: theme === 'light' ? '#ffffff' : '#0f0f0f',
      color: theme === 'light' ? '#1a237e' : '#5a9bc4',
      lineHeight: '1.6',
      transition: 'all 0.3s ease'
    }}>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .gradient-text {
          background: linear-gradient(135deg, ${theme === 'light' ? '#1a237e' : '#3a8bc2'}, ${theme === 'light' ? '#1a237e' : '#5a9bc4'});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .btn-secondary {
          background: transparent;
          color: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          border: 2px solid ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .skill-card {
          background: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
          border: 1px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'};
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .skill-icon {
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
        }

        .portfolio-item {
          background: ${theme === 'light' ? '#f8f9ff' : '#1a1a1a'};
          border: 1px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'};
          transition: all 0.3s ease;
        }

        .portfolio-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .portfolio-image {
          background: linear-gradient(135deg, ${theme === 'light' ? '#1a237e' : '#3a8bc2'}, ${theme === 'light' ? '#1a237e' : '#5a9bc4'});
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
        }

        .filter-btn {
          background: transparent;
          border: 2px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'};
          color: ${theme === 'light' ? '#1a237e' : '#5a9bc4'};
          transition: all 0.3s ease;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
          border-color: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
        }

        .tag {
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
        }

        .contact-icon {
          background: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
          color: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
        }

        .form-input {
          background: ${theme === 'light' ? '#ffffff' : '#0f0f0f'};
          color: ${theme === 'light' ? '#1a237e' : '#5a9bc4'};
          border: 2px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'};
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: ${theme === 'light' ? '#1a237e' : '#3a8bc2'};
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.6s ease forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <header style={{
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        background: theme === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(15,15,15,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: `1px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: theme === 'light' ? '#1a237e' : '#3a8bc2'
            }}>
              Anes Ragoub
            </div>
            
            <div style={{ display: 'flex', listStyle: 'none', gap: '30px' }}>
              {['Home', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link"
                  style={{
                    textDecoration: 'none',
                    color: theme === 'light' ? '#1a237e' : '#5a9bc4',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: `1px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'}`,
                color: theme === 'light' ? '#1a237e' : '#5a9bc4',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 className="gradient-text" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            Designer & Developer
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: '0.8',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            I create stunning visual identities, intuitive user experiences, and bring them to life with clean, modern code. Specializing in logo design, UI/UX, and frontend development.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary"
              style={{
                padding: '15px 30px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
              style={{
                padding: '15px 30px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '80px 0',
        background: theme === 'light' ? '#f8f9ff' : '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '60px',
            color: theme === 'light' ? '#1a237e' : '#3a8bc2'
          }}>
            What I Do
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{
                  padding: '40px 30px',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div
                  className="skill-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}
                >
                  {skill.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '15px',
                  color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                }}>
                  {skill.title}
                </h3>
                <p style={{ opacity: '0.8' }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '60px',
            color: theme === 'light' ? '#1a237e' : '#3a8bc2'
          }}>
            Featured Work
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            {[
              { key: 'all', label: 'All' },
              { key: 'logos', label: 'Logos' },
              { key: 'uiux', label: 'UI/UX' },
              { key: 'identity', label: 'Brand Identity' },
              { key: 'web', label: 'Web Development' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                style={{
                  padding: '10px 25px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item fade-in"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <div
                  className="portfolio-image"
                  style={{
                    height: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}
                >
                  {item.image}
                </div>
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '10px',
                    color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ opacity: '0.8', marginBottom: '15px' }}>{item.description}</p>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="tag"
                        style={{
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 0',
        background: theme === 'light' ? '#f8f9ff' : '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '60px',
            color: theme === 'light' ? '#1a237e' : '#3a8bc2'
          }}>
            Let's Work Together
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                color: theme === 'light' ? '#1a237e' : '#3a8bc2',
                marginBottom: '30px',
                fontSize: '1.8rem'
              }}>
                Get In Touch
              </h3>
              <p style={{ marginBottom: '30px', opacity: '0.8' }}>
                Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
              </p>
              
              {contactInfo.map((contact, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div
                    className="contact-icon"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600' }}>{contact.label}</div>
                    <div style={{ opacity: '0.8' }}>{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontWeight: '600',
                  color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                }}>
                  Name
                </div>
                <input
                  type="text"
                  className="form-input"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontWeight: '600',
                  color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                }}>
                  Email
                </div>
                <input
                  type="email"
                  className="form-input"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontWeight: '600',
                  color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                }}>
                  Subject
                </div>
                <input
                  type="text"
                  className="form-input"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontWeight: '600',
                  color: theme === 'light' ? '#1a237e' : '#3a8bc2'
                }}>
                  Message
                </div>
                <textarea
                  className="form-input"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                />
              </div>
              
              <button
                onClick={handleFormSubmit}
                className="btn-primary"
                style={{
                  padding: '15px 30px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 0',
        textAlign: 'center',
        borderTop: `1px solid ${theme === 'light' ? '#e3f2fd' : '#2a2a2a'}`,
        opacity: '0.8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <p>&copy; 2025 Anes Ragoub. All rights reserved. Designed & Developed with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;