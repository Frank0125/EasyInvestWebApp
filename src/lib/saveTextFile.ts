export function saveTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const file = document.createElement("a");
  file.href = url;
  file.download = filename;
  file.click();

  URL.revokeObjectURL(url); //cleans url
}
