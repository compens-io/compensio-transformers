import { IEventTransformer } from "./contracts/transformers/eventTransformer";
import { TransformerProvider } from "./providers/providers";
import { ProviderTransformerFactory } from "./providers/transformerFactory";

export class TransformerFactory {

    public static getTransformer(provider: TransformerProvider, event: any): IEventTransformer {
        const providerFactory = TransformerFactory.registry.get(provider);
        const transformer = providerFactory && providerFactory.getTransformer(event);
        if (!transformer) {
            throw new Error("Don't have that transformer");
        } else {
            return transformer;
        }
    }

    public static register(provider: TransformerProvider, factory: ProviderTransformerFactory) {
        if (!TransformerFactory.registry) {
            TransformerFactory.registry = new Map<TransformerProvider, ProviderTransformerFactory>();
        }
        TransformerFactory.registry.set(provider, factory);
    }

    private static registry: Map<TransformerProvider, ProviderTransformerFactory>;
}