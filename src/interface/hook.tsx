export type TypeCustomUseState<T> = [
    T,
    (setState: T) => void,
]