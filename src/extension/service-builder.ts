import { IServiceExecutor, IServiceRepository, ServiceRepository, ServiceRepositoryEntry } from "@alstradocs/service-objects";
import { AnyAction, Store } from "redux";
import { ExtensionState } from "../model";
import ExtensionService from "./service";
import { ReduxServiceObjectExecutor } from "../service-object";

/**
 * Builder interface for the different
 * steps required to construct and extension service
 */
export interface IExtensionServiceBuilder {

    /**
     * 
     * @param services 
     */
    buildServiceRepository(services: ServiceRepositoryEntry[]): IServiceRepository;

    /**
     * 
     * @param serviceRepository 
     */
    buildServiceExecutor(serviceRepository: IServiceRepository): IServiceExecutor;

    /**
     * 
     */
    buildStore(executor: IServiceExecutor): Store<ExtensionState>;
}

/**
 * Abstract extension service builder
 */
export abstract class AbstractExtensionServiceBuilder implements IExtensionServiceBuilder {

    /**
     * 
     * @param services 
     */
    buildServiceRepository(services: ServiceRepositoryEntry[]): IServiceRepository {
        let serviceRepository = new ServiceRepository(services);
        return serviceRepository;
    }

    /**
     * 
     * @param serviceRepository 
     */
    buildServiceExecutor(serviceRepository: IServiceRepository): IServiceExecutor {
        return new ReduxServiceObjectExecutor(serviceRepository);
    }

    /**
     * 
     * @param executor 
     */
    public abstract buildStore(executor: IServiceExecutor): Store<ExtensionState, AnyAction>;

}

/**
 * The extension service build director.
 * Responsible for invoking all the steps
 * required to build an extension service.
 */
export interface IExtensonServiceBuilderDirector {

    constructExtensionService(builder: IExtensionServiceBuilder, services: ServiceRepositoryEntry[]): ExtensionService;
}

/**
 * This is the director not a constructor interface
 */
export class ExtensionServiceBuilderDirector implements IExtensonServiceBuilderDirector {

    /**
     * 
     * @param builder 
     */
    constructExtensionService(builder: IExtensionServiceBuilder, services: ServiceRepositoryEntry[]): ExtensionService {
        let serviceRepo = builder.buildServiceRepository(services);
        let serviceExecutor = builder.buildServiceExecutor(serviceRepo) as ReduxServiceObjectExecutor;
        let store = builder.buildStore(serviceExecutor);
        let extensionService = new ExtensionService(store);
        serviceExecutor.setStore(store);
        return extensionService;
    }
}

