import React from 'react';
import './JobCard.css';

const JobCard = ({ job, onClick }) => {
    const truncateDescription = (text, maxLength = 150) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="job-card" onClick={onClick}>
            <div className="job-card-header">
                <h3 className="job-role">{job.role}</h3>
                <div className="job-meta">
                    <span className="job-location">📍 {job.loccation || job.location}</span>
                    <span className="job-experience">💼 {job.experience}</span>
                </div>
            </div>
            
            <div className="job-card-body">
                <p className="job-description">
                    {truncateDescription(job.description)}
                </p>
            </div>
            
            <div className="job-card-footer">
                <span className="job-compensation">{job.compensation}</span>
                <button className="view-details-btn">View Details</button>
            </div>
        </div>
    );
};

export default JobCard;
