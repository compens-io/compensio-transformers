import { PullRequestAction } from "common";
import { GithubPullRequestTransformer } from "./pullRequest";

describe("Github PullRequest Transformer", () => {
    const transformer = new GithubPullRequestTransformer();

    function loadSampleData(name: string){
        return require(`../../../../sampleData/${name}.json`);
    }

    it("should transform issue opened event", () => {
        const event = loadSampleData("pr_opened");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(PullRequestAction.OPENED);
    });

    it("should transform issue closed event", () => {
        const event = loadSampleData("pr_closed");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(PullRequestAction.CLOSED);
    });

    it("should transform issue edited event", () => {
        const event = loadSampleData("pr_merged");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(PullRequestAction.MERGED);
    });
});