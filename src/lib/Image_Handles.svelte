<script lang="ts">
	import Image_Handle from './Image_Handle.svelte';
	import Image_Side_Handle from './Image_Side_Handle.svelte';
	import Image_Pan_Handle from './Image_Pan_Handle.svelte';
	import Image_Pan_Buttons from './Image_Pan_Buttons.svelte';
	import type {
		Image_Handles_State,
		Image_X_Handle_Name,
		Image_Y_Handle_Name,
		Image_Handle_Name,
		Image_Handle_Movement,
	} from './image_handles_store';

	export let handles: Image_Handles_State; // TODO what are the tradeoffs of making this a store?
	export let move_handles: (movements: Image_Handle_Movement[]) => void;
	export let container_width: number;
	export let container_height: number;

	export let size = 40;

	// TODO cursors for resize/drag/etc
	// TODO enable keyboard controls (arrow keys for panning, shift expand, control for locking aspect ratio)
	// TODO add inputs/sliders to directly control the handle values, maybe toggle an "advanced mode"
	// TODO this would make for an interesting non-trivial state machine
	// TODO consider hiding the handles after some period of inactivity

	let dragging = false;
	let panning = false;
	let active_x_handle: Image_X_Handle_Name | null = null;
	let active_y_handle: Image_Y_Handle_Name | null = null;
	let active_side_handle: Image_Handle_Name | null = null;
	let hovering_side_handle: Image_Handle_Name | null = null;
	let hovering_pan_handle = false;
	let last_client_x: number | null = null;
	let last_client_y: number | null = null;

	// TODO maybe move this function to the store?
	// problem is then we'd also want to move "resize" to the store,
	// and a generic "resize" function is more difficult to write cleanly,
	// and we don't want to pass down 9 resize and 5 pan functions as props...
	const pan = (dx: number, dy: number): void => {
		let movements: Image_Handle_Movement[] | null = null;
		if (dx) {
			if (dy) {
				movements = [
					['x1', dx],
					['x2', dx],
					['y1', dy],
					['y2', dy],
				];
			} else {
				movements = [
					['x1', dx],
					['x2', dx],
				];
			}
		} else if (dy) {
			movements = [
				['y1', dy],
				['y2', dy],
			];
		}
		if (movements) {
			move_handles(movements);
		}
	};
	const pan_left = (dx: number): void => pan(-dx, 0);
	const pan_right = (dx: number): void => pan(dx, 0);
	const pan_up = (dy: number): void => pan(0, -dy);
	const pan_down = (dy: number): void => pan(0, dy);

	// TODO factor out dragging?
	const start_dragging = (
		e: MouseEvent,
		x_handle: Image_X_Handle_Name,
		y_handle: Image_Y_Handle_Name,
	): void => {
		dragging = true;
		active_x_handle = x_handle;
		active_y_handle = y_handle;
		last_client_x = e.clientX;
		last_client_y = e.clientY;
	};
	const start_dragging_side = (e: MouseEvent, handle: Image_Handle_Name): void => {
		dragging = true;
		active_side_handle = handle;
		last_client_x = e.clientX;
		last_client_y = e.clientY;
	};
	const start_panning = (e: MouseEvent): void => {
		dragging = true;
		panning = true;
		last_client_x = e.clientX;
		last_client_y = e.clientY;
	};
	const stop_dragging = (_e: MouseEvent): void => {
		if (!dragging) return;
		dragging = false;
		panning = false;
		active_y_handle = null;
		active_y_handle = null;
		active_side_handle = null;
		last_client_x = null;
		last_client_y = null;
	};
	const on_mousemove = (e: MouseEvent): void => {
		if (!dragging) return;
		if (panning) {
			const dx = e.clientX - last_client_x!;
			const dy = e.clientY - last_client_y!;
			pan(dx, dy);
			last_client_x = e.clientX;
			last_client_y = e.clientY;
		} else if (active_side_handle === 'x1' || active_side_handle === 'x2') {
			const dx = e.clientX - last_client_x!;
			move_handles([[active_side_handle, dx]]);
			last_client_x = e.clientX;
		} else if (active_side_handle === 'y1' || active_side_handle === 'y2') {
			const dy = e.clientY - last_client_y!;
			move_handles([[active_side_handle, dy]]);
			last_client_y = e.clientY;
		} else {
			const dx = e.clientX - last_client_x!;
			const dy = e.clientY - last_client_y!;
			move_handles([
				[active_x_handle!, dx],
				[active_y_handle!, dy],
			]);
			last_client_x = e.clientX;
			last_client_y = e.clientY;
		}
	};
	const hover_side_handle = (side_handle: Image_Handle_Name): void => {
		hovering_side_handle = side_handle;
	};
	const unhover_side_handle = (_side_handle: Image_Handle_Name): void => {
		hovering_side_handle = null;
	};
