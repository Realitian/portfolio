
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module');

// title

const title = document.createElement('H2');
title.append( texts.modules.samples.title );

container.append( title );

// samples flex box

const samplesContainer = document.createElement('DIV');
samplesContainer.id = "samples-container";

container.append( samplesContainer );

//

createSamplesBox(
	'renders',
	'assets/images/render-teaser.jpg',
	'assets/samples/renders.zip'
);

createSamplesBox(
	'cad',
	'assets/images/model-teaser.jpg',
	'assets/samples/model.zip'
);

// createSamplesBox( 'Documentation', 'assets/textures/viewer2.jpg' );

//

function createSamplesBox( textType, imgUrl, dlUrl ) {

	const sampleContainer = document.createElement('A');
	sampleContainer.classList.add('sample-container');
	sampleContainer.href = dlUrl;

	const img = document.createElement('IMG');
	img.src = imgUrl;

	const icon = document.createElement('I');
	icon.classList.add('fa', 'fa-download');

	const text = document.createElement('DIV');
	text.append( texts.modules.samples[ textType ] );

	sampleContainer.append( icon, img, text );
	samplesContainer.append( sampleContainer );

};

//

export default container