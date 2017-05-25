function tableGenerate() {
    var solutionIdList = {
        VWS : 2674,
        TDC : 2672,
        MAERSK_A : 2638,
        MAERSK_B : 2640,
        CARL_B : 2642,
        CHR : 2644,
        COLO_B : 2646,
        DANSKE : 2648,
        DSV : 2650,
        FLS : 2652,
        GEN : 2654,
        GN : 2656,
        LUN : 2658,
        ISS : 2660,
        JYSK : 2662,
        NDA_DKK : 2664,
        NOVO_B : 2666,
        NZYM_B : 2668,
        PNDORA : 2670,
        WDH : 2676
    };
    $.ajax({
        url: "http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestStockDataBundle?apiversion=1&solutionID=2626&customerKey=demoOMXC20&instrumentTypes=Listing",
        success: function(results) {

            var data = results.data;
            data.forEach(function(item) {
                var time = new Date(item.timestamp);
                var tt = `${time.getUTCHours()}:${time.getUTCMinutes()}`;
                var arrow = "";
                if (item.change < 0) {
                    arrow = "<img src='./images/arrowdown.png'>";
                } else if (item.change > 0) {
                    arrow = "<img src='./images/arrowup.png'>";
                }
                var getId = solutionIdList[item.symbol.replace("-", "_")];
                var temp = `
                        <tr class="getMore" data-title="${item.name}" data-instid="${item.instrumentID}" data-solid="${getId}">
                            <td>${item.name}</td>
                            <td>${item.bid.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td>${item.ask.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td>${item.last.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td class="align-right">${item.change.toLocaleString(undefined, { minimumFractionDigits: 2 })} ${arrow}</td>
                            <td class="padding-left">${item.high.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td>${item.low.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td>${item.volume.toLocaleString()}</td>
                            <td><span class='chart-${item.instrumentID}'></span></td>
                            <td>${tt}</td>
                        </tr>
                        `;
                $('tbody').append(temp);
            })
        }
    }).done(function() {
        $.ajax({
                url: "http://ir.euroinvestor.com/ServiceEngine/api/json/reply/RequestIntradayDataBundle?apiVersion=1&lcid=2057&solutionID=2626&customerKey=demoOMXC20&numberOfDays=1&instrumentTypes=Listing",
                success: function(results) {
                    var data = results.data;
                    data.forEach(function(item) {
                        var id = item.instrumentID;
                        var arr = [];
                        item.data.forEach(function(nb) {
                            arr.push(nb.closePrice);
                        });
                        $('.chart-' + id).sparkline(arr, {
                            width: 80
                        });
                    });

                }
            });
            // $("#mytable").table().data( "table" ).refresh();
        $(document).trigger("enhance.tablesaw");
    });

}
