const env = <T = string>(key: string, defaultValue: T | null = null): T | null => {
    const value = process.env[key];
    if (value === undefined) {
        return defaultValue;
    }
    
    if (typeof defaultValue === 'boolean') {
        return (value.toLowerCase() === 'true') as T;
    }
    
    if (typeof defaultValue === 'number') {
        const parsed = parseFloat(value);
        return (isNaN(parsed) ? defaultValue : parsed) as T;
    }
    
    return value as T;
}

export { env };
