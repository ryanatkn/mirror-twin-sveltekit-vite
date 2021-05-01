<script lang="ts">
	import ImageHandle from './ImageHandle.svelte';
	import ImageSideHandle from './ImageSideHandle.svelte';
	import ImagePanHandle from './ImagePanHandle.svelte';
	import ImagePanButtons from './ImagePanButtons.svelte';
	import type {
		ImageHandlesState,
		ImageXHandleName,
		ImageYHandleName,
		ImageHandleName,
		ImageHandleMovement,
	} from './imageHandlesStore';

	export let handles: ImageHandlesState; // TODO what are the tradeoffs of making this a store?
	export let moveHandles: (movements: ImageHandleMovement[]) => void;
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
	let activeSideHandle: ImageHandleName | null = null;
	let hoveringSideHandle: ImageHandleName | null = null;
	let hoveringPanHandle = false;
	let lastClientX: number | null = null;
	let lastClientY: number | null = null;

	// TODO maybe move this function to the store?
	// problem is then we'd also want to move "resize" to the store,
	// and a generic "resize" function is more difficult to write cleanly,
	// and we don't want to pass down 9 resize and 5 pan functions as props...
	const pan = (dx: number, dy: number): void => {
		let movements: ImageHandleMovement[] | null = null;
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
	const startDraggingSide = (e: MouseEvent, handle: ImageHandleName): void => {
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
	const hoverSideHandle = (sideHandle: ImageHandleName): void => {
		hoveringSideHandle = sideHandle;
	};
	const unhoverSideHandle = (_sideHandle: ImageHandleName): void => {
		hoveringSideHandle = null;
	};
</script>

<svelte:window on:mouseup={stopDragging} on:mousemove={onMouseMove} on:mouseleave={stopDragging} />

<div class="image-handles">
	<ImagePanHandle
		{handles}
		{startPanning}
		hover={() => (hoveringPanHandle = true)}
		unhover={() => (hoveringPanHandle = false)}
	/>
	<ImagePanButtons {panLeft} {panRight} {panUp} {panDown} />
	<ImageSideHandle
		handle={'x1'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<ImageSideHandle
		handle={'x2'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<ImageSideHandle
		handle={'y1'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<ImageSideHandle
		handle={'y2'}
		{handles}
		{size}
		{containerWidth}
		{containerHeight}
		startDragging={startDraggingSide}
		hover={hoverSideHandle}
		unhover={unhoverSideHandle}
	/>
	<ImageHandle
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
	<ImageHandle
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
	<ImageHandle
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
	<ImageHandle
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
