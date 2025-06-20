import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div>
          <h2>Burman Hospitality Pvt. Ltd.</h2>
          <p>📍 Delhi ▪ Central Delhi ▪ 110002 ▪ Created on: 1 Jul 2022 ▪ <span className="postpaid">POSTPAID</span></p>
        </div>
        <button className="query-btn">+ Raise Query</button>
      </div>

      <div className="overview-grid">
        <div className="revenue-box">
          <p>Total Revenue</p>
          <h3>10,00,000</h3>
        </div>
        <div className="revenue-box green">
          <p>Payment Received</p>
          <h3>7,00,000</h3>
        </div>
        <div className="revenue-box">
          <p>Not Yet Due</p>
          <h3>1,00,000</h3>
        </div>
        <div className="revenue-box">
          <p className="overdue">Payment Overdue</p>
          <div className="overdue-details">
            <div>A<br />20,000</div>
            <div>B<br />50,000</div>
            <div>C<br />50,000</div>
            <div>D<br />30,000</div>
          </div>
        </div>
        <div className="revenue-box">
          <p>Total Outstanding</p>
          <h3 className="outstanding">10,00,000</h3>
        </div>
        <div className="revenue-box">
          <p>Last Order Date</p>
          <h3 className="date">10 Dec 2023 03:30 PM</h3>
        </div>
      </div>

      <div className="tabs">
        <span className="active">Sites</span>
        <span>Orders</span>
        <span>VRs</span>
        <span>Reports</span>
        <span>Invoices</span>
        <span>PI</span>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Site Name</th>
            <th>State</th>
            <th>City</th>
            <th>Revenue</th>
            <th>Total orders</th>
            <th>Last Order</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {Array(6).fill().map((_, index) => (
            <tr key={index}>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
              <td className="placeholder"></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="activity">
        {["11 Oct 23", "7 Oct 23"].map((date, i) => (
          <div className="activity-box" key={i}>
            <h4>{date}</h4>
            {["Proposal Sent", "Interested"].map((label, j) => (
              <div className="activity-row" key={j}>
                <div className="timeline-dot" />
                <div className="activity-time">
                  <strong>{label}</strong>
                  <div>{j === 0 ? "05:30 PM" : "02:30 PM"}</div>
                </div>
                <div className="activity-desc">
                  <p>
                    <strong>Discussion Done</strong><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.<br />
                    <strong>Follow Up</strong>: 11 Oct 23 10:30 AM<br />
                    <em>- Bhinkumar Prasad</em>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
