<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IROrders") %>
<%--<script type="text/javascript">
    document.write([
        "\<script src='",
        ("https:" == document.location.protocol) ? "https://" : "http://",
        "ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js' type='text/javascript'>\<\/script>"
    ].join(''));
</script>--%>

<script type="text/javascript">
    var activeModules = ['IRBenchmark'];
</script>

<div class="IRBenchmarkVerticalModule"></div>
<div class="IRBenchmarkHorizontalModule"></div>

<h1>Benchmark</h1>

<table class="IRBenchmarkModule table-look horizontal responsive">
    <tr>
        <th class="Header column-first company">Company</th>
        <th class="Header last">Last</th>
        <th class="Header one-week">1 Week</th>
        <th class="Header three-months">3 Months</th>
        <th class="Header six-months">6 Months</th>
        <th class="Header nine-months">9 Months</th>
        <th class="Header one-year">1 Year</th>
        <tr>
            <td class="Data column-first company">Western Bulk</td>
            <td class="Data last">-4.37</td>
            <td class="Data one-week formatColour">7.66</td>
            <td class="Data three-months formatColour">-41.35</td>
            <td class="Data six-months formatColour">-56.21</td>
            <td class="Data nine-months formatColour">-63.83</td>
            <td class="Data one-year formatColour">-73.86</td>
        </tr>
    <tr>
        <td class="Highlight" colspan="7">Indices</td>
    </tr>
    <tr>
        <td class="Data column-first company">Baltic Dry Index</td>
        <td class="Data last">739.00</td>
        <td class="Data one-week formatColour">-3.02</td>
        <td class="Data three-months formatColour">-34.95</td>
        <td class="Data six-months formatColour">+0.96</td>
        <td class="Data nine-months formatColour">-23.58</td>
        <td class="Data one-year formatColour">-48.25</td>
    </tr>
    <tr>
        <td>Baltic Trading</td>
        <td class="Data last">1.76</td>
        <td class="Data one-week formatColour">-9.74</td>
        <td class="Data three-months formatColour">-52.04</td>
        <td class="Data six-months formatColour">-68.00</td>
        <td class="Data nine-months formatColour">-72.28</td>
        <td class="Data one-year formatColour">-71.52</td>
    </tr>
    <tr>
        <td class="Highlight" colspan="7">Peer group</td>
    </tr>
    <tr>
        <td class="Data column-first company">DS Norden</td>
        <td class="Data last">142.60</td>
        <td class="Data one-week formatColour">-1.05</td>
        <td class="Data three-months formatColour">-5.03</td>
        <td class="Data six-months formatColour">-18.00</td>
        <td class="Data nine-months formatColour">-34.38</td>
        <td class="Data one-year formatColour">-49.72</td>
    </tr>
    <tr>
        <td class="Data column-first company">Pacific Basin</td>
        <td class="Data last">2.84</td>
        <td class="Data one-week formatColour">-11.22</td>
        <td class="Data three-months formatColour">-29.70</td>
        <td class="Data six-months formatColour">-40.04</td>
        <td class="Data nine-months formatColour">-40.43</td>
        <td class="Data one-year formatColour">-46.73</td>
    </tr>
    <tr>
        <td class="Data column-first company">Golden Ocean</td>
        <td class="Data last">5.77</td>
        <td class="Data one-week formatColour">-13.59</td>
        <td class="Data three-months formatColour">-26.97</td>
        <td class="Data six-months formatColour">-43.96</td>
        <td class="Data nine-months formatColour">-46.65</td>
        <td class="Data one-year formatColour">-58.01</td>
    </tr>
</table>

<%= site.footer("IROrders") %>

