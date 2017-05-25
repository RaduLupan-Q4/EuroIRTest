<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="lrt">
<head>
<title>IR Solutions, Euroinvestor</title>
<style>
	.linkEncloser {
		margin-bottom:40px;
	}

	.tabButtonEncloser {
		border-bottom:1px solid #E1E1E1;
		margin-bottom:20px;
	}
	.tabButton {
		display:inline-block;
		background-color:#E1E7EB;
		color:rgb(100, 119, 131);
		padding: 15px 30px;
		cursor:pointer;
	}
	.tabButtonActive {
		background-color:#DE076E;
		color:White;
	}
	iframe {
		width:100%;
		border:none;
		height:1000px;
	}

</style>
</head>
<body>

<script type="text/javascript" src="/includes/js/libs/jquery2-1-4.min.js?v=635808478220682775"></script>
<div class="linkEncloser">
	<a href="http://www.go-ahead.com/en/investors/share-price-and-tools/share-graph.html">http://www.go-ahead.com/en/investors/share-price-and-tools/share-graph.html</a>
	<br /><a href="http://www.go-ahead.com/en/investors/regulatory-news.html">http://www.go-ahead.com/en/investors/regulatory-news.html</a>
</div>
<div class="tabButtonEncloser">
	<div class="tabButton tabButtonActive" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/chart.aspx">Share Graph</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/calc.aspx">Investment Calculator</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/shareSeries.aspx"">Share Series</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/lookup.aspx">Share price look-up</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/Sharedata.aspx">Share data</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/Trades.aspx">Trades</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/Performance.aspx">Performance</div>
	<div class="tabButton" url="http://devir.euroinvestor.com/solutions/GoAhead/2290/news.aspx">News</div>
</div>
<div>
	<iframe id="mainframe" src="http://devir.euroinvestor.com/solutions/GoAhead/2290/chart.aspx"></iframe>
</div>

<script type="text/javascript">
    $(function () {
		$('.tabButton').click(function(){
			$('#mainframe').attr('src',$(this).attr('url'));
			$('.tabButton').removeClass('tabButtonActive');
			$(this).addClass('tabButtonActive');
		});
	});
</script>

</body>
</html>
