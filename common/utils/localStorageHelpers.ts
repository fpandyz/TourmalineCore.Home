export function setLSItem(key: string, item: any) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLSItem(key: string) {
  const result = localStorage.getItem(key);

  return result ? JSON.parse(result) : null;
}

export function removeLSItem(key: string) {
  localStorage.removeItem(key);
}
