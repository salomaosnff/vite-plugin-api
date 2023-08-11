declare module 'virtual:swagger/core' {
  export interface ApiRequest {
    url: URL;
    method: string;
    body?: any;
  }
  export interface ApiResponse<T> {
    status: number;
    data: T;
    headers: Headers;
  }
}
declare module 'swagger:petshop' {
  import { ApiRequest, ApiResponse } from 'virtual:swagger/core';
  export namespace Models {
    export type Order = {
      id?: number;
      petId?: number;
      quantity?: number;
      shipDate?: string;
      status?: 'placed' | 'approved' | 'delivered';
      complete?: undefined;
    };
    export type Customer = { id?: number; username?: string; address?: Models.Address[] };
    export type Address = { street?: string; city?: string; state?: string; zip?: string };
    export type Category = { id?: number; name?: string };
    export type User = {
      id?: number;
      username?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      phone?: string;
      userStatus?: number;
    };
    export type Tag = { id?: number; name?: string };
    export type Pet = {
      id?: number;
      name?: string;
      category?: Models.Category;
      photoUrls?: string[];
      tags?: Models.Tag[];
      status?: 'available' | 'pending' | 'sold';
    };
    export type ApiResponse = { code?: number; type?: string; message?: string };
  }

  export namespace Services {
    export class Pet {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * Update an existing pet by Id
       *
       * @endpoint /pet
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns {Models.Pet} 200 Successful operation
       */
      updatePet(body: Models.Pet): Promise<ApiResponse<Models.Pet>>;
      /**
       * Update an existing pet by Id
       *
       * @endpoint /pet
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/pet/updatePet
       * @returns {Models.Pet} 200 Successful operation
       */
      updatePet(body: URLSearchParams): Promise<ApiResponse<Models.Pet>>;

      /**
       * Add a new pet to the store
       *
       * @endpoint /pet
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns {Models.Pet} 200 Successful operation
       */
      addPet(body: Models.Pet): Promise<ApiResponse<Models.Pet>>;
      /**
       * Add a new pet to the store
       *
       * @endpoint /pet
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/addPet
       * @returns {Models.Pet} 200 Successful operation
       */
      addPet(body: URLSearchParams): Promise<ApiResponse<Models.Pet>>;

      /**
       * Multiple status values can be provided with comma separated strings
       *
       * @endpoint /pet/findByStatus
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByStatus
       * @returns {Models.Pet[]} 200 successful operation
       */
      findPetsByStatus(query: { status?: 'available' | 'pending' | 'sold' }): Promise<ApiResponse<Models.Pet[]>>;

      /**
       * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
       *
       * @endpoint /pet/findByTags
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/findPetsByTags
       * @returns {Models.Pet[]} 200 successful operation
       */
      findPetsByTags(query: { tags?: string[] }): Promise<ApiResponse<Models.Pet[]>>;

      /**
       * Returns a single pet
       *
       * @endpoint /pet/{petId}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/pet/getPetById
       * @returns {Models.Pet} 200 successful operation
       */
      getPetById(params: { petId: number }): Promise<ApiResponse<Models.Pet>>;

