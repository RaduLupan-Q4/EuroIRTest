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

<table class="IRBenchmarkModule table-look horizontal responsive rwd-table">
    
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
            <td data-th="Last" class="Data last">-4.37</td>
            <td data-th="1 Week" class="Data one-week formatColour">7.66</td>
            <td data-th="3 Months" class="Data three-months formatColour">-41.35</td>
            <td data-th="6 Months" class="Data six-months formatColour">-56.21</td>
            <td data-th="9 Months" class="Data nine-months formatColour">-63.83</td>
            <td data-th="1 Year" class="Data one-year formatColour">-73.86</td>
        </tr>
    <tr>
        <td class="Highlight" colspan="7">Indices</td>
    </tr>
    <tr>
        <td class="Data column-first company">Baltic Dry Index</td>
        <td data-th="Last" class="Data last">739.00</td>
        <td data-th="1 Week" class="Data one-week formatColour">-3.02</td>
        <td data-th="3 Months" class="Data three-months formatColour">-34.95</td>
        <td data-th="6 Months" class="Data six-months formatColour">+0.96</td>
        <td data-th="9 Months" class="Data nine-months formatColour">-23.58</td>
        <td data-th="1 Year" class="Data one-year formatColour">-48.25</td>
    </tr>
    <tr>
        <td class="Data column-first company">Baltic Trading</td>
        <td data-th="Last" class="Data last">1.76</td>
        <td data-th="1 Week" class="Data one-week formatColour">-9.74</td>
        <td data-th="3 Months" class="Data three-months formatColour">-52.04</td>
        <td data-th="6 Months" class="Data six-months formatColour">-68.00</td>
        <td data-th="9 Months" class="Data nine-months formatColour">-72.28</td>
        <td data-th="1 Year" class="Data one-year formatColour">-71.52</td>
    </tr>
        
</table>

<%= site.footer("IROrders") %>

<script type="text/javascript">
    $(document).ready(function(){
        $('.Data').each(function(){
            var data = parseFloat($(this).text());
            if (data < 0) {
                $(this).addClass('statusGreen');
            }else if(data > 0){
                $(this).addClass('statusRed');
            }
        })
    })
</script>
