<%@page import="com.item"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script type="text/javascript" src="Conponents/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="Conponents/item.js"></script>
</head>
<body class="bg-image"
style="background-image: url('https://img4.goodfon.com/wallpaper/nbig/c/d1/stol-knigi-chasy-budilnik-karandashi-raznotsvetnye-iabloko-f.jpg');">
	<div style="margin-top: 1px;">
	<div class="container">
		<div class="row">
			<div class="col-7">
				<h1 class="m-3">Items Management</h1>

				<form id="formInventory" name="formInventory" method="post"
					action="item.jsp">

					Item Code: 
					<input id="inventoryName" name="inventoryName"
						type="text" class="form-control form-control-sm"> <br>
					Item Name: 
					<input id="inventoryType"
						name="inventoryType" type="text"
						class="form-control form-control-sm"> <br> 
					Item Price: 
					<input id="inventoryStore" name="inventoryStore"
						type="text" class="form-control form-control-sm"> <br>
					Item description: 
					<input id="inventoryQuantity" name="inventoryQuantity" type="text"
						class="form-control form-control-sm"> <br> 
					<input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidInventoryIDSave" name="hidInventoryIDSave" value="">

				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

			</div>
		</div>




		<br>
		<div id="divInventoryGrid">

			<%
			item inventoryObj = new item();
			out.print(inventoryObj.readItem());
			%>
		</div>
		</div>
		</div>
</body>
</html>