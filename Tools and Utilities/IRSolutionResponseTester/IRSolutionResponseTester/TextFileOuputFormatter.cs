using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace IRSolutionResponseTester
{
    internal class TextFileOuputFormatter
    {
        // private string Delimiter = ";";
        private string Delimiter = "\t";

        public void OutputToFile(IEnumerable<UrlScanResult> urlScanResults, string fileNameFormatString)
        {
            var d = DateTime.Now;
            string timeStampString = $"{d.Year}_{d.Month}_{d.Day}_{d.Hour}_{d.Minute}";
            string fileName = string.Format(fileNameFormatString, timeStampString);

            using (StreamWriter sw = File.AppendText(fileName))
            {
                var rows = urlScanResults.ToArray();
                if (!rows.Any())
                {
                    return;
                }

                sw.WriteLine(string.Join(Delimiter, rows[0].ColumnNamesAsArray()));
                foreach (var result in rows)
                {
                    sw.WriteLine(string.Join(Delimiter, result.RowAsArray()));
                }
            }
        }
    }
}