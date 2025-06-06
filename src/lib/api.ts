export const PowerStateOFF = 0;
export const PowerStateON = 1;

export const devices = {
    async GET(): Promise<Devices> {
        const r = await fetch(`/api/devices`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },

    addr: {
        async GET(addr: string): Promise<Device> {
            const r = await fetch(`/api/devices/${addr}`);

            if (!r.ok) {
                throw new Error(r.statusText);
            }

            return await r.json();
        },

        color: {
            async POST(addr: string, color: number[]): Promise<void> {
                const r = await fetch(`/api/devices/${addr}/power`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(color),
                });

                if (!r.ok) {
                    throw new Error(r.statusText);
                }
            },
        },

        power: {
            async GET(addr: string): Promise<PowerState> {
                const r = await fetch(`/api/devices/${addr}/power`);

                if (!r.ok) {
                    throw new Error(r.statusText);
                }

                return await r.json();
            },

            async POST(addr: string, state: PowerState) {
                const r = await fetch(
                    `/api/devices/${addr}/power?state=${state}`,
                    {
                        method: "POST",
                    },
                );

                if (!r.ok) {
                    throw new Error(r.statusText);
                }
            },
        },
    },
};

export const colors = {
    async GET(): Promise<Colors> {
        const r = await fetch(`/api/colors`);

        if (!r.ok) {
            throw new Error(r.statusText);
        }

        return await r.json();
    },

    id: {
        async POST(id: number, color: Color): Promise<void> {
            const r = await fetch(`/api/colors/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(color),
            });

            if (!r.ok) {
                throw new Error(r.statusText);
            }
        },
    },
};
