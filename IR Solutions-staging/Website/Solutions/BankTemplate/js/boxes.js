$(function () {
    $.ajax({
        url: "http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestStockDataBundle?apiversion=1&solutionID=2626&customerKey=demoOMXC20&instrumentTypes=Index",
        success: function (results) {
            var data = results.data.slice(1, 6);
            data.forEach(function (item) {

                var last = item.last;
                var change = item.changePercent;
                var name = item.exchangeName;

                var arrow = "";
                if (item.change > 0)
                    arrow = "up";
                else if (item.change < 0)
                    arrow = "down";

                var temp = `
                <div class="box">
                    <div class="big-line">
                        <span class="title">${item.name}</span>
                        <span class="change-arrow ${arrow}"></span>
                    </div>
                    <div class="small-line">
                        <span class="price">${item.last}</span>
                        <span class="price-change">${item.change}%</span>
                    </div>
                </div>`;
                $('.boxes').append(temp);
            });

            touchslider.createSlidePanel('#slidebar', 213, 15);

        }
    })
});
