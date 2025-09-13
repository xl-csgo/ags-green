import React, { useEffect, useState } from 'react';
import './JobList.css';
import JobCard from './JobCard';
import JobModal from './JobModal';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/jobs?pagination[page]=${currentPage}&pagination[pageSize]=6`);
                setJobs(response.data.data);
                setTotalPages(response.data.meta.pagination.pageCount);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setError('Failed to load job listings');
                setLoading(false);
            }
        };

        fetchJobs();
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleJobClick = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };

    if (loading) {
        return (
            <div className="job-list">
                <h2 className="job-list-title">Open Positions</h2>
                <div className="loading">Loading job listings...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="job-list">
                <h2 className="job-list-title">Open Positions</h2>
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="job-list">
            <h2 className="job-list-title">Open Positions</h2>
            
            <div className="jobs-grid">
                {jobs.map((job) => (
                    <JobCard 
                        key={job.documentId}
                        job={job}
                        onClick={() => handleJobClick(job)}
                    />
                ))}
            </div>

            {jobs.length === 0 && (
                <div className="no-jobs">
                    <p>No job openings available at the moment. Please check back later!</p>
                </div>
            )}
            
            {totalPages > 1 && (
                <div className="pagination-controls">
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className="pagination-btn prev-btn"
                    >
                        ← Previous
                    </button>
                    
                    <div className="page-numbers">
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`page-number-btn ${currentPage === pageNum ? 'active' : ''}`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>
                    
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        className="pagination-btn next-btn"
                    >
                        Next →
                    </button>
                </div>
            )}

            {showModal && selectedJob && (
                <JobModal 
                    job={selectedJob}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default JobList;
