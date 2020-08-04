
import * as THREE from 'three';

import Easing from './Easing.js';

//

const inputPosition = new THREE.Vector2();

//

window.addEventListener( 'mousemove', (e) => {

	inputPosition.x = ( ( e.clientX / window.innerWidth ) * 2 ) - 1;
	inputPosition.y = ( ( e.clientY / window.innerHeight ) * 2 ) - 1;

});

//

const deviceRotation = new THREE.Vector2();

//

let intervalToken;

function tweenRotationBack() {

	if ( !intervalToken ) {

		intervalToken = setInterval( () => {

			deviceRotation.x += ( 0 - deviceRotation.x ) * 0.1;
			deviceRotation.y += ( 0 - deviceRotation.y ) * 0.1;

			if (
				Math.abs( deviceRotation.x ) < 0.5 &&
				Math.abs( deviceRotation.y ) < 0.5
			) {
				clearInterval( intervalToken );
				intervalToken = undefined
			};

			// report the recorded rotation to a [ 0 1 ] range,
			// then copy it into inputPosition for camera positioning in scenes.

			inputPosition.x = Easing.easeOutQuint( Math.abs( deviceRotation.x / 2000 ) * Math.sign( deviceRotation.x ) );
			inputPosition.y = Easing.easeOutQuint( Math.abs( deviceRotation.y / 2000 ) * Math.sign( deviceRotation.y ) );

			console.log( inputPosition );

		}, 15 );

	}

}

//

window.addEventListener( 'devicemotion', (e) => {

	const rot = e.rotationRate
	
	deviceRotation.x = rot.beta ? deviceRotation.x + rot.beta : deviceRotation.x;
	deviceRotation.y = rot.alpha ? deviceRotation.y + rot.alpha : deviceRotation.y;
	
	// clamp values to [ 2000, -2000 ]

	deviceRotation.x = THREE.MathUtils.clamp( deviceRotation.x, -2000, 2000 );
	deviceRotation.y = THREE.MathUtils.clamp( deviceRotation.y, -2000, 2000 );

	// gently tween deviceRotation values back to 0

	tweenRotationBack();

})

//

export default inputPosition