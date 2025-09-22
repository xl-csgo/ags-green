import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [formData, setFormData] = useState({
    load: 2,
    area: 100,
    connection: 'Individual',
    capacity: 1.0
  });

  const [results, setResults] = useState({
    projectCost: 60000,
    centralSubsidy: 30000,
    stateSubsidy: 15000,
    consumerInvestment: 15000,
    monthlyGeneration: 122,
    monthlySavings: 671,
    paybackPeriod: 2.0,
    co2Reduction: 17
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Simple calculation logic (you can make this more sophisticated)
    const baseProjectCost = value * 30000; // ₹30k per kW
    const centralSub = baseProjectCost * 0.5; // 50% central subsidy
    const stateSub = Math.min(baseProjectCost * 0.25, 15000); // 25% or max 15k
    const investment = baseProjectCost - centralSub - stateSub;
    
    setResults({
      projectCost: baseProjectCost,
      centralSubsidy: centralSub,
      stateSubsidy: stateSub,
      consumerInvestment: investment,
      monthlyGeneration: value * 122, // 122 units per kW
      monthlySavings: value * 335, // ₹335 savings per kW
      paybackPeriod: (investment / (value * 335 * 12)).toFixed(1),
      co2Reduction: value * 17 // 17 tonnes per kW over 25 years
    });
  };

  return (
    <div className="calculator-section">
      <div className="calculator-header">
        <h2 className="calculator-title">
          ☀️ Solar PV <span className="calculator-highlight">Calculator</span>
        </h2>
        <p className="calculator-subtitle">
          Roof-Top Solar PV Calculator for Residential Consumers
        </p>
      </div>

      <div className="calculator-cards-container">
        {/* Input Card */}
        <div className="calculator-card calculator-card--blue">
          <div className="calculator-card-header">
            <span className="calculator-card-icon">📝</span>
            <h3 className="calculator-card-title">Enter Details</h3>
          </div>
          
          <div className="calculator-form">
            <div className="form-group">
              <label>Sanctioned Load (kW) *</label>
              <input 
                type="number" 
                value={formData.load}
                onChange={(e) => handleInputChange('load', parseFloat(e.target.value) || 0)}
                className="calculator-input"
              />
            </div>
            
            <div className="form-group">
              <label>Shadow Free Area (Sq.feet)</label>
              <input 
                type="number" 
                value={formData.area}
                onChange={(e) => setFormData(prev => ({...prev, area: parseFloat(e.target.value) || 0}))}
                className="calculator-input"
              />
            </div>
            
            <div className="form-group">
              <label>Connection Type *</label>
              <select 
                value={formData.connection}
                onChange={(e) => setFormData(prev => ({...prev, connection: e.target.value}))}
                className="calculator-select"
              >
                <option value="Individual">Individual</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Suggested Solar Capacity (kW)</label>
              <input 
                type="number" 
                step="0.1"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', parseFloat(e.target.value) || 0)}
                className="calculator-input"
              />
            </div>
          </div>
        </div>

        {/* Cost Breakdown Card */}
        <div className="calculator-card calculator-card--orange">
          <div className="calculator-card-header">
            <span className="calculator-card-icon">💰</span>
            <h3 className="calculator-card-title">Cost Breakdown (INR)</h3>
          </div>
          
          <div className="cost-breakdown">
            <div className="cost-item">
              <span className="cost-label">Project Cost</span>
              <span className="cost-value cost-value--primary">₹{results.projectCost.toLocaleString()}</span>
            </div>
            
            <div className="cost-item">
              <span className="cost-label">Central Govt. Subsidy</span>
              <span className="cost-value cost-value--success">₹{results.centralSubsidy.toLocaleString()}</span>
            </div>
            
            <div className="cost-item">
              <span className="cost-label">State Govt. Subsidy</span>
              <span className="cost-value cost-value--info">₹{results.stateSubsidy.toLocaleString()}</span>
            </div>
            
            <div className="cost-item cost-item--highlight">
              <span className="cost-label">Consumer Investment</span>
              <span className="cost-value cost-value--highlight">₹{results.consumerInvestment.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Savings & Impact Card */}
        <div className="calculator-card calculator-card--green">
          <div className="calculator-card-header">
            <span className="calculator-card-icon">⚡</span>
            <h3 className="calculator-card-title">Expected Savings</h3>
          </div>
          
          <div className="savings-metrics">
            <div className="metric-item">
              <span className="metric-value">{results.monthlyGeneration}</span>
              <span className="metric-label">kWh/Month Generation</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value">₹{results.monthlySavings}</span>
              <span className="metric-label">Monthly Savings</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value">{results.paybackPeriod}</span>
              <span className="metric-label">Payback Period (Years)</span>
            </div>
            
            <div className="environmental-impact">
              <h4>Environmental Impact</h4>
              <p>
                <strong>{results.co2Reduction} tonnes</strong> CO₂ reduction equivalent to planting 
                <strong> {Math.round(results.co2Reduction * 46)} mature trees</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="calculator-footer">
        <div className="calculation-notes">
          <h4>📊 Calculation Assumptions</h4>
          <ul>
            <li>• Solar panel cost - ₹60,000/kW</li>
            <li>• Energy charges - ₹5.5/kWh</li>
            <li>• Emission factor - 0.82kg/kWh</li>
            <li>• 1 mature tree absorbs approx 22 kg of CO₂/annum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
