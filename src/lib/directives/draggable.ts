export function draggable(node, options) {
  let startX: number;
  let startY: number;

  function handleMouseMove(event) {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    options.onDrag({ deltaX, deltaY });
  }

  function handleMouseUp() {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);

    options.onEnd();
  }

  function handleMouseDown(event) {
    startX = event.clientX;
    startY = event.clientY;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  node.addEventListener('mousedown', handleMouseDown);

  return {
    destroy() {
      node.removeEventListener('mousedown', handleMouseDown);
    }
  };
}
