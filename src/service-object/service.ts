import { IService, IServiceContext, IsServiceExecutor, ServiceExecutor } from "@alstradocs/service-objects";
import { Store } from "redux";
import { ExtensionState } from "../model";
import { ServiceObjectUtil } from "../util";

export abstract class AbstractExtensionServiceObject<T, U> implements IService<T, U> {
    
    protected store: Store<ExtensionState> | undefined
    
    /**
     * 
     * @param context 
     */
    execute(context: IServiceContext<T>): U {
        return this.doExecute(context);
    }

    /**
     * 
     * @param context 
     */
    public abstract doExecute(context: IServiceContext<T>): U;

    /**
     * 
     * @param context 
     */
    protected getStore(context: IServiceContext<T>): Store<ExtensionState> {
        return ServiceObjectUtil.getReduxStore(context);
    }

    /**
     * 
     * @param context 
     */
    protected getState(context: IServiceContext<T>): ExtensionState {
        return ServiceObjectUtil.getReduxStore(context).getState();
    }
}


@IsServiceExecutor()
export class ReduxServiceObjectExecutor extends ServiceExecutor {
    
    private store: Store<ExtensionState> | undefined;

    /**
     * 
     * @param store 
     */
    setStore(store: Store<ExtensionState>) {
        this.store = store;
    }

    /**
     * 
     */
    getStore(): Store<ExtensionState> | undefined {
        return this.store;
    }
}