
declare module ClayModel {
  export interface Record {

  }

  export interface Model {
    /**
     * Set up the model and its attributes. This is required for every model, 
     * and should be called before anything else is.
     */
    setup(modelName: string, ...attributes): any;

    /**
     * Bind event listeners to the model. These are executed in the context 
     * of the model.
     */
    bind(eventName: string, fn: Function): void;

    /**
     * Trigger a custom event, see events for more information.
     */
    trigger(eventName: string, ...data): void;

    /**
     * Unbind events, see the events guide for more information.
     */
    unbind(eventName?: string, fn?: Function): void;

    /**
     * Find records by ID - returning the record instance. If the record doesn't 
     * exist, @notFound will be run unless a custom callback was also passed in.
     */
    find(id: string, notFound?: Function): Record;

    /**
     * Returns a boolean indicating if the record with the specified ID exists 
     * or not.
     */
    exists(id: string): boolean;

    /**
     * Appends to all the stored records, without calling any create, update, 
     * save or destroy events. The only event that will be triggered is the 
     * refresh event. You can pass the option {clear: true} to wipe all the 
     * existing records. Internally @refresh calls fromJSON(), so you can 
     * also pass it JSON instead of an array.
     */
    refresh(recordsArray: Array<Record>, options?: Object): void;

    /**
     * Select all records that the callback function returns true to.
     */
    select(fn: Function): void;

    /**
     * Find the first record that has the given attribute & value.
     */
    findByAttribute(name: string, value: any): Record;

    /**
     * Find all records that have the given attribute & value.
     */
    findAllByAttribute(name: string, value: any): Record[];

    /**
     * Iterate over every record, passing it to the callback function.
     */
    each(callback: (record: Record) => {}): void;

    /**
     * Returns a cloned copy of every instance.
     */
    all(): Record[];

    /**
     * Returns a cloned copies of instances from begin up to but not including end.
     */
    slice(begin: number, end?: number): Record[];

    /**
     * Returns a cloned copy of the first record. or an array of the first x records
     */
    first(x?: number): Record | Record[];

    /**
     * Returns a cloned copy of the last record, or an array of the last x records
     */
    last(x?: number): Record | Record[];

    /**
     * Returns the count of total records.
     */
    count(): number;

    /**
     * Deletes every record without triggering any events.
     */
    deleteAll(): void;

    /**
     * Destroys every record, triggering a destroy event on every record.
     */
    destroyAll(options: Object): void;

    /**
     * Updates the record with the matching ID, with the given attributes.
     */
    update(id: string, ...attributes: any[]): void;

    /**
     * Creates a new record with the given attributes. Returns false if 
     * the record's validation fails, or the newly created record if successful.
     */
    create(...attributes: any[]): Promise<boolean | Record>;

    /**
     * Destroys the record with the given ID.
     */
    destroy(id: string, options: Object): void;

    /**
     * Utility function so the model has a valid JSON representation (shows all records).
     */
    toJSON(): JSON;

    /**
     * Pass a JSON string, representing either an array or a singleton, to @fromJSON().
     * Returns an array or unsaved model instances.
     */
    fromJSON(json: JSON): Record[];

    /**
     * Wrap a function in a proxy so it will always execute in the context of the model. 
     * This is a JavaScript compatibility feature, and shouldn't be used in CoffeeScript.
     */
    proxy(fn: Function): any;

    /**
     * Alternative method for creating a new model class. This is a JavaScript 
     * compatibility feature, and shouldn't be used in CoffeeScript.
     */
    setup(name: string, ...attributes: any[]): any;
  }
}

declare module "clay-model" {
  var Model: ClayModel.Model;
  export = Model;  
}