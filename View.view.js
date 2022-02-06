sap.ui.jsview("zzfilterapp.View", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zzfilterapp.View
	*/ 
	getControllerName : function() {
		return "zzfilterapp.View";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zzfilterapp.View
	*/ 
	createContent : function(oController) {
		
		
		var oTable = new sap.m.Table("table", {
			headerText="Order List",
			columns : [ new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Order number"
				}) ]
			}),
				
			new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Order item"
				}) ]
			}),
				
			new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Material"
				}) ]
			}),
				
			new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Quantity"
				}) ]
			}),
				
			new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Order Place"
				}) ]
			})
				
			]
		});
		
		oTable.setMode(sap.m.ListMode.SingleSelectMaster);
		oTable.bindItems("/Orders", new sap.m.ColumnListItem("listItem", {
			cells : [
				
			new sap.m.Text({text : "{Order number}"}),
			new sap.m.Text({text : "{Order item}"}),
			new sap.m.Text({text : "{Material}"}),
			new sap.m.Text({text : "{Quantity}"}),
			new sap.m.Text({text : "{Order Place}"}),
				
			]
		}));
		
		var oPage = new sap.m.Page({
		title : "Order Table",
		content : [ oTable ],
		footer : [sap.m.Bar({
			design : sap.m.BarDesign.Footer,
			contentMiddle : [new sap.m.Select({
				id : "groupSelect",
				change : oController.handleGroup,
				icon : "sap-icon://filter",
				type : "IconOnly",
				selectedKey : "None",
				autoAdjustWidth : true,
					
				items : [
					new sap.ui.core.Item({
						key : "Tümü",
						text : "Tümü"
					}),
					
					new sap.ui.core.Item({
						key : "Bilgisayar",
						text : "Bilgisayar"
					}),
					
					new sap.ui.core.Item({
						key : "Televizyon",
						text : "Televizyon"
					}),
					
					new sap.ui.core.Item({
						key : "Tablet",
						text : "Tablet"
					}),
					
					new sap.ui.core.Item({
						key : "Buzdolabı",
						text : "Buzdolabı"
					}) ]

			}),

			new sap.m.Text({
				text : "Filter"
			})

			]
		}) ]
	});

	return oPage;
}

});