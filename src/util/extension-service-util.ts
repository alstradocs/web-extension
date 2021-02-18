import { ServiceRepositoryEntry } from "@alstradocs/service-objects";
import { IExtensionServiceBuilder, IExtensonServiceBuilderDirector } from "../extension";

export class ExtensionServiceUtil {

    /**
     * 
     * @param id 
     * @param serviceRepository 
     */
    public static constructExtensionService(
        builder: IExtensionServiceBuilder, 
        director: IExtensonServiceBuilderDirector, 
        services: ServiceRepositoryEntry[]) 
    {
        return director.constructExtensionService(builder, services)
    }

}