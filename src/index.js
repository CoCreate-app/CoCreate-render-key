/*globals CustomEvent*/
import CoCreateApi from '@cocreate/api';

const CoCreateRenderKey = {
	id: 'key',
	actions: [
		'renderKey'
	],
	
	action_renderKey: function(element) {
		const container = element.closest("form") || document;
		let data = CoCreateApi.getFormData(this.id, 'renderKey',  container);
		console.log(data);
		CoCreateApi.render('renderKey', { data : data});
		
		document.dispatchEvent(new CustomEvent('renderKey', {
			detail: { data }
		}));
	}
};


CoCreateApi.init({
	name: CoCreateRenderKey.id,
	module: CoCreateRenderKey
})