import { IssueAction } from "compensio-common";
import { GithubIssueTransformer } from "./issue";

describe("Github Issue Transformer", () => {
    const transformer = new GithubIssueTransformer();

    function loadSampleData(name: string){
        return require(`../../../../sampleData/${name}.json`);
    }

    it("should transform issue opened event", () => {
        const event = loadSampleData("issue_opened");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(IssueAction.OPENED);
    });

    it("should transform issue closed event", () => {
        const event = loadSampleData("issue_closed");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(IssueAction.CLOSED);
    });

    it("should transform issue edited event", () => {
        const event = loadSampleData("issue_edited");
        const transformed = transformer.transform(event);
        expect(transformed.action).toBe(IssueAction.EDITED);
    });
});