import fs from "node:fs/promises";
import path from "node:path";

export async function writeQaCliReport(
  outputDir: string,
  stem: string,
  label: string,
  report: string,
  summary: unknown,
) {
  const reportPath = path.join(outputDir, `${stem}-report.md`);
  const summaryPath = path.join(outputDir, `${stem}-summary.json`);
  await fs.writeFile(reportPath, report, "utf8");
  await fs.writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  process.stdout.write(`${label} report: ${reportPath}\n`);
  process.stdout.write(`${label} summary: ${summaryPath}\n`);
}
