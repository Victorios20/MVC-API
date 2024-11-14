
export interface IData<T> {
    inicializar(): Promise<void>;
    getCache(): T[];
}
