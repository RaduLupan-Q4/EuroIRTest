<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="IRMotor" %>
<% 
    IRSite site = new IRSite();
%>
<%= site.header("IRCalc") %>

<!--<script src="calcDummyData.js"></script>-->
<script type="text/javascript">
    var activeModules = ["IRCalc"];
</script>

<style>
    body {
        margin: 10px;
    }

    .input-row {
        position: relative;
        height: 25px;
    }

    .input-wrapper {
        position:absolute;
        right: 0;
        top: 0;
    }

    label {
        font-weight: bold;
    }

    #lookup-table {
        width: 100%;
    }

    th.left-aligned, td.left-aligned {
        text-align: left;
    }

    tr.first-row {
        background: rgb(122, 182, 104);
        color: white;
    }

    th, td {
        text-align: right;
        padding: 5px;
    }

     .datepicker-button {
         width: 25px;
         height: 25px;
         background: red;
     }
</style>

<div class="IRCalcModule"><span class="ajaxLoader">Loading</span></div>

<h1>Historical Stock Lookup</h1>
    <div id="calc-chart" style="width:100%;height:250px;"></div>
    <form id="lookup-form">
        <div class="input-row">
            <label for="from-datepicker" class="input-label from-label">From: </label>
            <div class="input-wrapper">
                <div id="from-datepicker" class="datepicker-button"></div>
                <select id="from-day">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select id="from-month">
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">Mar</option>
                    <option value="3">Apr</option>
                    <option value="4">May</option>
                    <option value="5">Jun</option>
                    <option value="6">Jul</option>
                    <option value="7">Aug</option>
                    <option value="8">Sep</option>
                    <option value="9">Oct</option>
                    <option value="10">Nov</option>
                    <option value="11">Dec</option>
                </select>
                <select id="from-year">
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <label for="to-datepicker" class="input-label to-label">To: </label>
            <div class="input-wrapper">
                <div id="to-datepicker" class="datepicker-button"></div>
                <select id="to-day">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select id="to-month">
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">Mar</option>
                    <option value="3">Apr</option>
                    <option value="4">May</option>
                    <option value="5">Jun</option>
                    <option value="6">Jul</option>
                    <option value="7">Aug</option>
                    <option value="8">Sep</option>
                    <option value="9">Oct</option>
                    <option value="10">Nov</option>
                    <option value="11">Dec</option>
                </select>
                <select id="to-year">
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label invested-label">Invested: </label>
            <div class="input-wrapper">
                <input type="radio" name="invested" value="amount" id="amount-radio" checked="checked"/>
                <label for="amount-radio">Amount</label>
                <input type="radio" name="invested" value="shares" id="shares-radio"/>
                <label for="shares-radio">Shares</label>
            </div>
        </div>
        <div class="input-row">
            <label class="input-label amount-invested-label">Amount invested:</label>
            <div class="input-wrapper">
                <input type="number" id="amount-invested" step="any" min="0"/>
            </div>
        </div>
        <div class="input-row">
            <div class="input-wrapper">
                <input type="submit" value="Calculate" id="calculate-button"/>
            </div>
        </div>
    </form>

    <section id="result-section">
	    <table id="lookup-table" cellpadding="0" cellspacing="0">
		    <thead>
                <tr class="row-0 first-row">
			        <th class="col-0 even-col first-col left-aligned">Buy Price</th>
			        <th class="col-1 odd-col">Est. number of shares</th>
			        <th class="col-2 event-col">Sell price</th>
			        <th class="col-3 odd-col">Value now</th>
			        <th class="col-4 even-col">Yield</th>
		        </tr>
            </thead>
            <tbody id="lookup-table-body">
                <tr class="row-1">
			        <td class="col-0 even-col first-col left-aligned" id="buy-price-cell"></td>
			        <td class="col-1 odd-col" id="est-shares-cell"></td>
			        <td class="col-2 event-col" id="sell-price-cell"></td>
			        <td class="col-3 odd-col" id="value-now-cell"></td>
			        <td class="col-4 even-col" id="yield-cell"></td>
		        </tr>
            </tbody>
	    </table>
    </section>


<%= site.footer("IRCalc") %>
<script src="calc.js"></script>