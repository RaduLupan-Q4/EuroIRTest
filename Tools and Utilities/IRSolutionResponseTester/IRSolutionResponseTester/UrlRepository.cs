using System;
using System.Collections.Generic;
using System.IO;

namespace IRSolutionResponseTester
{
    internal class UrlRepository
    {
        public static string UrlListFilename = @"C:\Temp\FilesFromLive\fileListAsTestUrls.txt";
        public static readonly char Delimiter = ';';

        public UrlRepository()
        {
        }

        public IEnumerable<UrlScanRequest> GetUrls()
        {
            List<UrlScanRequest> results = new List<UrlScanRequest>();

            StreamReader sr = new StreamReader(UrlListFilename);

            string line = sr.ReadLine();
            while (line != null)
            {
                var lineParts = SplitOnce(line);
                int hitCount;
                int.TryParse(lineParts[1], out hitCount);
                results.Add(new UrlScanRequest() { Url = new Uri(lineParts[0]), Hitcount = hitCount });


                line = sr.ReadLine();
            }

            return results;
        }

        public IEnumerable<UrlScanRequest> GetUrlsSimple(string fileNameAndPath)
        {
            List<UrlScanRequest> results = new List<UrlScanRequest>();

            StreamReader sr = new StreamReader(fileNameAndPath);

            string line = sr.ReadLine();
            while (line != null)
            {
                results.Add(new UrlScanRequest() { Url = new Uri(line), Hitcount = 0 });
                line = sr.ReadLine();
            }

            return results;
        }

        private string[] SplitOnce(string line)
        {
            int position = line.IndexOf(Delimiter);
            return new [] {line.Substring(0, position), line.Substring(position + 1)};
        }
    }
}