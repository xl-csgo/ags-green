import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  // Assumptions / reference values
  const COST_PER_KW = 60000; // ₹/kW
  const KWH_PER_KW_PER_MONTH = 122; // kWh per kW per month
  const TARIFF_PER_KWH = 5.5; // ₹/kWh
  const EMISSION_FACTOR_KG_PER_KWH = 0.82; // kg CO₂ per kWh
  const KG_CO2_PER_TREE_PER_YEAR = 22; // kg CO₂ per tree per year
  const AREA_PER_KW_SQFT = 100; // sqft per kW
  // Subsidy assumptions (kept from earlier UI)
  const CENTRAL_SUBSIDY_RATE = 0.5; // 50%
  const CENTRAL_SUBSIDY_CAP = 78000; // ₹ cap
  const STATE_SUBSIDY_RATE = 0.25; // 25%
  const STATE_SUBSIDY_CAP = 30000; // ₹ cap

  function roundToOneDecimal(n) {
    return Math.round((Number.isFinite(n) ? n : 0) * 10) / 10;
  }

  function computeSuggestedCapacity(load, areaSqft) {
    const byLoad = Math.max(0, Number(load) || 0);
    const byArea = Math.max(0, (Number(areaSqft) || 0) / AREA_PER_KW_SQFT);
    return roundToOneDecimal(Math.min(byLoad, byArea));
  }

  function computeResults(capacityKw) {
    const cap = Math.max(0, Number(capacityKw) || 0);
    const projectCost = cap * COST_PER_KW;
  const centralSubsidy = Math.min(projectCost * CENTRAL_SUBSIDY_RATE, CENTRAL_SUBSIDY_CAP);
  const stateSubsidy = Math.min(projectCost * STATE_SUBSIDY_RATE, STATE_SUBSIDY_CAP);
    const consumerInvestment = Math.max(0, projectCost - centralSubsidy - stateSubsidy);
    const monthlyGeneration = cap * KWH_PER_KW_PER_MONTH;
    const monthlySavings = monthlyGeneration * TARIFF_PER_KWH;
    const paybackPeriod = monthlySavings > 0 ? Number((consumerInvestment / (monthlySavings * 12)).toFixed(1)) : 0;

    const annualCO2kg = monthlyGeneration * 12 * EMISSION_FACTOR_KG_PER_KWH;
    const annualCO2Tonnes = annualCO2kg / 1000;
    const treesPerYear = annualCO2kg / KG_CO2_PER_TREE_PER_YEAR;

    return {
      projectCost,
      centralSubsidy,
      stateSubsidy,
      consumerInvestment,
      monthlyGeneration,
      monthlySavings,
      paybackPeriod,
      annualCO2Tonnes,
      treesPerYear
    };
  }

  const [formData, setFormData] = useState({
    load: 2,
    area: 100,
    connection: 'Individual',
    capacity: roundToOneDecimal(computeSuggestedCapacity(2, 100))
  });

  const [results, setResults] = useState(() => computeResults(computeSuggestedCapacity(2, 100)));

  const onLoadChange = (val) => {
    const load = Math.max(0, parseFloat(val) || 0);
    setFormData(prev => {
      const capacity = computeSuggestedCapacity(load, prev.area);
      const next = { ...prev, load, capacity };
      setResults(computeResults(capacity));
      return next;
    });
  };

  const onAreaChange = (val) => {
    const area = Math.max(0, parseFloat(val) || 0);
    setFormData(prev => {
      const capacity = computeSuggestedCapacity(prev.load, area);
      const next = { ...prev, area, capacity };
      setResults(computeResults(capacity));
      return next;
    });
  };

  return (
    <div className="calculator-section">
      <div className="calculator-header">
        <h2 className="calculator-title">
          Solar PV <span className="calculator-highlight">Calculator</span>
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
                min="0"
                value={formData.load}
                onChange={(e) => onLoadChange(e.target.value)}
                className="calculator-input"
              />
            </div>
            
            <div className="form-group">
              <label>Shadow Free Area (Sq.feet)</label>
              <input 
                type="number" 
                min="0"
                value={formData.area}
                onChange={(e) => onAreaChange(e.target.value)}
                className="calculator-input"
              />
            </div>
            
            {/* <div className="form-group">
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
            </div> */}
            
            <div className="form-group">
              <label>Suggested Solar Capacity (kW)</label>
              <input 
                type="number" 
                step="0.1"
                value={formData.capacity}
                className="calculator-input"
                readOnly
              />
              <small style={{opacity: 0.8}}>Limited by sanctioned load and shadow-free area (1 kW per 100 sqft)</small>
            </div>
          </div>
        </div>

        {/* Cost Breakdown Card */}
        <div className="calculator-card calculator-card--orange">
          <div className="calculator-card-header">
            <span className="calculator-card-icon">💰</span>
            <h3 className="calculator-card-title">Cost Breakdown (INR)*</h3>
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
            <small style={{opacity: 0.8}}>*This costing is for reference purposes only and actual cost may vary according to the site dimensions/requirements.</small>
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
              <span className="metric-value">{Math.round(results.monthlyGeneration)}</span>
              <span className="metric-label">kWh/Month Generation</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value">₹{Math.round(results.monthlySavings).toLocaleString()}</span>
              <span className="metric-label">Monthly Savings</span>
            </div>
            
            <div className="metric-item">
              <span className="metric-value">{results.paybackPeriod}</span>
              <span className="metric-label">Payback Period (Years)</span>
            </div>
            
            <div className="environmental-impact">
              <h4>Environmental Impact</h4>
              <p>
                Annual CO₂ reduction: <strong>{results.annualCO2Tonnes.toFixed(2)} tonnes</strong>
              </p>
              <p>
                Equivalent to planting <strong>{Math.round(results.treesPerYear).toLocaleString()} trees/year</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="calculator-footer">
        <div className="calculation-notes">
          <h4>📊 Calculation Assumptions</h4>
          <ul>
            <li>• Tentative solar cost - ₹60,000/kW</li>
            <li>• Energy charges - ₹5.5/kWh</li>
            <li>• Emission factor - 0.82 kg CO₂/kWh</li>
            <li>• 1 matured tree absorbs ≈ 22 kg CO₂/year</li>
            <li>• Tentative shadow-free area required - 1 kW per 100 sqft</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
