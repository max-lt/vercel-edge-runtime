export interface DispatchFetch {
  (input: string, init?: RequestInit): Promise<
    Response & {
      waitUntil: () => Promise<any>
    }
  >
}

export interface RejectionHandler {
  (reason?: {} | null, promise?: Promise<any>): void
}

export interface ErrorHandler {
  (error?: {} | null): void
}

/**
 * Just any type of object indexed by string or numbers where the value can
 * be anything or the provided generic.
 */
export interface Dictionary<T = any> {
  [key: string | number]: T
}
