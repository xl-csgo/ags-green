import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import './JobModal.css';

const JobModal = ({ job, onClose }) => {
    const navigate = useNavigate();
    
    if (!job) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleApplyNow = () => {
        navigate(`/apply/${job.documentId}`);
        onClose();
    };

    return (
        <div className="job-modal-overlay" onClick={handleOverlayClick}>
            <div className="job-modal">
                <div className="job-modal-header">
                    <h2 className="modal-job-role">{job.role}</h2>
                    <button className="modal-close-btn" onClick={onClose}>
                        ✕
                    </button>
                </div>
                
                <div className="job-modal-content">
                    <div className="job-details-section">
                        <div className="job-detail-item">
                            <strong>Location:</strong>
                            <span>{job.loccation || job.location}</span>
                        </div>
                        <div className="job-detail-item">
                            <strong>Experience Required:</strong>
                            <span>{job.experience}</span>
                        </div>
                        <div className="job-detail-item">
                            <strong>Compensation:</strong>
                            <span>{job.compensation}</span>
                        </div>
                    </div>
                    
                    <div className="job-description-section">
                        <h3>Job Description</h3>
                        <div className="job-full-description">
                            {job.description?.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    
                    {job.details && (
                        <div className="job-details-rich-section">
                            <h3>Job Details</h3>
                            <div className="article-content">
                                {Array.isArray(job.details) ? (
                                    <BlocksRenderer content={job.details} />
                                ) : (
                                    <div>
                                        {job.details.split('\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="job-modal-footer">
                    <button className="apply-btn" onClick={handleApplyNow}>Apply Now</button>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default JobModal;
