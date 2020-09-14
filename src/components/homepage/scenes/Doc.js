
import Startup from './core/Startup.js';
import InputPosition from './core/InputPosition.js';
import ShadowedLight from './core/ShadowedLight.js';
import { workbenchMisc, workbenchBoard } from './core/Assets.js';

import * as THREE from 'three';

//

const ASSETS_ROTATION = new THREE.Euler( 0, 0.6, 0 );
const ASSETS_TRANSLATION = new THREE.Vector3( 0.08, 0, 0 );

//

export default function Doc( domElement ) {

	domElement.style.background = 'radial-gradient(ellipse at 25% 25%, #fff5fa 0%, #d7cedb 62%, #aebcd1 100%)';

	const { scene, camera, renderer } = Startup( domElement );

	// scene.background = new THREE.Color( 0xffd1de );
	scene.fog = new THREE.Fog( 0xffe0e9, 0.48, 1.12 );

	renderer.domElement.style.opacity = "0.92";

	// assets

	workbenchBoard.then( (obj) => {

		obj.position.copy( ASSETS_TRANSLATION );
		obj.rotation.copy( ASSETS_ROTATION );

		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			// if ( child.material ) child.material = new THREE.MeshLambertMaterial();

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.castShadow = true;
			child.receiveShadow = true;

		})

	});

	workbenchMisc.then( (obj) => {

		obj.position.copy( ASSETS_TRANSLATION );
		obj.rotation.copy( ASSETS_ROTATION );

		obj.scale.setScalar( 0.02 );

		scene.add( obj );

		obj.traverse( (child) => {

			if ( child.material ) child.material.side = THREE.FrontSide;

			child.receiveShadow = true;

		});

		// clone

		const clone = obj.clone( true );

		clone.position.y -= 0.0012;

		clone.traverse( (child) => {

			if ( child.material ) {

				const matClone = child.material.clone();

				child.material = matClone;

				child.material.side = THREE.BackSide;

			}

			child.castShadow = true;

		});

		scene.add( clone );

	});

	// light

	const light = ShadowedLight({
		bias: -0.0005,
		color: 0xffffff,
		x: -0.3,
		y: 4,
		z: -1,
		intensity: 0.85,
		width: 0.71,
		near: 3.8,
		far: 4.5,
		resolution: 1024
	});

	light.shadow.radius = 5;

	light.target.position.z -= 0.5;

	scene.add( light, new THREE.AmbientLight( 0xffffff, 0.25 ) );

	// camera position

	const cameraGroup = new THREE.Group();
	scene.add( cameraGroup );
	cameraGroup.add( camera );

	setTimeout( positionCamera, 0 );

	window.addEventListener( 'resize', positionCamera );
	
	function positionCamera() {

		let ratio = domElement.clientHeight / domElement.clientWidth;

		camera.position.set( 0, 0.5, 0.2 );

		if ( ratio && ratio > 1 ) {

			camera.position.multiplyScalar( ratio );

			const newCamLength = camera.position.length();

			scene.fog.near = newCamLength - 0.15 ;
			scene.fog.far = newCamLength + 0.5;

		} else {

			scene.fog.near = 0.48;
			scene.fog.far = 1.12;

		}

	};

	//

	const targetRot = new THREE.Vector2();
	const targetTarget = new THREE.Vector2();
	const currentTarget = new THREE.Vector3();

	function animate( speedRatio ) {

		targetRot.x = 0.19 * ( -InputPosition.y + 0.55 );
		targetRot.y = 0.19 * -InputPosition.x;

		cameraGroup.rotation.x += ( targetRot.x - cameraGroup.rotation.x ) * 0.05 * speedRatio;
		cameraGroup.rotation.y += ( targetRot.y - cameraGroup.rotation.y ) * 0.05 * speedRatio;
		
		//

		// targetTarget.x = ( InputPosition.x * 0.05 );
		// targetTarget.y = ( InputPosition.y * 0.05 );

		// currentTarget.x += ( targetTarget.x - currentTarget.x ) * 0.1 * speedRatio;
		// currentTarget.z += ( targetTarget.y - currentTarget.z ) * 0.1 * speedRatio;

		camera.lookAt( currentTarget );

		//

		renderer.render( scene, camera );

	};

	Promise.all([ workbenchMisc, workbenchBoard ]).then( () => {
		animate( 1 );
	});

	return { animate }

}