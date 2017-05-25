<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://minitabs.googlecode.com/files/jquery.minitabs.js"></script>
<link rel="stylesheet" type="text/css" href="ir.client.css">
<style>
    @media (max-width: 717px) {
        .sharePriceToolsiFrame {
            height: 3720px !important;
        }
    }

    @media (max-width: 590px) {
        .sharePriceToolsiFrame {
            height: 3850px !important;
        }
    }
    ul {
        height: 33px;
        border-bottom: 1px solid #ccc;
    }
    .tabs-container .tabs a.current {
        font-weight: normal;
    }
    .tabs ul li {
           border-top: 1px solid #e5e5e5; 
           padding-top: 1px;
            margin-right: 5px;
    }

</style>
<div class="tabs-container">

    <div id="container" class="tabs">
        <ul>
            <li class="tabitem"><a href="#tab-1">Ahold Group (AD)</a></li>
            <li class="tabitem"><a href="#tab-2">Ahold Group (AHONY)</a></li>
        </ul>

        <div id="tab-1">
            <iframe class="sharePriceToolsiFrame" src="../2534/sharepriceTools.aspx" style="width: 100%; height: 3000px; border: none;"></iframe>
        </div>
        <div id="tab-2">
            <iframe class="sharePriceToolsiFrame" src="sharepriceTools.aspx" style="width: 100%; height: 3000px; border: none;"></iframe>
        </div>

    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").minitabs();
    });
</script>
