<script lang="ts">
	type Panner = (distance: number) => void;

	export let pan_left: Panner;
	export let pan_right: Panner;
	export let pan_up: Panner;
	export let pan_down: Panner;

	export let small_movement_distance = 1;
	export let large_movement_distance = 5;

	// TODO this should use a generic gro component, like `TextButton`
	// maybe animate a text shadow on hover?

	// TODO sizes are hardcoded (assuming 40px buttons & handles)

	// TODO maybe add vertical buttons?

	// TODO instead of subscribing directly to window events,
	// we could use context to register a handler to a semantic event,
	// so input events can be centralized for mapping,
	// priority dispatching, UI discoverability features, logging, and other `felt` stuff
	// TODO panning hotkeys should briefly flash the corresponding arrow button in the UI
	const on_keydown = (e: KeyboardEvent) => {
		const pan_fn = get_panner(e);
		if (pan_fn) {
			const distance = e.ctrlKey ? large_movement_distance : small_movement_distance;
			pan_fn(distance);
			e.stopPropagation();
		}
	};

	const get_panner = (e: KeyboardEvent): Panner | null => {
		switch (e.key) {
			case 'ArrowLeft': {
				return pan_left;
			}
			case 'ArrowRight': {
				return pan_right;
			}
			case 'ArrowUp': {
				return pan_up;
			}
			case 'ArrowDown': {
				return pan_down;
			}
		}
		return null;
	};
</script>

<!-- TODO the offset here is related to HANDLE_HEIGHT (or size) + PAN_BUTTON_HEIGHT (or size) -->
<div class="pan-buttons" style="top: -60px;">
	<div class="pan-button" on:click={() => pan_left(large_movement_distance)}>↞</div>
	<div class="pan-button" on:click={() => pan_left(small_movement_distance)}>←</div>
	<div class="pan-button" on:click={() => pan_right(small_movement_distance)}>→</div>
	<div class="pan-button" on:click={() => pan_right(large_movement_distance)}>↠</div>
</div>

<svelte:window on:keydown={on_keydown} />

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
