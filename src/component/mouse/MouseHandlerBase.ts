import {
    Component,
    IComponentConfiguration,
} from "../../Component";
import {ViewportCoords} from "../../Geo";
import {
    Container,
    Navigator,
} from "../../Viewer";

export abstract class MouseHandlerBase<TConfiguration extends IComponentConfiguration> {
    protected _component: Component<TConfiguration>;
    protected _container: Container;
    protected _navigator: Navigator;
    protected _viewportCoords: ViewportCoords;

    protected _enabled: boolean;

    constructor(component: Component<TConfiguration>, container: Container, navigator: Navigator, viewportCoords: ViewportCoords) {
        this._component = component;
        this._container = container;
        this._navigator = navigator;
        this._viewportCoords = viewportCoords;

        this._enabled = false;
    }

    /**
     * Returns a Boolean indicating whether the interaction is enabled.
     *
     * @returns {boolean} `true` if the interaction is enabled.
     */
    public get isEnabled(): boolean {
        return this._enabled;
    }

    /**
     * Enables the interaction.
     *
     * @example ```mouseComponent.<handler-name>.enable();```
     */
    public enable(): void {
        if (this._enabled || !this._component.activated) { return; }

        this._enable();
        this._enabled = true;

        this._component.configure(this._getConfiguration(true));
    }

    /**
     * Disables the interaction.
     *
     * @example ```mouseComponent.<handler-name>.disable();```
     */
    public disable(): void {
        if (!this._enabled) { return; }

        this._disable();
        this._enabled = false;

        if (this._component.activated) {
            this._component.configure(this._getConfiguration(false));
        }
    }

    protected abstract _enable(): void;

    protected abstract _disable(): void;

    protected abstract _getConfiguration(enable: boolean): TConfiguration;
}

export default MouseHandlerBase;
