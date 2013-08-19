Ext.define('HAMLET.view.monitoring.BlockDataChart', {
	extend : 'Ext.container.Container',
	alias : 'widget.blockdatachart',
	width : 296,
	height : 181,
	layout : 'border',
	initComponent: function() {
		var me = this;
		var LeadTimeStore = Ext.create('Ext.data.Store', {
			model: 'WeatherPoint',
			proxy: {
		         type: 'ajax',
		         url: '/resources/json/chartData.jsp',
		         reader: {
		             type: 'json',
		             root: 'entitys'
		         }
		     },
		     fields: [
		 	         {name: 'zdays', type: 'int'},
		 	         {name: 'zratio', type: 'int'},
		 	         {name: 'spmon', type: 'string'},
		 	         {name: 'avg', type: 'int'}
		 	    ],
		     autoLoad: true
		});
		
		Ext.apply(this, {
			//dockedItems: this.getToolBarConfig(),
			items : [{
				xtype : 'form',
				region : 'north',
				items : [{
					xtype : 'displayfield',
					fieldLabel : 'CorruApt Block',
					value : '10'
				}]
			},{
				xtype: 'chart',
				
				region : 'center',
				itemId: 'LEADTIME',
				style: 'background:#fff',
	            animate: true,
	            store: LeadTimeStore,
	            shadow: true,
	            theme: 'Category1',
	            axes: [
		            {
		                type: 'Numeric',
		                position: 'left',
		                fields: ['zdays'],
		                minimum: 0,
		                maximum: 100,
			            minorTickSteps: 1,
		                grid: {
		                    odd: {
		                        opacity: 1,
		                        fill: '#ddd',
		                        stroke: '#bbb',
		                        'stroke-width': 0.5
		                    }
		                }
		            },
		            {
//		                title: 'Time',
		                type: 'Category',
		                position: 'bottom',
		                fields: ['spmon']
//		                title: 'Lead Time Trend(Inquiry to Shipment of Departure)'
		            }
		        ],
	            series: [{
	            	type: 'line',
	                xField: 'spmon',
	                yField: 'zdays',
	                fill: true,
//		            label: {
//	            		display: 'true',
//	                    field: 'zdays',
//	                    renderer: Ext.util.Format.numberRenderer('0'),
//			            'text-anchor': 'top',
//	                    orientation: 'horizontal',
//	                    fill: '#fff'
//	                },
	                tips: {
	            		trackMouse: true,
	            		width: 140,
	            		height: 28,
	            		renderer: function(storeItem, item) {
	                		this.setTitle(+ storeItem.get('spmon') + " / "+ storeItem.get('zdays') );
	                  	}
	                },
		            highlight: {
	                    size: 7,
	                    radius: 7
	                }
	            }]
			}]
		});
		this.callParent(arguments);
	}
})