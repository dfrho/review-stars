import React from 'react';
import { throttle } from './utils';
import PropTypes from 'prop-types';

const events = new Set();
const onResize = () => events.forEach(fn => fn());

const useWindowSize = throttleMs => {
	const [size, setSize] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight,
		isMobileVerticle: window.innerWidth < 415,
	});

	const handle = throttle(() => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
			isMobileVerticle: window.innerWidth < 415,
		});
	}, throttleMs);

	React.useEffect(() => {
		if (events.size === 0) {
			window.addEventListener('resize', onResize, true);
		}

		events.add(handle);

		return () => {
			events.delete(handle);

			if (events.size === 0) {
				window.removeEventListener('resize', onResize, true);
			}
		};
	}, [handle]);

	return size;
};

useWindowSize.propTypes = {
	throttleMs: PropTypes.number,
};

useWindowSize.defaultProps = {
	throttleMs: 100,
};

export default useWindowSize;
