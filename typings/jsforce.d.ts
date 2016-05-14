declare module jsforce {

	/***********************
	 *      GENERICS
	 ***********************/

	 type Buffer = any;
	 type Stream = any;

	/***********************
	 *       GLOBALS
	 ***********************/

	interface SessionRefreshDelegate { (conn: Connection, refreshFn: Function): void; }

	interface ApprovalLayoutInfo {
		approvalLayouts: Object[]
	}

	interface Callback<T> { (err: string, response: T): any; }

	interface CompactLayoutInfo {
		compactLayouts: Object[];
		defaultCompactLayoutId: string;
		recordTypeCompactLayoutMappings: Object[];
	}

	interface DeletedRecordsInfo {
		earliestDateAvailable: string;
		latestDateAvaialable: string;
		deletedRecords: {
			id: string;
			deletedDate: string;
		};
	}

	interface PicklistValue {
		active: boolean;
		defaultValue: boolean;
		label: string;
		validFor: any;
		value: string;
	}

	interface DescribeFieldData {
		aggregatable: boolean;
		autoNumber : boolean;
		byteLength : number;
		calculated : boolean;
		calculatedFormula : string;
		cascadeDelete : boolean;
		caseSensitive : boolean;
		controllerName : string;
		createable : boolean;
		custom : boolean;
		defaultValue : any;
		defaultValueFormula : string;
		defaultedOnCreate : boolean;
		dependentPicklist : boolean;
		deprecatedAndHidden : boolean;
		digits : number;
		displayLocationInDecimal : boolean;
		encrypted : boolean;
		externalId : boolean;
		extraTypeInfo : string;
		filterable : boolean;
		filteredLookupInfo : string;
		groupable : boolean;
		highScaleNumber : boolean;
		htmlFormatted : boolean;
		idLookup : boolean;
		inlineHelpText : string;
		label : string;
		length : number;
		mask : string;
		maskType : string;
		name : string;
		nameField : boolean;
		namePointing : boolean;
		nillable : boolean;
		permissionable : boolean;
		picklistValues: PicklistValue[]
		precision : number;
		queryByDistance : boolean;
		referenceTargetField: string;
		referenceTo: {}[]
		relationshipName: string;
		relationshipOrder: number;
		restrictedDelete : boolean;
		restrictedPicklist : boolean;
		scale: number;
		soapType: string;
		sortable: boolean;
		type: string;
		unique : boolean;
		updateable : boolean;
		writeRequiresMasterRead : boolean;
	}

	interface SObjectChildRelationship {
		cascadeDelete: boolean;
		childSObject: string;
		depreciatedAndHidden: boolean;
		field: string;
		junctionIdListName: string;
		junctionReferenceTo: {}[];
		relationshipName: string;
		restrictDelete: boolean;
	}

	interface NamedLayoutInfo {

	}

	interface RecordTypeInfo {
		available: boolean;
		defaultRecordTypeMapping: boolean;
		master: boolean;
		name: string;
		recordTypeId: string;
		urls: {
			compactLayouts?: string;
			rowTemplate?: string;
			approvalLayouts?: string;
			uiDetailTemplate?: string;
			uiEditTemplate?: string;
			defaultValues?: string;
			listviews?: string;
			describe?: string;
			uiNewRecord?: string;
			quickActions?: string;
			layouts?: string;
			sobject?: string;
		}
	}

	interface DescribeSObjectData {
		actionOverrides: Object[];
		activatable: boolean;
		childRelationships: SObjectChildRelationship[];
		compactLayoutable: boolean;
		creatable: boolean;
		custom: boolean;
		customSetting: boolean;
		deletable: boolean;
		depreciatedAndHidden: boolean;
		feedEnabled: boolean;
		fields: DescribeFieldData[]
		keyPrefix: string;
		label: string;
		labelPlural: string;
		layoutable: boolean;
		listviewable: boolean;
		lookupLayoutable: boolean;
		mergeable: boolean;
		name: string;
		namedLayoutInfos: NamedLayoutInfo[];
		networkScopeFieldName: boolean;
		queryable: boolean;
		recordTypeInfos: RecordTypeInfo[];
		replicatable: boolean;
		retrievable: boolean;
		searchLayoutable: boolean;
		seachable: boolean;
		supportedScopes: {
			label: string;
			name: string;
		}[];
		triggerable: boolean;
		undeletable: boolean;
		updateable: boolean;
		urls: {
			compactLayouts?: string;
			rowTemplate?: string;
			approvalLayouts?: string;
			uiDetailTemplate?: string;
			uiEditTemplate?: string;
			defaultValues?: string;
			listviews?: string;
			describe?: string;
			uiNewRecord?: string;
			quickActions?: string;
			layouts?: string;
			sobject?: string;
		};
	}

	type DescribeSObjectResult = { (err: string, meta: DescribeSObjectData): any };

	type DescribeGlobalResult = {
		// TODO: Put actual fields here
	}

	interface LayoutInfo {
		layouts: Object[];
		recordTypeMappings: Object[];
	}

	type LimitsInfo = Object;

	interface PromiseCallback<T> {
		resolve: ResolvedCallback<T>;
		reject: RejectedCallback;
	}

	interface QueryResult<T> {
		done: boolean,
		totalSize: number,
		nextRecordsUrl?: string,
		records?: T[]
	}

	type Record = Object;

	function RecordFilterFunction(record: Record): boolean;

	function RecordMapFunction(record: Record): Record;

	interface RecordResult {
		id: string,
		success: boolean,
		errors: string[]
	}

	interface RejectedCallback { (reason: Error): any }

	interface ResolvedCallback<T> { (result: T): any }

	type TabsInfo = Object;

	type ThemeInfo = Object;

	interface TokenResponse {
		accessToken: string;
		refreshToken: string;
	}

	type UpdatedRecordsInfo = {
		latestDateCovered: string,
		ids: string[]
	}

	interface UserInfo {
		id: string;
		organizationId: string;
		url: string;
	}

	interface RecordMappingFunction { (record: Record): Record; }


	/***********************
	 *      ANALYTICS
	 ***********************/

	interface Analytics {

		new(conn: Connection): Analytics;

		report(id: string): Analytics.Report;

		reports(callback?: Callback<Analytics.ReportInfo[]>): Promise<Analytics.ReportInfo[]>;

	}

	export module Analytics {

		interface Report {

			new(conn: Connection): Report;

			describe(callback?: Callback<ReportMetadata>): Promise<ReportMetadata>;

			execute(options?: { details: boolean, metadata: boolean}, callback?: Callback<ReportResult>): Promise<ReportResult>;

			executeAsync(options?: { details: boolean, metadata: boolean}, callback?: Callback<ReportInstanceAttrs>): Promise<ReportInstanceAttrs>;

			explain(callback?: Callback<ExplainInfo>): Promise<ExplainInfo>;

			instance(id: string): ReportInstance;

			instances(callback?: Callback<ReportInstanceAttrs[]>): Promise<ReportInstanceAttrs[]>;

		}

		type ReportInfo = Object;

		type ExplainInfo = Object;

		type ReportInstance = Object;

		type ReportInstanceAttrs = Object;

		type ReportMetadata = Object;

		type ReportResult = Object;

	}


	/***********************
	 *        APEX
	 ***********************/

	interface Apex {

		new(conn: Connection): Apex;

		del(path: string, body?: Object, callback?: Callback<Object>): Promise<Object>;

		delete(path: string, body?: Object, callback?: Callback<Object>): Promise<Object>;

		get(path: string, callback?: Callback<Object>): Promise<Object>;

		patch(path: string, body?: Object, callback?: Callback<Object>): Promise<Object>;

		post(path: string, body?: Object, callback?: Callback<Object>): Promise<Object>;

		put(path: string, body?: Object, callback?: Callback<Object>): Promise<Object>;

	}


	/***********************
	 *        BULK
	 ***********************/

	interface Bulk {

		pollInterval: number;

		pollTimeout: number;

		new(conn: Connection): Bulk;

		createJob(type: string, operation: string, options?: Object): Bulk.Job;

		job(jobId: string): Bulk.Job;

		load(type: string, operation: string, options?: { extIdField?: string, concurrencyMode?: string }, input?: Record[] | Stream | string, callback?: Callback<RecordResult[] | Bulk.BatchResultInfo>): Bulk.Batch;

		query(soql: string): RecordStream.Parsable;

	}

	export module Bulk {

		interface Batch {

			new(job: Job, batchId?: string): Batch;

			check(callback?: Callback<BatchInfo>): Promise<BatchInfo>;

			execute(input?: Record | Stream | string, callback?: Callback<RecordResult | BatchResultInfo[]>): Batch;

			poll(interval: number, timeout: number);

			retrieve(callback?: Callback<RecordResult[] | BatchResultInfo[]>): Promise<RecordResult[] | BatchResultInfo[]>;

			then();

			thenCall();

		}

		interface Job {

			new(bulk: Bulk, type?: string, operation?: string, options?: { extFieldId?: string, concurrencyMode?: string }, jobId?: string): Job;

			abort(callback?: Callback<JobInfo>): Promise<JobInfo>;

			batch(batchId: string): Batch;

			check(callback?: Callback<JobInfo>): Promise<JobInfo>;

			close(callback?: Callback<JobInfo>): Promise<JobInfo>;

			createBatch(): Batch;

			info(callback?: Callback<JobInfo>): JobInfo;

			list(callback?: Callback<BatchInfo[]>): Promise<BatchInfo[]>;

			open(callback?: Callback<JobInfo>): Promise<JobInfo>;

		}

		interface BatchInfo {
			id: string;
			jobId: string;
			state: string;
			stateMessage: string;
		}

		interface BatchResultInfo {
			id: string;
			batchId: string;
			jobId: string;
		}

		interface JobInfo {
			id: string;
			object: string;
			operation: string;
			state: string;
		}

	}


	/***********************
	 *        CACHE
	 ***********************/

	interface Cache {

		new(): Cache;

		clear(key?: string): void;

		get(key?: string): Cache.CacheEntry;

		makeCacheable(fn: Function, scope?: Object, options?: Object): Function;

		makeResponseCacheable(fn: Function, scope?: Object, options?: Object): Function;

	}

	export module Cache {

		interface CacheEntry { (): void; }

	}


	/***********************
	 *      CHATTER
	 ***********************/

	interface Chatter {

		new(conn: Connection): Chatter;

		batch(callback?: Callback<Chatter.BatchRequestResult>): Promise<Chatter.BatchRequestResult>;

		request(params: Chatter.RequestParams, callback?: Callback<Chatter.RequestResult>): Chatter.Request;

		resource(url: string, queryParams?: Object): Chatter.Resource;

	}

	export module Chatter {

		interface Request extends Promise<Request> {

			new(chatter: Chatter, params: RequestParams): Request;

			batchParams(): BatchRequestParams;

			promise(): Promise<RequestResult>;

			stream(): Stream;

		}

		interface Resource extends Request {

			new(chatter: Chatter, url: string, queryParams?: Object): Resource;

			create(data: Object, callback?: Callback<RequestResult>): Request;

			del(callback?: Callback<RequestResult>): Request;

			delete(callback?: Callback<RequestResult>): Request;

			retrieve(callback?: Callback<RequestResult>): Request;

			update(data: Object, callback?: Callback<RequestResult>): Request;

		}

		interface BatchRequestParams {
			method: string;
			url: string;
			richInput?: string;
		}

		interface BatchRequestResult {
			hasError: boolean;
			results: {
				statusCode: number,
				result: RequestResult
			}[]
		}

		interface RequestParams {
			method: string;
			url: string;
			body: string;
		}

		interface RequestResult {
			hasError: boolean;
			result: {
				statusCode: number,
				result: RequestResult
			}
		}

	}


	/***********************
	 *     CONNECTION
	 ***********************/

	interface Connection {

		analytics: Analytics;
		apex: Apex;
		bulk: Bulk;
		cache: Cache;
		chatter: Chatter;
		metadata: Metadata;
		oauth2: OAuth2;
		process: Process;
		soapApi: SoapApi;
		streaming: Streaming;
		tooling: Tooling;

		new(params: Connection.ConnectionParams): Connection;

		create(type: string, records: Record | Record[], options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		del(type: string, ids: string | string[], options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		delete(type: string, ids: string | string[], options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		deleted(type: string, start: string | Date, end: string | Date, callback?: Callback<DeletedRecordsInfo>): Promise<DeletedRecordsInfo>;

		describe(type: string, callback?: DescribeSObjectResult): Promise<DescribeSObjectResult>;

		describeGlobal(callback?: DescribeGlobalResult): Promise<DescribeGlobalResult>;

		describeSObject(type: string, callback?: DescribeSObjectResult): Promise<DescribeSObjectResult>;

		destroy(type: string, ids: string | string[], options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		identity(callback?: Callback<Connection.IdentityInfo>): Promise<Connection.IdentityInfo>;

		initialize?(options: Connection.ConnectionParams): void;

		insert?(type: string, records: Record | Record[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		limits?(callback?: Callback<LimitsInfo>): Promise<LimitsInfo>;

		login?(username: string, password: string, callback?: Callback<UserInfo>): Promise<UserInfo>;

		loginByOAuth2?(username: string, password: string, callback?: Callback<UserInfo>): Promise<UserInfo>;

		loginBySoap?(username: string, password: string, callback?: Callback<UserInfo>): Promise<UserInfo>;

		logout?(callback?: Callback<void>): void;

		logoutByOAuth2?(callback?: Callback<void>): void;

		logoutBySoap?(callback?: Callback<void>): void;

		query?(query: string, callback?: Callback<QueryResult<any>>): Query<QueryResult<any>>;

		queryAll?(query: string, callback?: Callback<QueryResult<any>>): Query<QueryResult<any>>;

		queryMore?(locator: string, callback?: Callback<QueryResult<any>>): Query<QueryResult<any>>;

		quickAction(actionName: string): QuickAction;

		quickActions(callback?: () => any): Promise<QuickAction[]>;

		recent(type, limit, callback): Promise<RecordResult[]>;

		request?(request: Connection.ConnectionRequest, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;void;

		requestGet?(url: string, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;

		requestPost?(url: string, body: {[key: string]: any}, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;

		requestPut?(url: string, body: {[key: string]: any}, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;

		requestPatch?(url: string, body: {[key: string]: any}, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;

		requestDelete?(url: string, options: Connection.HttpApiOptions, callback?: (object: {[key: string]: any}) => any): Promise<{[key: string]: any}>;

		retrieve(type: string, ids: string[], options?: {[key: string]: any}, callback?: Callback<Record | Record[]>): Promise<Record | Record[]>;

		search(sosl: string, callack?: RecordResult[]): Promise<RecordResult[]>;

		sobject(type: string): SObject;

		tabs(callback?: Callback<TabsInfo>): Promise<TabsInfo>;

		theme(callback?: Callback<ThemeInfo>): Promise<ThemeInfo>;

		update(type: string, records: Record | Record[], options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		updated(type: string, start: string | Date, end: string | Date, callback?: Callback<UpdatedRecordsInfo>): Promise<UpdatedRecordsInfo>;

		upsert(type: string, records: Record | Record[], extIdField: string, options?: {[key: string]: any}, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

	}

	export module Connection {

		type IdentityInfo = Object;

		interface ConnectionParams {

			oauth2?: OAuth2 | OAuth2.ConfigOptions;

			logLevel?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';

			version?: string;

			maxRequest?: number;

			loginUrl?: string;

			instanceUrl?: string;

			serverUrl?: string;

			accessToken?: string;

			sessionId?: string;

			refreshToken?: string;

			signedRequest?: string | Object;

			proxyUrl?: string;

			callOptions?: Object;

		}

		type ConnectionRequest = string | {
			method: string,
			url: string,
			headers?: {[key: string]: any}
		}

		type HttpApiOptions = {
			responseType?: string,
			transport?: string,
			noContentResoponse?: string
		}

	}

	interface ExecOptions {
		autoFetch?: boolean,
		maxFetch?: number,
		scanAll?: boolean
	}

	interface IncludeOptions {
		limit?: number,
		offset?: number,
		skip?: number
	}


	/***********************
	 *      HTTPAPI
	 ***********************/

	interface HttpApi {

		SessionRefreshDelegate: jsforce.SessionRefreshDelegate;

		new(conn: Connection, options?: { responseType?: string, transport?: Transport, noContentResponse?: Object }): HttpApi;

		beforeSend();

		getError();

		getRefreshDelegate();

		getResponseBody();

		getResponseContentType();

		hasErrorInResponseBody();

		isErrorResponse();

		isSessionExpired();

		parseError();

		request(request: { url: string, method: string, headers?: Object }, callback?: Callback<Object>): Promise<Object>;

	}


	interface ListView {

	}

	export module ListView {

		interface ListViewsInfo {
			done: boolean;
			listviews: ListView[];
			nextRecordsUrl: string;
			size: number;
			sobjectType: string;
		}

	}


	/***********************
	 *       METADATA
	 ***********************/

	interface Metadata {

		pollInterval: number;

		pollTimeout: number;

		new(conn: Connection): Metadata;

		checkDeployStatus(id: string, includeDetails?: boolean, callback?: Callback<Metadata.DeployResult>): Promise<Metadata.DeployResult>;

		checkRetrieveStatus(id: string, callback?: Callback<Metadata.RetrieveResult>): Promise<Metadata.RetrieveResult>;

		checkStatus(ids: string | string[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		create(type: string, metadata: Metadata.MetadataInfo, callback?: Callback<Metadata.SaveResult | Metadata.SaveResult[]>): Promise<Metadata.SaveResult | Metadata.SaveResult[]>;

		createAsync(type: string, metadata: Metadata.MetadataInfo, callback?: Callback<Metadata.SaveResult | Metadata.SaveResult[]>): Metadata.AsyncResultLocator;

		createSync(type: string, metadata: Metadata.MetadataInfo, callback?: Callback<Metadata.SaveResult | Metadata.SaveResult[]>): Promise<Metadata.SaveResult | Metadata.SaveResult[]>;

		del(type: string, metadata: string | Metadata.MetadataInfo | string[] | Metadata.MetadataInfo[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		delete(type: string, metadata: string |  string[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		deleteAsync(type: string, metadata: string | Metadata.MetadataInfo | string[] | Metadata.MetadataInfo[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		deleteSync(type: string, metadata: string |  string[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		deploy(zipInput: Stream | Buffer | string, options: Metadata.DeployOptions, callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.DeployResultLocator;

		describe(version?: string, callback?: Callback<Metadata.DescribeMetadataResult>): Promise<Metadata.DescribeMetadataResult>;

		list(queries: Metadata.MetadataListQuery | Metadata.MetadataListQuery[], version?: string, callback?: (result: Metadata.FileProperties[]) => any)

		read(type: string, fullNames: string | string[], callback?: Callback<Metadata.MetadataInfo | Metadata.MetadataInfo[]>): Promise<Metadata.MetadataInfo | Metadata.MetadataInfo[]>;

		readSync(type: string, fullNames: string | string[], callback?: Callback<Metadata.MetadataInfo | Metadata.MetadataInfo[]>): Promise<Metadata.MetadataInfo | Metadata.MetadataInfo[]>;

		rename(type: string, oldFullName: string, newFullName: string, callback?: Callback<Metadata.SaveResult>): Promise<Metadata.SaveResult>;

		retrieve(request: Metadata.RetrieveRequest, callback?: Callback<Metadata.AsyncResult>): Metadata.RetrieveResultLocator;

		update(type: string, updateMetadata: Metadata.MetadataInfo | Metadata.MetadataInfo[], callback?: Callback<Metadata.SaveResult | Metadata.SaveResult[]>): Promise<Metadata.SaveResult | Metadata.SaveResult[]>;

		updateAsync(type: string, updateMetadata: Metadata.UpdateMetadataInfo | Metadata.UpdateMetadataInfo[], callback?: Callback<Metadata.AsyncResult | Metadata.AsyncResult[]>): Metadata.AsyncResultLocator;

		updateSync(type: string, updateMetadata: Metadata.MetadataInfo | Metadata.MetadataInfo[], callback?: Callback<Metadata.SaveResult | Metadata.SaveResult[]>): Promise<Metadata.SaveResult | Metadata.SaveResult[]>;

		upsert(type: string, metadata: Metadata.MetadataInfo | Metadata.MetadataInfo[], callback?: Callback<Metadata.UpsertResult | Metadata.UpsertResult[]>): Promise<Metadata.UpsertResult | Metadata.UpsertResult[]>;

		upsertSync(type: string, metadata: Metadata.MetadataInfo | Metadata.MetadataInfo[], callback?: Callback<Metadata.UpsertResult | Metadata.UpsertResult[]>): Promise<Metadata.UpsertResult | Metadata.UpsertResult[]>;

	}

	export module Metadata {

		interface UpsertResult {
			success: boolean;
			fullName: string;
			created: boolean;
		}

		interface UpdateMetadataInfo {
			currentName: string;
			metadata: MetadataInfo;
		}

		interface RetrieveResultLocator {
			meta: Metadata;
			result: Promise<AsyncResult>;
			check(callback?: Callback<AsyncResult | AsyncResult[]>): Promise<AsyncResult | AsyncResult[]>;
			complete(callback?: Callback<AsyncResult>): Promise<AsyncResult>;
			poll(interval: number, timeout: number);
			then(any: any): any;
			thenCall(any: any): any;
		}

		type RetrieveRequest = Object;

		interface MetadataListQuery {
			type: string;
			folder?: string;
		}

		interface DescribeMetadataResult {
			metadataObjects: {
				childXmlNames: string[],
				directoryName: string,
				inFolder: boolean,
				metaFile: boolean,
				suffix: string,
				xmlName: string
			}[];
			orginizationNamespace: string;
			partialSaveAllowed: boolean;
			testRequired: boolean;
		}

		interface DeployResultLocator {
			meta: Metadata;
			result: Promise<AsyncResult>;
			check(callback?: Callback<AsyncResult | AsyncResult[]>): Promise<AsyncResult | AsyncResult[]>;
			complete(callback?: Callback<DeployResult>): Promise<DeployResult>;
			poll(interval: number, timeout: number);
			then(any: any): any;
			thenCall(any: any): any;
		}

		interface DeployOptions {
			allowMissingFiles?: boolean;
			autoUpdatePackage?: boolean;
			checkOnly?: boolean;
			ignoreWarnings?: boolean;
			performRetrieve?: boolean;
			purgeOnDelete?: boolean;
			rollbackOnError?: boolean;
			runAllTests?: boolean;
			runTests?: string[];
			singlePackage?: boolean;
		}

		interface MetadataInfo {
			fullName: string;
		}

		interface SaveResult {
			success: boolean;
			fullName: string;
		}

		interface AsyncResult {
			done: boolean;
			id: string;
			state: string;
			statusCode?: string;
			message?: string;
		}

		interface AsyncResultLocator {
			meta: Metadata;
			results: Promise<AsyncResult | AsyncResult[]>;
			isArray?: boolean;
			check(callback?: Callback<AsyncResult | AsyncResult[]>): Promise<AsyncResult | AsyncResult[]>;
			complete(callback?: Callback<AsyncResult | AsyncResult[]>): Promise<AsyncResult | AsyncResult[]>;
			poll(interval: number, timeout: number);
			then(any: any): any;
			thenCall(any: any): any;
		}

		interface DeployResult {
			id: string;
			checkOnly: boolean;
			completeDate: string;
			createdDate: string;
			details?: Object[];
			done: boolean;
			errorMessage?: string;
			errorStatusCode?: string;
			ignoreWarnings?: boolean;
			LastModifiedDate: string;
			numberComponentErrors: number;
			numberComponentsDeployed: number;
			numberComponentsTotal: number;
			numberTestErrors: number;
			numberTestsCompleted: number;
			numberTestsTotal: number;
			rollbackOnError?: boolean;
			startDate: string;
			status: string;
			success: boolean;
		}

		interface RetrieveResult {
			fileProperties: FileProperties[],
			id: string,
			messages: Object[],
			zipFile: string
		}

		interface FileProperties {
			type: string,
			createdById: string,
			createdByName: string,
			createdDate: Date,
			fileName: string,
			fullName: string,
			id: string,
			lastModifiedById: string,
			lastModifiedByName: string,
			lastModifiedDate: Date,
			manageableState?: string,
			namespacePrefix?: string
		}

	}


	/***********************
	 *       OAUTH2
	 ***********************/

	interface OAuth2 {

		new(options: OAuth2.ConfigOptions): OAuth2;

		authenticate(username: string, password: string, callback?: Callback<TokenResponse>): Promise<TokenResponse>;

		getAuthorizationUrl(params: {scope: string, state: string}): string;

		refreshToken(refreshToken: string, callback?: Callback<TokenResponse>): Promise<TokenResponse>;

		requestToken(code: string, callback?: Callback<TokenResponse>): Promise<TokenResponse>;

		revokeToken(accessToken: string, callback?: () => any): void;

	}

	export module OAuth2 {

		interface ConfigOptions {
			loginUrl?: string;
			authzServiceUrl?: string;
			tokenServiceUrl?: string;
			clientId: string;
			clientSecret: string;
			redirectUri: string;
		}

	}


	/***********************
	 *       PROCESS
	 ***********************/

	interface Process {

	}

	interface Promise<T> {

		new(callback?: Promise.PromiseCallback<T>): Promise<T>;

		all(promises: Promise<any>[] | any[]): Promise<any[]>;

		defer(): Promise.Deferred;

		reject(reason: Error): Promise<T>;

		resolve(result: any): Promise<T>;

		catch(onRejected: Promise.RejectedCallback<T>): Promise<T>;

		fail(onRejected: Promise.RejectedCallback<T>): Promise<T>;

		then(onFulfilled?: Promise.FulfilledCallback<T, T>, onRejected?: Promise.RejectedCallback<T>): Promise<T | T>

		thenCall(callback?: Callback<T>): Promise<T>;

	}

	export module Promise {

		interface PromiseCallback<T> {

		}

		interface FulfilledCallback<T, T2> {

		}

		interface RejectedCallback<T> {

		}

		interface Deferred {

		}

	}


	/***********************
	 *        QUERY
	 ***********************/

	interface Query<T> {

		new(conn: Connection, config: {[key: string]: any} | string, locator?: string): Query<T>;

		autoFetch(autoFetch: boolean): Query<T>;

		del(type: string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		delete(type: string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		destroy(type: string, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;

		exec(options: ExecOptions, callback?: () => any): Query<T>;

		execute(options: ExecOptions, callback?: () => any): Query<T>;

		explain(callback?: () => any): Promise<Object>;

		include(childRelName: string, conditions: Object | string, fields: Object | string[] | string, options: IncludeOptions): Query.SubQuery;

		limit(limit: number): Query<T>;

		maxFetch(maxFetch: number): Query<T>;

		offset(offset: number): Query<T>;

		on();

		run(options?: ExecOptions, callback?: () => any): Query<T>;

		scanAll(scanAll: boolean): Query<T>;

		select(fields: Object | string[] | string): Query<T>;

		setResponseTarget(responseTarget: string): Query<T>;

		sort(sort: string | Object, direction: string | number): Query<T>;

		// TODO: Replace these "any's" with the actual types
		then(onFulfilled?: any, onRejected?: any): Promise<any>;

		thenCall(callack?: () => any): Query<T>;

		toSOQL(callback?: () => any): Promise<string>;

		update(mapping: Record | RecordMappingFunction, type: string, callback?: Callback<Record[]>): Promise<Record[]>;

		where(conditions: Object | string): Query<T>;

	}

	export module Query {

		interface SubQuery {

		}

	}


	interface RecordReference {

	}


	/***********************
	 *     RECORDSTREAM
	 ***********************/

	interface RecordStream {

	}

	export module RecordStream {

		interface Parsable {

		}

	}


	/***********************
	 *     QUICKACTION
	 ***********************/

	interface QuickAction {

	}


	/***********************
	 *        SOAP
	 ***********************/

	interface SOAP extends HttpApi {

		new(conn: Connection, options: { endpointUrl: string, xmlns?: string }): SOAP;

		beforeSend();

		getResponseBody();

		invoke(method: string, args: Object, schema?: Object, callback?: Callback<Object>): Promise<Object>;

		isSessionExpired();

		parseError();

	}


	/***********************
	 *      SOAPAPI
	 ***********************/

	interface SoapApi {

	}


	/***********************
	 *      STREAMING
	 ***********************/

	interface Streaming {

	}


	/***********************
	 *       TOOLING
	 ***********************/

	interface Tooling {

		new(conn: Connection): Tooling;

		completions(type?: string, callback?: Callback<Tooling.CompletionsResult>): Promise<Tooling.CompletionsResult>;

		create(type: string, records: Record | Record[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		del(type: string, ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		delete(type: string, ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		describe(type: string, callback?: DescribeSObjectResult): Promise<DescribeSObjectResult>;

		describeGlobal(callback?: DescribeGlobalResult): Promise<DescribeGlobalResult>;

		describeSObject(type: string, callback?: DescribeSObjectResult): Promise<DescribeSObjectResult>;

		destroy(type: string, ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		executeAnonymous(body: string, callback?: Callback<Tooling.ExecuteAnonymousResult>): Promise<Tooling.ExecuteAnonymousResult>;

		initialize();

		insert(type: string, records: Object | Object[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		query(locator: string, callback?: Callback<QueryResult<any>>): QueryResult<any>;

		queryMore(type: string, ids: string | string[], callback?: Callback<Record | Record[]>): Promise<Record | Record[]>;

		runTestsAsynchronous(classids: string[], callback?: Callback<Tooling.ExecuteAnonymousResult>): Promise<Tooling.ExecuteAnonymousResult>;

		sobject(type: string): SObject;

		update(type: string, records: Record | Record[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		upsert(type: string, records: Record | Record[], extFieldId: string, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

	}

	export module Tooling {

		interface CompletionsResult {
			publicDeclarations: Object;
		}

		interface ExecuteAnonymousResult {
			compiled: boolean;
			compileProblem: string;
			success: boolean;
			line: number;
			column: number;
			exceptionMessage: string;
			exceptionStackMessage: string;
		}

	}


	/***********************
	 *      TRANSPORT
	 ***********************/

	interface Transport {

	}

	var SfDate : {

		parseDate(str: string): Date;

		toDateLiteral(data: string | number | Date): SfDate;

		toDateTimeLieral(date: string | number | Date): SfDate;



	}

	interface SfDate {

		new(): SfDate;

		toString(): string;

		toJson(): JSON;

	}


	/***********************
	 *      SFRESULT
	 ***********************/

	interface SFResult {

		redirect?(callback?: () => void): void;

	}

	interface SObject {

		Id: string;
		Name?: string;
		CreatedById?: string;
		CreatedDate?: string;
		IsDeleted?: boolean;
		LastModifiedById?: string;
		LastModifiedDate?: Date;
		LastReferencedDate?: Date;
		LastViewedDate?: Date;
		SystemModstamp?: Date;

		new(): SObject;

		approvalLayouts(callback?: Callback<ApprovalLayoutInfo>): Promise<ApprovalLayoutInfo>;

		bulkload(operation: string, options?: { extIdField: string }, input?: Record[] | Stream | string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		compactLayouts(callback?: Callback<CompactLayoutInfo>): Promise<CompactLayoutInfo>;

		count(conditions?: Object | string, callback?: Callback<number>): Query<number>;

		create(records: Record | Record[], options?: Object, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		createBulk(input?: Record[] | Stream | string, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;

		del(ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		delete(ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		deleteBulk(input?: Record[] | Stream | string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		deleted(start: string | Date, end: string | Date, callback?: Callback<DeletedRecordsInfo>): Promise<DeletedRecordsInfo>;

		deleteHardBulk(input?: Record[] | Stream | string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		describe(callback?: DescribeSObjectResult): Promise<DescribeSObjectResult>;

		destroy(ids: string | string[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		destroyBulk(input?: Record | Stream | string, callback?: Callback<RecordResult | RecordResult[]>): Bulk.Batch;

		destroyHardBulk(input?: Record | Stream | string, callback?: Callback<RecordResult | RecordResult[]>): Bulk.Batch;

		find(conditions?: Object | string, fields?: Object | string[] | string, options?: { limits: number, offset: number, skip: number }, callback?: Callback<Record[]>): Query<Record[]>;

		insert(records: Record | Record[], callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		insertBulk(input: Record[] | Stream | string, callback?: Callback<RecordResult[]>): Bulk.Batch;

		layouts(layoutName?: string, callback?: Callback<LayoutInfo>): Promise<LayoutInfo>;

		listview(id: string): ListView;

		listviews(callback?: Callback<ListView.ListViewsInfo>): Promise<ListView.ListViewsInfo>;

		quickAction(actionName: string): QuickAction;

		recent(callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;

		record(id: string): RecordReference;

		retrieve(ids: string | string[], options?: Object, callback?: Callback<Record | Record[]>): Promise<Record | Record[]>;

		select(fields?: Object | string[] | string, callback?: Callback<Record[]>): Query<Record[]>;

		update(records: Record | Record[], options?: Object, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		updateBulk(input?: Record[] | Stream | String, callback?: Callback<RecordResult[]>): Bulk.Batch;

		updated(start: string | Date, end: string | Date, callback?: Callback<UpdatedRecordsInfo>): Promise<UpdatedRecordsInfo>;

		upsert(records: Record | Record[], extIdField: string, options?: Object, callback?: Callback<RecordResult | RecordResult[]>): Promise<RecordResult | RecordResult[]>;

		upsertBulk(input?: Record[] | Stream | String, extIdField?: string, callback?: Callback<RecordResult[]>): Bulk.Batch;

	}

	export module SObject {

	}

	interface JSForce {

		Analytics: Analytics;
		Apex: Apex;
		Bulk: Bulk;
		Cache: Cache;
		Chatter: Chatter;
		Connection: Connection;
		HttpApi: HttpApi;
		ListView: ListView; // TODO
		Metadata: Metadata;
		OAuth2: OAuth2;
		Process: Process;
		Promise: Promise<any>;
		Query: Query<any>;
		RecordStream: RecordStream; // TODO
		QuickAction: QuickAction; // TODO
		SOAP: SOAP;
		SoapApi: SoapApi; // TODO
		SObject: SObject;
		Stream: Stream; // TODO
		Streaming: Streaming; // TODO
		Tooling: Tooling;
		Transport: Transport; // TODO
		SfDate: SfDate;
		SFResult: SFResult;
	}

}

declare module "jsforce" {
	var jsforce: jsforce.JSForce;
	export = jsforce;
}
