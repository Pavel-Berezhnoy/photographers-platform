export function getAccessToken(): string {
  return localStorage.getItem('access-token') || '';
}

export function setAccessToken(token: string): void {
  localStorage.setItem('access-token', token);
}

export function removeAccessToken(): void {
  localStorage.removeItem('access-token');
}

export function getRefreshToken(): string {
  return localStorage.getItem('refresh-token') || '';
}

export function setRefreshToken(token: string): void {
  localStorage.setItem('refresh-token', token);
}

export function removeRefreshToken(): void {
  localStorage.removeItem('refresh-token');
}
