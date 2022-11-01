import React from 'react'
import { withStyles } from '@mui/styles'
import { Avatar, Grid, Stack, Tooltip } from '@mui/material'
import Divider from '../common/Divider'
import { green, deepOrange, grey } from '@mui/material/colors'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import icons from '../constants/Icons'

const styles = () => ({
	sideBarContainer: {
		padding: '10px',
		justifyContent: 'space-around',
		alignItems: 'center',
		'& svg': {
			cursor: 'pointer',
			transition: 'ease 0.5s',
			'&:hover': {
				fontSize: '3rem',
			},
		},
	},
	itemContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	middleContainer: {
		height: '70%',
		justifyContent: 'space-between',
		alignItems: 'center',
		scale: '0.9',
	},
})

const SideBar = (props) => {
	const { classes } = props
	return (
		<Grid
			container
			item
			sx={{
				borderRight: 1,
				borderColor: grey[500],
				display: { xs: 'none', md: 'flex' },
			}}
			md={0.85}
			direction="column"
			className={classes.sideBarContainer}
		>
			<Grid item className={classes.itemContainer}>
				<Avatar sx={{ width: 50, height: 50, bgcolor: green[500] }}>
					<AssignmentRoundedIcon />
				</Avatar>
			</Grid>
			<Divider />
			<Grid
				item
				container
				direction="column"
				className={classes.middleContainer}
			>
				<Grid item className={classes.itemContainer}>
					<Stack direction="column" spacing={2}>
						{icons.slice(0, 6).map((eachIcon) => (
							<Tooltip key={eachIcon.key} title={eachIcon.title}>
								{eachIcon.component}
							</Tooltip>
						))}
					</Stack>
				</Grid>
				<Grid item className={classes.itemContainer}>
					<Stack direction="column" spacing={2}>
						{icons.slice(6).map((eachIcon) => (
							<Tooltip key={eachIcon.key} title={eachIcon.title}>
								{eachIcon.component}
							</Tooltip>
						))}
					</Stack>
				</Grid>
			</Grid>
			<Divider />
			<Grid item className={classes.itemContainer}>
				<Avatar sx={{ width: 50, height: 50, bgcolor: deepOrange[500] }}>
					<PersonRoundedIcon />
				</Avatar>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(SideBar)
