import { IIssueEvent, IssueAction, TransformerProviderType } from "compensio-common";
import { registerFactories } from "./registerFactories";
import { Transformer } from "./transformer";


function loadSampleData(name: string){
    return require(`../sampleData/${name}.json`);
}

describe("Transformer", () => {
    beforeAll(() => {
        registerFactories();
    })
    it("should transform an event", () => {
        const data = loadSampleData("issue_opened");
        const transformed = Transformer.transform(TransformerProviderType.GITHUB, data) as IIssueEvent;
        expect(transformed.id).toBe(data.issue.id);
        expect(transformed.action).toBe(IssueAction.OPENED)
    });
});