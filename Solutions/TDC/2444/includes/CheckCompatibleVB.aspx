<%@ Import Namespace="Logging" %>
<%
    Dim showMobileChart As Boolean = False
    Dim device As String = "not detected"
    Dim userAgentMatches As ArrayList = New ArrayList()
        
    userAgentMatches.Add("Safari/5")
    userAgentMatches.Add("Chrome")
    'userAgentMatches.Add("MSIE 6.0") 'According to browserstack test with IE 6 does not support this chart fluidly enough.
    userAgentMatches.Add("MSIE 7.0")
    userAgentMatches.Add("MSIE 8.0")
    userAgentMatches.Add("MSIE 9.0")
    userAgentMatches.Add("MSIE 10.0")
    userAgentMatches.Add("rv:11.0")
    userAgentMatches.Add("Opera")
    userAgentMatches.Add("iPhone")
    userAgentMatches.Add("iPad")
    userAgentMatches.Add("Android 4")
    userAgentMatches.Add("Firefox")
    
    For UACounter As Integer = 0 To userAgentMatches.Count - 1
        If Request.UserAgent.Contains(userAgentMatches(UACounter).ToString()) Then
            showMobileChart = True
        End If
    Next
    
    If showMobileChart Then
        device = Request.UserAgent.ToString()
    Else
        'Log.Status("Device not on list CheckCompatible.aspx - UA: " & Request.UserAgent)
    End If
%>