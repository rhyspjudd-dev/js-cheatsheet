const el = document.getElementById('canvas');

el.addEventListener('touchstart', handleStart);
el.addEventListener('touchend', handleEnd);
el.addEventListener('touchcancel', handleCancel);
el.addEventListener('touchmove', handleMove);