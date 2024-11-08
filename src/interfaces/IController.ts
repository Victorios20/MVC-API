export interface IController<T> {
    listar(): Promise<T[]>;
    buscar(id: string): Promise<T | null>;
    adicionar(item: T): Promise<void>;
    remover(id: string): Promise<void>;
}
