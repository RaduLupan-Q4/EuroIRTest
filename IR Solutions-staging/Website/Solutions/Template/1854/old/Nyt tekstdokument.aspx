

<head>
    <title>jQuery sticky/fixed table rows plugin</title>
    <meta name="description" content="jQuery sticky/fixed table rows plugin.">
    <meta name="keywords" content="jQuery, plugin, sticky, fixed, table, rows">
    <meta name="author" content="Vitalii Maslianok">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="../1854/js/stickyRows.js">
    
    <style>
        table.wrapper {
            width: 100%;;
            height: 100%;
        }
        .inner {
            width: 600px;
            height: 100%;
            overflow: auto;
            margin: auto;
        }
        .table-with-sticky-rows {
            width: 800px;
        }
    </style>
</head>

<body>

<div id="menu"></div>

<table class="wrapper">
    <tr>
        <td style="height: 200px;">
            <h1>Implementation:</h1>
            <div class="code">
                <code>$('.table-with-sticky-rows').stickyRows({container: '.inner', rows: ['.header-1', '.header-2', '.header-3']});</code>
            </div>
        </td>
    </tr>
    <tr>
        <td>

            <div class="inner">

                <table class="table-with-sticky-rows">
  <thead>
    <tr>
        <td>Header1</td>
        <td>Header2</td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
    </tr>
    <tr>
        <td>Cell1</td>
        <td>Cell2</td>
    </tr>
  </tbody>
</table>