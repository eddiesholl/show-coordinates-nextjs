// Useful simple fetcher for swr network calls
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
