export function throttle(callback, threshold, scope) {
	let last, deferTimer;

	return function(that) {
		let context = scope || that;
		let now = Date.now(),
			args = arguments;
		if (last && now < last + threshold) {
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function() {
				last = now;
				callback.apply(context, args);
			}, threshold);
		} else {
			last = now;
			callback.apply(context, args);
		}
	};
}
