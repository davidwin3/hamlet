/**
 * Date : 2012.11.30
 * Desc : ���� �ý��� ����Ʈ
 * 		  ���⼭ �ߺз� ������ �ý��� ����Ʋ �����´�.
 */
Ext.define('HAMLET.store.ProgramDetails', {
    extend: 'Ext.data.Store',	// �翬�� store���
	storeId: 'programDetails',
	autoLoad : true,			// �ڵ� �ε�� ������.
	proxy: {
        type: 'ajax',
        // json������ ��Ʈ�� ����� systemlist.json�̶�� ���ϸ� ���� 
        // �ý��� ����Ʈ�� ���� �� �ִ�.
        url: '/resources/json/programDetail.jsp',	
        reader: {
        	type: 'json',
        	root: 'entitys',
        	totalProperty: 'totalCount',
        	messageProperty: 'message'
        },
        listeners: {
            exception: function(proxy, response, operation){
            	// ���߿� ������ �κ� ��� ajax ��ſ� �������� �� �� �ִ�
            	// ���� ĳġ �Լ��� ���� ���̴�.
			}
	    }
   },
	fields: [
		{
			name: 'server_id'
		},{
			name: 'parent_id',
			type: 'string'
		},{
			name: 'server_name'
		},{
			name: 'server_url'
		},{
			name: 'is_login_flow'
		},{
			name: 'login_form_query'
		},{
			name: 'id_name'
		},{
			name: 'id_value'
		},{
			name: 'password_name'
		},{
			name: 'password_value'
		},{
			name: 'success_string'
		}
   ]
});