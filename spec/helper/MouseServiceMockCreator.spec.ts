/// <reference path="../../typings/index.d.ts" />

import {Subject} from "rxjs/Subject";

import {MockCreator} from "./MockCreator.spec";
import {
    MouseService,
} from "../../src/Viewer";

export class MouseServiceMockCreator extends MockCreator {
    public createMock(): MouseService {
        let mock: MouseService = super.createMock(MouseService, "MouseService");

        this._mockProperty(mock, "active$", new Subject<boolean>());
        this._mockProperty(mock, "click$", new Subject<MouseEvent>());
        this._mockProperty(mock, "contextMenu$", new Subject<MouseEvent>());
        this._mockProperty(mock, "dblClick$", new Subject<MouseEvent>());
        this._mockProperty(mock, "mouseDown$", new Subject<MouseEvent>());
        this._mockProperty(mock, "mouseMove$", new Subject<MouseEvent>());
        this._mockProperty(mock, "mouseOut$", new Subject<MouseEvent>());
        this._mockProperty(mock, "mouseOver$", new Subject<MouseEvent>());
        this._mockProperty(mock, "mouseUp$", new Subject<MouseEvent>());
        this._mockProperty(mock, "staticClick$", new Subject<MouseEvent>());


        return mock;
    }
}

export default MouseServiceMockCreator;
