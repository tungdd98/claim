import React, { FC, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, CssBaseline, Dialog } from "@mui/material";
import Draggable from "react-draggable"; // Both at the same time

const theme = createTheme({
	palette: {
		primary: {
			main: "#0052cc",
		},
		secondary: {
			main: "#edf2ff",
		},
	},
	typography: {
		fontFamily: [
			"Montserrat",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

const App: FC = () => {
	const [confirm, setConfirm] = useState(0);
	const [clickMe, setClickMe] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box>
				<Box>Confirm: {confirm}</Box>
				<Box>Click Me: {clickMe}</Box>
				<Draggable handle="strong">
					<div>
						<strong>Drag</strong>
						<Button variant="contained" onClick={() => setConfirm(prev => prev + 1)}>
							Click Me
						</Button>
					</div>
				</Draggable>
				<Draggable handle="strong">
					<div>
						<strong>Drag</strong>
						<Button variant="contained" onClick={() => setClickMe(prev => prev + 1)}>
							Confirm
						</Button>
					</div>
				</Draggable>
			</Box>
		</ThemeProvider>
	);
};

export default App;
