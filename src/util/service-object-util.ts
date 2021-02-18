import { IServiceContext } from "@alstradocs/service-objects";
import { ExtensionState } from "../model";
import { ReduxServiceObjectExecutor } from "../service-object";

export class ServiceObjectUtil {

    /**
     * 
     * @param context 
     */
    public static getReduxStore(context: IServiceContext<any>) {
        let executor = context.serviceExecutor as ReduxServiceObjectExecutor;
        let store = executor.getStore();

        if(!store) throw new Error('Application store not found');

        return store;
    }

    /**
     * 
     * @param context 
     */
    public static getReduxState(context: IServiceContext<any>): ExtensionState {
        let store = ServiceObjectUtil.getReduxStore(context);
        return store.getState();
    }
}