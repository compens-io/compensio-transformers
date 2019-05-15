import { IEvent } from "./event";

export enum PullRequestAction {
    ASSIGNED = "assigned",
    UNASSIGNED = "unassigned",
    REVIEW_REQUESTED = "review_requested",
    REVIEW_REQUEST_REMOVED = "review_request_removed",
    LABELED = "labeled",
    UNLABELED = "unlabeled",
    OPENED = "opened",
    EDITED = "edited",
    CLOSED = "closed",
    READY_FOR_REVIEW = "ready_for_review",
    LOCKED = "locked",
    UNLOCKED = "unlocked",
    REOPENED = "reopened",
    MERGED = "merged"
}

export interface IPullRequestEvent extends IEvent {
    action: PullRequestAction;
}