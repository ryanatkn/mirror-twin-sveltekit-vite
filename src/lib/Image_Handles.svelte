<script lang="ts">
	import Image_Handle from './Image_Handle.svelte';
	import Image_Side_Handle from './Image_Side_Handle.svelte';
	import Image_Pan_Handle from './Image_Pan_Handle.svelte';
	import Image_Pan_Buttons from './Image_Pan_Buttons.svelte';
	import type {
		Image_HandlesState,
		ImageXHandleName,
		ImageYHandleName,
		Image_HandleName,
		Image_HandleMovement,
	} from './image_handles_store';

	export let handles: Image_HandlesState; // TODO what are the tradeoffs of making this a store?
	export let moveHandles: (movements: Image_HandleMovement[]) => void;
	export let containerWidth: number;
	export let containerHeight: number;

	export let size = 40;

	// TODO cursors for resize/drag/etc
	// TODO enable keyboard controls (arrow keys for panning, shift expand, control for locking aspect ratio)
	// TODO add inputs/sliders to directly control the handle values, maybe toggle an "advanced mode"
	// TODO this would make for an interesting non-trivial state machine
	// TODO consider hiding the handles after some period of inactivity

	let dragging = false;
	let panning = false;
	let activeXHandle: ImageXHandleName | null = null;
	let activeYHandle: ImageYHandleName | null = null;
	let activeSideHandle: Image_HandleName | null = null;
	let hoveringSideHandle: Image_HandleName | null = null;
	let hoveringPanHandle = false;
	let lastClientX: number | null = null;
	let lastClientY: number | null = null;

	// TODO maybe move this function to the store?
	// problem is then we'd also want to move "resize" to the store,
	// and a generic "resize" function is more difficult to write cleanly,
	// and we don't want to pass down 9 resize and 5 pan functions as props...
	const pan = (dx: number, dy: number): void => {
		let movements: Image_HandleMovement[] | null = null;
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
			moveHandles(movements);
		}
	};
	const panLeft = (dx: number): void => pan(-dx, 0);
	const panRight = (dx: number): void => pan(dx, 0);
	const panUp = (dy: number): void => pan(0, -dy);
	const panDown = (dy: number): void => pan(0, dy);

	// TODO factor out dragging?
	const startDragging = (
		e: MouseEvent,
		xHandle: ImageXHandleName,
		yHandle: ImageYHandleName,
	): void => {
		dragging = true;
		activeXHandle = xHandle;
		activeYHandle = yHandle;
		lastClientX = e.clientX;
		lastClientY = e.clientY;
	};
	const startDraggingSide = (e: MouseEvent, handle: Image_HandleName): void => {
		dragging = true;
		activeSideHandle = handle;
		lastClientX = e.clientX;
		lastClientY = e.clientY;
	};
	const startPanning = (e: MouseEvent): void => {
		dragging = true;
		panning = true;
		lastClientX = e.clientX;
		lastClientY = e.clientY;
	};
	const stopDragging = (_e: MouseEvent): void => {
		if (!dragging) return;
		dragging = false;
		panning = false;
		activeYHandle = null;
		activeYHandle = null;
		activeSideHandle = null;
		lastClientX = null;
		lastClientY = null;
	};
	const onMouseMove = (e: MouseEvent): void => {
		if (!dragging) return;
		if (panning) {
			const dx = e.clientX - lastClientX!;
			const dy = e.clientY - lastClientY!;
			pan(dx, dy);
			lastClientX = e.clientX;
			lastClientY = e.clientY;
		} else if (activeSideHandle === 'x1' || activeSideHandle === 'x2') {
			const dx = e.clientX - lastClientX!;
			moveHandles([[activeSideHandle, dx]]);
			lastClientX = e.clientX;
		} else if (activeSideHandle === 'y1' || activeSideHandle === 'y2') {
			const dy = e.clientY - lastClientY!;
			moveHandles([[activeSideHandle, dy]]);
			lastClientY = e.clientY;
		} else {
			const dx = e.clientX - lastClientX!;
			const dy = e.clientY - lastClientY!;
			moveHandles([
				[activeXHandle!, dx],
				[activeYHandle!, dy],
			]);
			lastClientX = e.clientX;
			lastClientY = e.clientY;
		}
	};
	const hoverSideHandle = (sideHandle: Image_HandleName): void => {
		hoveringSideHandle = sideHandle;
	};
	const unhoverSideHandle = (_sideHandle: Image_HandleName): void => {
		hoveringSideHandle = null;
	};
</script>

<svelte:window on:mouseup={stopDragging} on:mousemove={onMouseMove} on:mouseleave={stopDragging} />

<div class="image-handles">
	<Image_Pan_Handle
		{handles}
		{startPanning}
		hover={() => (hoveringPanHandle = true)}
		unhover={() => (hoveringPanHandle = false)}
	/>
	<Image_Pan_Buttons {panLeft} {panRight} {panUp} {panDown} />
	<Image_Side_Handle
		handle={'x1'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<Image_Side_Handle
		handle={'x2'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<Image_Side_Handle
		handle={'y1'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<Image_Side_Handle
		handle={'y2'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<Image_Handle
		xHandle={'x1'}
		yHandle={'y1'}
		{handles}
		{startDragging}
		{size}
		dragging={panning ||
			(activeXHandle === 'x1' && activeYHandle === 'y1') ||
			activeSideHandle === 'x1' ||
			activeSideHandle === 'y1'}
		hovering={hoveringPanHandle || hoveringSideHandle === 'x1' || hoveringSideHandle === 'y1'}
	/>
	<Image_Handle
		xHandle={'x2'}
		yHandle={'y1'}
		{handles}
		{startDragging}
		{size}
		dragging={panning ||
			(activeXHandle === 'x2' && activeYHandle === 'y1') ||
			activeSideHandle === 'x2' ||
			activeSideHandle === 'y1'}
		hovering={hoveringPanHandle || hoveringSideHandle === 'x2' || hoveringSideHandle === 'y1'}
	/>
	<Image_Handle
		xHandle={'x1'}
		yHandle={'y2'}
		{handles}
		{startDragging}
		{size}
		dragging={panning ||
			(activeXHandle === 'x1' && activeYHandle === 'y2') ||
			activeSideHandle === 'x1' ||
			activeSideHandle === 'y2'}
		hovering={hoveringPanHandle || hoveringSideHandle === 'x1' || hoveringSideHandle === 'y2'}
	/>
	<Image_Handle
		xHandle={'x2'}
		yHandle={'y2'}
		{handles}
		{startDragging}
		{size}
		dragging={panning ||
			(activeXHandle === 'x2' && activeYHandle === 'y2') ||
			activeSideHandle === 'x2' ||
			activeSideHandle === 'y2'}
		hovering={hoveringPanHandle || hoveringSideHandle === 'x2' || hoveringSideHandle === 'y2'}
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
