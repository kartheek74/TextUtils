import React from 'react';

export default function Alert(props) {

  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style ={{height: '35px'}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type}`}
          role="alert"
          style={{
            color: '#fff',
            backgroundColor:
              props.alert.type === 'success'
                ? '#83aad9'
                : props.alert.type === 'danger'
                ? '#dc3545'
                : '#5e9882',
            border: 'none'
          }}
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}