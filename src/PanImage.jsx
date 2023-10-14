import React from 'react';
import image1 from './images/panimage.png';

function PanImage(){
	return(
		<div className="panImageBox">
			<img src={image1} alt="PanCard"/>
		</div>
	);
}

export default PanImage;