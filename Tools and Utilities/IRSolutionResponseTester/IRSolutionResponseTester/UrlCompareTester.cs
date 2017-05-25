using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace IRSolutionResponseTester
{
    public class UrlCompareTester
    {
        public IEnumerable<UrlScanResult> CompareUrls(IEnumerable<UrlScanRequest> urlsToCheck, string[] uriStemAlternatives, bool parallelExecution = false)
        {
            var results = new ConcurrentBag<UrlScanResult>();

            if (parallelExecution)
            {
                Parallel.ForEach(urlsToCheck, t => CompareUrlsHelper(t, uriStemAlternatives, results, t.Url.ToString()));
                return results.ToList();
            }

            int tasksCompleted = 0;
            foreach (var task in urlsToCheck)
            {
                CompareUrlsHelper(task, uriStemAlternatives, results, tasksCompleted.ToString());
                tasksCompleted++;
            }
            return results.ToList();
        }

        private static void CompareUrlsHelper(UrlScanRequest task, string[] uriStemAlternatives, ConcurrentBag<UrlScanResult> results, string tag)
        {
            var result = new UrlScanResult(task, tag);
            result.OriginalUrlTestResult = TestUrl(task.Url, tag);

            int subtasksCompleted = 0;
            foreach (string stemAlternative in uriStemAlternatives)
            {
                Uri alternativeUrl = new Uri(stemAlternative + task.Url.PathAndQuery);
                result.AlternativeUrlTestResults.Add(TestUrl(alternativeUrl,tag + "_" + subtasksCompleted));
                subtasksCompleted++;
            }

            results.Add(result);
        }

        private static UrlTestResult TestUrl(Uri url, string tag, string userAgent = null)
        {
            UrlTestResult result = new UrlTestResult(url);
            var webRequest = WebRequest.CreateHttp(url);
            if (!String.IsNullOrEmpty(userAgent))
            {
                //            webRequest.UserAgent = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36";
                webRequest.UserAgent = userAgent;
            }

            try
            {
                Stopwatch swInner = Stopwatch.StartNew();
                var response = (HttpWebResponse) webRequest.GetResponse();
                var stream = response.GetResponseStream();
                if(stream==null) { throw new Exception("Null stream"); }
                var sr = new StreamReader(stream);
                var content = sr.ReadToEnd();
                swInner.Stop();

                result.ContentLength = content.Length;
                result.Duration = swInner.ElapsedMilliseconds;
                result.Status = response.StatusCode;
                result.Exception = null;

                File.AppendAllText(@"C:\Temp\IRSolutionScanner\DownloadedContent\" + tag + "_" + url.Segments.Last(), content);
            }
            catch (WebException we)
            {
                result.Status = ((HttpWebResponse) we.Response)?.StatusCode;
                result.Exception = we;
            }
            catch (Exception e)
            {
                result.Exception = e;
            }

            return result;
        }
    }
}