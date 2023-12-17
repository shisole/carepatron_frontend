export interface ClientInfo {
    firstName: string,
    lastName: string,
    phone?: string,
    email?: string,
    [key: string]: string | undefined
}

export type Client = "name" | "phone" | "email";