const VolunteerForm = () => {
    return (
        <div className='vl-team-inner' style={{ textAlign: 'center', margin: '20px 0' }}>
            <div className="vl-section-content">
              <div className="section-title">
                <h2 className="title">Join Us as a Volunteer</h2>
                <p className="para pb-32">Fill out the form below to become a part of our volunteer community.</p>
              </div>
            </div>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfA7kwS8bAPqTst5I5BZNVWydauDTN5zWXvuApY2mQunfNBLg/viewform?embedded=true"
                width="640"
                height="959"
                title="Volunteer Form"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default VolunteerForm;