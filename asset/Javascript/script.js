function DownloadBroucher() {
    document.getElementById("downloadBtn").addEventListener("click", function () {
        const pdfUrl = "./asset/Brochure/Human-Resource-Management.pdf"; // Change this to the actual PDF path
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MeeroHrConsultancy.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
DownloadBroucher();