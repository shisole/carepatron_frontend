export interface ClientInfo {
    name: string,
    phone?: string,
    email?: string
}

export type Client = "name" | "phone" | "email";