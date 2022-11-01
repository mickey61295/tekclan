import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
	{ name: '14 October', uv: 4000, Jobs: 2400, amt: 2400 },
	{ name: '15 October', uv: 3000, Jobs: 1398, amt: 2210 },
	{ name: '16 October', uv: 2000, Jobs: 9800, amt: 2290 },
	{ name: '17 October', uv: 2780, Jobs: 3908, amt: 2000 },
	{ name: '18 October', uv: 1890, Jobs: 4800, amt: 2181 },
	{ name: '19 October', uv: 2390, Jobs: 3800, amt: 2500 },
	{ name: '20 October', uv: 3490, Jobs: 4300, amt: 2100 },
]

export default class Example extends PureComponent {
	render() {
		return (
			<BarChart
				style={{
					'& line': {
						display: 'none',
					},
				}}
				width={600}
				height={250}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				barSize={20}
			>
				<XAxis dataKey="name" scale="point" tick={false} padding={{ left: 10, right: 10 }} />
				<Tooltip />
				<CartesianGrid strokeDasharray="3 3" />
				<Bar dataKey="Jobs" fill="orange" background={{ fill: 'lightgrey' }} />
			</BarChart>
		)
	}
}
