export const getRelativeCoordinates = (event, referenceEl) => {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceEl.offsetLeft,
    top: referenceEl.offsetTop,
    width: referenceEl.clientWidth,
    height: referenceEl.clientHeight
  };

  let reference = referenceEl.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}