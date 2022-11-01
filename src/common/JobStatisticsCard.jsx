import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import Bull from '../common/Bull'

const JobStatisticsCard = ({ item }) => {
	return (
		<Card sx={{ width: '100%', boxShadow: 'none' }}>
			<CardContent>
				<Typography
					textAlign="center"
					fontWeight="bold"
					variant="text"
					fontSize={18}
					component="div"
				>
					
					<Bull/>
					{Object.keys(item)}
					<Bull/>
				</Typography>
				<Typography
					textAlign="center"
					variant="h5"
					fontWeight="bold"
					sx={{ marginTop: '20px' }}
				>
					{item[Object.keys(item)].count}
				</Typography>
				<Typography sx={{marginTop:'8px'}} textAlign="center" variant="body2">
					This week{' '}
					<span
						style={{
                            padding:'4px',
                            borderRadius:'100px',
							background:
								item[Object.keys(item)].percent[0] == '+'
									? '#2EC5A0'
									: '#EC6262',
						}}
					>
						{item[Object.keys(item)].percent}
					</span>
				</Typography>
			</CardContent>
		</Card>
	)
}

export default JobStatisticsCard
