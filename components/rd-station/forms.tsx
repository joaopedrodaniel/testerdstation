// components/RDStationForm.js
import React, { useEffect } from 'react';

const RDStationForm = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
      script.async = true;
      script.onload = () => {
        if (window.RDStationForms) {
          new window.RDStationForms('ganhe-desconto-6244000451ee299ea2db', 'null').createForm();
        }
      };
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    if (!window.RDStationForms) {
      loadScript();
    } else {
      new window.RDStationForms('ganhe-desconto-6244000451ee299ea2db', 'null').createForm();
    }
  }, []);

  return <div role="main" id="ganhe-desconto-6244000451ee299ea2db"></div>;
};

export default RDStationForm;
