import React from 'react'
import { withStyles } from '@mui/styles'
import { Divider, Grid, Typography } from '@mui/material'

const styles = () => ({
	itemContainer: {
		background: 'white',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: '5px',
	},
})

const ListItem = (props) => {
	const { classes } = props
	return (
		<>
			<Grid item container className={classes.itemContainer} md={3.5}>
				{props.startIcon}
				<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
					{props.number}
				</Typography>
				<Typography component="p">{props.string}</Typography>
				{props.endIcon}
			</Grid>
			<Divider orientation="vertical" variant="middle" flexItem />
		</>
	)
}

export default withStyles(styles)(ListItem)
