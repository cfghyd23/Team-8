import React from "react";
import Certificate from "./Certificate";
import html2pdf from "html2pdf.js";

const CertificateGenerator = async () => {
  const element = document.getElementById("certificate");

  try {
    const pdf = await html2pdf().from(element).outputPdf();
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "certificate.pdf";
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

export default CertificateGenerator;
