using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace IRSolutionResponseTester
{
    class Program
    {
        static void Main(string[] args)
        {
            ScanUrlsFromList();
        }

        private static void ScanUrlsFromList()
        {
            var urlRepository = new UrlRepository();
            IEnumerable<UrlScanRequest> urlsToCheck = urlRepository.GetUrls();

            // track start/end time and duration of the total process
            // perform a web request against the URL, note the response status code, response time, response size.

            // beside the URL in the repository, test against the alternative URI-stems.
            string[] uriStemAlternatives = new[]
            {
                "http://ir.euroinvestor.com",   // live url
            };

            //    "http://irvarnish-testold.euroinvestor.org.uk", // URL used to test Varnish cache responses - possibly no longer valid
            //    "http://irvarnishcf-testold.euroinvestor.org.uk" // URL used to test Varnish cache responses - possibly no longer valid
            //    "http://origin1-ir.euroinvestor.com", //origin server 1


            UrlCompareTester urlCompareTester = new UrlCompareTester();
            IEnumerable<UrlScanResult> results = urlCompareTester.CompareUrls(urlsToCheck, uriStemAlternatives, false);

            // write the results to output 
            var outputFormatter = new TextFileOuputFormatter();
            outputFormatter.OutputToFile(results, @"C:\Temp\IRFECI_v_LIVE_{0}.txt");
        }

    }
}
