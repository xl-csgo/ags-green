import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './JobApplicationPage.css';

const JobApplicationPage = () => {
    const { job_id } = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [uploadedResume, setUploadedResume] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        education: '',
        message: '',
        resume: null
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/jobs/${job_id}?populate=*`);
                setJob(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching job:', error);
                setLoading(false);
            }
        };

        fetchJob();
    }, [job_id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileSelect = (file) => {
        if (file && file.type === 'application/pdf') {
            setFormData(prev => ({
                ...prev,
                resume: file
            }));
            setErrors(prev => ({
                ...prev,
                resume: ''
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                resume: 'Please select a PDF file'
            }));
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFileSelect(file);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            handleFileSelect(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formData.education.trim()) newErrors.education = 'Education is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const uploadResume = async (file) => {
        const data = new FormData();
        data.append("files", file);
        
        try {
            const response = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/api/upload`,
                data,
            });
            return response.data[0];
        } catch (error) {
            console.error('Error uploading resume:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            // First upload the resume
            const uploadedFile = await uploadResume(formData.resume);
            setUploadedResume(uploadedFile);

            // Then submit the application
            const applicationData = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                education: formData.education,
                message: formData.message,
                resume: uploadedFile.id,
                job: job_id
            };

            await axios.post(`${process.env.REACT_APP_API_URL}/api/applicants`, {
                data: applicationData
            });

            alert('Application submitted successfully!');
            navigate('/careers');
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Error submitting application. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="application-page">
                <div className="application-container">
                    <div className="loading">Loading job details...</div>
                </div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="application-page">
                <div className="application-container">
                    <div className="error">Job not found</div>
                </div>
            </div>
        );
    }

    return (
        <div className="application-page">
            <div className="application-container">
                <div className="application-header">
                    <button className="back-btn" onClick={() => navigate('/careers')}>
                        ← Back to Jobs
                    </button>
                    <h1>Apply for {job.role}</h1>
                    <div className="job-info">
                        <p><strong>Location:</strong> {job.loccation || job.location}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                        <p><strong>Compensation:</strong> {job.compensation}</p>
                    </div>
                    <div className="job-description">
                        <h3>Job Description</h3>
                        <div className="description-text">
                            {job.description?.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <form className="application-form" onSubmit={handleSubmit}>
                    <h2>Application Details</h2>
                    
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={errors.name ? 'error' : ''}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number *</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className={errors.mobile ? 'error' : ''}
                            placeholder="Enter your mobile number"
                        />
                        {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="education">Education *</label>
                        <input
                            type="text"
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            className={errors.education ? 'error' : ''}
                            placeholder="Enter your highest qualification"
                        />
                        {errors.education && <span className="error-message">{errors.education}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="resume">Resume (PDF) *</label>
                        <div 
                            className={`file-upload-area ${dragActive ? 'drag-active' : ''} ${errors.resume ? 'error' : ''}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={handleFileInputChange}
                                style={{ display: 'none' }}
                            />
                            <div className="upload-content">
                                {formData.resume ? (
                                    <div className="file-selected">
                                        <span>📄 {formData.resume.name}</span>
                                    </div>
                                ) : (
                                    <>
                                        <div className="upload-icon">📎</div>
                                        <p>Drag and drop your resume here or <span className="upload-link">click to browse</span></p>
                                        <p className="upload-note">Only PDF files are accepted</p>
                                    </>
                                )}
                            </div>
                        </div>
                        {errors.resume && <span className="error-message">{errors.resume}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Cover Letter / Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={errors.message ? 'error' : ''}
                            placeholder="Tell us why you're interested in this position..."
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="cancel-btn"
                            onClick={() => navigate('/careers')}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationPage;
