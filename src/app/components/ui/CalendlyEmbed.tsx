import { useEffect } from "react";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/jakkies/30min?background_color=1f1f1f&text_color=ffffff&primary_color=74e469" 
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
