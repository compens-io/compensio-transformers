import { IEvent } from "./event";

export enum IssueAction {
    OPENED = "opened",
    EDITED = "edited",
    DELETED = "deleted",
    TRANSFERRED = "transferred",
    PINNED = "pinned",
    UNPINNED = "unpinned",
    CLOSED = "closed",
    REOPENED = "reopened",
    ASSIGNED = "assigned",
    UNASSIGNED = "unassigned",
    LABELED = "labeled",
    UNLABELED = "unlabeled",
    LOCKED = "locked",
    UNLOCKED = "unlocked",
    MILESTONED = "milestoned",
    DEMILESTONED = "demilestoned",
}

export interface IIssueEvent extends IEvent {
    action: IssueAction
}