      /**
       * @endpoint /pet/{petId}
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/updatePetWithForm
       */
      updatePetWithForm(
        params: {
          petId: number;
        },
        query: {
          name?: string;
          status?: string;
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /pet/{petId}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/pet/deletePet
       */
      deletePet(params: { api_key?: string; petId: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /pet/{petId}/uploadImage
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/pet/uploadFile
       * @returns {Models.ApiResponse} 200 successful operation
       */
      uploadFile(
        params: {
          petId: number;
        },
        query: {
          additionalMetadata?: string;
        },
      ): Promise<ApiResponse<Models.ApiResponse>>;
    }
    export class Store {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * Returns a map of status codes to quantities
       *
       * @endpoint /store/inventory
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/store/getInventory
       * @returns {{}} 200 successful operation
       */
      getInventory(): Promise<ApiResponse<{}>>;

      /**
       * Place a new order in the store
       *
       * @endpoint /store/order
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns {Models.Order} 200 successful operation
       */
      placeOrder(body: Models.Order): Promise<ApiResponse<Models.Order>>;
      /**
       * Place a new order in the store
       *
       * @endpoint /store/order
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/store/placeOrder
       * @returns {Models.Order} 200 successful operation
       */
      placeOrder(body: URLSearchParams): Promise<ApiResponse<Models.Order>>;

      /**
       * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
       *
       * @endpoint /store/order/{orderId}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/store/getOrderById
       * @returns {Models.Order} 200 successful operation
       */
      getOrderById(params: { orderId: number }): Promise<ApiResponse<Models.Order>>;

      /**
       * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
       *
       * @endpoint /store/order/{orderId}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/store/deleteOrder
       */
      deleteOrder(params: { orderId: number }): Promise<ApiResponse<void>>;
    }
    export class User {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns {Models.User} NaN successful operation
       */
      createUser(body: Models.User): Promise<ApiResponse<Models.User>>;
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUser
       * @returns {Models.User} NaN successful operation
       */
      createUser(body: URLSearchParams): Promise<ApiResponse<Models.User>>;

      /**
       * Creates list of users with given input array
       *
       * @endpoint /user/createWithList
       * @method POST
       *
       * @see https://petstore3.swagger.io/#/user/createUsersWithListInput
       * @returns {Models.User} 200 Successful operation
       */
      createUsersWithListInput(body: Models.User[]): Promise<ApiResponse<Models.User>>;

      /**
       * @endpoint /user/login
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/loginUser
       * @returns {string} 200 successful operation
       */
      loginUser(query: { username?: string; password?: string }): Promise<ApiResponse<string>>;

      /**
       * @endpoint /user/logout
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/logoutUser
       */
      logoutUser(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /user/{username}
       * @method GET
       *
       * @see https://petstore3.swagger.io/#/user/getUserByName
       * @returns {Models.User} 200 successful operation
       */
      getUserByName(params: { username: string }): Promise<ApiResponse<Models.User>>;

      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       */
      updateUser(
        params: {
          username: string;
        },
        body: Models.User,
      ): Promise<ApiResponse<void>>;
      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method PUT
       *
       * @see https://petstore3.swagger.io/#/user/updateUser
       */
      updateUser(
        params: {
          username: string;
        },
        body: URLSearchParams,
      ): Promise<ApiResponse<void>>;

      /**
       * This can only be done by the logged in user.
       *
       * @endpoint /user/{username}
       * @method DELETE
       *
       * @see https://petstore3.swagger.io/#/user/deleteUser
       */
      deleteUser(params: { username: string }): Promise<ApiResponse<void>>;
    }
  }
}
declare module 'swagger:erp' {
  import { ApiRequest, ApiResponse } from 'virtual:swagger/core';
  export namespace Models {
    export type AbcCurve = 1 | 2 | 3;
    export type AcidentType = 1 | 2 | 3;
    export type Activity = {
      objectId?: number;
      name?: string;
      businessUnitId?: number;
      departmentId?: number;
      status?: Models.ActivityStatus;
      id?: number;
    };
    export type ActivityStatus = 1 | 2 | 3 | 4 | 5;
    export type ActivityType = 1 | 2 | 3 | 4 | 5;
    export type AnalysisStatus = 1 | 2 | 3 | 4 | 5;
    export type AuthorizationStatus = 1 | 2 | 3;
    export type BankSendStatus = 1 | 2 | 3 | 4;
    export type BankTransaction = {
      companyId?: number;
      date?: string;
      operationId?: number;
      bankAccountId?: number;
      travelId?: number;
      paymentMethod?: Models.PaymentMethod;
      documentId?: number;
      documentNumber?: string;
      receivableId?: number;
      payableId?: number;
      personId?: number;
      objectId?: number;
      departmentId?: number;
      bankStatementItemId?: number;
      activityId?: number;
      bankReturningItemId?: number;
      amount?: number;
      note?: string;
      historic?: string;
      bankTransactionStatus?: Models.BankTransactionStatus;
      bankSendStatus?: Models.BankSendStatus;
      id?: number;
    };
    export type BankTransactionStatus = 1 | 2;
    export type BeepPalletMethod = { palletTag?: string; userId?: number; accountId?: number };
    export type BeepTagMethod = { tag?: string; productionOrderId?: number };
    export type BrillProductImport = {
      brillSettingId?: number;
      productId?: number;
      quantity?: number;
      brillProductImportDates?: Models.BrillProductImportDate[];
      id?: number;
    };
    export type BrillProductImportDate = {
      brillProductImportId?: number;
      date?: string;
      compositionUpdated?: undefined;
      formulationDate?: string;
      shake?: number;
      totalVitaminKg?: number;
      quantityShakeMix?: number;
      mixerKg?: number;
      brillProductImportObjects?: Models.BrillProductImportObject[];
      id?: number;
    };
    export type BrillProductImportObject = {
      brillProductImportDateId?: number;
      objectId?: number;
      quantity?: number;
      macroQuantity?: number;
      microQuantity?: number;
      id?: number;
    };
    export type BrillSetting = { accountId?: number; businessUnitId?: number; alternativeCode?: string; id?: number };
    export type BrillSettingObject = {
      brillSettingId?: number;
      objectId?: number;
      maximumQuantity?: number;
      id?: number;
    };
    export type BusinessUnit = {
      name?: string;
      level?: number;
      parentId?: number;
      photo?: string;
      brand?: string;
      assigneeId?: number;
      currency?: Models.Currency;
      language?: Models.Language;
      blockedDate?: string;
      type?: Models.BusinessUnitType;
      children?: Models.BusinessUnit[];
      id?: number;
    };
    export type BusinessUnitType = 1 | 2;
    export type BusinessUnitTypeHttp = 1 | 2;
    export type ChangeOrderPosition = 1 | 2 | 3;
    export type Company = {
      accountId?: number;
      administrator?: string;
      administratorCpf?: string;
      accounting?: string;
      accountingCpf?: string;
      accountingCrc?: string;
      accountingEmail?: string;
      chartOfAccountId?: number;
      code?: number;
      taxRegime?: Models.TaxRegime;
      nfeStatus?: Models.NfeStatus;
      mdfeStatus?: Models.NfeStatus;
      cteStatus?: Models.NfeStatus;
      spedCompanyProfile?: Models.SpedCompanyProfile;
      spedActivity?: Models.SpedActivity;
      spedClassification?: Models.SpedClassification;
      enableManifestation?: undefined;
      discountNfe?: undefined;
      manifestationLastNumber?: number;
      personId?: number;
      headOfficeId?: number;
      accountStateId?: number;
      accountCityId?: number;
      branches?: Models.Company[];
      children?: Models.Company[];
      companyBusinessUnits?: Models.CompanyBusinessUnit[];
      mdfeSettings?: Models.MdfeSetting[];
      nfeSettings?: Models.NfeSetting[];
      nfseSettings?: Models.NfseSetting[];
      stateRegistrationSubstitutes?: Models.StateRegistrationSubstitute[];
      name?: string;
      level?: number;
      parentId?: number;
      priority?: number;
      hasChildren?: undefined;
      order?: string;
      id?: number;
    };
    export type CompanyBusinessUnit = {
      companyId?: number;
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type CountType = 1 | 2;
    export type CreateProductionMapMethod = { productionScheduleId?: number; date?: string };
    export type Currency = 1 | 2;
    export type CustomerStatus = 1 | 2 | 3 | 4 | 5 | 8;
    export type DamageObject = {
      damageReasonId?: number;
      objectId?: number;
      businessUnitId?: number;
      departmentId?: number;
      productionTagId?: number;
      userId?: number;
      date?: string;
      reprocessObjectId?: number;
      id?: number;
    };
    export type DamageObjectMethod = {
      userId?: number;
      damageReasonId?: number;
      productionTagId?: number;
      objectId?: number;
    };
    export type DamageReason = {
      accountId?: number;
      companyId?: number;
      company?: Models.Company;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      departmentId?: number;
      reason?: string;
      id?: number;
    };
    export type Decision = 1 | 2 | 3;
    export type Department = {
      name?: string;
      level?: number;
      parentId?: number;
      type?: Models.DepartmentType;
      hasTeam?: undefined;
      hasBusinessUnit?: undefined;
      businessUnitDepartmentId?: number;
      children?: Models.Department[];
      businessUnitId?: number;
      id?: number;
    };
    export type DepartmentHttp = {
      name?: string;
      parentId?: number;
      type?: Models.DepartmentTypeHttp;
      children?: Models.DepartmentHttp[];
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type DepartmentType = 1 | 2;
    export type DepartmentTypeHttp = 1 | 2;
    export type DuplicateProductionSettingMethod = { id?: number; businessUnitId?: number };
    export type Entity = { id?: number };
    export type FeedOrder = {
      businessUnitId?: number;
      businessUnitFactoryId?: number;
      date?: string;
      notes?: string;
      status?: Models.FeedStatus;
      feedOrderObjects?: Models.FeedOrderObject[];
      id?: number;
    };
    export type FeedOrderObject = {
      objectId?: number;
      measureUnitId?: number;
      productCompositionNameId?: number;
      feedOrderId?: number;
      quantity?: number;
      price?: number;
      id?: number;
    };
    export type FeedStatus = 1 | 2 | 3 | 4;
    export type FreightType = 1 | 2;
    export type FrequencyType = 1 | 2 | 3 | 4;
    export type FuelStatus = 1 | 2;
    export type FuelTransaction = {
      date?: string;
      quantity?: number;
      vehicleId?: number;
      operationId?: number;
      driverId?: number;
      purchaseId?: number;
      meter?: number;
      objectId?: number;
      notes?: string;
      status?: Models.FuelStatus;
      businessUnitId?: number;
      departmentId?: number;
      travelId?: number;
      supllierId?: number;
      fuelId?: number;
      price?: number;
      internal?: undefined;
      external?: undefined;
      pos?: string;
      amount?: number;
      id?: number;
    };
    export type FulfillmentStatus = 1 | 2 | 3 | 4;
    export type Function = 1 | 2;
    export type Gender = 1 | 2;
    export type GenericChangeOrder = { id?: number; targetId?: number; position?: Models.ChangeOrderPosition };
    export type ImportType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    export type IndustryType = 1 | 2 | 3;
    export type Inventory = {
      accountId?: number;
      companyId?: number;
      businessUnitId?: number;
      departmentId?: number;
      operationId?: number;
      stockSettingId?: number;
      date?: string;
      inventoryStatus?: Models.InventoryStatus;
      countType?: Models.CountType;
      quantityCount?: Models.QuantityCount;
      itemsQuantity?: number;
      managerId?: number;
      groups?: Models.InventoryGroupSelected[];
      members?: Models.InventoryMember[];
      hasInventoryObjects?: undefined;
      id?: number;
    };
    export type InventoryCount = {
      inventoryId?: number;
      count?: number;
      memberId?: number;
      quantity?: number;
      status?: Models.InventoryStatus;
      inventoryObjects?: Models.InventoryObject[];
      id?: number;
    };
    export type InventoryGroupSelected = { inventoryId?: number; groupId?: number; id?: number };
    export type InventoryMember = { inventoryId?: number; memberId?: number; function?: Models.Function; id?: number };
    export type InventoryObject = {
      inventoryId?: number;
      inventoryCountId?: number;
      countDate?: string;
      objectId?: number;
      lotId?: number;
      stockQuantity?: number;
      quantity?: number;
      adjustedQuantity?: number;
      price?: number;
      adjust?: undefined;
      measureUnitId?: number;
      reCount?: undefined;
      stockLocationId?: number;
      id?: number;
    };
    export type InventoryObjectMethod = {
      inventoryObjectId?: number;
      quantity?: number;
      tag?: string;
      inventoryCountId?: number;
    };
    export type InventoryPatch = {
      companyId?: number;
      businessUnitId?: number;
      departmentId?: number;
      operationId?: number;
      date?: string;
      inventoryStatus?: Models.InventoryStatus;
      itemsQuantity?: number;
      countType?: Models.CountType;
      members?: Models.InventoryMember[];
      groups?: Models.InventoryGroupSelected[];
      id?: number;
    };
    export type InventoryStatus = 1 | 2 | 3;
    export type IotType = 1;
    export type Language = 1 | 2;
    export type MaintenanceCenterBusinessUnit = { businessUnitId?: number; id?: number };
    export type MaintenanceCenterDepartment = {
      wareHouseId?: number;
      departmentId?: number;
      teamId?: number;
      maintenanceCenterBusinessUnitId?: number;
      type?: Models.MaintenanceType;
      kanbanServiceOrderId?: number;
      kanbanServiceOrderServiceId?: number;
      id?: number;
    };
    export type MaintenanceCenterServiceGroup = {
      maintenanceCenterDepartmentId?: number;
      serviceGroupId?: number;
      id?: number;
    };
    export type MaintenanceGroup = { accountId?: number; name?: string; serviceId?: number; id?: number };
    export type MaintenanceGroupDepartment = {
      maintenanceGroupId?: number;
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type MaintenancePlan = { accountId?: number; companyId?: number; date?: string; id?: number };
    export type MaintenancePlanBusinessUnit = { maintenancePlanId?: number; businessUnitId?: number; id?: number };
    export type MaintenancePlanDepartment = {
      maintenancePlanBusinessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type MaintenancePlanEquipment = {
      maintenancePlanDepartmentId?: number;
      equipmentId?: number;
      servicesQuantity?: number;
      id?: number;
    };
    export type MaintenancePlanService_ = {
      maintenancePlanEquipmentId?: number;
      serviceId?: number;
      date?: string;
      maintainerId?: number;
      startDate?: string;
      endDate?: string;
      status?: Models.MaintenancePlanServiceStatus;
      id?: number;
    };
    export type MaintenancePlanServiceStatus = 1 | 2 | 3 | 4 | 5;
    export type MaintenanceSchedule = { accountId?: number; businessUnitId?: number; date?: string; id?: number };
    export type MaintenanceScheduleGroup = {
      maintenanceScheduleId?: number;
      maintainerId?: number;
      maintenanceGroupId?: number;
      id?: number;
    };
    export type MaintenanceService = { accountId?: number; name?: string; id?: number };
    export type MaintenanceSetting = { name?: string; maintenanceServiceId?: number; id?: number };
    export type MaintenanceSettingService_ = {
      maintenanceSettingId?: number;
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type MaintenanceType = 1 | 2 | 3;
    export type Manufacturing = {
      accountId?: number;
      date?: string;
      operationId?: number;
      businessUnitId?: number;
      departmentId?: number;
      documentId?: number;
      status?: Models.ProductionStatus;
      id?: number;
    };
    export type MdfeSetting = { companyId?: number; manifestSerie?: number; nextNumber?: number; id?: number };
    export type MeasureType = 1 | 2 | 3 | 4 | 5;
    export type MeasureUnit = { name?: string; abreviation?: string; measureType?: Models.MeasureType; id?: number };
    export type MeetRequisitionMethod = { app?: undefined; id?: number };
    export type MeterType = 1 | 2 | 3;
    export type NameEntity = { name?: string; id?: number };
    export type NfeSetting = { companyId?: number; nextNumber?: number; id?: number };
    export type NfesStatus = 1 | 2 | 3 | 4 | 5 | 6;
    export type NfeStatus = 1 | 2;
    export type NfseSetting = { companyId?: number; nextNumber?: number; id?: number };
    export type Object_ = {
      accountId?: number;
      name?: string;
      description?: string;
      type?: Models.ObjectType;
      groupType?: Models.ObjectGroupType;
      photo?: string;
      ncmId?: number;
      appropriationMonth?: number;
      alternativeCode?: string;
      cnaeId?: number;
      cost?: undefined;
      sale?: undefined;
      purchase?: undefined;
      stock?: undefined;
      isTire?: undefined;
      saleAccountingId?: number;
      brandId?: number;
      purchaseAccountingId?: number;
      stockAccountingId?: number;
      costAccountingId?: number;
      iotControl?: undefined;
      iotType?: Models.IotType;
      activityType?: Models.ActivityType;
      tagIssue?: undefined;
      activityControl?: undefined;
      productInPallet?: number;
      unitOperatingCost?: number;
      level?: number;
      parentId?: number;
      hierarchy?: string;
      priority?: number;
      path?: string;
      order?: string;
      hasChildren?: undefined;
      hasGroupChildren?: undefined;
      tariffValue?: number;
      expirationDays?: number;
      id?: number;
    };
    export type ObjectGroupType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    export type ObjectLot = {
      objectId?: number;
      name?: string;
      manufacturingDate?: string;
      expirationDate?: string;
      createdDate?: string;
      productionOrderId?: number;
      stockQuantity?: number;
      id?: number;
    };
    export type ObjectMeasureUnit = {
      objectId?: number;
      measureUnitId?: number;
      rate?: number;
      saleUnit?: undefined;
      purchaseUnit?: undefined;
      stockUnit?: undefined;
      volumeUnit?: undefined;
      ean?: number;
      netWeight?: number;
      grossWeight?: number;
      id?: number;
    };
    export type ObjectType = 1 | 2;
    export type Operation = {
      name?: string;
      type?: Models.OperationType;
      linkedId?: number;
      key?: string;
      transitStockControl?: undefined;
      accountingBasisCash?: undefined;
      accountingBasisAccrual?: undefined;
      object?: undefined;
      objectDestiny?: undefined;
      stockEntry?: undefined;
      activity?: undefined;
      bank?: undefined;
      bankDestiny?: undefined;
      departmentDestiny?: undefined;
      salesApp?: undefined;
      whereShow?: Models.WhereShow;
      operationKey?: string;
      category?: Models.OperationCategory;
      stockControl?: undefined;
      payableReceivable?: undefined;
      nfe?: undefined;
      advance?: undefined;
      commission?: undefined;
      thirdStock?: undefined;
      pricing?: undefined;
      children?: Models.Operation[];
      hasAccountingSettings?: undefined;
      id?: number;
    };
    export type OperationCategory = 1 | 2 | 3 | 4;
    export type OperationType = 1 | 2 | 3;
    export type Payable = {
      accountId?: number;
      purchaseId?: number;
      purchase?: Models.Purchase;
      purchaseOrderId?: number;
      purchaseOrder?: Models.PurchaseOrder;
      tableSource?: string;
      sourceId?: number;
      supplierId?: number;
      supplier?: Models.Person;
      companyId?: number;
      company?: Models.Company;
      number?: string;
      date?: string;
      advance?: undefined;
      amount?: number;
      balance?: number;
      scheduledBalance?: number;
      advanceBalance?: number;
      status?: Models.PayableStatus;
      paymentMethod?: Models.PaymentMethod;
      notes?: string;
      cashFlowDate?: string;
      payableTransactions?: Models.PayableTransaction[];
      bankTransactions?: Models.BankTransaction[];
      isAutoGenerated?: undefined;
      plusDiscount?: number;
      id?: number;
    };
    export type PayableStatus = 1 | 2 | 3;
    export type PayableTransaction = {
      payableId?: number;
      tableSource?: string;
      sourceId?: number;
      date?: string;
      operationId?: number;
      financeTypeId?: number;
      payableTransactionOriginId?: number;
      amount?: number;
      scheduledAmount?: number;
      bankAccountId?: number;
      dueDate?: string;
      note?: string;
      id?: number;
    };
    export type PaymentMethod = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    export type Person = {
      accountId?: number;
      legalName?: string;
      tradeName?: string;
      personType?: Models.PersonType;
      cnpj?: string;
      initials?: string;
      photo?: string;
      cpf?: string;
      rg?: string;
      stateRegistration?: string;
      alternativeCode?: string;
      stateIndicator?: Models.StateIndicator;
      cityRegistration?: string;
      idNumber?: string;
      gender?: Models.Gender;
      dateOfBirth?: string;
      monthersName?: string;
      cnae?: string;
      taxRegimeCode?: Models.TaxRegimeCode;
      inss?: string;
      rntrc?: string;
      salesAreaId?: number;
      customerIndustryId?: number;
      supplierIndustryId?: number;
      groupId?: number;
      bankAccountId?: number;
      industryType?: Models.IndustryType;
      abcCurve?: Models.AbcCurve;
      customerStatus?: Models.CustomerStatus;
      finalConsumer?: undefined;
      simplesNacional?: undefined;
      taxSubstitute?: undefined;
      foreignCustomer?: undefined;
      retainPisCofinsCssl?: undefined;
      retainIrrf?: undefined;
      retainInss?: undefined;
      retainIss?: undefined;
      issRate?: number;
      suframaNumber?: string;
      userId?: number;
      pricingId?: number;
      deliveryAddressId?: number;
      mainAddressId?: number;
      limitSugestion?: number;
      isCustomer?: undefined;
      isSupplier?: undefined;
      isSalesMan?: undefined;
      isCompany?: undefined;
      isDriver?: undefined;
      salesManId?: number;
      companyId?: number;
      parentId?: number;
      id?: number;
    };
    export type PersonType = 1 | 2;
    export type PreventiveMaintenanceHistory = {
      activityId?: number;
      preventiveMaintenanceServiceId?: number;
      serviceId?: number;
      meter?: number;
      date?: string;
      nextMeter?: number;
      nextDate?: string;
      serviceCreated?: undefined;
      meterType?: Models.MeterType;
      kmRemaining?: number;
      daysRemaining?: number;
      serviceOrder?: Models.ServiceOrder;
      id?: number;
    };
    export type PreventiveMaintenanceObject = { accountId?: number; objectId?: number; typeId?: number; id?: number };
    export type PreventiveMaintenanceService = {
      preventiveMaintenanceObjectId?: number;
      serviceId?: number;
      frequencyType?: Models.FrequencyType;
      frequency?: number;
      estimatedTime?: number;
      frequencyMonthly?: number;
      id?: number;
    };
    export type PreventiveMaintenanceToDo = {
      preventiveMaintenanceServiceId?: number;
      toDo?: string;
      instructions?: string;
      id?: number;
    };
    export type PrintTagMethod = { productionTagId?: number; productionOrderId?: number; productionId?: number };
    export type ProductBusinessUnitComposition = { accountId?: number; businessUnitId?: number; id?: number };
    export type ProductComposition = {
      productCompositionDateId?: number;
      objectId?: number;
      measureUnitId?: number;
      quantity?: number;
      id?: number;
    };
    export type ProductCompositionDate = {
      productionSettingProductId?: number;
      productCompositionNameId?: number;
      date?: string;
      quantity?: number;
      productQuantity?: number;
      id?: number;
    };
    export type ProductCompositionName = {
      productionSettingProductId?: number;
      name?: string;
      default?: undefined;
      status?: Models.StatusCompositions;
      id?: number;
    };
    export type Production = {
      productionOrderId?: number;
      palletTag?: string;
      printed?: undefined;
      beep?: undefined;
      order?: number;
      status?: Models.ProductionMapStatus;
      analysisStatus?: Models.AnalysisStatus;
      startTime?: string;
      endTime?: string;
      objects?: Models.ProductionObject[];
      tags?: Models.ProductionTag[];
      qualityAnalysisId?: number;
      id?: number;
    };
    export type ProductionList = { productionIds?: number[] };
    export type ProductionMap = {
      accountId?: number;
      businessUnitId?: number;
      dateTime?: string;
      status?: Models.ProductionStatus;
      massBalance?: number;
      id?: number;
    };
    export type ProductionMapDepartment = { productionMapId?: number; departmentId?: number; id?: number };
    export type ProductionMapStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export type ProductionMethod = {
      accountId?: number;
      productionId?: number;
      palletTag?: string;
      startTime?: string;
      endTime?: string;
      quantity?: number;
    };
    export type ProductionObject = {
      productionId?: number;
      productionType?: Models.ProductionType;
      lotId?: number;
      objectLot?: Models.ObjectLot;
      objectId?: number;
      quantityComposition?: number;
      quantity?: number;
      id?: number;
    };
    export type ProductionOrder = {
      productionMapDepartmentId?: number;
      manufacturingId?: number;
      objectLotId?: number;
      productId?: number;
      compositionDateId?: number;
      quantity?: number;
      status?: Models.ProductionStatus;
      order?: number;
      productions?: Models.Production[];
      productionTags?: Models.ProductionTag[];
      id?: number;
    };
    export type ProductionOrderGet = {
      productionMapDepartmentId?: number;
      productId?: number;
      product?: Models.NameEntity;
      manufacturingId?: number;
      productName?: string;
      productMeasureUnitName?: string;
      objectLotId?: number;
      objectLot?: Models.NameEntity;
      productInPallet?: number;
      productTagIssue?: undefined;
      compositionDateId?: number;
      productCompositionDate?: Models.NameEntity;
      quantity?: number;
      balance?: number;
      status?: Models.ProductionStatus;
      statusName?: string;
      stockMovementId?: number;
      stockMovementStatus?: Models.StockMovementStatus;
      order?: number;
      beepQuantity?: number;
      number?: number;
      printed?: undefined;
      printedPallet?: undefined;
      productionStatus?: Models.ProductionMapStatus;
      productionCount?: number;
      productionBeepedCount?: number;
      producedQuantity?: number;
      id?: number;
    };
    export type ProductionOrderGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.ProductionOrderGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: undefined;
    };
    export type ProductionOrderObject = {
      productionOrderId?: number;
      objectId?: number;
      businessUnitId?: number;
      quantityComposition?: number;
      quantity?: number;
      analysisStatus?: Models.AnalysisStatus;
      status?: Models.ProductionOrderObjectStatus;
      id?: number;
    };
    export type ProductionOrderObjectStatus = 1 | 2 | 3 | 4 | 5;
    export type ProductionPlan = {
      accountId?: number;
      companyId?: number;
      date?: string;
      status?: Models.ProductionPlanStatus;
      productionPlanObjectConsumptions?: Models.ProductionPlanObjectConsumption[];
      id?: number;
    };
    export type ProductionPlanFactory = {
      productionPlanId?: number;
      factoryId?: number;
      departmentId?: number;
      capacity?: number;
      products?: Models.ProductionPlanProduct[];
      id?: number;
    };
    export type ProductionPlanObjectConsumption = {
      productionPlanId?: number;
      objectId?: number;
      measureUnitId?: number;
      quantity?: number;
      id?: number;
    };
    export type ProductionPlanProduct = {
      productionPlanFactoryId?: number;
      productId?: number;
      stockBalance?: number;
      stockMinimum?: number;
      salesGoal?: number;
      salesGoalDaily?: number;
      quantity?: number;
      quantityPlanned?: number;
      finalBalance?: number;
      id?: number;
    };
    export type ProductionPlanSetting = {
      productionPlanSettingBusinessUnitId?: number;
      productId?: number;
      minimumDays?: number;
      maximumDays?: number;
      factoryId?: number;
      transferOriginId?: number;
      id?: number;
    };
    export type ProductionPlanSettingBusinessUnit = { businessUnitId?: number; id?: number };
    export type ProductionPlanStatus = 1 | 2 | 3;
    export type ProductionSchedule = {
      businessUnitId?: number;
      productionPlanId?: number;
      date?: string;
      status?: Models.ProductionScheduleStatus;
      id?: number;
    };
    export type ProductionScheduleDepartment = {
      productionScheduleId?: number;
      departmentId?: number;
      sundayWorkTime?: number;
      mondayWorkTime?: number;
      tuesdayWorkTime?: number;
      wednesdayWorkTime?: number;
      fridayWorkTime?: number;
      saturdayWorkTime?: number;
      thursdayWorkTime?: number;
      products?: Models.ProductionScheduleProduct[];
      id?: number;
    };
    export type ProductionScheduleObjectConsumption = {
      productionScheduleProductId?: number;
      objectId?: number;
      measureUnitId?: number;
      quantity?: number;
      id?: number;
    };
    export type ProductionScheduleProduct = {
      productionScheduleId?: number;
      productId?: number;
      departmentId?: number;
      initialBalance?: number;
      dailyGoal?: number;
      weekSuggestion?: number;
      weekQuantity?: number;
      salesOrders?: number;
      invoiced?: number;
      days?: Models.ProductionScheduleProductDay[];
      productionScheduleObjectConsumptions?: Models.ProductionScheduleObjectConsumption[];
      id?: number;
    };
    export type ProductionScheduleProductDay = {
      productionScheduleProductId?: number;
      date?: string;
      scheduled?: number;
      projectedBalance?: number;
      id?: number;
    };
    export type ProductionScheduleProductDayPatch = { scheduled?: number };
    export type ProductionScheduleStatus = 1 | 2 | 3;
    export type ProductionSetting = {
      productionSettingBusinessUnitId?: number;
      departmentId?: number;
      capacity?: number;
      wmsType?: Models.WmsType;
      productionSettingType?: Models.ProductionSettingType;
      products?: Models.ProductionSettingProduct[];
      id?: number;
    };
    export type ProductionSettingBusinessUnit = {
      accountId?: number;
      businessUnitId?: number;
      productionSettings?: Models.ProductionSetting[];
      id?: number;
    };
    export type ProductionSettingFactory = {
      productionSettingId?: number;
      productTypeId?: number;
      factoryId?: number;
      id?: number;
    };
    export type ProductionSettingProduct = {
      productionSettingId?: number;
      order?: number;
      productId?: number;
      capacity?: number;
      minimumLot?: number;
      maximumLot?: number;
      minimumStock?: number;
      maximumStock?: number;
      id?: number;
    };
    export type ProductionSettingSetup = {
      productionSettingId?: number;
      productBeforeId?: number;
      productAfterId?: number;
      duration?: number;
      id?: number;
    };
    export type ProductionSettingType = 1 | 2;
    export type ProductionStatus = 1 | 2 | 3;
    export type ProductionStop = {
      productionOrderId?: number;
      startDate?: string;
      endDate?: string;
      stopTypeId?: number;
      equipmentId?: number;
      id?: number;
    };
    export type ProductionTag = {
      productionOrderId?: number;
      productionId?: number;
      order?: number;
      tag?: string;
      beep?: undefined;
      createdDate?: string;
      date?: string;
      printed?: undefined;
      objectLotId?: number;
      id?: number;
    };
    export type ProductionTagGet = {
      productionOrderId?: number;
      productionId?: number;
      tag?: string;
      beep?: undefined;
      createdDate?: string;
      date?: string;
      printed?: undefined;
      order?: number;
      objectLotId?: number;
      id?: number;
    };
    export type ProductionTagGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.ProductionTagGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: undefined;
    };
    export type ProductionType = 1 | 2;
    export type ProductReplacement = {
      businessUnitId?: number;
      departmentId?: number;
      date?: string;
      customerId?: number;
      invoiceId?: number;
      objectId?: number;
      measureUnitId?: number;
      quantity?: number;
      amount?: number;
      balance?: number;
      amountReimbursed?: number;
      notes?: string;
      status?: Models.ProductReplacementStatus;
      id?: number;
    };
    export type ProductReplacementInvoice = {
      productReplacementId?: number;
      date?: string;
      invoiceId?: number;
      objectId?: number;
      discountedAmount?: number;
      id?: number;
    };
    export type ProductReplacementMethod = { salesOrderId?: number };
    export type ProductReplacementStatus = 1 | 2;
    export type Purchase = {
      accountId?: number;
      operationId?: number;
      businessUnitId?: number;
      companyId?: number;
      date?: string;
      issueDate?: string;
      supplierId?: number;
      documentId?: number;
      documentNumber?: string;
      serviceCityId?: number;
      serviceCityDestinyId?: number;
      nfeKey?: string;
      paymentMethod?: Models.PaymentMethod;
      whereShow?: Models.WhereShow;
      termId?: number;
      freightType?: Models.FreightType;
      freightAmount?: number;
      description?: string;
      approvedBy?: number;
      createdBy?: number;
      tireShipmentId?: number;
      approvedDate?: string;
      statusNFE?: Models.NfesStatus;
      authorizationStatus?: Models.AuthorizationStatus;
      purchaseStatus?: Models.PurchaseStatus;
      purchaseObjects?: Models.PurchaseObject[];
      fuelTransactions?: Models.FuelTransaction[];
      payables?: Models.Payable[];
      purchaseAggregations?: Models.PurchaseAgregation[];
      notes?: string;
      amount?: number;
      totalAmount?: number;
      taxAmount?: number;
      income?: number;
      discount?: number;
      devolution?: undefined;
      bookKeepingStatus?: undefined;
      bookKeepingNotes?: string;
      specie?: string;
      volume?: number;
      id?: number;
    };
    export type PurchaseAgregation = {
      purchaseId?: number;
      documentId?: number;
      type?: Models.PurchaseType;
      id?: number;
    };
    export type PurchaseObject = {
      purchaseId?: number;
      purchaseOrderObjectId?: number;
      objectId?: number;
      object?: Models.Object_;
      discrimination?: string;
      measureUnitId?: number;
      measureUnit?: Models.MeasureUnit;
      serviceOrderId?: number;
      serviceOrder?: Models.ServiceOrder;
      departmentId?: number;
      activityId?: number;
      activity?: Models.Activity;
      quantity?: number;
      quantityReceipt?: number;
      price?: number;
      amount?: number;
      amountNegotiated?: number;
      decision?: Models.Decision;
      receiptStatus?: Models.ReceiptStatus;
      discount?: number;
      totalAmount?: number;
      income?: number;
      amountAgregate?: number;
      taxAmount?: number;
      notes?: string;
      stockLocationId?: number;
      objectLotId?: number;
      cfopId?: number;
      discountPercentage?: number;
      freightValueProrated?: number;
      returningPurchaseObjectId?: number;
      priceOriginal?: number;
      id?: number;
    };
    export type PurchaseOrder = {
      accountId?: number;
      operationId?: number;
      businessUnitId?: number;
      companyId?: number;
      date?: string;
      manifestationDate?: string;
      estimatedShippingDate?: string;
      estimatedDeliveryDate?: string;
      receiptDate?: string;
      buyerId?: number;
      supplierId?: number;
      number?: string;
      file?: string;
      paymentMethod?: Models.PaymentMethod;
      termId?: number;
      freight?: Models.FreightType;
      freightValue?: number;
      purchaseOrderStatus?: Models.PurchaseOrderStatus;
      authorizationStatus?: Models.AuthorizationStatus;
      approvedById?: number;
      approvedDate?: string;
      notes?: string;
      totalAmount?: number;
      totalDiscount?: number;
      manifestationId?: number;
      purchaseOrderObjects?: Models.PurchaseOrderObject[];
      amount?: number;
      taxAmount?: number;
      id?: number;
    };
    export type PurchaseOrderObject = {
      purchaseOrderId?: number;
      objectId?: number;
      object?: Models.Object_;
      measureUnitId?: number;
      measureUnit?: Models.MeasureUnit;
      departmentId?: number;
      department?: Models.Department;
      activityId?: number;
      activity?: Models.Activity;
      serviceOrderId?: number;
      serviceOrder?: Models.ServiceOrder;
      purchaseQuotationSupplierObjectId?: number;
      purchaseQuotationSupplierObject?: Models.PurchaseQuotationSupplierObject;
      quantity?: number;
      balance?: number;
      price?: number;
      discountPercentage?: number;
      discount?: number;
      discountProrated?: number;
      taxes?: number;
      freightValueProrated?: number;
      deliveryDate?: string;
      deliveryTime?: string;
      receiptStatus?: Models.PurchaseOrderReceiptStatus;
      notes?: string;
      id?: number;
    };
    export type PurchaseOrderReceiptStatus = 1 | 2 | 3 | 4 | 5;
    export type PurchaseOrderStatus = 1 | 2 | 3 | 4;
    export type PurchaseQuotationSupplierObject = {
      purchaseQuotationSupplierId?: number;
      objectId?: number;
      measureUnitId?: number;
      purchaseRequestObjectId?: number;
      quantity?: number;
      deliveryTime?: string;
      originalQuantity?: number;
      freightAmount?: number;
      originalPrice?: number;
      price?: number;
      finalPrice?: number;
      taxes?: number;
      approvedBy?: number;
      approvedDate?: string;
      deliveryDate?: string;
      bestBuy?: undefined;
      winner?: undefined;
      purchaseQuotationSupplierObjectStatus?: Models.PurchaseQuotationSupplierStatus;
      taxPercentage?: number;
      icmsPercentage?: number;
      ipiPercentage?: number;
      ipi?: number;
      pisCofinsPercentage?: number;
      notes?: string;
      id?: number;
    };
    export type PurchaseQuotationSupplierStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export type PurchaseStatus = 1 | 2 | 3 | 4;
    export type PurchaseType = 1 | 2;
    export type QualityAnalysis = {
      patioControlObjectId?: number;
      qualityParameterId?: number;
      minimum?: number;
      maximum?: number;
      result?: number;
      productionId?: number;
      id?: number;
    };
    export type QualityAnalysisMethod = {
      productionIds?: number[];
      analysisStatus?: Models.AnalysisStatus;
      qualitySettingParameters?: Models.QualitySettingParameter[];
    };
    export type QualityParameter = { accountId?: number; name?: string; id?: number };
    export type QualitySetting = {
      accountId?: number;
      objectId?: number;
      parentId?: number;
      type?: Models.ObjectType;
      parameters?: Models.QualitySettingParameter[];
      ranges?: Models.QualitySettingRange[];
      children?: Models.QualitySetting[];
      id?: number;
    };
    export type QualitySettingParameter = {
      qualityParameterId?: number;
      qualitySettingId?: number;
      minimum?: number;
      maximum?: number;
      result?: number;
      id?: number;
    };
    export type QualitySettingRange = {
      qualitySettingParameterId?: number;
      qualitySettingId?: number;
      minimum?: number;
      maximum?: number;
      id?: number;
    };
    export type QuantityCount = 1 | 2 | 3;
    export type Reason = {
      accountId?: number;
      departmentId?: number;
      name?: string;
      packingListTypeId?: number;
      type?: Models.ReasonType;
      category?: Models.ReasonCategory;
      id?: number;
    };
    export type ReasonCategory = 1 | 2 | 3;
    export type ReasonType = 1 | 2 | 3 | 4 | 5 | 6;
    export type ReceiptStatus = 1 | 2 | 3 | 4;
    export type ReclassificationSetting = {
      accountId?: number;
      operationId?: number;
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type ReclassificationSettingObject = {
      reclassificationSettingId?: number;
      objectId?: number;
      objectDestinyId?: number;
      id?: number;
    };
    export type Reprocess = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      status?: Models.ReprocessStatus;
      date?: string;
      userId?: number;
      sweeping?: number;
      reprocessObjects?: Models.ReprocessObject[];
      totalWeight?: number;
      reprocessWeight?: number;
      smash?: number;
      id?: number;
    };
    export type ReprocessObject = {
      reprocessId?: number;
      totalWeight?: number;
      reprocessWeight?: number;
      difference?: number;
      finalObjectId?: number;
      id?: number;
    };
    export type ReprocessSetting = {
      accountId?: number;
      objectId?: number;
      finalObjectId?: number;
      objects?: Models.Object_[];
      id?: number;
    };
    export type ReprocessStatus = 1 | 2;
    export type ReprocessSweepingSetting = { businessUnitId?: number; objectId?: number; id?: number };
    export type SalesGoal = {
      accountId?: number;
      salesGoalTeamId?: number;
      salesmanId?: number;
      date?: string;
      salesGoalProducts?: Models.SalesGoalProduct[];
      id?: number;
    };
    export type SalesGoalBusinessUnit = { accountId?: number; businessUnitId?: number; id?: number };
    export type SalesGoalDateMethod = { accountId?: number; date?: string };
    export type SalesGoalFromPricingListMethod = {
      businessUnitId?: number;
      accountId?: number;
      salesManId?: number;
      salesGoalTeamId?: number;
      date?: string;
    };
    export type SalesGoalProduct = {
      salesGoalId?: number;
      productId?: number;
      measureUnitId?: number;
      goal?: number;
      lastMonthGoal?: number;
      lastMonthSales?: number;
      factoryId?: number;
      departmentId?: number;
      averagePrice?: number;
      goalPrice?: number;
      id?: number;
    };
    export type SalesGoalTeam = { teamId?: number; salesGoalBusinessUnitId?: number; id?: number };
    export type Service = {
      accountId?: number;
      serviceGroupId?: number;
      name?: string;
      type?: Models.ServiceType;
      estimatedTime?: number;
      id?: number;
    };
    export type ServiceGroup = { accountId?: number; name?: string; type?: Models.ServiceGroupType; id?: number };
    export type ServiceGroupType = 1 | 2 | 3 | 4;
    export type ServiceOrder = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      vehicleId?: number;
      nonWashReasonId?: number;
      availabilityDate?: string;
      driverId?: number;
      vehicleMeter?: number;
      deliveryPlanned?: string;
      requesterId?: number;
      date?: string;
      lastMove?: string;
      status?: Models.ServiceOrderStatus;
      acidentType?: Models.AcidentType;
      kanbanStageId?: number;
      sorting?: undefined;
      vehicleAcident?: undefined;
      mecanicalHelp?: undefined;
      loadedVehicle?: undefined;
      externalMaintenance?: undefined;
      driverAge?: number;
      cpfDriver?: string;
      driverContact?: string;
      notes?: string;
      acidentDescription?: string;
      occurrencePlace?: string;
      id?: number;
    };
    export type ServiceOrderHelpers = {
      accountId?: number;
      name?: string;
      cpf?: string;
      serviceOrderId?: number;
      id?: number;
    };
    export type ServiceOrderIssue = { serviceOrderId?: number; description?: string; id?: number };
    export type ServiceOrderMaintainer = { serviceOrderId?: number; maintainerId?: number; id?: number };
    export type ServiceOrderMember = { userId?: number; serviceOrderServiceId?: number; teamId?: number; id?: number };
    export type ServiceOrderMethod = {
      serviceOrderId?: number;
      serviceOrderServiceId?: number;
      preventiveMaintenanceHistoryId?: number;
    };
    export type ServiceOrderService_ = {
      serviceOrderId?: number;
      originalServiceOrderId?: number;
      serviceId?: number;
      assigneeId?: number;
      status?: Models.ServiceOrderServiceStatus;
      kanbanStageId?: number;
      serviceOrderIssueId?: number;
      externalWorkshopId?: number;
      sorting?: undefined;
      assurance?: undefined;
      isPending?: undefined;
      lastDate?: string;
      id?: number;
    };
    export type ServiceOrderServiceStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    export type ServiceOrderStatus = 1 | 2 | 3 | 4 | 5 | 6;
    export type ServiceOrderToDo = {
      serviceOrderId?: number;
      toDo?: string;
      instructions?: string;
      status?: Models.ServiceOrderToDoStatus;
      id?: number;
    };
    export type ServiceOrderToDoStatus = 1 | 2 | 3 | 4 | 5;
    export type ServiceType = 1 | 2;
    export type SettingLocation = {
      stockLocationDepartmentId?: number;
      stockLocationId?: number;
      objectId?: number;
      inactive?: undefined;
      stockMain?: undefined;
      id?: number;
    };
    export type SpedActivity = 0 | 1;
    export type SpedClassification = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    export type SpedCompanyProfile = 0 | 1 | 2;
    export type StateIndicator = 1 | 2 | 9;
    export type StateRegistrationSubstitute = {
      companyId?: number;
      stateId?: number;
      stateRegistration?: string;
      id?: number;
    };
    export type StatusCompositions = 1 | 2;
    export type StockBalanceMethod = {
      objectId?: number;
      businessUnitId?: number;
      departmentId?: number;
      stockLotId?: number;
      date?: string;
    };
    export type StockLocation = {
      accountId?: number;
      name?: string;
      stockLocationDepartmentId?: number;
      stockShelfId?: number;
      stockStreetId?: number;
      id?: number;
    };
    export type StockLocationBusinessUnit = { businessUnitId?: number; id?: number };
    export type StockLocationDepartment = { departmentId?: number; stockLocationBusinessUnitId?: number; id?: number };
    export type StockMovement = {
      accountId?: number;
      operationId?: number;
      operation?: Models.Operation;
      companyId?: number;
      company?: Models.Company;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      businessUnitDestinyId?: number;
      businessUnitDestiny?: Models.BusinessUnit;
      departmentId?: number;
      department?: Models.Department;
      departmentDestinyId?: number;
      userId?: number;
      departmentDestiny?: Models.Department;
      productionOrderId?: number;
      productionOrder?: Models.ProductionOrder;
      date?: string;
      status?: Models.StockMovementStatus;
      notes?: string;
      amount?: number;
      objects?: Models.StockMovementObject[];
      id?: number;
    };
    export type StockMovementGet = {
      accountId?: number;
      operationId?: number;
      companyId?: number;
      businessUnitId?: number;
      businessUnitDestinyId?: number;
      businessUnitDestinyName?: string;
      departmentId?: number;
      userId?: number;
      businessUnitName?: string;
      departmentName?: string;
      operationName?: string;
      departmentDestinyId?: number;
      departmentDestinyName?: string;
      date?: string;
      status?: Models.StockMovementStatus;
      notes?: string;
      objects?: Models.StockMovementObject[];
      id?: number;
    };
    export type StockMovementGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.StockMovementGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: undefined;
    };
    export type StockMovementObject = {
      stockMovementId?: number;
      stockMovement?: Models.StockMovement;
      objectId?: number;
      object?: Models.Object_;
      objectLotId?: number;
      objectLot?: Models.ObjectLot;
      objectDestinyId?: number;
      objectDestiny?: Models.Object_;
      objectDestinyLotId?: number;
      objectDestinyLot?: Models.ObjectLot;
      measureUnitId?: number;
      measureUnit?: Models.MeasureUnit;
      measureUnitDestinyId?: number;
      measureUnitDestiny?: Models.MeasureUnit;
      quantity?: number;
      quantityDestiny?: number;
      amount?: number;
      productionOrderId?: number;
      productionId?: number;
      production?: Models.Production;
      measureUnits?: Models.ObjectMeasureUnit[];
      lots?: Models.ObjectLot[];
      id?: number;
    };
    export type StockMovementObjectGet = {
      stockMovementId?: number;
      objectId?: number;
      objectName?: string;
      object?: Models.NameEntity;
      objectLotId?: number;
      objectLotName?: string;
      objectLot?: Models.NameEntity;
      objectDestinyId?: number;
      productionId?: number;
      objectDestinyName?: string;
      objectDestiny?: Models.NameEntity;
      objectDestinyLotId?: number;
      objectDestinyLotName?: string;
      objectDestinyLot?: Models.NameEntity;
      measureUnitId?: number;
      measureUnitDestinyId?: number;
      measureUnitName?: string;
      measureUnit?: Models.NameEntity;
      measureUnitDestinyName?: string;
      measureUnitDestiny?: Models.NameEntity;
      quantity?: number;
      quantityDestiny?: number;
      measureUnits?: Models.MeasureUnit[];
      lots?: Models.ObjectLot[];
      destinyMeasureUnits?: Models.MeasureUnit[];
      destinyLots?: Models.ObjectLot[];
      id?: number;
    };
    export type StockMovementObjectGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.StockMovementObjectGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: undefined;
    };
    export type StockMovementStatus = 1 | 2 | 3;
    export type StockRequest = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      departmentStockId?: number;
      operationId?: number;
      date?: string;
      activityId?: number;
      requesterId?: number;
      status?: Models.StockRequestStatus;
      authorizationStatus?: Models.AuthorizationStatus;
      fulfillmentStatus?: Models.FulfillmentStatus;
      serviceOrderServiceId?: number;
      id?: number;
    };
    export type StockRequestFulfillment = {
      accountId?: number;
      stockRequestId?: number;
      stockRequest?: Models.StockRequest;
      date?: string;
      status?: Models.StockRequestStatus;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      departmentId?: number;
      department?: Models.Department;
      fulfillmentObjects?: Models.StockRequestFulfillmentObject[];
      purchaseRequest?: undefined;
      id?: number;
    };
    export type StockRequestFulfillmentObject = {
      stockRequestFulfillmentId?: number;
      stockRequestFulfillment?: Models.StockRequestFulfillment;
      objectId?: number;
      object?: Models.Object_;
      quantity?: number;
      purchase?: number;
      requested?: number;
      stockRequestObjectId?: number;
      stockRequestObject?: Models.StockRequestObject;
      lotId?: number;
      objectLot?: Models.ObjectLot;
      stockLocationId?: number;
      stockLocation?: Models.StockLocation;
      id?: number;
    };
    export type StockRequestObject = {
      stockRequestId?: number;
      objectId?: number;
      serviceOrderServiceId?: number;
      measureUnitId?: number;
      quantityRequested?: number;
      quantity?: number;
      stockLocationId?: number;
      date?: string;
      lotId?: number;
      fulfillmentStatus?: Models.FulfillmentStatus;
      fulfillmentBalance?: number;
      id?: number;
    };
    export type StockRequestSetting = {
      accountId?: number;
      operationId?: number;
      operation?: Models.Operation;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      departmentId?: number;
      department?: Models.Department;
      id?: number;
    };
    export type StockRequestSettingObject = {
      stockRequestSettingId?: number;
      stockRequestSetting?: Models.StockRequestSetting;
      objectId?: number;
      object?: Models.Object_;
      warehouseId?: number;
      warehouse?: Models.DepartmentHttp;
      id?: number;
    };
    export type StockRequestStatus = 1 | 2 | 3;
    export type StockSetting = {
      accountId?: number;
      operationId?: number;
      businessUnitId?: number;
      departmentId?: number;
      businessUnitDestinyId?: number;
      departmentDestinyId?: number;
      id?: number;
    };
    export type StockSettingBusinessUnitMinimum = { accountId?: number; businessUnitId?: number; id?: number };
    export type StockSettingDepartment = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      isStock?: undefined;
      isStockInTransit?: undefined;
      isCycleCounting?: undefined;
      isDamageStock?: undefined;
      id?: number;
    };
    export type StockSettingDepartmentMinimum = {
      stockSettingBusinessUnitMinimumId?: number;
      departmentId?: number;
      id?: number;
    };
    export type StockSettingObjectMinimum = {
      stockSettingDepartmentMinimumId?: number;
      objectId?: number;
      measureUnitId?: number;
      minimumStock?: number;
      maximumStock?: number;
      monthlyConsumption?: number;
      id?: number;
    };
    export type StockShelf = { accountId?: number; name?: string; id?: number };
    export type StockStreet = { accountId?: number; name?: string; id?: number };
    export type StockTransaction = {
      accountId?: number;
      sourceTable?: string;
      sourceId?: number;
      sourceParentId?: number;
      stockOutputId?: number;
      operationId?: number;
      dateTimeTransaction?: string;
      objectId?: number;
      stockLocationId?: number;
      businessUnitId?: number;
      departmentId?: number;
      objectLotId?: number;
      quantity?: number;
      unitCost?: number;
      unitActualCost?: number;
      unitOperatingCost?: number;
      amount?: number;
      averageCost?: number;
      driverId?: number;
      id?: number;
    };
    export type StockTransactionMethod = {
      accountId?: number;
      purchaseId?: number;
      salesOrderId?: number;
      stockMovementId?: number;
      inventoryId?: number;
      tireInspectionId?: number;
      productionId?: number;
      productionOrderId?: number;
      packingListId?: number;
      type?: Models.StockTransactionType;
      businessUnitId?: number;
      departmentId?: number;
      date?: string;
      reprocessId?: number;
      stockRequestFulfillmentId?: number;
      serviceOrderId?: number;
      tireId?: number;
      tireEntryId?: number;
      fuelTransactionId?: number;
      category?: Models.ReasonCategory;
      id?: number;
    };
    export type StockTransactionThird = {
      accountId?: number;
      sourceTable?: string;
      sourceId?: number;
      sourceParentId?: number;
      dateTimeTransaction?: string;
      objectId?: number;
      businessUnitId?: number;
      operationId?: number;
      departmentId?: number;
      objectLotId?: number;
      quantity?: number;
      unitCost?: number;
      averageCost?: number;
      unitOperatingCost?: number;
      personId?: number;
      id?: number;
    };
    export type StockTransactionType = 1 | 2 | 3;
    export type StockTransferPricing = { accountId?: number; companyId?: number; dateTime?: string; id?: number };
    export type StockTransferPricingObject = {
      stockTransferPricingId?: number;
      objectId?: number;
      measureUnitId?: number;
      price?: number;
      id?: number;
    };
    export type StopType = { accountId?: number; name?: string; id?: number };
    export type TaxRegime = 1 | 2 | 3;
    export type TaxRegimeCode = 1 | 2 | 3;
    export type Timetracking = {
      userId?: number;
      taskId?: number;
      serviceOrderServiceId?: number;
      date?: string;
      duration?: number;
      description?: string;
      taskProcessStageId?: number;
      id?: number;
    };
    export type Tire = {
      purchaseObjectId?: number;
      currentObjectId?: number;
      currentLife?: number;
      serialNumber?: string;
      code?: string;
      dot?: string;
      dueDate?: string;
      originalGroove?: number;
      currentGroove?: number;
      currentGroove2?: number;
      currentGroove3?: number;
      currentGroove4?: number;
      status?: Models.TireStatus;
      id?: number;
    };
    export type TireDiagram = { accountId?: number; name?: string; id?: number };
    export type TireDiagramPosition = {
      tireDiagramId?: number;
      name?: string;
      axle?: number;
      side?: Models.TireDiagramPositionSide;
      position?: Models.TireDiagramPositionPos;
      stepp?: undefined;
      tireVehicles?: Models.TireVehicle[];
      id?: number;
    };
    export type TireDiagramPositionPos = 1 | 2;
    export type TireDiagramPositionSide = 1 | 2;
    export type TireEntry = {
      accountId?: number;
      operationId?: number;
      businessUnitId?: number;
      departmentId?: number;
      vehicleId?: number;
      objectId?: number;
      measureUnitId?: number;
      quantity?: number;
      price?: number;
      date?: string;
      tireCode?: string;
      id?: number;
    };
    export type TireEntryMethod = { tireTransactionIds?: number[]; accountId?: number };
    export type TireInspection = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      date?: string;
      tireId?: number;
      reasonId?: number;
      id?: number;
    };
    export type TireModel = {
      objectId?: number;
      name?: string;
      originalGroove?: number;
      toRecapObjectId?: number;
      semiNewObjectId?: number;
      quantityGroove?: number;
      wasteObjectId?: number;
      id?: number;
    };
    export type TireShipment = {
      businessUnitId?: number;
      departmentId?: number;
      date?: string;
      supplierId?: number;
      supplierOrderNumber?: string;
      tireShipmentItems?: Models.TireShipmentItem[];
      purchases?: Models.Purchase[];
      id?: number;
    };
    export type TireShipmentItem = {
      tireShipmentId?: number;
      tireId?: number;
      purchaseObjectId?: number;
      return?: undefined;
      id?: number;
    };
    export type TireShipmentMethod = { accountId?: number; id?: number };
    export type TireStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export type TireTransaction = {
      serviceOrderServiceId?: number;
      tireId?: number;
      vehicleId?: number;
      reasonId?: number;
      tireDiagramPositionId?: number;
      notes?: string;
      date?: string;
      groove?: number;
      groove2?: number;
      groove3?: number;
      groove4?: number;
      meter?: number;
      driven?: number;
      type?: Models.TireTransactionType;
      stock?: undefined;
      id?: number;
    };
    export type TireTransactionType = 1 | 2 | 3 | 4 | 5;
    export type TireVehicle = {
      vehicleId?: number;
      tireId?: number;
      tireDiagramPositionId?: number;
      meter?: number;
      date?: string;
      id?: number;
    };
    export type TireVehicleGroupEnum = 1;
    export type TireVehicleMethod = {
      vehicleId?: number;
      tireDiagramPositionId?: number;
      tireId?: number;
      serviceOrderServiceId?: number;
      reasonId?: number;
      groove?: number;
      groove2?: number;
      groove3?: number;
      groove4?: number;
      reversal?: undefined;
    };
    export type Total = {
      balance?: number;
      totalAmount?: number;
      quantity?: number;
      amount?: number;
      receivedValue?: number;
      totalWeight?: number;
      weight?: number;
      weightRejected?: number;
      value?: number;
      valueRejected?: number;
      commissionAmount?: number;
      taxBase?: number;
      taxAmount?: number;
      taxExempt?: number;
      taxOthers?: number;
      balanceToSchedule?: number;
      scheduledBalance?: number;
    };
    export type WhereShow =
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21;
    export type WmsType = 1 | 2;
  }

