// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    type Device = {
        addr: string;
        name: string;
        color: number[];
        pins: number[];
        active_color: number[];
        power: 0 | 1;
    };

    type Devices = Device[];

    type Color = {
        id: number;
        r: number;
        g: number;
        b: number;
    };

    type Colors = Color[];

    type WSMessageData =
        | {
              type: "devices";
              data: Devices;
          }
        | {
              type: "device";
              data: Device;
          }
        | {
              type: "colors";
              data: Colors;
          };
}

export {};
