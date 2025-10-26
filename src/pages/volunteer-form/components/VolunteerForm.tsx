import { Container } from 'react-bootstrap';

const VolunteerForm = () => {
    return (
        <section className="vl-volunteer-form-section sp2">
            <Container>
                <div className="vl-section-content text-center">
                    <div className="section-title">
                        <h2 className="title">Join Us as a Volunteer</h2>
                        <p className="para pb-32">
                            Fill out the form below to become a part of our community. 
                            Your skills and passion can make a real difference in the lives of those we serve.
                        </p>
                    </div>
                </div>
                <div className="volunteer-form-container" style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    minHeight: '800px'
                }}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfA7kwS8bAPqTst5I5BZNVWydauDTN5zWXvuApY2mQunfNBLg/viewform?embedded=true"
                        width="100%"
                        height="959"
                        title="Volunteer Registration Form"
                        style={{
                            maxWidth: '800px',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        Loading volunteer form...
                    </iframe>
                </div>
            </Container>
        </section>
    );
};

export default VolunteerForm;
