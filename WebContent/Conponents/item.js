$(document).ready(function(){
	$("#alertSuccess").hide();
	$("#alertError").hide();
}); 

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateInventoryForm();
	if(status != true)
		{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
		}
	
// If valid------------------------
	
	//$("#formInventory").submit
	var type = ($("#hidInventoryIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "itemAPI",
		type : type,
		data : $("#formInventory").serialize(),
		dataType : "text",
		complete : function(response, status) 
		{
			onInventorySaveCompelet(response.responseText, status);
		}
	});
});
	
	function onInventorySaveCompelet(response, status) {
		if (status == "success") 
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success") 
			{
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				
				$("#divInventoryGrid").html(resultSet.data);
				
			} else if (resultSet.status.trim() == "error") {
				
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} else if (status == "error") {
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} else {
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
		}
		$("#hidInventoryIDSave").val("");
		$("#formInventory")[0].reset();
	}
	



//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
		{
			$("#hidInventoryIDSave").val($(this).closest("tr").find('#hidInventoryIDUpdate').val());
			$("#inventoryName").val($(this).closest("tr").find('td:eq(0)').text());
			$("#inventoryType").val($(this).closest("tr").find('td:eq(1)').text());
			$("#inventoryStore").val($(this).closest("tr").find('td:eq(2)').text());
			$("#inventoryQuantity").val($(this).closest("tr").find('td:eq(3)').text());
		});


//remove
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "itemAPI",
		type : "DELETE",
		data : "itemId=" + $(this).data("itemid"),
		dataType : "text",
		complete : function(response, status) 
		{
			onInventoryDeleteComplete(response.responseText, status);
		}
	});
});


function onInventoryDeleteComplete(response, status) {
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") 
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			
			$("#divInventoryGrid").html(resultSet.data);
		
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

//CLIENTMODEL=========================================================================
function validateInventoryForm() {

	if ($("#inventoryName").val().trim() == "") {
		return "Insert Item Code.";
	}

	if ($("#inventoryType").val().trim() == "") {
		return "Insert Item Name.";
	}

	if ($("#inventoryStore").val().trim() == "") {
		return "Insert Item Price.";
	}

	if ($("#inventoryQuantity").val().trim() == "") {
		return "Insert Item Description.";
	}


	
	return true;
}


