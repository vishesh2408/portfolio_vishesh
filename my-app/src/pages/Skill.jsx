import React from 'react';
import {
    Code, Code2, Database, BrainCircuit
} from 'lucide-react';

const Skill = () => {
    return (
        <div style={{
            background: '#111827',
            padding: '20px',
            maxWidth: '1500px',
            margin: '0 auto',
            color: '#d1d5db',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #7b3e8d, #b780d0)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            }}>
                <BrainCircuit style={{ width: '24px', height: '24px', color: ' #7b3e8d' }} />
                My Skills & Expertise
            </h2>
            {/* <p style={{ fontSize: '18px', marginTop: '10px', marginBottom: '20px', color: '#9ca3af' }}>
                Here's a breakdown of my technical proficiencies. I'm always expanding my knowledge base.
            </p> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

                {/* Programming Languages */}
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#d1d5db',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #4b5563',
                        paddingBottom: '10px'
                    }}>Programming Languages</h3>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>Java</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '65%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>65%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code2 style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>C++</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '60%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>60%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>JavaScript</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '90%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #34d399, #10b981)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>90%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frontend Development */}
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#d1d5db',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #4b5563',
                        paddingBottom: '10px'
                    }}>Frontend Development</h3>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>HTML5</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '95%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #34d399, #10b981)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>95%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>CSS3</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '92%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #34d399, #10b981)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>92%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>Next.js</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '70%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>70%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>React</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '90%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #34d399, #10b981)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>90%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Development */}
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#d1d5db',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #4b5563',
                        paddingBottom: '10px'
                    }}>Backend Development</h3>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>Node.js</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '85%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #34d399, #10b981)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>85%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Code style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>Express.js</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '75%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>75%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#d1d5db',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #4b5563',
                        paddingBottom: '10px'
                    }}>Databases</h3>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Database style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>MySQL</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '68%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>68%</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '0.5rem',
                        padding: '20px',
                        margin: '10px 0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <span style={{ width: '24px', height: '24px', marginRight: '10px', color: '#b9b9b9' }}><Database style={{ width: '24px', height: '24px', color: '#b9b9b9' }} /></span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d1d5db' }}>MongoDB</span>
                        <div style={{
                            height: '16px',  // Increased height
                            backgroundColor: '#e5e7eb',
                            borderRadius: '10px',
                            marginTop: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '72%',
                                height: '16px',  // Increased height
                                background: 'linear-gradient(to right, #9e7bff, #db7fff)',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '0px',  // Adjusted top to vertically center the text
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>72%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;
