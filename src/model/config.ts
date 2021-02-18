/**
 * 
 */
export interface ServiceObjectConfig<T = any> {
    data: T
    serviceName: string;
}

/**
 * 
 */
export interface ExtensionServiceConfig {
    id?: string;
    initServices: ServiceObjectConfig [];
    destroyServices: ServiceObjectConfig []
}

/**
 * 
 */
export interface ExtensionConfig {
    [ id: string ]: ExtensionServiceConfig;
}