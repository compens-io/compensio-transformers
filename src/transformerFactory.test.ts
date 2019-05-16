import { TransformerProviderType } from "compensio-common";
import { IEventTransformer } from "./contracts/eventTransformer";
import { GithubIssueTransformer } from "./providers/github/transformers/issue";
import { GithubPullRequestTransformer } from "./providers/github/transformers/pullRequest";
import { registerFactories } from "./registerFactories";
import { TransformerFactory } from "./transformerFactory";

function loadSampleData(name: string){
    return require(`../sampleData/${name}.json`);
}

describe("Transformer Factory tests", () => {

    beforeAll(() => {
        registerFactories();
    })

    describe("Github Provider", () => {
        function testGetTransformer(events: string[], transformerClass: any) {
            for (const event of events) {
                const data = loadSampleData(event);
                const transformer: IEventTransformer = TransformerFactory.getTransformer(TransformerProviderType.GITHUB, data);
                expect(transformer).toBeInstanceOf(transformerClass);
            }
        }

        it("should create issue transformer", () => {
            testGetTransformer(["issue_closed", "issue_opened", "issue_edited"], GithubIssueTransformer);
        });

        it("should create pull request transformer", () => {
            testGetTransformer(["pr_closed", "pr_merged", "pr_opened"], GithubPullRequestTransformer);
        });

        it("should throw error for unregistered transformer", () => {
            const data = loadSampleData("issue_opened");
            expect(() => TransformerFactory.getTransformer(TransformerProviderType.NONE, data)).toThrowError();
        });
    });
});