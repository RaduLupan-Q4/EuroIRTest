using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Linq;

namespace IRSolutionResponseTester
{
    public class UrlScanResult
    {
        public UrlScanResult(UrlScanRequest urlScanRequest, string tag)
        {
            UrlScanRequest = urlScanRequest;
            AlternativeUrlTestResults = new List<UrlTestResult>();
            Tag = tag;
        }

        /// <summary>
        /// Original UrlScanRequest 
        /// </summary>
        private UrlScanRequest UrlScanRequest { get; }
        public string Tag { get; private set; }

        public int HitCount => UrlScanRequest.Hitcount;
        public UrlTestResult OriginalUrlTestResult { get; set; }
        public IList<UrlTestResult> AlternativeUrlTestResults { get; set; }

        public string[] RowAsArray()
        {
            var combinedResults = new List<UrlTestResult>(AlternativeUrlTestResults);
            combinedResults.Add(OriginalUrlTestResult);

            bool sizeAndStatusEqual = 
                combinedResults.Min(t => t.Status.ToString()) == combinedResults.Max(t => t.Status.ToString()) 
                && combinedResults.Min(t => t.ContentLength) == combinedResults.Max(t => t.ContentLength);

            double diff = AlternativeUrlTestResults.Average(t => t.Duration) - OriginalUrlTestResult.Duration;

            IEnumerable<string> result = new string[]
            {
                Tag,
                sizeAndStatusEqual.ToString(),
                ((int)diff).ToString(),
                combinedResults.Min(t => t.Status.ToString()) + " | " + combinedResults.Max(t => t.Status.ToString()),
                combinedResults.Min(t => t.ContentLength)  + " | " + combinedResults.Max(t => t.ContentLength),
                combinedResults.Min(t => t.Duration)  + " | " + combinedResults.Max(t => t.Duration),
                combinedResults.Min(t => (t.Exception != null).ToString())  + " | " + combinedResults.Max(t => (t.Exception != null).ToString()),
                HitCount.ToString(),
            };

            result = result.Concat(OriginalUrlTestResult.RowAsArray());
            result = AlternativeUrlTestResults.Aggregate(result, (current, testResult) => current.Concat(testResult.RowAsArray()));

            return result.ToArray();
        }
        public string[] ColumnNamesAsArray()
        {
            IEnumerable<string> result = new[]
            {
                "Tag", "SizeAndStatusEq?", "AvgTimeDiff vs org", "Status", "Size", "Time (ms)", "Exception?",
                "HitCount",
                "Url", "Status", "ContentLength", "Duration (ms)", "Exception?",
            };


            for (int i=0; i<AlternativeUrlTestResults.Count; i++)
            {
                var testResult = AlternativeUrlTestResults[i];
                string label = "Test " + (i + 1);
                result = result.Concat(testResult.ColumnNamesAsArray(label));
            }

            return result.ToArray();
        }
    }
}