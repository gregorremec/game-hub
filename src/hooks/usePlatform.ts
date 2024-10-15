import usePlatforms, { Platform } from "./usePlatforms"

const usePlatform = (id?: number): Platform | undefined => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(
        (p) => p.id === id
    );
}

export default usePlatform
