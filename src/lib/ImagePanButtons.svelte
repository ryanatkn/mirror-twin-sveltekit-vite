<script lang="ts">
	type Panner = (distance: number) => void;

	export let panLeft: Panner;
	export let panRight: Panner;
	export let panUp: Panner;
	export let panDown: Panner;

	export let smallMovementDistance = 1;
	export let largeMovementDistance = 5;

	// TODO this should use a generic gro component, like `TextButton`
	// maybe animate a text shadow on hover?

	// TODO sizes are hardcoded (assuming 40px buttons & handles)

	// TODO maybe add vertical buttons?

	// TODO instead of subscribing directly to window events,
	// we could use context to register a handler to a semantic event,
	// so input events can be centralized for mapping,
	// priority dispatching, UI discoverability features, logging, and other `felt` stuff
	// TODO panning hotkeys should briefly flash the corresponding arrow button in the UI
	const onKeyDown = (e: KeyboardEvent) => {
		const panFn = getPanner(e);
		if (panFn) {
			const distance = e.ctrlKey ? largeMovementDistance : smallMovementDistance;
			panFn(distance);
			e.stopPropagation();
		}
	};

	const getPanner = (e: KeyboardEvent): Panner | null => {
		switch (e.key) {
			case 'ArrowLeft': {
				return panLeft;
			}
			case 'ArrowRight': {
				return panRight;
			}
			case 'ArrowUp': {
				return panUp;
			}
			case 'ArrowDown': {
				return panDown;
			}
		}
		return null;
	};
</script>

<!-- TODO the offset here is related to HANDLE_HEIGHT (or size) + PAN_BUTTON_HEIGHT (or size) -->
<div class="pan-buttons" style="top: -60px;">
	<div class="pan-button" on:click={() => panLeft(largeMovementDistance)}>↞</div>
	<div class="pan-button" on:click={() => panLeft(smallMovementDistance)}>←</div>
	<div class="pan-button" on:click={() => panRight(smallMovementDistance)}>→</div>
	<div class="pan-button" on:click={() => panRight(largeMovementDistance)}>↠</div>
</div>

<svelte:window on:keydown={onKeyDown} />

<style>
	.pan-buttons {
		width: 100%;
		position: absolute;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 40px;
	}
	.pan-button {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.3;
		line-height: 0; /* allows for better vertical centering */
		padding: 0 6px 6px;
	}
	.pan-button:hover {
		opacity: 0.7;
	}
	.pan-button:active {
		opacity: 1;
	}
</style>
