export const createMusic = ({id, name, duration, ...others}) => {
    return {
        id,
        name,
        duration,
        ...others
    }
}