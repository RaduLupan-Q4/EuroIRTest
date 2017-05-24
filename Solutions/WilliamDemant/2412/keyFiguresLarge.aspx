<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%--<%= site.newHeader("IRCustomModule") %>--%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="keyfigures_table.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("keyfigures_table.css")).Ticks.ToString()%>">
    <link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,500,300' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="inc/iframeResizer.contentWindow.min.js"></script>
    <script type="text/javascript">
        var activeModules = ['IRCustomModule'];
    </script>
    <style>
        .downloadToExcel {
            padding: 0px;
            width: 60px;
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <div class="keyfigures">
        <span class="heading">KEY FIGURES</span>
        <div class="downloadOptions">
            <form method="POST" id="excelform" action="/ServiceEngine/api/json/reply/RequestExcel" target="_blank">
                <input type="hidden" name="Title" value="Shareholders.xlsx" />
                <input type="hidden" id="CsvData" name="CsvData" value="" />
                <input type="hidden" name="apiversion" value="1" />
                <input type="hidden" name="InstrumentID" value="1000589" />
                <input type="hidden" name="lcid" value="1033" />
                <input type="hidden" name="customerKey" value="WilliamDemant" />
                <input type="hidden" name="solutionID" value="2412" />
                <div style="margin-top: 0px; font-weight: normal; float: right; cursor: pointer;">
                    <input class="downloadToExcel" type="button" onclick="submittable()" value="Excel">
                </div>
            </form>
        </div>
        <table class="table-look">
            <tr class="thead">
                <th class="firstCol"></th>
                <th class="highlight">2016</th>
                <th>2015</th>
                <th>2014</th>
                <th>2013</th>
                <th class="column-last">2012</th>
                
            </tr>

            <tr class="Header">
                <td class="firstCol header">Income Statement <span class="dkk-million">DKK million</span></td>
                <td class="highlight"></td>
                <td></td>
                <td></td>
                <td></td>
                
                <td class="column-last"></td>
            </tr>
            <tr>
                <td class="firstCol">Revenue</td>
                <td class="highlight">12,002</td>
                <td>10,665</td>
                <td>9,346</td>
                <td>8,959</td>
                <td class="column-last">8,555</td>
                
            </tr>
            <tr>
                <td class="firstCol">Gross Profit</td>
                <td class="highlight">9,030</td>
                <td>7,895</td>
                <td>6,813</td>
                <td>6,518</td>
                <td class="column-last">6,127</td>
                
            </tr>
            <tr>
                <td class="firstCol">Gross profit - adjusted*</td>
                <td class="highlight">9,102</td>
                <td>7,895</td>
                <td>-</td>
                <td>-</td>
                <td class="column-last">-</td>
                
            </tr>
            <tr>
                <td class="firstCol">Research and development costs</td>
                <td class="highlight">839</td>
                <td>763</td>
                <td>680</td>
                <td>634</td>
                <td class="column-last">652</td>
                
            </tr>
            <tr>
                <td class="firstCol">EBITDA</td>
                <td class="highlight">2,346</td>
                <td>2,203</td>
                <td>2,055</td>
                <td>2,028</td>
                <td class="column-last">1,920</td>
                
            </tr>
            <tr>
                <td class="firstCol">Depreciation etc.</td>
                <td class="highlight">404</td>
                <td>325</td>
                <td>294</td>
                <td>292</td>
                <td class="column-last">267</td>
                
            </tr>
            <tr>
                <td class="firstCol">Operating profit (EBIT)</td>
                <td class="highlight">1,942</td>
                <td>1,878</td>
                <td>1,761</td>
                <td>1,736</td>
                <td class="column-last">1,653</td>
                
            </tr>
            <tr>
                <td class="firstCol">Operating profit (EBIT) - adjusted*</td>
                <td class="highlight">2,130</td>
                <td>1,902</td>
                <td>-</td>
                <td>-</td>
                <td class="column-last">-</td>
            </tr>
            <tr>
                <td class="firstCol">Net financials</td>
                <td class="highlight">-101</td>
                <td>-69</td>
                <td>-70</td>
                <td>-72</td>
                <td class="column-last">-132</td>
                
            </tr>
            <tr>
                <td class="firstCol">Profit before tax</td>
                <td class="highlight">1,841</td>
                <td>1,809</td>
                <td>1,691</td>
                <td>1,664</td>
                <td class="column-last">1,521</td>
                
            </tr>
            <tr>
                <td class="firstCol last">Net profit for the year</td>
                <td class="highlight last">1,464</td>
                <td>1,439</td>
                <td>1,327</td>
                <td>1,286	</td>
                <td class="column-last last">1,151	</td>
                
            </tr>

            <tr class="Header">
                <td class="firstCol header">Balance sheet <span class="dkk-million">DKK million</span></td>
                <td class="highlight"></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="column-last"></td>
            </tr>
            <tr>
                <td class="firstCol">Net interest-bearing debt</td>

                <td class="highlight">4,036</td>
                <td>3,703</td>
                <td>2,405</td>
                <td>2,284</td>
                <td class="column-last">1,804</td>
                
            </tr>
            <tr>
                <td class="firstCol">Total assets</td>
                <td class="highlight">15,548</td>
                <td>14,930</td>
                <td>11,219</td>
                <td>10,318</td>
                <td class="column-last">8,777</td>
                
            </tr>
            <tr>
                <td class="firstCol last">Equity</td>
                <td class="highlight last">6,966</td>
                <td>6,500</td>
                <td>5,584</td>
                <td>5,056</td>
                <td class="column-last last">4,059</td>
                
            </tr>

            <tr class="Header">
                <td class="firstCol header">Other key figures <span class="dkk-million">DKK million</span></td>
                <td class="highlight"></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="column-last"></td>
            </tr>
            <tr>
                <td class="firstCol">Investment in property, plant and equipment, net</td>
                <td class="highlight">299</td>
                <td>375</td>
                <td>354</td>
                <td>391</td>
                <td class="column-last">310</td>
                
            </tr>
            <tr>
                <td class="firstCol">Cash flow from operating activities (CFFO)</td>
                <td class="highlight">1,679</td>
                <td>1,592</td>
                <td>1,495</td>
                <td>1,282</td>
                <td class="column-last">1,272</td>
                
            </tr>
            <tr>
                <td class="firstCol">Cash flow from operating activities (CFFO) - adjusted*</td>
                <td class="highlight">1,756</td>
                <td>1,602</td>
                <td>-</td>
                <td>-</td>
                <td class="column-last">-</td>
                
            </tr>
            <tr>
                <td class="firstCol">Free cash flow</td>
                <td class="highlight">1,223</td>
                <td>1,129</td>
                <td>1,044</td>
                <td>819</td>
                <td class="column-last">782</td>
                
            </tr>
            <tr>
                <td class="firstCol last">Employees (average)</td>
                <td class="highlight last">12,339</td>
                <td>10,803</td>
                <td>9,799</td>
                <td>9,063</td>
                <td class="column-last last">8,025</td>
                
            </tr>


            <tr class="Header">
                <td class="firstCol header">Financial ratios</td>
                <td class="highlight"></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="column-last"></td>
            </tr>
            <tr>
                <td class="firstCol">Gross profit ratio</td>
                <td class="highlight">75.2%</td>
                <td>74.0%</td>
                <td>72.9%</td>
                <td>72.8%</td>
                <td class="column-last">71.6%</td>
                
            </tr>
            <tr>
                <td class="firstCol">Gross profit ratio - adjusted*</td>
                <td class="highlight">75.8%</td>
                <td>74.0%</td>
                <td>-</td>
                <td>-</td>
                <td class="column-last">-</td>
            </tr>
            <tr>
                <td class="firstCol">EBITDA margin</td>
                <td class="highlight">19.5%</td>
                <td>20.7%</td>
                <td>22.0%</td>
                <td>22.6%</td>
                <td class="column-last">22.4%</td>
                
            </tr>
            <tr>
                <td class="firstCol">Profit margin (EBIT margin)</td>
                <td class="highlight">16.2%</td>
                <td>17.6%</td>
                <td>18.8%</td>
                <td>19.4%</td>
                <td class="column-last">19.3%</td>
                
            </tr>
            <tr>
                <td class="firstCol">Profit margin (EBIT margin) adjusted*</td>
                <td class="highlight">17.7%</td>
                <td>17.8%</td>
                <td>-</td>
                <td>-</td>
                <td class="column-last">-</td>
                
            </tr>
            <tr>
                <td class="firstCol">Return on equity</td>
                <td class="highlight">21.5%</td>
                <td>23.7%</td>
                <td>24.7%</td>
                <td>28.0%</td>
                <td class="column-last">31.8%</td>
                
            </tr>
            <tr>
                <td class="firstCol">Equity ratio</td>
                <td class="highlight">45.2%</td>
                <td>45.2%</td>
                <td>49.8%</td>
                <td>49.0%</td>
                <td class="column-last">46.2%</td>
                
            </tr>
            
            <tr>
                <td class="firstCol">Earnings per share (EPS), DKK**</td>
                <td class="highlight">5.5</td>
                <td>5.3</td>
                <td>4.8</td>
                <td>4.5</td>
                <td class="column-last">4.0</td>
            </tr>
            <tr>
                <td class="firstCol">Cash flow per share (CFPS), DKK**</td>
                <td class="highlight">6.4</td>
                <td>5.9</td>
                <td>5.4</td>
                <td>4.5</td>
                <td class="column-last">4.5</td>
            </tr>
            <tr>
                <td class="firstCol">Free cash flow per share, DKK**</td>
                <td class="highlight">4.6</td>
                <td>4.2</td>
                <td>3.8</td>
                <td>2.9</td>
                <td class="column-last">2.7</td>
            </tr>
            <tr>
                <td class="firstCol">Dividend per share, DKK**</td>
                <td class="highlight">0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td class="column-last">0</td>
            </tr>
            
            <tr>
                <td class="firstCol">Equity value per share, DKK**</td>
                <td class="highlight">26.4</td>
                <td>24.1</td>
                <td>20.1</td>
                <td>17.9</td>
                <td class="column-last">14.2</td>
            </tr>
            <tr>
                <td class="firstCol">Price earnings (P/E)</td>
                <td class="highlight">22</td>
                <td>25</td>
                <td>20</td>
                <td>23</td>
                <td class="column-last">24</td>
                
            </tr>
            
            <tr>
                <td class="firstCol">Share price, DKK**</td>
                <td class="highlight">123</td>
                <td>131</td>
                <td>94</td>
                <td>105</td>
                <td class="column-last">97</td>
            </tr>
            <tr>
                <td class="firstCol">Market capitalisation adjusted for treasury shares, <span class="dkk-million">DKK million</span></td>
                <td class="highlight">31,829</td>
                <td>35,126</td>
                <td>25,545</td>
                <td>29,754</td>
                <td class="column-last">27,419</td>
                
            </tr>
            
            <tr>
                <td class="firstCol last">Average number of shares, million**</td>
                <td class="highlight last">263.75</td>
                <td class="last">270.13</td>
                <td class="last">278.13</td>
                <td class="last">283.11</td>
                <td class="last column-last">285.11</td>
            </tr>
        </table>
        <div class="keyFiguresDescriptionWrapper" style="margin-top: 20px; font-style: italic; font-size: 14px;">
            <p>
                Financial ratios are calculated in accordance with &#34;	Recommendations and Financial Ratios 2015&#34; from  Danish Society of Financial Analysts. The free
                cash flow is calculated as the sum of cash flow from operating activities (CFFO) and investing activities (CFFI) before acquisition of enterprises,
                participating interests and activities. On computation of the return on equity, average equity is calculated duly considering the buy-back of shares. 
            </p>
            <br />
            <p>Key figures and financial ratios for 2012 have not been adjusted to the changes in accounting policies from 2014.</p>
            <br />
            <p>* Adjusted for restructuring costs</p>
            <br />
            <p>
                ** In 2016, the nominal value of all shares outstanding was changed from DKK 1.00 to DKK 0.20, and comparative figures for 2012-2015 have been
adjusted accordingly
            </p>
            <br />
            
        </div>
    </div

    <%= site.newFooter("IRCustomModule") %>
    <script type="text/javascript" src="keyFiguresLarge.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("keyFiguresLarge.js")).Ticks.ToString()%>"></script>
</body>
</html>


