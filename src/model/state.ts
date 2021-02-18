import { ExtensionServiceConfig } from "./config";

export interface ExtensionState {
	extensionService: ExtensionServiceState;
};

export interface ExtensionServiceState {
	config: ExtensionServiceConfig;
};
