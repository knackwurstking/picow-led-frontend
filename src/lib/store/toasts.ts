import { writable } from "svelte/store";

export type ToastDataTypes = "info" | "warning" | "error";

export interface ToastData {
    type: ToastDataTypes;
    message: string;
    timeout: number;
}

export const toasts = writable<ToastData[]>([]);
