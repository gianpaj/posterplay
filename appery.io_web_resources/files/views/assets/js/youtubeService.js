
	$t.youtubeService = $t.createClass(null, {
		
		init : function(requestOptions) {
			this.__requestOptions = $.extend({}, requestOptions);
		},
		
		process : function(settings) {
			if (this.__requestOptions.echo) {
				settings.success(this.__requestOptions.echo);
			} else {
				console.log('Default implementation is used. Please define your own.');
				settings.success({result:[{link:"url1"}]});
			}
			settings.complete('success');
		} 

	});
