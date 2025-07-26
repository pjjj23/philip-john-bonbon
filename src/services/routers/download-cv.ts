document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement | null;

  if (!downloadBtn) return;

  downloadBtn.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();

    const fileId: string = "1lrB82ZpAjtrHj_JuF99hfIXxOUtkzHdd";

    // Create temporary link
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.target = "_blank";
    link.download = "Philip_John_CV.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
