import { GithubTransformerFactory } from "./providers/github/transformerFactory";
import { TransformerProvider } from "./providers/providers";
import { TransformerFactory } from "./transformerFactory";


export function registerFactories() {
    TransformerFactory.register(TransformerProvider.GITHUB, new GithubTransformerFactory());
}