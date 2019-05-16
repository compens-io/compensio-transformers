import { EventType } from "compensio-common";
import { IEventTransformer } from "../../contracts/eventTransformer";
import { ProviderTransformerFactory } from "../transformerFactory";
import { GithubIssueTransformer } from "./transformers/issue";
import { GithubPullRequestTransformer } from "./transformers/pullRequest";


export class GithubTransformerFactory extends ProviderTransformerFactory {
    public getEventType(event: any): EventType {
        if (event.issue) {
            return EventType.ISSUE;
        }
        else if (event.pull_request) {
            return EventType.PULL_REQUEST;
        }
    }
    public transformers(): Map<EventType, IEventTransformer> {
        return new Map<EventType, IEventTransformer>([
            [EventType.ISSUE, new GithubIssueTransformer()],
            [EventType.PULL_REQUEST, new GithubPullRequestTransformer()]
        ])
    }
}