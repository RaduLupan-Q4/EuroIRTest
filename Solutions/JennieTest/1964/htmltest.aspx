<html>
	<head>
		<title>test</title>
		<!-- Herunder er CSS -->
		<style>
			.header {
				border:1px solid black; /* Kommentar */
				background-color:yellow;
			}
			.cell {
				border:2px solid black;
			}
			.firstrow { 
				background-color:yellow;
				color:Red;
				border:1px solid orange;
			}
			.topleftcorner {
			color:blue;
			}
			
			
			.toprightcorner {
			color:green;
			}
			
		
		</style>
	</head>
	<body>
		<table>
		
		<!-- Förste raekke -->
			<tr>
				<th class="header topleftcorner">A</th>
				<th class="header">B</th>
				<th class="header toprightcorner">C</th>
			</tr>
			<tr>
				<td class="firstrow cell">A1</td>
				<td class="firstrow cell">B1</td>
				<td class="firstrow cell">C1</td>
			</tr>
			<tr>
				<td class="cell">A2</td>
				<td class="cell">B2a</td>
				<td class="cell">C2</td>
			</tr>
		</table>
	</body>
</html>