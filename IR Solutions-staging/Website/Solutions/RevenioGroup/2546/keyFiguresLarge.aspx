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
                    <input class="downloadToExcel" type="button" onclick="submittable()" value="">&nbsp;&nbsp;Excel
                </div>
            </form>
        </div>
        <table class="table-look">
            <tr class="thead">
                <th class="firstCol"></th>
                <th class="highlight">2015</th>
                <th>2014</th>
                <th>2013</th>
                <th>2012</th>
                <th class="column-last">2011</th>
                </tr>
            
                <tr class="Header">
                    <td class="firstCol header">Income Statement, DKK milion</td>
                    <td class="highlight"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="column-last"></td>
                </tr>
                <tr>
                    <td class="firstCol">Revenue</td>
                    <td class="highlight">10,665</td>
                    <td>9,346</td>
                    <td>8,959</td>
                    <td>8,555</td>
                    <td class="column-last">8,041</td>
                </tr>
                <tr>
                    <td class="firstCol">Gross Profit</td>
                    <td class="highlight">7,895</td>
                    <td>6,813	</td>
                    <td>6,518</td>
                    <td>6,127</td>
                    <td class="column-last">5,777</td>
                </tr>
                <tr>
                    <td class="firstCol">Research and development costs</td>
                    <td class="highlight">763</td>
                    <td>680</td>
                    <td>634</td>
                    <td>652</td>
                    <td class="column-last">633</td>
                </tr>
                <tr>
                    <td class="firstCol">EBITDA</td>
                    <td class="highlight">2,203</td>
                    <td>2,055</td>
                    <td>2,028</td>
                    <td>1,920</td>
                    <td class="column-last">1,942</td>
                </tr>
                <tr>
                    <td class="firstCol">Depreciation etc.</td>
                    <td class="highlight">325</td>
                    <td>294</td>
                    <td>292</td>
                    <td>267</td>
                    <td class="column-last">233</td>
                </tr>
                <tr>
                    <td class="firstCol">Operating profit (EBIT)</td>
                    <td class="highlight">1,878</td>
                    <td>1,761</td>
                    <td>1,736</td>
                    <td>1,653</td>
                    <td class="column-last">1,709</td>
                </tr>
                <tr>
                    <td class="firstCol">Net financials</td>
                    <td class="highlight">-69</td>
                    <td>-70</td>
                    <td>-72</td>
                    <td>-132</td>
                    <td class="column-last">-103</td>
                </tr>
                <tr>
                    <td class="firstCol">Profit before tax</td>
                    <td class="highlight">1,809</td>
                    <td>1,691</td>
                    <td>1,664</td>
                    <td>1,521</td>
                    <td class="column-last">1,606</td>
                </tr>
                <tr>
                    <td class="firstCol last">Net profit for the year</td>
                    <td class="highlight">1,439</td>
                    <td>1,327</td>
                    <td>1,286	</td>
                    <td>1,151	</td>
                    <td class="column-last">1,199</td>

                </tr>
         
                <tr class="Header">
                    <td class="firstCol header">Balance sheet, DKK milion</td>
                    <td class="highlight"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="column-last"></td>
                </tr>
                <tr>
                    <td class="firstCol">Net interest-bearing debt</td>

                    <td class="highlight">3,703</td>
                    <td>2,405</td>
                    <td>2,284</td>
                    <td>1,804</td>
                    <td class="column-last">1,548</td>
                </tr>
                <tr>
                    <td class="firstCol">Total assets</td>
                    <td class="highlight">14,930</td>
                    <td>11,219</td>
                    <td>10,318</td>
                    <td>8,777</td>
                    <td class="column-last">7,646</td>
                </tr>
                <tr>
                    <td class="firstCol last">Equity</td>
                    <td class="highlight">6,500</td>
                    <td>5,584</td>
                    <td>5,056</td>
                    <td>4,059</td>
                    <td class="column-last">3,304</td>
                </tr>

                <tr class="Header">
                    <td class="firstCol header">Other key figures, DKK milion</td>
                    <td class="highlight"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="column-last"></td>
                </tr>
                <tr>
                    <td class="firstCol">Investment in property, plant and equipment, net</td>
                    <td class="highlight">375</td>
                    <td>354</td>
                    <td>391</td>
                    <td>310</td>
                    <td class="column-last">382</td>
                </tr>
                <tr>
                    <td class="firstCol">Cash flow from operating activities (CFFO)</td>
                    <td class="highlight">1,592</td>
                    <td>1,495</td>
                    <td>1,282</td>
                    <td>1,272</td>
                    <td class="column-last">1,381</td>
                </tr>
                <tr>
                    <td class="firstCol">Free cash flow</td>
                    <td class="highlight">1,129</td>
                    <td>1,044</td>
                    <td>819</td>
                    <td>782</td>
                    <td class="column-last">895</td>
                </tr>
                <tr>
                    <td class="firstCol last">Employees (average)</td>
                    <td class="highlight">10,803</td>
                    <td>9,799</td>
                    <td>9,063</td>
                    <td>8,025</td>
                    <td class="column-last">7,392</td>
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
                    <td class="highlight">74.0%</td>
                    <td>72.9%</td>
                    <td>72.8%</td>
                    <td>71.6%</td>
                    <td class="column-last">71.8%</td>

                </tr>
                <tr>
                    <td class="firstCol">EBITDA margin</td>
                    <td class="highlight">20.7%</td>
                    <td>22.0%</td>
                    <td>22.6%</td>
                    <td>22.4%</td>
                    <td class="column-last">24.2%</td>
                </tr>
                <tr>
                    <td class="firstCol">Profit margin (EBIT margin)</td>
                    <td class="highlight">17.6%</td>
                    <td>18.8%</td>
                    <td>19.4%</td>
                    <td>19.3%</td>
                    <td class="column-last">21.3%</td>
                </tr>
                <tr>
                    <td class="firstCol">Return on equity</td>
                    <td class="highlight">23.7%</td>
                    <td>24.7%</td>
                    <td>28.0%</td>
                    <td>31.8%</td>
                    <td class="column-last">41.7%</td>
                </tr>
                <tr>
                    <td class="firstCol">Equity ratio</td>
                    <td class="highlight">45.2%</td>
                    <td>49.8%</td>
                    <td>49.0%</td>
                    <td>46.2%</td>
                    <td class="column-last">43.2%</td>
                </tr>
                <tr>
                    <td class="firstCol">Earnings per share (EPS), DKK*</td>
                    <td class="highlight">26.6</td>
                    <td>23.8</td>
                    <td>22.7</td>
                    <td>20.2</td>
                    <td class="column-last">20.6</td>
                </tr>
                <tr>
                    <td class="firstCol">Cash flow per share (CFPS), DKK*</td>
                    <td class="highlight">29.5</td>
                    <td>26.9</td>
                    <td>22.6</td>
                    <td>22.3</td>
                    <td class="column-last">23.7</td>
                </tr>
                <tr>
                    <td class="firstCol">Free cash flow per share, DKK*</td>
                    <td class="highlight">20.9</td>
                    <td>18.8</td>
                    <td>14.5</td>
                    <td>13.7</td>
                    <td class="column-last">15.4</td>
                </tr>
                <tr>
                    <td class="firstCol">Dividend per share, DKK*</td>
                    <td class="highlight">0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td class="column-last">0</td>
                </tr>
                <tr>
                    <td class="firstCol">Book value per share, DKK*</td>
                    <td class="highlight">120.3</td>
                    <td>100.4</td>
                    <td>89.3</td>
                    <td>71.2</td>
                    <td class="column-last">56.7</td>
                </tr>
                <tr>
                    <td class="firstCol">Price earnings (P/E)</td>
                    <td class="highlight">25</td>
                    <td>20</td>
                    <td>23</td>
                    <td>24</td>
                    <td class="column-last">23</td>
                </tr>
                <tr>
                    <td class="firstCol">Share price, DKK*</td>
                    <td class="highlight">657</td>
                    <td>468</td>
                    <td>527</td>
                    <td>484</td>
                    <td class="column-last">478</td>
                </tr>
                <tr>
                    <td class="firstCol">Market capitalisation adjusted for treasury shares, DKK million</td>
                    <td class="highlight">35,126</td>
                    <td>25,545</td>
                    <td>29,754</td>
                    <td>27,419</td>
                    <td class="column-last">27,397</td>
                </tr>
                <tr>
                    <td class="firstCol last">Average number of shares, million</td>
                    <td class="highlight">54.03</td>
                    <td >55.63</td>
                    <td>56.62</td>
                    <td>57.02</td>
                    <td class="last column-last">58.24</td>
                </tr>
        </table>
        <div class="keyFiguresDescriptionWrapper" style="margin-top: 20px; font-style: italic; font-size: 14px;">
            Financial ratios are calculated in accordance with “Recommendations and Financial Ratios 2010” from the Danish Society of Financial Analysts.<br />
            <br />
            The free cash flow is calculated as the sum of cash flows from operating activities (CFFO) and investing activities (CFFI) before acquisition of enterprises, participating interests and activities.<br />
            <br />
            On computation of the return on equity, average equity is calculated duly considering the current buy-back of shares.<br />
            Key figures and financial ratios for 2013 are restated due to new accounting policies, and due to errors in prior periods corrected in the financial figures for 2013.<br />
            Key figures and financial ratios for 2010-2012 have not been restated. Please refer to note 9.2 in the Annual Report 2014 for a further description.<br />
            <br />
            *Per share of DKK 1.<br />
            <br />
        </div>
    </div>

    <%= site.newFooter("IRCustomModule") %>
    <script type="text/javascript" src="keyFiguresLarge.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("keyFiguresLarge.js")).Ticks.ToString()%>"></script>
</body>
</html>


