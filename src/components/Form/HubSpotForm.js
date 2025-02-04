import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    // Load the HubSpot form script dynamically
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";

    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48093598",
          formId: "d1c2a594-299c-4ff0-8364-0bbcdf338d43",
          target: "#hubspot-form-container", // Specify target to prevent multiple forms
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Container for the HubSpot form */}
      <div id="hubspot-form-container"></div>
    </div>
  );
};

export default HubSpotForm;
