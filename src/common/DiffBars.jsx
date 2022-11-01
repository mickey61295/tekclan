import { Grid } from '@mui/material'
import React from 'react'
import DiffBar from './DiffBar'

const DiffBars = ({ count }) => {
	return (
		<>
			<Grid sx={{ display: 'flex' }} item>
				{Array.from(Array(10), (v, i) => i + 1).map((num) => (
					<Grid key={num + 'progress'} item mx={0.15}>
						<DiffBar color={num <= count ? '#2EC5A0' : '#EFF2FA'} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default DiffBars
