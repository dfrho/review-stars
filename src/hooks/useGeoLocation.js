import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useGeolocation = ({ enableHighAccuracy, maximumAge, timeout } = {}, callback) => {
	const [coordinates, setCoordinates] = useState({
		accuracy: null,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		latitude: null,
		longitude: null,
		speed: null,
		timestamp: null,
		error: null,
	});

	useEffect(() => {
		const updateCoordinates = ({ coords = {}, timestamp }) => {
			const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } = coords;
			setCoordinates({
				accuracy,
				altitude,
				altitudeAccuracy,
				heading,
				latitude,
				longitude,
				speed,
				timestamp,
				error: null,
			});

			if (callback instanceof Function) {
				callback({
					accuracy,
					altitude,
					altitudeAccuracy,
					heading,
					latitude,
					longitude,
					speed,
					timestamp,
					error: null,
				});
			}
		};

		const setError = error => {
			updateCoordinates({
				accuracy: null,
				altitude: null,
				altitudeAccuracy: null,
				heading: null,
				latitude: null,
				longitude: null,
				speed: null,
				timestamp: null,
				error,
			});
		};

		let watchId;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(updateCoordinates, setError);
			watchId = navigator.geolocation.watchPosition(updateCoordinates, setError, {
				enableHighAccuracy,
				maximumAge,
				timeout,
			});
		}
		return () => {
			if (watchId) {
				navigator.geolocation.clearWatch(watchId);
			}
		};
	}, [callback, enableHighAccuracy, maximumAge, timeout]);

	return coordinates;
};

useGeolocation.propTypes = {
	enableHighAccuracy: PropTypes.boolean,
	maximumAge: PropTypes.number,
	timeout: PropTypes.number,
};

useGeolocation.defaultProps = {
	enableHighAccuracy: false,
	maximumAge: 15000,
	timeout: 0,
};

export default useGeolocation;
