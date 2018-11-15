// import * as THREE from 'three';
import THREE from '../lib/THREE';
import {default as C} from './config';

var Camera = function(aspect){
	var camera = new THREE.PerspectiveCamera(
		C.camera.FOV,
		aspect,
		C.camera.NEAR,
		C.camera.FAR);

	var pos = C.camera.INIT_POS;
	camera.position.set(pos.x, pos.y, pos.z);
	camera.up.set(0,0,1);
	camera.lookAt( 0,0,0 );
	return camera;
};

export default Camera;