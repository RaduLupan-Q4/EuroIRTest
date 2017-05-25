using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace IRSolutionResponseTester
{
    public class UrlTestResult
    {
        private static int PageSize404 = 9493;

        public UrlTestResult(Uri url)
        {
            this.Url = url;
        }

        /// <summary>
        /// Duration in ms
        /// </summary>
        public long Duration { get; set; }

        /// <summary>
        /// Length of content in unicode chars
        /// </summary>
        public int ContentLength { get; set; }

        private HttpStatusCode? _status;
        public HttpStatusCode? Status
        {
            get
            {
                if (ContentLength == PageSize404)
                    return HttpStatusCode.NotFound;
                return _status;
            }
            set
            {
                _status = value;
            }
        }

        /// <summary>
        /// Did any exception occur during processing
        /// </summary>
        public Exception Exception { get; set; }

        public Uri Url { get; }

        public string[] ColumnNamesAsArray(string testId)
        {
            return new[]
            {
                $"{testId} Url",
                $"{testId} Status",
                $"{testId} ContentLength",
                $"{testId} Duration (ms)",
                $"{testId} Exception?"
            };
        }

        public string[] RowAsArray()
        {
            return new[]
            {
                Url.ToString(),
                Status.ToString(),
                ContentLength.ToString(),
                Duration.ToString(),
                (Exception != null).ToString()
            };
        }
    }
}
