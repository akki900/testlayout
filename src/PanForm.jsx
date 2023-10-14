import React from 'react';

function PanForm(){
	return(
		<div className="formBox">
			<form action="">
				<div className="form-group">
					<input id="form_name1" class="form-control" type="text" required /> 
					<label for="form_name1">Enter 10-digit PAN</label>
					<span>10/10</span>
				</div>
				<button className="disable">Verify</button>
			</form>
		</div>
	);
}

export default PanForm;