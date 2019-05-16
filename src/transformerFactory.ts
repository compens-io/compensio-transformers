import { TransformerProviderType } from "compensio-common";
import { IEventTransformer } from "./contracts/eventTransformer";
import { ProviderTransformerFactory } from "./providers/transformerFactory";

export class TransformerFactory {

    public static getTransformer(provider: TransformerProviderType, event: any): IEventTransformer {
        const providerFactory = TransformerFactory.registry.get(provider);
        const transformer = providerFactory && providerFactory.getTransformer(event);
        if (!transformer) {
            throw new Error("Don't have that transformer");
        } else {
            return transformer;
        }
    }

    public static register(provider: TransformerProviderType, factory: ProviderTransformerFactory) {
        if (!TransformerFactory.registry) {
            TransformerFactory.registry = new Map<TransformerProviderType, ProviderTransformerFactory>();
        }
        TransformerFactory.registry.set(provider, factory);
    }

    private static registry: Map<TransformerProviderType, ProviderTransformerFactory>;
}