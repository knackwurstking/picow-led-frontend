export function urlQueryParam(name: string): string {
    if (!location.search) {
        return "";
    }

    for (const q of location.search.slice(1).split("&")) {
        const [k, v] = q.split("=", 2);
        if (k === name) {
            return decodeURIComponent(v);
        }
    }

    return "";
}
