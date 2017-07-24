export const IncrementModule = () => {
    let value = 0;

    return {
        getValue: () => value,
        increase: () => value++,
    };
};