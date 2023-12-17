export type GenericValue = string | number | undefined | null;

export type GenericKVP <T extends Record<string, GenericValue>> = T;
export type GenericArrayKVP <T extends Record<string, GenericValue>> = T[];