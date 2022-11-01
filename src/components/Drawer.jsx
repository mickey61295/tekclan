import React, { useState } from 'react'
import { Avatar, Box, Grid } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { deepOrange } from '@mui/material/colors'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import icons from '../constants/Icons'

export default function ResponsiveDrawer(props) {
	const { setOpen, open } = props

	const handleClose = () => {
		setOpen(false)
	}

	const list = (anchor) => (
		<Grid container direction="column">
			<Box role="presentation" onClick={handleClose} onKeyDown={handleClose}>
				<List>
					{icons.slice(0, 6).map((eachIcon, index) => (
						<ListItem key={eachIcon.key} disablePadding>
							<ListItemButton>
								<ListItemIcon>{eachIcon.component}</ListItemIcon>
								<ListItemText primary={eachIcon.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{icons.slice(6).map((eachIcon, index) => (
						<ListItem key={eachIcon.key} disablePadding>
							<ListItemButton>
								<ListItemIcon>{eachIcon.component}</ListItemIcon>
								<ListItemText primary={eachIcon.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
			<Box
				role="presentation"
				onClick={handleClose}
				onKeyDown={handleClose}
				sx={{ position: 'fixed', bottom: 0 }}
			>
				<List>
					<ListItem key={'User'} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Avatar
									sx={{
										width: 30,
										height: 30,
										bgcolor: deepOrange[500],
									}}
								>
									<PersonRoundedIcon />
								</Avatar>
							</ListItemIcon>
							<ListItemText primary={'User'} />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Grid>
	)

	return (
		<Drawer open={open} onClose={handleClose}>
			{list()}
		</Drawer>
	)
}
