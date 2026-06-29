import React from "react";
import "./Subscriptions.css";
import iconBackground from "../../assets/images/icon-background.png";

export const Subscriptions: React.FC = () => {
  return (
    <div className="subscriptions-container">
      <div className="subscriptions-header">
        <h1>Subscription & Billing</h1>
        <p>Manage your subscription plan and billing information</p>
      </div>

      <div 
        className="current-plan-card" 
        style={{ backgroundImage: `url(${iconBackground})` }}
      >
        <h2 className="card-title-light">Current plan</h2>
        <div className="plan-details">
          <div className="plan-detail-col">
            <h3>Premium plan</h3>
            <p>Status: Active</p>
          </div>
          <div className="plan-detail-col">
            <h3>$2499.99</h3>
            <p>Per month</p>
          </div>
          <div className="plan-detail-col">
            <h3>31/08/2026</h3>
            <p>Renewal date</p>
          </div>
          <div className="plan-detail-col">
            <h3>45 OF 1500</h3>
            <p>Active users</p>
          </div>
        </div>
      </div>

      <div className="empty-section-indicator">
        <div className="side-bar-element"></div>
      </div>

      <div className="billing-info-card">
        <h2 className="billing-title">Billing Information</h2>
        
        <div className="billing-details">
          <div className="billing-col">
            <span className="billing-label">Billing Contact</span>
            <span className="billing-value">billing@derasaxhighschool.edu</span>
          </div>
          <div className="billing-col">
            <span className="billing-label">Payment Method</span>
            <span className="billing-value">•••• •••• •••• 4242</span>
          </div>
        </div>
      </div>
    </div>
  );
};