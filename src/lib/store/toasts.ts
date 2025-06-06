import { writable } from "svelte/store";

export type ToastDataTypes = "info" | "warning" | "error";

export interface ToastData {
    id: number;
    type: ToastDataTypes;
    message: string;
    timeout: number;
}

export const toasts = writable<ToastData[]>([]);

export function addToast(
    type: ToastDataTypes,
    message: string,
    timeout: number = 0,
): void {
    // TODO: ...
}

export function dismissToast(id: number): void {
    // TODO: ...
}
