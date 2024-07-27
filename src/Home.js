import React from "react";
import img from './home-img.jpg';
import Homestyle from './Homestyle.css';

const Home = () => (
            <>
         <table>
	<tbody>
		<tr>
			<td>
				<h1>Plan in seconds, Not in Weekends. </h1>
			</td>
			<td><img src={img} style={{height:"300px", height:"300px"}}/></td>
		</tr>
	</tbody>
</table>
            </>
);

export default Home; 