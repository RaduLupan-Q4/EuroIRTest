var data = [
    {
        title: "OMX C20",
        price: 11.11,
        change: 1.2
    },
    {
        title: "FTSE 100",
        price: 11.11,
        change: -1.2
    },
    {
        title: "OMX C20",
        price: 11.11,
        change: 1.2
    },
    {
        title: "FTSE 100",
        price: 11.11,
        change: -1.2
    },
    {
        title: "OMX C20",
        price: 11.11,
        change: 1.2
    },
    {
        title: "FTSE 100",
        price: 11.11,
        change: -1.2
    }
];

$(document).ready(function () {
    data.forEach(function(item){
        var arrow ="";
        if (item.change > 0)
            arrow = "up";
        else if (item.change < 0)
            arrow = "down";

        var temp = `
            <div class="box">
                <div class="big-line">
                    <span class="title">${item.title}</span>
                    <span class="change-arrow ${arrow}"></span>
                </div>
                <div class="small-line">
                    <span class="price">${item.price}</span>
                    <span class="price-change">${item.change}%</span>
                </div>
            </div>`;

        $('.boxes').append(temp);

    })
});
