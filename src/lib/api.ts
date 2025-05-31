export const devices = {
    async get(): Promise<Devices> {
        const r = await fetch(`/api/devices`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },
};
