import React, {useEffect, useState } from 'react';


import scoreboard from './ScoreBoardData'

export default function ScoreBoardTable(props) {



          

    

        return (
			props.data.length > 0 && (
				<table class="w-25 table table-striped">
					<thead>
						<tr>
							<th scope="col">Nick</th>
							<th scope="col">Score:</th>
						</tr>
					</thead>
					<tbody>
						{props.data.map(p => (
							<tr>
								<td scope="row">{p.nick}</td>
								<td scope="row">{p.score}</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
}