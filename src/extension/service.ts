import { Store } from "redux";
import { ExtensionServiceConfig, ExtensionState } from "../model";
import { extensionServiceDestroyRequestAction, extensionServiceInitRequestAction } from "../redux";


/**
 * An extension service is a single component within an 
 * web extension. An extension service can be classified as
 * a background script, a content script or a page script
 */
export interface IExtensionService {
    
    /**
     * 
     */
    init(config: ExtensionServiceConfig): void;

    /**
     * 
     */
    destroy(): void;
}

/**
 *  Static side of a extension service
 */
export interface IExtensionServiceConstructor {

    /**
     * 
     */
    new(...args:any[]): IExtensionService

}

/**
 * Extension service decorator
 */
export function IsExtensionService() {
    return <U extends IExtensionServiceConstructor>(constructor: U) => { constructor };
}

/**
 * Simple extension service class utilizing the 
 * IsExtensionService decorator
 */
@IsExtensionService()
export default class ExtensionService implements IExtensionService  {

    constructor(private store: Store<ExtensionState>){}

    /**
     * 
     * @param store 
     */
    init(config: ExtensionServiceConfig): void {
        this.store.dispatch(extensionServiceInitRequestAction(config))
    }

    
    /**
     * 
     */
    destroy(): void{
        this.store.dispatch(extensionServiceDestroyRequestAction({}))
    }
}