</script>

<svelte:window
	on:mouseup={stop_dragging}
	on:mousemove={on_mousemove}
	on:mouseleave={stop_dragging}
/>

<div class="image-handles">
	<Image_Pan_Handle
		{handles}
		{start_panning}
		hover={() => (hovering_pan_handle = true)}
		unhover={() => (hovering_pan_handle = false)}
	/>
	<Image_Pan_Buttons {pan_left} {pan_right} {pan_up} {pan_down} />
	<Image_Side_Handle
		handle={'x1'}
		{handles}
		{size}
		{container_width}
		{container_height}
		start_dragging={start_dragging_side}
		hover={hover_side_handle}
		unhover={unhover_side_handle}
	/>
	<Image_Side_Handle
		handle={'x2'}
		{handles}
		{size}
		{container_width}
		{container_height}
		start_dragging={start_dragging_side}
		hover={hover_side_handle}
		unhover={unhover_side_handle}
	/>
	<Image_Side_Handle
		handle={'y1'}
		{handles}
		{size}
		{container_width}
		{container_height}
		start_dragging={start_dragging_side}
		hover={hover_side_handle}
		unhover={unhover_side_handle}
	/>
	<Image_Side_Handle
		handle={'y2'}
		{handles}
		{size}
		{container_width}
		{container_height}
		start_dragging={start_dragging_side}
		hover={hover_side_handle}
		unhover={unhover_side_handle}
	/>
	<Image_Handle
		x_handle={'x1'}
		y_handle={'y1'}
		{handles}
		{start_dragging}
		{size}
		dragging={panning ||
			(active_x_handle === 'x1' && active_y_handle === 'y1') ||
			active_side_handle === 'x1' ||
			active_side_handle === 'y1'}
		hovering={hovering_pan_handle || hovering_side_handle === 'x1' || hovering_side_handle === 'y1'}
	/>
	<Image_Handle
		x_handle={'x2'}
		y_handle={'y1'}
		{handles}
		{start_dragging}
		{size}
		dragging={panning ||
			(active_x_handle === 'x2' && active_y_handle === 'y1') ||
			active_side_handle === 'x2' ||
			active_side_handle === 'y1'}
		hovering={hovering_pan_handle || hovering_side_handle === 'x2' || hovering_side_handle === 'y1'}
	/>
	<Image_Handle
		x_handle={'x1'}
		y_handle={'y2'}
		{handles}
		{start_dragging}
		{size}
		dragging={panning ||
			(active_x_handle === 'x1' && active_y_handle === 'y2') ||
			active_side_handle === 'x1' ||
			active_side_handle === 'y2'}
		hovering={hovering_pan_handle || hovering_side_handle === 'x1' || hovering_side_handle === 'y2'}
	/>
	<Image_Handle
		x_handle={'x2'}
		y_handle={'y2'}
		{handles}
		{start_dragging}
		{size}
		dragging={panning ||
			(active_x_handle === 'x2' && active_y_handle === 'y2') ||
			active_side_handle === 'x2' ||
			active_side_handle === 'y2'}
		hovering={hovering_pan_handle || hovering_side_handle === 'x2' || hovering_side_handle === 'y2'}
	/>
</div>

<style>
	.image-handles {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