  export namespace Services {
    export class BrillProductImportDates {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/BrillProductImportDates
       * @method GET
       */
      get(query: {
        BrillProductImportId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportDates
       * @method POST
       */
      create(body: Models.BrillProductImportDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates
       * @method POST
       */
      create(body: Models.BrillProductImportDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates
       * @method POST
       */
      create(body: Models.BrillProductImportDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates
       * @method POST
       */
      create(body: Models.BrillProductImportDate): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BrillProductImportId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportDates/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class BrillProductImportObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/BrillProductImportObjects
       * @method GET
       */
      get(query: {
        BrillProductImportDateId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportObjects
       * @method POST
       */
      create(body: Models.BrillProductImportObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects
       * @method POST
       */
      create(body: Models.BrillProductImportObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects
       * @method POST
       */
      create(body: Models.BrillProductImportObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects
       * @method POST
       */
      create(body: Models.BrillProductImportObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BrillProductImportDateId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImportObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class BrillProductImports {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/BrillProductImports
       * @method GET
       */
      get(query: {
        BrillSettingId?: number;
        ProductId?: number;
        Date?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImports
       * @method POST
       */
      create(body: Models.BrillProductImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports
       * @method POST
       */
      create(body: Models.BrillProductImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports
       * @method POST
       */
      create(body: Models.BrillProductImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports
       * @method POST
       */
      create(body: Models.BrillProductImport): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BrillSettingId?: number;
          ProductId?: number;
          Date?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillProductImports/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class BrillSettingObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/BrillSettingObjects
       * @method GET
       */
      get(query: {
        BrillSettingId?: number;
        ObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettingObjects
       * @method POST
       */
      create(body: Models.BrillSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects
       * @method POST
       */
      create(body: Models.BrillSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects
       * @method POST
       */
      create(body: Models.BrillSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects
       * @method POST
       */
      create(body: Models.BrillSettingObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BrillSettingId?: number;
          ObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettingObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class BrillSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/BrillSettings
       * @method GET
       */
      get(query: {
        Type?: Models.ObjectType;
        ParentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings
       * @method POST
       */
      create(body: Models.BrillSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings
       * @method POST
       */
      create(body: Models.BrillSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings
       * @method POST
       */
      create(body: Models.BrillSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings
       * @method POST
       */
      create(body: Models.BrillSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Type?: Models.ObjectType;
          ParentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings/ImportComposition
       * @method POST
       */
      createImportComposition(body: FormData): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/BrillSettings/GenerateComposition
       * @method POST
       */
      createGenerateComposition(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/GenerateComposition
       * @method POST
       */
      createGenerateComposition(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/GenerateComposition
       * @method POST
       */
      createGenerateComposition(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/BrillSettings/GenerateComposition
       * @method POST
       */
      createGenerateComposition(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class DamageObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/DamageObjects
       * @method GET
       */
      get(query: {
        UserId?: number;
        DamageReasonId?: number;
        ReprocessObjectId?: number;
        Reprocess?: undefined;
        ObjectId?: number[];
        Date?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageObjects
       * @method POST
       */
      create(body: Models.DamageObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects
       * @method POST
       */
      create(body: Models.DamageObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects
       * @method POST
       */
      create(body: Models.DamageObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects
       * @method POST
       */
      create(body: Models.DamageObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          DamageReasonId?: number;
          ReprocessObjectId?: number;
          Reprocess?: undefined;
          ObjectId?: number[];
          Date?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageObjects/record_malfunction
       * @method POST
       */
      createRecordMalfunction(body: Models.DamageObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/record_malfunction
       * @method POST
       */
      createRecordMalfunction(body: Models.DamageObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/record_malfunction
       * @method POST
       */
      createRecordMalfunction(body: Models.DamageObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageObjects/record_malfunction
       * @method POST
       */
      createRecordMalfunction(body: Models.DamageObjectMethod): Promise<ApiResponse<void>>;
    }
    export class DamageReasons {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/DamageReasons
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageReasons
       * @method POST
       */
      create(body: Models.DamageReason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons
       * @method POST
       */
      create(body: Models.DamageReason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons
       * @method POST
       */
      create(body: Models.DamageReason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons
       * @method POST
       */
      create(body: Models.DamageReason): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageReasons/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageReasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/DamageReasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/DamageReasons/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class FeedOrderObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/FeedOrderObjects
       * @method GET
       */
      get(query: {
        ObjectId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrderObjects
       * @method POST
       */
      create(body: Models.FeedOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects
       * @method POST
       */
      create(body: Models.FeedOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects
       * @method POST
       */
      create(body: Models.FeedOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects
       * @method POST
       */
      create(body: Models.FeedOrderObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrderObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class FeedOrders {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/FeedOrders
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrders
       * @method POST
       */
      create(body: Models.FeedOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders
       * @method POST
       */
      create(body: Models.FeedOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders
       * @method POST
       */
      create(body: Models.FeedOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders
       * @method POST
       */
      create(body: Models.FeedOrder): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrders/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/FeedOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/FeedOrders/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Inventories {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Inventories
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        InventoryStatus?: Models.InventoryStatus[];
        CompanyId?: number;
        OperationId?: number[];
        ObjectId?: number[];
        OperationKey?: string[];
        ManagerId?: number;
        StartDate?: string;
        EndDate?: string;
        App?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories
       * @method POST
       */
      create(body: Models.Inventory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories
       * @method POST
       */
      create(body: Models.Inventory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories
       * @method POST
       */
      create(body: Models.Inventory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories
       * @method POST
       */
      create(body: Models.Inventory): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          InventoryStatus?: Models.InventoryStatus[];
          CompanyId?: number;
          OperationId?: number[];
          ObjectId?: number[];
          OperationKey?: string[];
          ManagerId?: number;
          StartDate?: string;
          EndDate?: string;
          App?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.InventoryPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.InventoryPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.InventoryPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.InventoryPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/Types
       * @method GET
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/close_inventory
       * @method POST
       */
      createCloseInventory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/close_inventory
       * @method POST
       */
      createCloseInventory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/close_inventory
       * @method POST
       */
      createCloseInventory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/close_inventory
       * @method POST
       */
      createCloseInventory(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Inventories/ReOpen
       * @method POST
       */
      createReOpen(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/ReOpen
       * @method POST
       */
      createReOpen(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/ReOpen
       * @method POST
       */
      createReOpen(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Inventories/ReOpen
       * @method POST
       */
      createReOpen(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class InventoryCounts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/InventoryCounts
       * @method GET
       */
      get(query: {
        InventoryId?: number;
        MemberId?: number;
        App?: undefined;
        Status?: Models.InventoryStatus[];
        BusinessUnitId?: number;
        DepartmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryCounts
       * @method POST
       */
      create(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts
       * @method POST
       */
      create(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts
       * @method POST
       */
      create(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts
       * @method POST
       */
      create(body: Models.InventoryCount): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          InventoryId?: number;
          MemberId?: number;
          App?: undefined;
          Status?: Models.InventoryStatus[];
          BusinessUnitId?: number;
          DepartmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryCounts/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryCounts/generate_count
       * @method POST
       */
      createGenerateCount(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/generate_count
       * @method POST
       */
      createGenerateCount(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/generate_count
       * @method POST
       */
      createGenerateCount(body: Models.InventoryCount): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryCounts/generate_count
       * @method POST
       */
      createGenerateCount(body: Models.InventoryCount): Promise<ApiResponse<void>>;
    }
    export class InventoryGroupSelecteds {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/InventoryGroupSelecteds
       * @method GET
       */
      get(query: {
        Search?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryGroupSelecteds
       * @method POST
       */
      create(body: Models.InventoryGroupSelected): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds
       * @method POST
       */
      create(body: Models.InventoryGroupSelected): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds
       * @method POST
       */
      create(body: Models.InventoryGroupSelected): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds
       * @method POST
       */
      create(body: Models.InventoryGroupSelected): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryGroupSelecteds/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class InventoryMembers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/InventoryMembers
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryMembers
       * @method POST
       */
      create(body: Models.InventoryMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers
       * @method POST
       */
      create(body: Models.InventoryMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers
       * @method POST
       */
      create(body: Models.InventoryMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers
       * @method POST
       */
      create(body: Models.InventoryMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryMembers/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryMembers/Function
       * @method GET
       */
      getFunction(): Promise<ApiResponse<void>>;
    }
    export class InventoryObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/InventoryObjects
       * @method GET
       */
      get(query: {
        Search?: string;
        InventoryId?: number;
        InventoryCountId?: number[];
        InventoryCountSecondId?: number;
        ObjectId?: number;
        IsQuantityNull?: undefined;
        Difference?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects
       * @method POST
       */
      create(body: Models.InventoryObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects
       * @method POST
       */
      create(body: Models.InventoryObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects
       * @method POST
       */
      create(body: Models.InventoryObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects
       * @method POST
       */
      create(body: Models.InventoryObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          InventoryId?: number;
          InventoryCountId?: number[];
          InventoryCountSecondId?: number;
          ObjectId?: number;
          IsQuantityNull?: undefined;
          Difference?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/send_count_object
       * @method POST
       */
      createSendCountObject(body: Models.InventoryObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/send_count_object
       * @method POST
       */
      createSendCountObject(body: Models.InventoryObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/send_count_object
       * @method POST
       */
      createSendCountObject(body: Models.InventoryObjectMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/InventoryObjects/send_count_object
       * @method POST
       */
      createSendCountObject(body: Models.InventoryObjectMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/get_object_from_tag
       * @method GET
       */
      getGetObjectFromTag(query: { inventoryCountId?: number; tag?: string }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/InventoryObjects/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class MaintenanceCenterBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenanceCenterBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenanceCenterBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenanceCenterBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenanceCenterBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceCenterDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceCenterDepartments
       * @method GET
       */
      get(query: {
        MaintenanceCenterBusinessUnitId?: number[];
        DepartmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterDepartments
       * @method POST
       */
      create(body: Models.MaintenanceCenterDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments
       * @method POST
       */
      create(body: Models.MaintenanceCenterDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments
       * @method POST
       */
      create(body: Models.MaintenanceCenterDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments
       * @method POST
       */
      create(body: Models.MaintenanceCenterDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          MaintenanceCenterBusinessUnitId?: number[];
          DepartmentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceCenterServiceGroups {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups
       * @method GET
       */
      get(query: {
        MaintenanceCenterDepartmentId?: number[];
        ServiceGroupId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterServiceGroups
       * @method POST
       */
      create(body: Models.MaintenanceCenterServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups
       * @method POST
       */
      create(body: Models.MaintenanceCenterServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups
       * @method POST
       */
      create(body: Models.MaintenanceCenterServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups
       * @method POST
       */
      create(body: Models.MaintenanceCenterServiceGroup): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          MaintenanceCenterDepartmentId?: number[];
          ServiceGroupId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceCenterServiceGroups/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceGroupDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceGroupDepartments
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        MaintenanceGroupId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroupDepartments
       * @method POST
       */
      create(body: Models.MaintenanceGroupDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments
       * @method POST
       */
      create(body: Models.MaintenanceGroupDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments
       * @method POST
       */
      create(body: Models.MaintenanceGroupDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments
       * @method POST
       */
      create(body: Models.MaintenanceGroupDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          MaintenanceGroupId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroupDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceGroups {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceGroups
       * @method GET
       */
      get(query: {
        Search?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroups
       * @method POST
       */
      create(body: Models.MaintenanceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups
       * @method POST
       */
      create(body: Models.MaintenanceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups
       * @method POST
       */
      create(body: Models.MaintenanceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups
       * @method POST
       */
      create(body: Models.MaintenanceGroup): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceGroups/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenancePlanBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number;
        MaintenancePlanId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenancePlanBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenancePlanBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenancePlanBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits
       * @method POST
       */
      create(body: Models.MaintenancePlanBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number;
          MaintenancePlanId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenancePlanDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenancePlanDepartments
       * @method GET
       */
      get(query: {
        DepartmentId?: number;
        MaintenancePlanBusinessUnitId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanDepartments
       * @method POST
       */
      create(body: Models.MaintenancePlanDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments
       * @method POST
       */
      create(body: Models.MaintenancePlanDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments
       * @method POST
       */
      create(body: Models.MaintenancePlanDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments
       * @method POST
       */
      create(body: Models.MaintenancePlanDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          DepartmentId?: number;
          MaintenancePlanBusinessUnitId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenancePlanEquipments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenancePlanEquipments
       * @method GET
       */
      get(query: {
        MaintenancePlanDepartmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanEquipments
       * @method POST
       */
      create(body: Models.MaintenancePlanEquipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments
       * @method POST
       */
      create(body: Models.MaintenancePlanEquipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments
       * @method POST
       */
      create(body: Models.MaintenancePlanEquipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments
       * @method POST
       */
      create(body: Models.MaintenancePlanEquipment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          MaintenancePlanDepartmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanEquipments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenancePlans {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenancePlans
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlans
       * @method POST
       */
      create(body: Models.MaintenancePlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans
       * @method POST
       */
      create(body: Models.MaintenancePlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans
       * @method POST
       */
      create(body: Models.MaintenancePlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans
       * @method POST
       */
      create(body: Models.MaintenancePlan): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlans/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenancePlanServices {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenancePlanServices
       * @method GET
       */
      get(query: {
        MaintenancePlanEquipmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanServices
       * @method POST
       */
      create(body: Models.MaintenancePlanService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices
       * @method POST
       */
      create(body: Models.MaintenancePlanService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices
       * @method POST
       */
      create(body: Models.MaintenancePlanService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices
       * @method POST
       */
      create(body: Models.MaintenancePlanService_): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          MaintenancePlanEquipmentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanServices/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenancePlanServices/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;
    }
    export class MaintenanceScheduleGroups {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceScheduleGroups
       * @method GET
       */
      get(query: {
        MaintenanceGroupId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceScheduleGroups
       * @method POST
       */
      create(body: Models.MaintenanceScheduleGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups
       * @method POST
       */
      create(body: Models.MaintenanceScheduleGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups
       * @method POST
       */
      create(body: Models.MaintenanceScheduleGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups
       * @method POST
       */
      create(body: Models.MaintenanceScheduleGroup): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          MaintenanceGroupId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceScheduleGroups/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceSchedules {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceSchedules
       * @method GET
       */
      get(query: {
        Date?: string;
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSchedules
       * @method POST
       */
      create(body: Models.MaintenanceSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules
       * @method POST
       */
      create(body: Models.MaintenanceSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules
       * @method POST
       */
      create(body: Models.MaintenanceSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules
       * @method POST
       */
      create(body: Models.MaintenanceSchedule): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Date?: string;
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSchedules/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceServices {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceServices
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceServices
       * @method POST
       */
      create(body: Models.MaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices
       * @method POST
       */
      create(body: Models.MaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices
       * @method POST
       */
      create(body: Models.MaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices
       * @method POST
       */
      create(body: Models.MaintenanceService): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceServices/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceSettings
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettings
       * @method POST
       */
      create(body: Models.MaintenanceSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings
       * @method POST
       */
      create(body: Models.MaintenanceSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings
       * @method POST
       */
      create(body: Models.MaintenanceSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings
       * @method POST
       */
      create(body: Models.MaintenanceSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MaintenanceSettingServices {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/MaintenanceSettingServices
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettingServices
       * @method POST
       */
      create(body: Models.MaintenanceSettingService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices
       * @method POST
       */
      create(body: Models.MaintenanceSettingService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices
       * @method POST
       */
      create(body: Models.MaintenanceSettingService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices
       * @method POST
       */
      create(body: Models.MaintenanceSettingService_): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/MaintenanceSettingServices/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Manufacturings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Manufacturings
       * @method GET
       */
      get(query: {
        StartDate?: string;
        EndDate?: string;
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        App?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Manufacturings
       * @method POST
       */
      create(body: Models.Manufacturing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings
       * @method POST
       */
      create(body: Models.Manufacturing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings
       * @method POST
       */
      create(body: Models.Manufacturing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings
       * @method POST
       */
      create(body: Models.Manufacturing): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Manufacturings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StartDate?: string;
          EndDate?: string;
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          App?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Manufacturings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Manufacturings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Manufacturings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class PreventiveMaintenanceHistories {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/PreventiveMaintenanceHistories
       * @method GET
       */
      get(query: {
        ActivityId?: number[];
        ServiceId?: number;
        PreventiveMaintenanceServiceId?: number;
        ServiceOrderId?: number;
        ServiceCreated?: undefined;
        VehicleId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceHistory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceHistory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceHistory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceHistory): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ActivityId?: number[];
          ServiceId?: number;
          PreventiveMaintenanceServiceId?: number;
          ServiceOrderId?: number;
          ServiceCreated?: undefined;
          VehicleId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceHistories/RepeatPreventiveMaintenanceHistory
       * @method POST
       */
      createRepeatPreventiveMaintenanceHistory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/RepeatPreventiveMaintenanceHistory
       * @method POST
       */
      createRepeatPreventiveMaintenanceHistory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/RepeatPreventiveMaintenanceHistory
       * @method POST
       */
      createRepeatPreventiveMaintenanceHistory(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceHistories/RepeatPreventiveMaintenanceHistory
       * @method POST
       */
      createRepeatPreventiveMaintenanceHistory(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class PreventiveMaintenanceObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/PreventiveMaintenanceObjects
       * @method GET
       */
      get(query: {
        ObjectId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceObjects
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class PreventiveMaintenanceServices {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/PreventiveMaintenanceServices
       * @method GET
       */
      get(query: {
        ServiceId?: number;
        ObjectId?: number;
        PreventiveMaintenanceObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceServices
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceService): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceService): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ServiceId?: number;
          ObjectId?: number;
          PreventiveMaintenanceObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceServices/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceServices/FrequencyS
       * @method GET
       */
      getFrequencyS(): Promise<ApiResponse<void>>;
    }
    export class PreventiveMaintenanceToDos {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/PreventiveMaintenanceToDos
       * @method GET
       */
      get(query: {
        PreventiveMaintenanceServiceId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceToDos
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos
       * @method POST
       */
      create(body: Models.PreventiveMaintenanceToDo): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          PreventiveMaintenanceServiceId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/PreventiveMaintenanceToDos/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductBusinessUnitCompositions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductBusinessUnitCompositions
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductBusinessUnitCompositions
       * @method POST
       */
      create(body: Models.ProductBusinessUnitComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions
       * @method POST
       */
      create(body: Models.ProductBusinessUnitComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions
       * @method POST
       */
      create(body: Models.ProductBusinessUnitComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions
       * @method POST
       */
      create(body: Models.ProductBusinessUnitComposition): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductBusinessUnitCompositions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductCompositionDates {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductCompositionDates
       * @method GET
       */
      get(query: {
        ProductCompositionNameId?: number;
        ObjectId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionDates
       * @method POST
       */
      create(body: Models.ProductCompositionDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates
       * @method POST
       */
      create(body: Models.ProductCompositionDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates
       * @method POST
       */
      create(body: Models.ProductCompositionDate): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates
       * @method POST
       */
      create(body: Models.ProductCompositionDate): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductCompositionNameId?: number;
          ObjectId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionDates/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductCompositionNames {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductCompositionNames
       * @method GET
       */
      get(query: {
        ObjectId?: number[];
        ProductionSettingProductId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionNames
       * @method POST
       */
      create(body: Models.ProductCompositionName): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames
       * @method POST
       */
      create(body: Models.ProductCompositionName): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames
       * @method POST
       */
      create(body: Models.ProductCompositionName): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames
       * @method POST
       */
      create(body: Models.ProductCompositionName): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number[];
          ProductionSettingProductId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositionNames/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductCompositions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductCompositions
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number;
        ProductCompositionDateId?: number;
        Search?: string;
        Level?: number;
        ParentId?: number;
        Hierarchy?: undefined;
        ParentIdIsNull?: undefined;
        ObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositions
       * @method POST
       */
      create(body: Models.ProductComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions
       * @method POST
       */
      create(body: Models.ProductComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions
       * @method POST
       */
      create(body: Models.ProductComposition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions
       * @method POST
       */
      create(body: Models.ProductComposition): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number;
          ProductCompositionDateId?: number;
          Search?: string;
          Level?: number;
          ParentId?: number;
          Hierarchy?: undefined;
          ParentIdIsNull?: undefined;
          ObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductCompositions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductCompositions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
    }
    export class ProductionMapDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionMapDepartments
       * @method GET
       */
      get(query: {
        ProductionMapId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMapDepartments
       * @method POST
       */
      create(body: Models.ProductionMapDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments
       * @method POST
       */
      create(body: Models.ProductionMapDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments
       * @method POST
       */
      create(body: Models.ProductionMapDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments
       * @method POST
       */
      create(body: Models.ProductionMapDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionMapId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMapDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionMaps {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionMaps
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        Status?: Models.ProductionStatus;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps
       * @method POST
       */
      create(body: Models.ProductionMap): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps
       * @method POST
       */
      create(body: Models.ProductionMap): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps
       * @method POST
       */
      create(body: Models.ProductionMap): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps
       * @method POST
       */
      create(body: Models.ProductionMap): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          Status?: Models.ProductionStatus;
          StartDate?: string;
          EndDate?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps/MassBalance
       * @method GET
       */
      getMassBalance(query: { ProductionMapId?: number; ProductionOrderId?: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionMaps/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;
    }
    export class ProductionObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionObjects
       * @method GET
       */
      get(query: {
        ProductionId?: number;
        ProductionType?: Models.ProductionType;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionObjects
       * @method POST
       */
      create(body: Models.ProductionObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects
       * @method POST
       */
      create(body: Models.ProductionObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects
       * @method POST
       */
      create(body: Models.ProductionObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects
       * @method POST
       */
      create(body: Models.ProductionObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionId?: number;
          ProductionType?: Models.ProductionType;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionOrderObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionOrderObjects
       * @method GET
       */
      get(query: {
        ProductionOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderObjects
       * @method POST
       */
      create(body: Models.ProductionOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects
       * @method POST
       */
      create(body: Models.ProductionOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects
       * @method POST
       */
      create(body: Models.ProductionOrderObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects
       * @method POST
       */
      create(body: Models.ProductionOrderObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionOrders {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionOrders
       * @method GET
       * @returns {Models.ProductionOrderGetQueryResult} 200 Success
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        ProductionMapId?: number;
        ProductionMapDepartmentId?: number;
        App?: undefined;
        ProductId?: number;
        ManufacturingId?: number;
        Order?: number;
        Status?: Models.ProductionStatus;
        AnalysisStatus?: Models.AnalysisStatus;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.ProductionOrderGetQueryResult>>;

      /**
       * @endpoint /api/ProductionOrders
       * @method POST
       */
      create(body: Models.ProductionOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders
       * @method POST
       */
      create(body: Models.ProductionOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders
       * @method POST
       */
      create(body: Models.ProductionOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders
       * @method POST
       */
      create(body: Models.ProductionOrder): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/MassBalance
       * @method GET
       */
      getMassBalance(query: { ProductionMapId?: number; ProductionOrderId?: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/GenerateBreak
       * @method GET
       */
      getGenerateBreak(query: { ProductionMapId?: number; ProductionOrderId?: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          ProductionMapId?: number;
          ProductionMapDepartmentId?: number;
          App?: undefined;
          ProductId?: number;
          ManufacturingId?: number;
          Order?: number;
          Status?: Models.ProductionStatus;
          AnalysisStatus?: Models.AnalysisStatus;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrders/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;
    }
    export class ProductionOrderTags {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionOrderTags
       * @method GET
       */
      get(query: {
        ProductionIsNull?: undefined;
        ProductionOrderId?: number;
        Beep?: undefined;
        Printed?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionIsNull?: undefined;
          ProductionOrderId?: number;
          Beep?: undefined;
          Printed?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionOrderTags/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionPlanFactories {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionPlanFactories
       * @method GET
       */
      get(query: {
        ProductionPlanId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanFactories
       * @method POST
       */
      create(body: Models.ProductionPlanFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories
       * @method POST
       */
      create(body: Models.ProductionPlanFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories
       * @method POST
       */
      create(body: Models.ProductionPlanFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories
       * @method POST
       */
      create(body: Models.ProductionPlanFactory): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionPlanId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanFactories/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionPlanProducts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionPlanProducts
       * @method GET
       */
      get(query: {
        ProductionPlanFactoryId?: number;
        ProductionPlanId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanProducts
       * @method POST
       */
      create(body: Models.ProductionPlanProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts
       * @method POST
       */
      create(body: Models.ProductionPlanProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts
       * @method POST
       */
      create(body: Models.ProductionPlanProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts
       * @method POST
       */
      create(body: Models.ProductionPlanProduct): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionPlanFactoryId?: number;
          ProductionPlanId?: number;
          BusinessUnitId?: number;
          DepartmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanProducts/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionPlans {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionPlans
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans
       * @method POST
       */
      create(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans
       * @method POST
       */
      create(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans
       * @method POST
       */
      create(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans
       * @method POST
       */
      create(body: Models.ProductionPlan): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/BusinessUnits
       * @method GET
       */
      getBusinessUnits(query: {
        Name?: string;
        ParentId?: number;
        IncludeGroup?: undefined;
        Type?: Models.BusinessUnitTypeHttp;
        ProductionPlanId?: number;
        OperationId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        OperationKey?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/Departments
       * @method GET
       */
      getDepartments(query: {
        Name?: string;
        ParentId?: number;
        IncludeGroup?: undefined;
        Type?: Models.DepartmentTypeHttp;
        OperationId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        ProductionPlanId?: number;
        OperationKey?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/ProductionPlan
       * @method POST
       */
      createProductionPlan(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlan
       * @method POST
       */
      createProductionPlan(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlan
       * @method POST
       */
      createProductionPlan(body: Models.ProductionPlan): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlan
       * @method POST
       */
      createProductionPlan(body: Models.ProductionPlan): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/ProductionPlanIntermediate
       * @method POST
       */
      createProductionPlanIntermediate(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanIntermediate
       * @method POST
       */
      createProductionPlanIntermediate(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanIntermediate
       * @method POST
       */
      createProductionPlanIntermediate(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanIntermediate
       * @method POST
       */
      createProductionPlanIntermediate(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlans/ProductionPlanConsumption
       * @method POST
       */
      createProductionPlanConsumption(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanConsumption
       * @method POST
       */
      createProductionPlanConsumption(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanConsumption
       * @method POST
       */
      createProductionPlanConsumption(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlans/ProductionPlanConsumption
       * @method POST
       */
      createProductionPlanConsumption(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class ProductionPlanSettingBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionPlanSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionPlanSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionPlanSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionPlanSettingBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettingBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionPlanSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionPlanSettings
       * @method GET
       */
      get(query: {
        ProductionPlanSettingBusinessUnitId?: number;
        ObjectId?: number;
        ObjectIds?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettings
       * @method POST
       */
      create(body: Models.ProductionPlanSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings
       * @method POST
       */
      create(body: Models.ProductionPlanSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings
       * @method POST
       */
      create(body: Models.ProductionPlanSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings
       * @method POST
       */
      create(body: Models.ProductionPlanSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionPlanSettingBusinessUnitId?: number;
          ObjectId?: number;
          ObjectIds?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionPlanSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionPlanSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
    }
    export class Productions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Productions/PrintTag/{id}
       * @method GET
       */
      getPrintTagById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/PrintPallet/{id}
       * @method GET
       */
      getPrintPalletById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/ResetKilder
       * @method GET
       */
      getResetKilder(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions
       * @method GET
       */
      get(query: {
        ProductionOrderId?: number;
        Status?: Models.ProductionMapStatus[];
        Beep?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions
       * @method POST
       */
      create(body: Models.Production): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions
       * @method POST
       */
      create(body: Models.Production): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions
       * @method POST
       */
      create(body: Models.Production): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions
       * @method POST
       */
      create(body: Models.Production): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionOrderId?: number;
          Status?: Models.ProductionMapStatus[];
          Beep?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/AnalysisStatus
       * @method GET
       */
      getAnalysisStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/GetProductionsApp
       * @method GET
       */
      getGetProductionsApp(query: {
        ProductionOrderId?: number;
        Status?: Models.ProductionMapStatus[];
        Beep?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/PrintTag
       * @method POST
       */
      createPrintTag(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintTag
       * @method POST
       */
      createPrintTag(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintTag
       * @method POST
       */
      createPrintTag(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintTag
       * @method POST
       */
      createPrintTag(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/BeepTag
       * @method POST
       */
      createBeepTag(body: Models.BeepTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepTag
       * @method POST
       */
      createBeepTag(body: Models.BeepTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepTag
       * @method POST
       */
      createBeepTag(body: Models.BeepTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepTag
       * @method POST
       */
      createBeepTag(body: Models.BeepTagMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/PrintPallet
       * @method POST
       */
      createPrintPallet(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintPallet
       * @method POST
       */
      createPrintPallet(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintPallet
       * @method POST
       */
      createPrintPallet(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/PrintPallet
       * @method POST
       */
      createPrintPallet(body: Models.PrintTagMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/BeepPallet
       * @method POST
       */
      createBeepPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepPallet
       * @method POST
       */
      createBeepPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepPallet
       * @method POST
       */
      createBeepPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/BeepPallet
       * @method POST
       */
      createBeepPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/TransferPallet
       * @method POST
       */
      createTransferPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/TransferPallet
       * @method POST
       */
      createTransferPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/TransferPallet
       * @method POST
       */
      createTransferPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/TransferPallet
       * @method POST
       */
      createTransferPallet(body: Models.BeepPalletMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/Production
       * @method POST
       */
      createProduction(body: Models.ProductionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/Production
       * @method POST
       */
      createProduction(body: Models.ProductionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/Production
       * @method POST
       */
      createProduction(body: Models.ProductionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/Production
       * @method POST
       */
      createProduction(body: Models.ProductionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Productions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Productions/UpdateBulk
       * @method POST
       */
      createUpdateBulk(body: {}): Promise<ApiResponse<void>>;
    }
    export class ProductionScheduleDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionScheduleDepartments
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleDepartments
       * @method POST
       */
      create(body: Models.ProductionScheduleDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments
       * @method POST
       */
      create(body: Models.ProductionScheduleDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments
       * @method POST
       */
      create(body: Models.ProductionScheduleDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments
       * @method POST
       */
      create(body: Models.ProductionScheduleDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionScheduleProductDays {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionScheduleProductDays
       * @method GET
       */
      get(query: {
        ProductionScheduleProductId?: number;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProductDays
       * @method POST
       */
      create(body: Models.ProductionScheduleProductDay): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays
       * @method POST
       */
      create(body: Models.ProductionScheduleProductDay): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays
       * @method POST
       */
      create(body: Models.ProductionScheduleProductDay): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays
       * @method POST
       */
      create(body: Models.ProductionScheduleProductDay): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProductDays/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProductDays/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
    }
    export class ProductionScheduleProducts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionScheduleProducts
       * @method GET
       */
      get(query: {
        ProductionScheduleId?: number;
        ProductionScheduleDepartmentId?: number;
        WeekSuggestion?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts
       * @method POST
       */
      create(body: Models.ProductionScheduleProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts
       * @method POST
       */
      create(body: Models.ProductionScheduleProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts
       * @method POST
       */
      create(body: Models.ProductionScheduleProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts
       * @method POST
       */
      create(body: Models.ProductionScheduleProduct): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionScheduleId?: number;
          ProductionScheduleDepartmentId?: number;
          WeekSuggestion?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts/CreateProductionMap
       * @method POST
       */
      createCreateProductionMap(body: Models.CreateProductionMapMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/CreateProductionMap
       * @method POST
       */
      createCreateProductionMap(body: Models.CreateProductionMapMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/CreateProductionMap
       * @method POST
       */
      createCreateProductionMap(body: Models.CreateProductionMapMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/CreateProductionMap
       * @method POST
       */
      createCreateProductionMap(body: Models.CreateProductionMapMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionScheduleProducts/Day/{id}
       * @method PATCH
       */
      updateDayById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/Day/{id}
       * @method PATCH
       */
      updateDayById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/Day/{id}
       * @method PATCH
       */
      updateDayById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionScheduleProducts/Day/{id}
       * @method PATCH
       */
      updateDayById(
        params: {
          id: number;
        },
        body: Models.ProductionScheduleProductDayPatch,
      ): Promise<ApiResponse<void>>;
    }
    export class ProductionSchedules {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSchedules
       * @method GET
       */
      get(query: {
        ProductionPlanId?: number;
        BusinessUnitId?: number[];
        Status?: Models.ProductionScheduleStatus;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSchedules
       * @method POST
       */
      create(body: Models.ProductionSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules
       * @method POST
       */
      create(body: Models.ProductionSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules
       * @method POST
       */
      create(body: Models.ProductionSchedule): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules
       * @method POST
       */
      create(body: Models.ProductionSchedule): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionPlanId?: number;
          BusinessUnitId?: number[];
          Status?: Models.ProductionScheduleStatus;
          StartDate?: string;
          EndDate?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSchedules/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionSettingBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSettingBusinessUnits
       * @method GET
       */
      get(query: {
        Search?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionSettingBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits
       * @method POST
       */
      create(body: Models.ProductionSettingBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionSettingFactorys {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSettingFactorys
       * @method GET
       */
      get(query: {
        ProductionSettingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingFactorys
       * @method POST
       */
      create(body: Models.ProductionSettingFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys
       * @method POST
       */
      create(body: Models.ProductionSettingFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys
       * @method POST
       */
      create(body: Models.ProductionSettingFactory): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys
       * @method POST
       */
      create(body: Models.ProductionSettingFactory): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionSettingId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingFactorys/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionSettingProducts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSettingProducts
       * @method GET
       */
      get(query: {
        Search?: string;
        ProductionSettingId?: number;
        ProductId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingProducts
       * @method POST
       */
      create(body: Models.ProductionSettingProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts
       * @method POST
       */
      create(body: Models.ProductionSettingProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts
       * @method POST
       */
      create(body: Models.ProductionSettingProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts
       * @method POST
       */
      create(body: Models.ProductionSettingProduct): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          ProductionSettingId?: number;
          ProductId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingProducts/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingProducts/ChangeOrder
       * @method POST
       */
      createChangeOrder(body: Models.GenericChangeOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/ChangeOrder
       * @method POST
       */
      createChangeOrder(body: Models.GenericChangeOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/ChangeOrder
       * @method POST
       */
      createChangeOrder(body: Models.GenericChangeOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingProducts/ChangeOrder
       * @method POST
       */
      createChangeOrder(body: Models.GenericChangeOrder): Promise<ApiResponse<void>>;
    }
    export class ProductionSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSettings
       * @method GET
       */
      get(query: {
        Search?: string;
        DepartmentId?: number;
        BusinessUnitId?: number;
        ProductionSettingBusinessUnitId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettings
       * @method POST
       */
      create(body: Models.ProductionSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings
       * @method POST
       */
      create(body: Models.ProductionSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings
       * @method POST
       */
      create(body: Models.ProductionSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings
       * @method POST
       */
      create(body: Models.ProductionSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          DepartmentId?: number;
          BusinessUnitId?: number;
          ProductionSettingBusinessUnitId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettings/DuplicatePCP
       * @method POST
       */
      createDuplicatePcp(body: Models.DuplicateProductionSettingMethod): Promise<ApiResponse<void>>;
    }
    export class ProductionSettingSetups {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionSettingSetups
       * @method GET
       */
      get(query: {
        ProductionSettingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingSetups
       * @method POST
       */
      create(body: Models.ProductionSettingSetup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups
       * @method POST
       */
      create(body: Models.ProductionSettingSetup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups
       * @method POST
       */
      create(body: Models.ProductionSettingSetup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups
       * @method POST
       */
      create(body: Models.ProductionSettingSetup): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionSettingId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionSettingSetups/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionStops {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionStops
       * @method GET
       */
      get(query: {
        ProductionOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionStops
       * @method POST
       */
      create(body: Models.ProductionStop): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops
       * @method POST
       */
      create(body: Models.ProductionStop): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops
       * @method POST
       */
      create(body: Models.ProductionStop): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops
       * @method POST
       */
      create(body: Models.ProductionStop): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionStops/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionStops/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionStops/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionStops/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProductionTags {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductionTags
       * @method GET
       * @returns {Models.ProductionTagGetQueryResult} 200 Success
       */
      get(query: {
        ProductionIsNull?: undefined;
        ProductionOrderId?: number;
        Beep?: undefined;
        Printed?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.ProductionTagGetQueryResult>>;

      /**
       * @endpoint /api/ProductionTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags
       * @method POST
       */
      create(body: Models.ProductionTag): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionTags/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionIsNull?: undefined;
          ProductionOrderId?: number;
          Beep?: undefined;
          Printed?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductionTags/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionTags/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductionTags/get_product_from_tag
       * @method GET
       */
      getGetProductFromTag(query: { tag?: string }): Promise<ApiResponse<void>>;
    }
    export class ProductReplacement {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductReplacement
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        CustomerId?: number[];
        ObjectId?: number[];
        Status?: Models.ProductReplacementStatus[];
        Date?: string;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacement
       * @method POST
       */
      create(body: Models.ProductReplacement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement
       * @method POST
       */
      create(body: Models.ProductReplacement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement
       * @method POST
       */
      create(body: Models.ProductReplacement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement
       * @method POST
       */
      create(body: Models.ProductReplacement): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          CustomerId?: number[];
          ObjectId?: number[];
          Status?: Models.ProductReplacementStatus[];
          Date?: string;
          StartDate?: string;
          EndDate?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacement/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacement/CreateReplacementFromDriverApp
       * @method POST
       */
      createCreateReplacementFromDriverApp(body: Models.ProductReplacementMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/CreateReplacementFromDriverApp
       * @method POST
       */
      createCreateReplacementFromDriverApp(body: Models.ProductReplacementMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/CreateReplacementFromDriverApp
       * @method POST
       */
      createCreateReplacementFromDriverApp(body: Models.ProductReplacementMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacement/CreateReplacementFromDriverApp
       * @method POST
       */
      createCreateReplacementFromDriverApp(body: Models.ProductReplacementMethod): Promise<ApiResponse<void>>;
    }
    export class ProductReplacementInvoice {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ProductReplacementInvoice
       * @method GET
       */
      get(query: {
        ProductReplacementId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacementInvoice
       * @method POST
       */
      create(body: Models.ProductReplacementInvoice): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice
       * @method POST
       */
      create(body: Models.ProductReplacementInvoice): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice
       * @method POST
       */
      create(body: Models.ProductReplacementInvoice): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice
       * @method POST
       */
      create(body: Models.ProductReplacementInvoice): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductReplacementId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ProductReplacementInvoice/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class QualityAnalysis {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/QualityAnalysis
       * @method GET
       */
      get(query: {
        ProductionOrderObjectId?: number;
        PatioControlObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis
       * @method POST
       */
      create(body: Models.QualityAnalysis): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis
       * @method POST
       */
      create(body: Models.QualityAnalysis): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis
       * @method POST
       */
      create(body: Models.QualityAnalysis): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis
       * @method POST
       */
      create(body: Models.QualityAnalysis): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProductionOrderObjectId?: number;
          PatioControlObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis/CreateQualityAnalysis
       * @method POST
       */
      createCreateQualityAnalysis(body: Models.QualityAnalysisMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/CreateQualityAnalysis
       * @method POST
       */
      createCreateQualityAnalysis(body: Models.QualityAnalysisMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/CreateQualityAnalysis
       * @method POST
       */
      createCreateQualityAnalysis(body: Models.QualityAnalysisMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/CreateQualityAnalysis
       * @method POST
       */
      createCreateQualityAnalysis(body: Models.QualityAnalysisMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityAnalysis/GetQualitySettingFromProduction
       * @method POST
       */
      createGetQualitySettingFromProduction(body: Models.ProductionList): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/GetQualitySettingFromProduction
       * @method POST
       */
      createGetQualitySettingFromProduction(body: Models.ProductionList): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/GetQualitySettingFromProduction
       * @method POST
       */
      createGetQualitySettingFromProduction(body: Models.ProductionList): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityAnalysis/GetQualitySettingFromProduction
       * @method POST
       */
      createGetQualitySettingFromProduction(body: Models.ProductionList): Promise<ApiResponse<void>>;
    }
    export class QualityParameters {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/QualityParameters
       * @method GET
       */
      get(query: {
        Name?: string;
        ExcludeQualitySettingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityParameters
       * @method POST
       */
      create(body: Models.QualityParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters
       * @method POST
       */
      create(body: Models.QualityParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters
       * @method POST
       */
      create(body: Models.QualityParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters
       * @method POST
       */
      create(body: Models.QualityParameter): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityParameters/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ExcludeQualitySettingId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualityParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualityParameters/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class QualitySettingParameters {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/QualitySettingParameters
       * @method GET
       */
      get(query: {
        QualitySettingId?: number;
        QualityParameterId?: number;
        ParentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingParameters
       * @method POST
       */
      create(body: Models.QualitySettingParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters
       * @method POST
       */
      create(body: Models.QualitySettingParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters
       * @method POST
       */
      create(body: Models.QualitySettingParameter): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters
       * @method POST
       */
      create(body: Models.QualitySettingParameter): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          QualitySettingId?: number;
          QualityParameterId?: number;
          ParentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingParameters/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class QualitySettingRanges {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/QualitySettingRanges
       * @method GET
       */
      get(query: {
        QualitySettingId?: number;
        QualitySettingParameterId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingRanges
       * @method POST
       */
      create(body: Models.QualitySettingRange): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges
       * @method POST
       */
      create(body: Models.QualitySettingRange): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges
       * @method POST
       */
      create(body: Models.QualitySettingRange): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges
       * @method POST
       */
      create(body: Models.QualitySettingRange): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          QualitySettingId?: number;
          QualitySettingParameterId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettingRanges/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class QualitySettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/QualitySettings
       * @method GET
       */
      get(query: {
        ObjectId?: number;
        Type?: Models.ObjectType;
        ParentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettings
       * @method POST
       */
      create(body: Models.QualitySetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings
       * @method POST
       */
      create(body: Models.QualitySetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings
       * @method POST
       */
      create(body: Models.QualitySetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings
       * @method POST
       */
      create(body: Models.QualitySetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number;
          Type?: Models.ObjectType;
          ParentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/QualitySettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/QualitySettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Reasons {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Reasons
       * @method GET
       */
      get(query: {
        DepartmentId?: number[];
        Name?: string;
        Type?: Models.ReasonType;
        Category?: Models.ReasonCategory[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reasons
       * @method POST
       */
      create(body: Models.Reason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons
       * @method POST
       */
      create(body: Models.Reason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons
       * @method POST
       */
      create(body: Models.Reason): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons
       * @method POST
       */
      create(body: Models.Reason): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reasons/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          DepartmentId?: number[];
          Name?: string;
          Type?: Models.ReasonType;
          Category?: Models.ReasonCategory[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reasons/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reasons/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ReclassificationSettingObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ReclassificationSettingObjects
       * @method GET
       */
      get(query: {
        ReclassificationSettingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettingObjects
       * @method POST
       */
      create(body: Models.ReclassificationSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects
       * @method POST
       */
      create(body: Models.ReclassificationSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects
       * @method POST
       */
      create(body: Models.ReclassificationSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects
       * @method POST
       */
      create(body: Models.ReclassificationSettingObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ReclassificationSettingId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettingObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ReclassificationSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ReclassificationSettings
       * @method GET
       */
      get(query: {
        OperationId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettings
       * @method POST
       */
      create(body: Models.ReclassificationSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings
       * @method POST
       */
      create(body: Models.ReclassificationSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings
       * @method POST
       */
      create(body: Models.ReclassificationSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings
       * @method POST
       */
      create(body: Models.ReclassificationSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          OperationId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReclassificationSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ReprocessObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ReprocessObjects
       * @method GET
       */
      get(query: {
        ReprocessId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessObjects
       * @method POST
       */
      create(body: Models.ReprocessObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects
       * @method POST
       */
      create(body: Models.ReprocessObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects
       * @method POST
       */
      create(body: Models.ReprocessObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects
       * @method POST
       */
      create(body: Models.ReprocessObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ReprocessId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Reprocesss {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Reprocesss
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        Date?: string;
        Status?: Models.ReprocessStatus;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reprocesss
       * @method POST
       */
      create(body: Models.Reprocess): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss
       * @method POST
       */
      create(body: Models.Reprocess): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss
       * @method POST
       */
      create(body: Models.Reprocess): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss
       * @method POST
       */
      create(body: Models.Reprocess): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reprocesss/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          Date?: string;
          Status?: Models.ReprocessStatus;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reprocesss/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reprocesss/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Reprocesss/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Reprocesss/Close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class ReprocessSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ReprocessSettings
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSettings
       * @method POST
       */
      create(body: Models.ReprocessSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings
       * @method POST
       */
      create(body: Models.ReprocessSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings
       * @method POST
       */
      create(body: Models.ReprocessSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings
       * @method POST
       */
      create(body: Models.ReprocessSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ReprocessSweepingSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ReprocessSweepingSettings
       * @method GET
       */
      get(query: {
        ReprocessId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSweepingSettings
       * @method POST
       */
      create(body: Models.ReprocessSweepingSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings
       * @method POST
       */
      create(body: Models.ReprocessSweepingSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings
       * @method POST
       */
      create(body: Models.ReprocessSweepingSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings
       * @method POST
       */
      create(body: Models.ReprocessSweepingSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ReprocessId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ReprocessSweepingSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class SalesGoalBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/SalesGoalBusinessUnits
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalBusinessUnits
       * @method POST
       */
      create(body: Models.SalesGoalBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits
       * @method POST
       */
      create(body: Models.SalesGoalBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits
       * @method POST
       */
      create(body: Models.SalesGoalBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits
       * @method POST
       */
      create(body: Models.SalesGoalBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class SalesGoalProducts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/SalesGoalProducts
       * @method GET
       */
      get(query: {
        SalesGoalId?: number;
        Date?: string;
        SalesmanId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalProducts
       * @method POST
       */
      create(body: Models.SalesGoalProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts
       * @method POST
       */
      create(body: Models.SalesGoalProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts
       * @method POST
       */
      create(body: Models.SalesGoalProduct): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts
       * @method POST
       */
      create(body: Models.SalesGoalProduct): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          SalesGoalId?: number;
          Date?: string;
          SalesmanId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalProducts/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class SalesGoals {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/SalesGoals
       * @method GET
       */
      get(query: {
        SalesGoalTeamId?: number[];
        Date?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals
       * @method POST
       */
      create(body: Models.SalesGoal): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals
       * @method POST
       */
      create(body: Models.SalesGoal): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals
       * @method POST
       */
      create(body: Models.SalesGoal): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals
       * @method POST
       */
      create(body: Models.SalesGoal): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          SalesGoalTeamId?: number[];
          Date?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals/NextSalesGoal
       * @method POST
       */
      createNextSalesGoal(body: Models.SalesGoalDateMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/NextSalesGoal
       * @method POST
       */
      createNextSalesGoal(body: Models.SalesGoalDateMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/NextSalesGoal
       * @method POST
       */
      createNextSalesGoal(body: Models.SalesGoalDateMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/NextSalesGoal
       * @method POST
       */
      createNextSalesGoal(body: Models.SalesGoalDateMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoals/CreateSalesGoalFromPricingList
       * @method POST
       */
      createCreateSalesGoalFromPricingList(body: Models.SalesGoalFromPricingListMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/CreateSalesGoalFromPricingList
       * @method POST
       */
      createCreateSalesGoalFromPricingList(body: Models.SalesGoalFromPricingListMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/CreateSalesGoalFromPricingList
       * @method POST
       */
      createCreateSalesGoalFromPricingList(body: Models.SalesGoalFromPricingListMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoals/CreateSalesGoalFromPricingList
       * @method POST
       */
      createCreateSalesGoalFromPricingList(body: Models.SalesGoalFromPricingListMethod): Promise<ApiResponse<void>>;
    }
    export class SalesGoalTeams {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/SalesGoalTeams
       * @method GET
       */
      get(query: {
        SalesGoalBusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalTeams
       * @method POST
       */
      create(body: Models.SalesGoalTeam): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams
       * @method POST
       */
      create(body: Models.SalesGoalTeam): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams
       * @method POST
       */
      create(body: Models.SalesGoalTeam): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams
       * @method POST
       */
      create(body: Models.SalesGoalTeam): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          SalesGoalBusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SalesGoalTeams/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ServiceGroups {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceGroups
       * @method GET
       */
      get(query: {
        Search?: string;
        Type?: Models.ServiceGroupType[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceGroups
       * @method POST
       */
      create(body: Models.ServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups
       * @method POST
       */
      create(body: Models.ServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups
       * @method POST
       */
      create(body: Models.ServiceGroup): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups
       * @method POST
       */
      create(body: Models.ServiceGroup): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          Type?: Models.ServiceGroupType[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceGroups/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceGroups/ServiceGroup/Excel
       * @method POST
       */
      createServiceGroupExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderHelpers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderHelpers
       * @method GET
       */
      get(query: {
        Name?: string;
        ServiceOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderHelpers
       * @method POST
       */
      create(body: Models.ServiceOrderHelpers): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers
       * @method POST
       */
      create(body: Models.ServiceOrderHelpers): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers
       * @method POST
       */
      create(body: Models.ServiceOrderHelpers): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers
       * @method POST
       */
      create(body: Models.ServiceOrderHelpers): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ServiceOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderHelpers/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderIssues {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderIssues
       * @method GET
       */
      get(query: {
        ServiceOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderIssues
       * @method POST
       */
      create(body: Models.ServiceOrderIssue): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues
       * @method POST
       */
      create(body: Models.ServiceOrderIssue): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues
       * @method POST
       */
      create(body: Models.ServiceOrderIssue): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues
       * @method POST
       */
      create(body: Models.ServiceOrderIssue): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ServiceOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderIssues/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderMaintainers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderMaintainers
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMaintainers
       * @method POST
       */
      create(body: Models.ServiceOrderMaintainer): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers
       * @method POST
       */
      create(body: Models.ServiceOrderMaintainer): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers
       * @method POST
       */
      create(body: Models.ServiceOrderMaintainer): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers
       * @method POST
       */
      create(body: Models.ServiceOrderMaintainer): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMaintainers/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderMembers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderMembers
       * @method GET
       */
      get(query: {
        ServiceOrderServiceId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMembers
       * @method POST
       */
      create(body: Models.ServiceOrderMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers
       * @method POST
       */
      create(body: Models.ServiceOrderMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers
       * @method POST
       */
      create(body: Models.ServiceOrderMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers
       * @method POST
       */
      create(body: Models.ServiceOrderMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ServiceOrderServiceId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderMembers/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ServiceOrders {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrders
       * @method GET
       */
      get(query: {
        KanbanStageId?: number;
        KanbanStageKey?: string[];
        Search?: string;
        DepartmentName?: string;
        Team?: undefined;
        Status?: Models.ServiceOrderStatus[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitIdOrNull?: number[];
        DepartmentIdOrNull?: number[];
        KanbanView?: undefined;
        Assignee?: undefined;
        IsNotDone?: undefined;
        RequesterId?: number[];
        AssigneeId?: number[];
        MaintenanceDepartmentId?: number[];
        VehicleId?: number[];
        SectorId?: number[];
        TeamId?: number[];
        StartAvailabilityDate?: string;
        EndAvailabilityDate?: string;
        StartDate?: string;
        EndDate?: string;
        Type?: Models.MaintenanceType;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders
       * @method POST
       */
      create(body: Models.ServiceOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders
       * @method POST
       */
      create(body: Models.ServiceOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders
       * @method POST
       */
      create(body: Models.ServiceOrder): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders
       * @method POST
       */
      create(body: Models.ServiceOrder): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          KanbanStageId?: number;
          KanbanStageKey?: string[];
          Search?: string;
          DepartmentName?: string;
          Team?: undefined;
          Status?: Models.ServiceOrderStatus[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitIdOrNull?: number[];
          DepartmentIdOrNull?: number[];
          KanbanView?: undefined;
          Assignee?: undefined;
          IsNotDone?: undefined;
          RequesterId?: number[];
          AssigneeId?: number[];
          MaintenanceDepartmentId?: number[];
          VehicleId?: number[];
          SectorId?: number[];
          TeamId?: number[];
          StartAvailabilityDate?: string;
          EndAvailabilityDate?: string;
          StartDate?: string;
          EndDate?: string;
          Type?: Models.MaintenanceType;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPending
       * @method POST
       */
      createCreateServiceFromPending(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPending
       * @method POST
       */
      createCreateServiceFromPending(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPending
       * @method POST
       */
      createCreateServiceFromPending(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPending
       * @method POST
       */
      createCreateServiceFromPending(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPreventiveMaintenance
       * @method POST
       */
      createCreateServiceFromPreventiveMaintenance(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPreventiveMaintenance
       * @method POST
       */
      createCreateServiceFromPreventiveMaintenance(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPreventiveMaintenance
       * @method POST
       */
      createCreateServiceFromPreventiveMaintenance(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CreateServiceFromPreventiveMaintenance
       * @method POST
       */
      createCreateServiceFromPreventiveMaintenance(body: Models.ServiceOrderMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/CanceledServiceOrder
       * @method POST
       */
      createCanceledServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CanceledServiceOrder
       * @method POST
       */
      createCanceledServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CanceledServiceOrder
       * @method POST
       */
      createCanceledServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/CanceledServiceOrder
       * @method POST
       */
      createCanceledServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrders/FinalizeServiceOrder
       * @method POST
       */
      createFinalizeServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/FinalizeServiceOrder
       * @method POST
       */
      createFinalizeServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/FinalizeServiceOrder
       * @method POST
       */
      createFinalizeServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrders/FinalizeServiceOrder
       * @method POST
       */
      createFinalizeServiceOrder(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderServices {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderServices
       * @method GET
       */
      get(query: {
        ServiceOrderId?: number;
        KanbanStageId?: number[];
        AssigneeId?: number[];
        VehicleId?: number;
        Assignee?: undefined;
        ServiceOrderIssueId?: number;
        ServiceId?: number;
        BusinessUnitId?: number;
        DriverId?: number;
        VehicleModelId?: number;
        DepartmentId?: number;
        CustomerId?: number;
        SectorId?: number;
        Status?: Models.ServiceOrderServiceStatus[];
        KanbanView?: undefined;
        IsRunning?: undefined;
        IsPending?: undefined;
        PartinStock?: undefined;
        HasPurchaseRequest?: undefined;
        Type?: Models.MaintenanceType;
        TeamId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices
       * @method POST
       */
      create(body: Models.ServiceOrderService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices
       * @method POST
       */
      create(body: Models.ServiceOrderService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices
       * @method POST
       */
      create(body: Models.ServiceOrderService_): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices
       * @method POST
       */
      create(body: Models.ServiceOrderService_): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ServiceOrderId?: number;
          KanbanStageId?: number[];
          AssigneeId?: number[];
          VehicleId?: number;
          Assignee?: undefined;
          ServiceOrderIssueId?: number;
          ServiceId?: number;
          BusinessUnitId?: number;
          DriverId?: number;
          VehicleModelId?: number;
          DepartmentId?: number;
          CustomerId?: number;
          SectorId?: number;
          Status?: Models.ServiceOrderServiceStatus[];
          KanbanView?: undefined;
          IsRunning?: undefined;
          IsPending?: undefined;
          PartinStock?: undefined;
          HasPurchaseRequest?: undefined;
          Type?: Models.MaintenanceType;
          TeamId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/Start
       * @method POST
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Start
       * @method POST
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Start
       * @method POST
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Start
       * @method POST
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/Pause
       * @method POST
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Pause
       * @method POST
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Pause
       * @method POST
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/Pause
       * @method POST
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderServices/FinalizeServiceOrderService
       * @method POST
       */
      createFinalizeServiceOrderService(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/FinalizeServiceOrderService
       * @method POST
       */
      createFinalizeServiceOrderService(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/FinalizeServiceOrderService
       * @method POST
       */
      createFinalizeServiceOrderService(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderServices/FinalizeServiceOrderService
       * @method POST
       */
      createFinalizeServiceOrderService(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class ServiceOrderToDos {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/ServiceOrderToDos
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderToDos
       * @method POST
       */
      create(body: Models.ServiceOrderToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos
       * @method POST
       */
      create(body: Models.ServiceOrderToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos
       * @method POST
       */
      create(body: Models.ServiceOrderToDo): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos
       * @method POST
       */
      create(body: Models.ServiceOrderToDo): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderToDos/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/ServiceOrderToDos/Status
       * @method GET
       */
      getStatus(): Promise<ApiResponse<void>>;
    }
    export class Services {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Services
       * @method GET
       */
      get(query: {
        Search?: string;
        Type?: Models.ServiceType[];
        ServiceGroupId?: number[];
        MaintenanceDepartmentId?: number;
        NotInServiceOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Services
       * @method POST
       */
      create(body: Models.Service): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services
       * @method POST
       */
      create(body: Models.Service): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services
       * @method POST
       */
      create(body: Models.Service): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services
       * @method POST
       */
      create(body: Models.Service): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Services/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          Type?: Models.ServiceType[];
          ServiceGroupId?: number[];
          MaintenanceDepartmentId?: number;
          NotInServiceOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Services/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Services/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Services/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Services/Service/Excel
       * @method POST
       */
      createServiceExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class SettingLocations {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/SettingLocations
       * @method GET
       */
      get(query: {
        StockLocationDepartmentId?: number[];
        ObjectId?: number[];
        DepartmentId?: number[];
        BusinessUnitId?: number[];
        StockLocationId?: number[];
        Inactive?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SettingLocations
       * @method POST
       */
      create(body: Models.SettingLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations
       * @method POST
       */
      create(body: Models.SettingLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations
       * @method POST
       */
      create(body: Models.SettingLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations
       * @method POST
       */
      create(body: Models.SettingLocation): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SettingLocations/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StockLocationDepartmentId?: number[];
          ObjectId?: number[];
          DepartmentId?: number[];
          BusinessUnitId?: number[];
          StockLocationId?: number[];
          Inactive?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SettingLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/SettingLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SettingLocations/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/SettingLocations/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class StockLocationBusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockLocationBusinessUnits
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationBusinessUnits
       * @method POST
       */
      create(body: Models.StockLocationBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits
       * @method POST
       */
      create(body: Models.StockLocationBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits
       * @method POST
       */
      create(body: Models.StockLocationBusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits
       * @method POST
       */
      create(body: Models.StockLocationBusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationBusinessUnits/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockLocationDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockLocationDepartments
       * @method GET
       */
      get(query: {
        StockLocationBusinessUnitId?: number[];
        DepartmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationDepartments
       * @method POST
       */
      create(body: Models.StockLocationDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments
       * @method POST
       */
      create(body: Models.StockLocationDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments
       * @method POST
       */
      create(body: Models.StockLocationDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments
       * @method POST
       */
      create(body: Models.StockLocationDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StockLocationBusinessUnitId?: number[];
          DepartmentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocationDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockLocations {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockLocations
       * @method GET
       */
      get(query: {
        Name?: string;
        StockLocationDepartmentId?: number;
        StockShelfId?: number;
        StockStreetId?: number;
        ObjectId?: number[];
        DepartmentId?: number[];
        BusinessUnitId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocations
       * @method POST
       */
      create(body: Models.StockLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations
       * @method POST
       */
      create(body: Models.StockLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations
       * @method POST
       */
      create(body: Models.StockLocation): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations
       * @method POST
       */
      create(body: Models.StockLocation): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocations/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          StockLocationDepartmentId?: number;
          StockShelfId?: number;
          StockStreetId?: number;
          ObjectId?: number[];
          DepartmentId?: number[];
          BusinessUnitId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockLocations/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocations/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockLocations/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class StockMovementObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockMovementObjects
       * @method GET
       * @returns {Models.StockMovementObjectGetQueryResult} 200 Success
       */
      get(query: {
        ObjectId?: number;
        Search?: string;
        StockMovementId?: number;
        ProductionOrderId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.StockMovementObjectGetQueryResult>>;

      /**
       * @endpoint /api/StockMovementObjects
       * @method POST
       */
      create(body: Models.StockMovementObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects
       * @method POST
       */
      create(body: Models.StockMovementObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects
       * @method POST
       */
      create(body: Models.StockMovementObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects
       * @method POST
       */
      create(body: Models.StockMovementObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number;
          Search?: string;
          StockMovementId?: number;
          ProductionOrderId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovementObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockMovements {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockMovements
       * @method GET
       * @returns {Models.StockMovementGetQueryResult} 200 Success
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        OperationId?: number[];
        ObjectId?: number[];
        StartDate?: string;
        EndDate?: string;
        Search?: string;
        WhereShow?: Models.WhereShow;
        UserId?: number;
        Status?: Models.StockMovementStatus;
        App?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.StockMovementGetQueryResult>>;

      /**
       * @endpoint /api/StockMovements
       * @method POST
       */
      create(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements
       * @method POST
       */
      create(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements
       * @method POST
       */
      create(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements
       * @method POST
       */
      create(body: Models.StockMovement): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/GetProductionsApp
       * @method GET
       */
      getGetProductionsApp(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        OperationId?: number[];
        ObjectId?: number[];
        StartDate?: string;
        EndDate?: string;
        Search?: string;
        WhereShow?: Models.WhereShow;
        UserId?: number;
        Status?: Models.StockMovementStatus;
        App?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          OperationId?: number[];
          ObjectId?: number[];
          StartDate?: string;
          EndDate?: string;
          Search?: string;
          WhereShow?: Models.WhereShow;
          UserId?: number;
          Status?: Models.StockMovementStatus;
          App?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/Close
       * @method POST
       */
      createClose(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/Close
       * @method POST
       */
      createClose(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/Close
       * @method POST
       */
      createClose(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/Close
       * @method POST
       */
      createClose(body: Models.StockMovement): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/FinishTransfer
       * @method POST
       */
      createFinishTransfer(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/FinishTransfer
       * @method POST
       */
      createFinishTransfer(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/FinishTransfer
       * @method POST
       */
      createFinishTransfer(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/FinishTransfer
       * @method POST
       */
      createFinishTransfer(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockMovements/ReOpen
       * @method POST
       */
      createReOpen(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/ReOpen
       * @method POST
       */
      createReOpen(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/ReOpen
       * @method POST
       */
      createReOpen(body: Models.StockMovement): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockMovements/ReOpen
       * @method POST
       */
      createReOpen(body: Models.StockMovement): Promise<ApiResponse<void>>;
    }
    export class StockRequestFulfillmentObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequestFulfillmentObjects
       * @method GET
       */
      get(query: {
        ObjectId?: number;
        StockRequestFulfillmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillmentObjects
       * @method POST
       */
      create(body: Models.StockRequestFulfillmentObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects
       * @method POST
       */
      create(body: Models.StockRequestFulfillmentObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects
       * @method POST
       */
      create(body: Models.StockRequestFulfillmentObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects
       * @method POST
       */
      create(body: Models.StockRequestFulfillmentObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number;
          StockRequestFulfillmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillmentObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillmentObjects/get_object_from_tag
       * @method GET
       */
      getGetObjectFromTag(query: { Id?: number; tag?: string }): Promise<ApiResponse<void>>;
    }
    export class StockRequestFulfillments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequestFulfillments
       * @method GET
       */
      get(query: {
        Search?: string;
        RequesterId?: number[];
        DepartmentId?: number[];
        BusinessUnitId?: number[];
        StartDate?: string;
        EndDate?: string;
        Status?: Models.StockRequestStatus;
        DepartmentStockName?: string;
        DepartmentStockId?: number[];
        ServiceOrderServiceId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillments
       * @method POST
       */
      create(body: Models.StockRequestFulfillment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments
       * @method POST
       */
      create(body: Models.StockRequestFulfillment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments
       * @method POST
       */
      create(body: Models.StockRequestFulfillment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments
       * @method POST
       */
      create(body: Models.StockRequestFulfillment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          RequesterId?: number[];
          DepartmentId?: number[];
          BusinessUnitId?: number[];
          StartDate?: string;
          EndDate?: string;
          Status?: Models.StockRequestStatus;
          DepartmentStockName?: string;
          DepartmentStockId?: number[];
          ServiceOrderServiceId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestFulfillments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockRequestObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequestObjects
       * @method GET
       */
      get(query: {
        ObjectId?: number;
        StockRequestId?: number;
        ServiceOrderServiceId?: number[];
        ServiceOrderId?: number;
        Search?: string;
        FulfillmentStatus?: Models.FulfillmentStatus[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestObjects
       * @method POST
       */
      create(body: Models.StockRequestObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects
       * @method POST
       */
      create(body: Models.StockRequestObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects
       * @method POST
       */
      create(body: Models.StockRequestObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects
       * @method POST
       */
      create(body: Models.StockRequestObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number;
          StockRequestId?: number;
          ServiceOrderServiceId?: number[];
          ServiceOrderId?: number;
          Search?: string;
          FulfillmentStatus?: Models.FulfillmentStatus[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockRequests {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequests
       * @method GET
       */
      get(query: {
        Search?: string;
        RequesterId?: number[];
        DepartmentId?: number[];
        BusinessUnitId?: number[];
        ServiceOrderServiceId?: number[];
        Status?: Models.StockRequestStatus[];
        FulfillmentStatus?: Models.FulfillmentStatus[];
        AuthorizationStatus?: Models.AuthorizationStatus[];
        ServiceOrderId?: number;
        Requester?: undefined;
        ServiceOrderServiceIsNull?: undefined;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests
       * @method POST
       */
      create(body: Models.StockRequest): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests
       * @method POST
       */
      create(body: Models.StockRequest): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests
       * @method POST
       */
      create(body: Models.StockRequest): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests
       * @method POST
       */
      create(body: Models.StockRequest): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          RequesterId?: number[];
          DepartmentId?: number[];
          BusinessUnitId?: number[];
          ServiceOrderServiceId?: number[];
          Status?: Models.StockRequestStatus[];
          FulfillmentStatus?: Models.FulfillmentStatus[];
          AuthorizationStatus?: Models.AuthorizationStatus[];
          ServiceOrderId?: number;
          Requester?: undefined;
          ServiceOrderServiceIsNull?: undefined;
          StartDate?: string;
          EndDate?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/meet_requisition
       * @method POST
       */
      createMeetRequisition(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/meet_requisition
       * @method POST
       */
      createMeetRequisition(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/meet_requisition
       * @method POST
       */
      createMeetRequisition(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/meet_requisition
       * @method POST
       */
      createMeetRequisition(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close
       * @method POST
       */
      createClose(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/close_fulfillment
       * @method POST
       */
      createCloseFulfillment(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_fulfillment
       * @method POST
       */
      createCloseFulfillment(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_fulfillment
       * @method POST
       */
      createCloseFulfillment(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_fulfillment
       * @method POST
       */
      createCloseFulfillment(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/close_stockRequest
       * @method POST
       */
      createCloseStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_stockRequest
       * @method POST
       */
      createCloseStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_stockRequest
       * @method POST
       */
      createCloseStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/close_stockRequest
       * @method POST
       */
      createCloseStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/reOpen_stockRequest
       * @method POST
       */
      createReOpenStockRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/reOpen_stockRequest
       * @method POST
       */
      createReOpenStockRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/reOpen_stockRequest
       * @method POST
       */
      createReOpenStockRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/reOpen_stockRequest
       * @method POST
       */
      createReOpenStockRequest(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/finished_stockRequest
       * @method POST
       */
      createFinishedStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/finished_stockRequest
       * @method POST
       */
      createFinishedStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/finished_stockRequest
       * @method POST
       */
      createFinishedStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/finished_stockRequest
       * @method POST
       */
      createFinishedStockRequest(body: Models.MeetRequisitionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/terminateRequest
       * @method POST
       */
      createTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/terminateRequest
       * @method POST
       */
      createTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/terminateRequest
       * @method POST
       */
      createTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/terminateRequest
       * @method POST
       */
      createTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequests/openTerminateRequest
       * @method POST
       */
      createOpenTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/openTerminateRequest
       * @method POST
       */
      createOpenTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/openTerminateRequest
       * @method POST
       */
      createOpenTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequests/openTerminateRequest
       * @method POST
       */
      createOpenTerminateRequest(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class StockRequestSettingObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequestSettingObjects
       * @method GET
       */
      get(query: {
        ObjectId?: number;
        StockRequestSettingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettingObjects
       * @method POST
       */
      create(body: Models.StockRequestSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects
       * @method POST
       */
      create(body: Models.StockRequestSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects
       * @method POST
       */
      create(body: Models.StockRequestSettingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects
       * @method POST
       */
      create(body: Models.StockRequestSettingObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number;
          StockRequestSettingId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettingObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockRequestSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockRequestSettings
       * @method GET
       */
      get(query: {
        Search?: string;
        OperationId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettings
       * @method POST
       */
      create(body: Models.StockRequestSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings
       * @method POST
       */
      create(body: Models.StockRequestSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings
       * @method POST
       */
      create(body: Models.StockRequestSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings
       * @method POST
       */
      create(body: Models.StockRequestSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          OperationId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockRequestSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockSettingBusinessUnitMinimums {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums
       * @method POST
       */
      create(body: Models.StockSettingBusinessUnitMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums
       * @method POST
       */
      create(body: Models.StockSettingBusinessUnitMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums
       * @method POST
       */
      create(body: Models.StockSettingBusinessUnitMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums
       * @method POST
       */
      create(body: Models.StockSettingBusinessUnitMinimum): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingBusinessUnitMinimums/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockSettingDepartmentMinimums {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockSettingDepartmentMinimums
       * @method GET
       */
      get(query: {
        StockSettingBusinessUnitMinimumId?: number;
        DepartmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartmentMinimums
       * @method POST
       */
      create(body: Models.StockSettingDepartmentMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums
       * @method POST
       */
      create(body: Models.StockSettingDepartmentMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums
       * @method POST
       */
      create(body: Models.StockSettingDepartmentMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums
       * @method POST
       */
      create(body: Models.StockSettingDepartmentMinimum): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StockSettingBusinessUnitMinimumId?: number;
          DepartmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartmentMinimums/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockSettingDepartments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockSettingDepartments
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number;
        DepartmentId?: number[];
        IsStock?: undefined;
        IsStockInTransit?: undefined;
        IsCycleCounting?: undefined;
        IsDamageStock?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartments
       * @method POST
       */
      create(body: Models.StockSettingDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments
       * @method POST
       */
      create(body: Models.StockSettingDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments
       * @method POST
       */
      create(body: Models.StockSettingDepartment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments
       * @method POST
       */
      create(body: Models.StockSettingDepartment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number;
          DepartmentId?: number[];
          IsStock?: undefined;
          IsStockInTransit?: undefined;
          IsCycleCounting?: undefined;
          IsDamageStock?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingDepartments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockSettingObjectMinimums {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockSettingObjectMinimums
       * @method GET
       */
      get(query: {
        StockSettingDepartmentMinimumId?: number;
        ObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingObjectMinimums
       * @method POST
       */
      create(body: Models.StockSettingObjectMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums
       * @method POST
       */
      create(body: Models.StockSettingObjectMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums
       * @method POST
       */
      create(body: Models.StockSettingObjectMinimum): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums
       * @method POST
       */
      create(body: Models.StockSettingObjectMinimum): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StockSettingDepartmentMinimumId?: number;
          ObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingObjectMinimums/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettingObjectMinimums/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class StockSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockSettings
       * @method GET
       */
      get(query: {
        OperationId?: number;
        OperationKey?: string;
        BusinessUnitId?: number;
        DepartmentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings
       * @method POST
       */
      create(body: Models.StockSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings
       * @method POST
       */
      create(body: Models.StockSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings
       * @method POST
       */
      create(body: Models.StockSetting): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings
       * @method POST
       */
      create(body: Models.StockSetting): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          OperationId?: number;
          OperationKey?: string;
          BusinessUnitId?: number;
          DepartmentId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockSettings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings/BusinessUnits
       * @method GET
       */
      getBusinessUnits(query: {
        Name?: string;
        ParentId?: number;
        IncludeGroup?: undefined;
        Type?: Models.BusinessUnitTypeHttp;
        ProductionPlanId?: number;
        OperationId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        OperationKey?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockSettings/Departments
       * @method GET
       */
      getDepartments(query: {
        Name?: string;
        ParentId?: number;
        IncludeGroup?: undefined;
        Type?: Models.DepartmentTypeHttp;
        OperationId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        ProductionPlanId?: number;
        OperationKey?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;
    }
    export class StockShelfs {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockShelfs
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockShelfs
       * @method POST
       */
      create(body: Models.StockShelf): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs
       * @method POST
       */
      create(body: Models.StockShelf): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs
       * @method POST
       */
      create(body: Models.StockShelf): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs
       * @method POST
       */
      create(body: Models.StockShelf): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockShelfs/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockShelfs/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockShelfs/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockShelfs/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockShelfs/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class StockStreets {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockStreets
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockStreets
       * @method POST
       */
      create(body: Models.StockStreet): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets
       * @method POST
       */
      create(body: Models.StockStreet): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets
       * @method POST
       */
      create(body: Models.StockStreet): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets
       * @method POST
       */
      create(body: Models.StockStreet): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockStreets/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockStreets/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockStreets/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockStreets/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockStreets/Excel
       * @method POST
       */
      createExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class StockTransactions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockTransactions
       * @method GET
       */
      get(query: {
        ObjectCode?: string;
        StartDate?: string;
        EndDate?: string;
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        ObjectId?: number[];
        ObjectLotId?: number[];
        OperationId?: number[];
        SourceParentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions
       * @method POST
       */
      create(body: Models.StockTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions
       * @method POST
       */
      create(body: Models.StockTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions
       * @method POST
       */
      create(body: Models.StockTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions
       * @method POST
       */
      create(body: Models.StockTransaction): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/Reports
       * @method GET
       */
      getReports(query: {
        ObjectCode?: string;
        StartDate?: string;
        EndDate?: string;
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        ObjectId?: number[];
        ObjectLotId?: number[];
        OperationId?: number[];
        SourceParentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectCode?: string;
          StartDate?: string;
          EndDate?: string;
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          ObjectId?: number[];
          ObjectLotId?: number[];
          OperationId?: number[];
          SourceParentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/StockBalance
       * @method POST
       */
      createStockBalance(body: Models.StockBalanceMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockBalance
       * @method POST
       */
      createStockBalance(body: Models.StockBalanceMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockBalance
       * @method POST
       */
      createStockBalance(body: Models.StockBalanceMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockBalance
       * @method POST
       */
      createStockBalance(body: Models.StockBalanceMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactions/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactions/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
    }
    export class StockTransactionThirds {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockTransactionThirds
       * @method GET
       */
      get(query: {
        StartDate?: string;
        EndDate?: string;
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        ObjectId?: number[];
        ObjectLotId?: number[];
        SourceParentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds
       * @method POST
       */
      create(body: Models.StockTransactionThird): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds
       * @method POST
       */
      create(body: Models.StockTransactionThird): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds
       * @method POST
       */
      create(body: Models.StockTransactionThird): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds
       * @method POST
       */
      create(body: Models.StockTransactionThird): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StartDate?: string;
          EndDate?: string;
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          ObjectId?: number[];
          ObjectLotId?: number[];
          SourceParentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionInput
       * @method POST
       */
      createStockTransactionInput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/StockTransactionOutput
       * @method POST
       */
      createStockTransactionOutput(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransactionThirds/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransactionThirds/RevertStockTransaction
       * @method POST
       */
      createRevertStockTransaction(body: Models.StockTransactionMethod): Promise<ApiResponse<void>>;
    }
    export class StockTransferPricingObjects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockTransferPricingObjects
       * @method GET
       */
      get(query: {
        StockTransferPricingId?: number;
        ObjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricingObjects
       * @method POST
       */
      create(body: Models.StockTransferPricingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects
       * @method POST
       */
      create(body: Models.StockTransferPricingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects
       * @method POST
       */
      create(body: Models.StockTransferPricingObject): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects
       * @method POST
       */
      create(body: Models.StockTransferPricingObject): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          StockTransferPricingId?: number;
          ObjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricingObjects/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StockTransferPricings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StockTransferPricings
       * @method GET
       */
      get(query: {
        CompanyId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricings
       * @method POST
       */
      create(body: Models.StockTransferPricing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings
       * @method POST
       */
      create(body: Models.StockTransferPricing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings
       * @method POST
       */
      create(body: Models.StockTransferPricing): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings
       * @method POST
       */
      create(body: Models.StockTransferPricing): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          CompanyId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StockTransferPricings/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class StopTypes {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/StopTypes
       * @method GET
       */
      get(query: {
        Search?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StopTypes
       * @method POST
       */
      create(body: Models.StopType): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes
       * @method POST
       */
      create(body: Models.StopType): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes
       * @method POST
       */
      create(body: Models.StopType): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes
       * @method POST
       */
      create(body: Models.StopType): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StopTypes/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StopTypes/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/StopTypes/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/StopTypes/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TireDiagramPositions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireDiagramPositions
       * @method GET
       */
      get(query: {
        TireDiagramId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagramPositions
       * @method POST
       */
      create(body: Models.TireDiagramPosition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions
       * @method POST
       */
      create(body: Models.TireDiagramPosition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions
       * @method POST
       */
      create(body: Models.TireDiagramPosition): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions
       * @method POST
       */
      create(body: Models.TireDiagramPosition): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          TireDiagramId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagramPositions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TireDiagrams {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireDiagrams
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagrams
       * @method POST
       */
      create(body: Models.TireDiagram): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams
       * @method POST
       */
      create(body: Models.TireDiagram): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams
       * @method POST
       */
      create(body: Models.TireDiagram): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams
       * @method POST
       */
      create(body: Models.TireDiagram): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireDiagrams/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TireEntries {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireEntries
       * @method GET
       */
      get(query: {
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        VehicleId?: number[];
        ObjectId?: number[];
        TireCode?: string;
        Date?: string;
        StartDate?: string;
        EndDate?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireEntries
       * @method POST
       */
      create(body: Models.TireEntry): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries
       * @method POST
       */
      create(body: Models.TireEntry): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries
       * @method POST
       */
      create(body: Models.TireEntry): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries
       * @method POST
       */
      create(body: Models.TireEntry): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireEntries/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          VehicleId?: number[];
          ObjectId?: number[];
          TireCode?: string;
          Date?: string;
          StartDate?: string;
          EndDate?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireEntries/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireEntries/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireEntries/tireEntry
       * @method POST
       */
      createTireEntry(body: Models.TireEntryMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/tireEntry
       * @method POST
       */
      createTireEntry(body: Models.TireEntryMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/tireEntry
       * @method POST
       */
      createTireEntry(body: Models.TireEntryMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireEntries/tireEntry
       * @method POST
       */
      createTireEntry(body: Models.TireEntryMethod): Promise<ApiResponse<void>>;
    }
    export class TireInspections {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireInspections
       * @method GET
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireInspections
       * @method POST
       */
      create(body: Models.TireInspection): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections
       * @method POST
       */
      create(body: Models.TireInspection): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections
       * @method POST
       */
      create(body: Models.TireInspection): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections
       * @method POST
       */
      create(body: Models.TireInspection): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireInspections/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireInspections/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireInspections/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireInspections/ConfirmTireInspection
       * @method POST
       */
      createConfirmTireInspection(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/ConfirmTireInspection
       * @method POST
       */
      createConfirmTireInspection(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/ConfirmTireInspection
       * @method POST
       */
      createConfirmTireInspection(body: Models.Entity): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireInspections/ConfirmTireInspection
       * @method POST
       */
      createConfirmTireInspection(body: Models.Entity): Promise<ApiResponse<void>>;
    }
    export class TireModels {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireModels
       * @method GET
       */
      get(query: {
        ObjectId?: number[];
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireModels
       * @method POST
       */
      create(body: Models.TireModel): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels
       * @method POST
       */
      create(body: Models.TireModel): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels
       * @method POST
       */
      create(body: Models.TireModel): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels
       * @method POST
       */
      create(body: Models.TireModel): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireModels/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ObjectId?: number[];
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireModels/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireModels/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireModels/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireModels/TireModel/Excel
       * @method POST
       */
      createTireModelExcel(body: FormData): Promise<ApiResponse<void>>;
    }
    export class Tires {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Tires
       * @method GET
       */
      get(query: {
        PurchaseObjectId?: number;
        ObjectId?: number[];
        SupplierId?: number[];
        Date?: string;
        StartDate?: string;
        EndDate?: string;
        DocumentNumber?: string;
        Code?: string;
        Search?: string;
        CurrentObjectName?: string;
        Inspection?: undefined;
        Model?: undefined;
        BusinessUnitId?: number;
        DepartmentId?: number;
        Status?: Models.TireStatus;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires
       * @method POST
       */
      create(body: Models.Tire): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires
       * @method POST
       */
      create(body: Models.Tire): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires
       * @method POST
       */
      create(body: Models.Tire): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires
       * @method POST
       */
      create(body: Models.Tire): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          PurchaseObjectId?: number;
          ObjectId?: number[];
          SupplierId?: number[];
          Date?: string;
          StartDate?: string;
          EndDate?: string;
          DocumentNumber?: string;
          Code?: string;
          Search?: string;
          CurrentObjectName?: string;
          Inspection?: undefined;
          Model?: undefined;
          BusinessUnitId?: number;
          DepartmentId?: number;
          Status?: Models.TireStatus;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/TireMount
       * @method POST
       */
      createTireMount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMount
       * @method POST
       */
      createTireMount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMount
       * @method POST
       */
      createTireMount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMount
       * @method POST
       */
      createTireMount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/TireDismount
       * @method POST
       */
      createTireDismount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireDismount
       * @method POST
       */
      createTireDismount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireDismount
       * @method POST
       */
      createTireDismount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireDismount
       * @method POST
       */
      createTireDismount(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/TireReversal
       * @method POST
       */
      createTireReversal(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireReversal
       * @method POST
       */
      createTireReversal(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireReversal
       * @method POST
       */
      createTireReversal(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireReversal
       * @method POST
       */
      createTireReversal(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Tires/TireMeasureGroove
       * @method POST
       */
      createTireMeasureGroove(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMeasureGroove
       * @method POST
       */
      createTireMeasureGroove(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMeasureGroove
       * @method POST
       */
      createTireMeasureGroove(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/Tires/TireMeasureGroove
       * @method POST
       */
      createTireMeasureGroove(body: Models.TireVehicleMethod): Promise<ApiResponse<void>>;
    }
    export class TireShipmentItems {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireShipmentItems
       * @method GET
       */
      get(query: {
        CurrentObjectId?: number[];
        TireShipmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipmentItems
       * @method POST
       */
      create(body: Models.TireShipmentItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems
       * @method POST
       */
      create(body: Models.TireShipmentItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems
       * @method POST
       */
      create(body: Models.TireShipmentItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems
       * @method POST
       */
      create(body: Models.TireShipmentItem): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          CurrentObjectId?: number[];
          TireShipmentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipmentItems/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TireShipments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireShipments
       * @method GET
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipments
       * @method POST
       */
      create(body: Models.TireShipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments
       * @method POST
       */
      create(body: Models.TireShipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments
       * @method POST
       */
      create(body: Models.TireShipment): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments
       * @method POST
       */
      create(body: Models.TireShipment): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipments/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipments/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireShipments/CreatePurchaseFromTireShipment
       * @method POST
       */
      createCreatePurchaseFromTireShipment(body: Models.TireShipmentMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/CreatePurchaseFromTireShipment
       * @method POST
       */
      createCreatePurchaseFromTireShipment(body: Models.TireShipmentMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/CreatePurchaseFromTireShipment
       * @method POST
       */
      createCreatePurchaseFromTireShipment(body: Models.TireShipmentMethod): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireShipments/CreatePurchaseFromTireShipment
       * @method POST
       */
      createCreatePurchaseFromTireShipment(body: Models.TireShipmentMethod): Promise<ApiResponse<void>>;
    }
    export class TireTransactions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireTransactions
       * @method GET
       */
      get(query: {
        TireId?: number[];
        Type?: Models.TireTransactionType;
        Stock?: undefined;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireTransactions
       * @method POST
       */
      create(body: Models.TireTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions
       * @method POST
       */
      create(body: Models.TireTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions
       * @method POST
       */
      create(body: Models.TireTransaction): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions
       * @method POST
       */
      create(body: Models.TireTransaction): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireTransactions/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          TireId?: number[];
          Type?: Models.TireTransactionType;
          Stock?: undefined;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireTransactions/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireTransactions/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TireVehicles {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/TireVehicles
       * @method GET
       */
      get(query: {
        Group?: Models.TireVehicleGroupEnum;
        VehicleId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireVehicles
       * @method POST
       */
      create(body: Models.TireVehicle): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles
       * @method POST
       */
      create(body: Models.TireVehicle): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles
       * @method POST
       */
      create(body: Models.TireVehicle): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles
       * @method POST
       */
      create(body: Models.TireVehicle): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireVehicles/{id}
       * @method GET
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Group?: Models.TireVehicleGroupEnum;
          VehicleId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: undefined;
          Page?: number;
          PageSize?: number;
          GetAll?: undefined;
          Minimal?: undefined;
          NoDataAccess?: undefined;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireVehicles/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint /api/TireVehicles/{id}
       * @method PATCH
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireVehicles/{id}
       * @method DELETE
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/TireVehicles/Groups
       * @method GET
       */
      getGroups(query: {
        Group?: Models.TireVehicleGroupEnum;
        VehicleId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: undefined;
        Page?: number;
        PageSize?: number;
        GetAll?: undefined;
        Minimal?: undefined;
        NoDataAccess?: undefined;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;
    }
    export class Values {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint /api/Values/CorrectStockTransactionUnitCost
       * @method GET
       */
      getCorrectStockTransactionUnitCost(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Values/CorrectStockTransactionInventory
       * @method GET
       */
      getCorrectStockTransactionInventory(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Values/CorrectStockTransactionUnitCostProduction
       * @method GET
       */
      getCorrectStockTransactionUnitCostProduction(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Values/CorrectStockTransactionUnitCostStockMovement
       * @method GET
       */
      getCorrectStockTransactionUnitCostStockMovement(): Promise<ApiResponse<void>>;

      /**
       * @endpoint /api/Values/CorrectStockTransactionNegatives
       * @method GET
       */
      getCorrectStockTransactionNegatives(): Promise<ApiResponse<void>>;
    }
  }
}
