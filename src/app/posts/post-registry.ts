// Thanks to this stackoverflow post for the registry idea https://stackoverflow.com/questions/40115072/how-to-load-component-dynamically-using-component-name-in-angular2
export const PostLookupRegistry: Map<string, any> = new Map();

export const PostLookup = (key: string): any => {
    return (cls) => {
        PostLookupRegistry.set(key, cls);
    };
};