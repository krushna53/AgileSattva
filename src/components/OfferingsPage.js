import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OfferingsPage = () => {
  const { page } = useParams();
  const [htmlContent, setHtmlContent] = useState("");

  const pageMap: Record<string, string> = {
    "agile-consulting": "index.html",
    "agile-consulting-1": "index-2.html",
    "agile-consulting-2": "index-3.html",
  };

  const fileName = pageMap[page || ""] || "index.html";

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch(`/offerings/${fileName}`);
        const text = await response.text();
        setHtmlContent(text);

        // Wait for HTML to be injected, then execute scripts
        setTimeout(() => executeScripts(text), 100);
      } catch (error) {
        console.error("Error loading HTML:", error);
      }
    };

    fetchHtml();
  }, [fileName]);

  const executeScripts = (html: string) => {
    const container = document.createElement("div");
    container.innerHTML = html;

    // Find and execute all <script> tags
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      newScript.textContent = oldScript.textContent; // Inline scripts
      Array.from(oldScript.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      document.body.appendChild(newScript);
    });
  };

  return (
    <div className="offerings-container">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default OfferingsPage;
