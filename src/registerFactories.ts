import { TransformerProviderType } from "compensio-common";
import { GithubTransformerFactory } from "./providers/github/transformerFactory";
import { TransformerFactory } from "./transformerFactory";


export function registerFactories() {
    TransformerFactory.register(TransformerProviderType.GITHUB, new GithubTransformerFactory());
}