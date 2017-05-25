/**
	* jQuery Iframe Height Fix plugin 1.0
	*
	* A jQuery plugin use to solve the iframe height for cross domain Iframes. This plugin 
	* uses 2 script files to communicate between the host and the framed page.
	*
	* @author	Norvyn Villanueva
	*
	* @instructions: 
	*	
	* 
	* @usage: 
	*	<script src="[script location]/jquery-1.11.0.min.js"></script>
	*	<script src="[script location]/jqueryiframeResizefix-framework.js"></script>
	*	<script> $.iframeHeightFix(); </script>
	*
	*
	* @Plugin format:
	*	$.iframeHeightFix(); 										// use default values
	*	$.iframeHeightFix([wrapper selector/$ element]);			// override wrapper's default value
	*	$.iframeHeightFix([wrapper selector/$ element], [options]); // override wrapper and options' defaults value
	*	$.iframeHeightFix([method], [options]);						// calls a method and override options' defaults value
	*
	*
	*	Parameters: 
	*	[wrapper selector/$ element] -  String selector/ $ element that wraps the whole content other than body. This is optional. Defaults is string "body".
	*	[options] - Options object to override the default options. See below option details
	*
	*		@options: 
	*		wrapper - String selector/ $ element that wraps the whole content other than body. This is optional. Defaults is string "body".
	*		iframeId - String id of the Iframe used on the host page. Use this when the host page consist of more than one iframe. Defaults is "null"
	*		onLoadDelay - Integer/Time (in ms) to delay the execution of the script when the page is loaded. Typically use for pages that loads large images or if the page loads AJAX content. Defaults is "100" (in ms).
	*		onResizeDelay - Integer/Time (in ms) to delay the execution of the script when page is resized. Some responsive website might have delays when page is resized or tilted (mobile/tablets). Defaults is "100" (in ms).
	*		adjustment - Integer (in pixels) to adjust the height value. Use this when there is inconsistencies in height between different browsers. Defaults is "null".
	*		debug - use this to echo the height value passed to the host page. defaults is "false".	
	*
	*	[method] - String [method], As of now there is only one method to use.
*/
(function ($) {

/** 
	* @ Plugin Default properties
	*	
	*
*/
	var _defaults = {
		wrapper : 'body',
		iframeId : null,
		complete : null,
		onLoadDelay : 100, // not in use, intended for version 1.2
		onResizeDelay : 100,
		adjustment : null,
		debug: false
	}

/** 
	* @ PRIVATE Functions
	*	
	*
*/
	var internal = {
		getHeight : function () {
			var height = (typeof _defaults.wrapper == 'object' && defaults.wrapper instanceof jQuery)? _defaults.wrapper.outerHeight() : $(_defaults.wrapper).outerHeight();			
			if(_defaults.debug) console.log("getHeight = " + height);
			return height;
		},
		postMessage : function (iframeId, adj) {
			var adj = (adj != null || adj != undefined)? adj : 0; 
			var height = (iframeId != null)? {id: iframeId, height: this.getHeight() + adj} : this.getHeight() + adj;
			if(_defaults.debug) console.log("Post Message = " + height);
			parent.postMessage(height,"*");
		},
		applyDefaults : function (args, options) {
			var opt = {};
			if(args.length > 1 && typeof args[1] === 'object') {
				opt = $.extend(_defaults, args[1]);
			} else if (args.length == 1 && typeof args[0] === 'string'){
				opt = $.extend(_defaults, {wrapper: args[0]});
			} else {
				opt = $.extend(_defaults, options);
			}	
			return opt;		
		}, 
		debounce : function (func, threshold, execAsap) {
			var doit;

			return function () {
				clearTimeout(doit);
	  			doit = setTimeout(func, threshold || 100);
	  		}
		}
	}


/**	* @ PUBLIC methods
	* @ usage: $.iframeHeightFix([method], [options]);
	* @ examples: 
	*	$.iframeHeightFix('triggerResize', {adjustment: 50}});
	*	$.iframeHeightFix('init'); // or using shorthand $.iframeHeightFix();
*/
	var methods = {
		init: function (options) {
			var args = arguments;
			var options = internal.applyDefaults(args,options);
			if(_defaults.debug) $.each(_defaults, function (i, e) { console.log(i + " : " + e)});
			
			$(window).bind('load', internal.debounce(function () {internal.postMessage(options.iframeId, options.adjustment)}, options.onLoadDelay));
			$(window).bind('resize', internal.debounce(function () {internal.postMessage(options.iframeId, options.adjustment)}, options.onResizeDelay));
		},

		triggerResize: function (options) {
			var args = arguments;
			var options = internal.applyDefaults(args,options);
			internal.postMessage(options.iframeId, options.adjustment);
		}
	}

/** * @ Plugin Initialization 
	*
*/
	$.iframeHeightFix = function (method) {
		if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else if ( typeof method === 'string' ) {
        	return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on $' );
        }
	}

})(jQuery);