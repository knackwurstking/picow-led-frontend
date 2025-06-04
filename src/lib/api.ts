export const PowerStateOFF = 0;
export const PowerStateON = 1;

export const devices = {
    async get(): Promise<Devices> {
        const r = await fetch(`/api/devices`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },
};

export const device = {
    async get(addr: string): Promise<Device> {
        const r = await fetch(`/api/devices/${addr}`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },
};

export const power = {
    async get(addr: string): Promise<PowerState> {
        const r = await fetch(`/api/devices/${addr}/power`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },

    async post(addr: string, state: PowerState) {
        const r = await fetch(`/api/devices/${addr}/power?state=${state}`, {
            method: "POST",
        });

        if (!r.ok) {
            throw new Error(r.statusText);
        }
    },
};

// TODO: Colors api handler
