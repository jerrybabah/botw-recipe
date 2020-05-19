/**
 * 여기서 clickable element란?
 * .food .image-wrapper img.image 태그 또는
 * .food div.name 태그를 의미한다.
 */
export function isClickableElement(target: Element) {
  const isClickable = true;

  // TODO: 좀 더 정교한 판별식이 필요함
  if (target.className === 'image' || target.className === 'name') {
    return isClickable;
  }

  return !isClickable;
}

export function getIdFromClickableElement(target: Element) {
  let id: number;

  if (target.className === 'image') {
    id = Number(target.parentElement!.parentElement!.parentElement!.dataset.index!);
  } else if (target.className === 'name') {
    id = Number(target.parentElement!.parentElement!.dataset.index!);
  } else {
    id = 1;
    console.error('clickable element에서 id 얻기 실패');
  }

  return id;
}

export function preventEslintError() {
  return '';
}
