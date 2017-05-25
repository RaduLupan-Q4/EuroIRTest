The Purpose of the "IR Solution Response Tester" is to compare the response across different endpoints in terms of size, http-statuscode and response time.
It was built to assess the Varnish cache and CloudFront infrastructure readyness, before starting migration from Akamai.

It has since morphed into a more generic comparison tool.

Consider using a compare of the physical files on the server side in cases where this make sense, using for example Winmerge or similar diff tools.