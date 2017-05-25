<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .outerIMG {
            background-image: url('../images/backIR_en.png');
            background-repeat: no-repeat;
            background-position: center;
        }

        body {
            text-align: center;
        }

        iframe {
            position: relative;
            left: -170px;
            margin: auto;
            border: 0px;
            width: 645px;
            height: 900px;
            top: 345px;
            /*
            top: 450px;
            left: 330px;
                */
            background-color: #fff;
        }

        .navigation {
            position: relative;
            width: 500px;
            margin: auto;
        }
        .navigation a {
            position: absolute;
            color: #40C0BD;
            top: 75px;
            padding: 5px;
            background-color: #fff;
        }

        /*.navigation, .navigation a {
            position: relative;
            top: 80px;
            right: 0px;
              color: #40C0BD;
        }
            .navigation:hover {
                
            }*/
    </style>
</head>
<body>

    <div class="outerIMG">

        <div class="navigation">
            <a href="chart.aspx?language=en" id="langEN" target="IRChart" style="right: -140px;">EN</a>
            <a href="chart.aspx?language=fr" id="langFR" target="IRChart" style="right: -170px;">FR</a>
            <a href="chart.aspx?language=nl" id="langNL" target="IRChart" style="right: -200px;">NL</a>
            <a href="chart.aspx?language=pt" id="langPT" target="IRChart" style="right: -230px;">PT</a>
        </div>

        <iframe name="IRChart" src="chart.aspx" frameborder="0"></iframe>

    </div>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript">
        $(function ()
        {


            $('#langEN').click(function ()
            {
                $('.outerIMG').css('backgroundImage', "url('../images/backIR_en.png')");
            });
            $('#langFR').click(function ()
            {
                $('.outerIMG').css('backgroundImage', "url('../images/backIR_fr.png')");
            });
            $('#langNL').click(function ()
            {
                $('.outerIMG').css('backgroundImage', "url('../images/backIR_nl.png')");
            });
            $('#langPT').click(function ()
            {
                $('.outerIMG').css('backgroundImage', "url('../images/backIR_pt.png')");
            });
        });
        //console.log($('.outerIMG').css('backgroundImage'));
    </script>
</body>

</html>

