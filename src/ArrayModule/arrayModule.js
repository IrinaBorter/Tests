export const ArrayModule = () => {
    const arr = [];

    return {
        add: value => arr.push(value),
        getList: () => [...arr],
        concat: newArr => [...arr, ...newArr],
    };
};