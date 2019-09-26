import React, { useContext } from "react";
import AlertsContext from "../../context/alerts/alertsContext";

const Alert = () => {
  const alertsContext = useContext(AlertsContext);

  const { alert } = alertsContext;

  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
