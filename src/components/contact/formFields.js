import React from 'react';

const FormField = ({ formdata, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case ('input'):
        formTemplate = (
          <div>
            <input
              {...formdata.config}
            />
          </div>
        )
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  }


  return (
    <div style={{
      margin: '0 auto',
      textAlign: 'center'
    }}>
      {renderTemplate()}
    </div>
  )
}

export default FormField;