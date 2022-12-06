const el = document.getElementById('.some-element');

el.addEventListener('touchstart', handleStart);
el.addEventListener('touchend', handleEnd);
el.addEventListener('touchcancel', handleCancel);
el.addEventListener('touchmove', handleMove);


// Moz Docs - https://developer.mozilla.org/en-US/docs/Web/API/Touch_events