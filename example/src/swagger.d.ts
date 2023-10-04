declare module 'virtual:swagger/core' {
  export interface ApiRequest {
    url: URL;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
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
    export type Account = {
      name?: string;
      initials?: string;
      photo?: string;
      brand?: string;
      createdDate?: string;
      currency?: Models.Currency;
      language?: Models.Language;
      blockedDate?: string;
      status?: Models.AccountStatus;
      isDevelopment?: boolean;
      isActive?: boolean;
      implanterId?: number;
      implanter?: Models.User;
      customerId?: number;
      id?: number;
    };
    export type AccountGet = {
      name?: string;
      initials?: string;
      photo?: string;
      brand?: string;
      currency?: string;
      language?: string;
      status?: Models.AccountStatus;
      implanterId?: number;
      implanter?: Models.UserGet;
      customerId?: number;
      allowed?: boolean;
      users?: number;
      licenses?: number;
      blockedDate?: string;
      products?: Models.AccountProductGet[];
      id?: number;
    };
    export type AccountGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.AccountGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type AccountPatch = {
      name?: string;
      photo?: string;
      brand?: string;
      implanterId?: number;
      language?: Models.Language;
      currency?: Models.Currency;
      status?: Models.AccountStatus;
      blockedDate?: string;
      subscriptionType?: Models.SubscriptionType;
      licenses?: number;
      amount?: number;
      expirationDate?: string;
      id?: number;
    };
    export type AccountPost = {
      name?: string;
      initials?: string;
      photo?: string;
      language?: Models.Language;
      currency?: Models.Currency;
      status?: Models.AccountStatus;
      blockedDate?: string;
      isActive?: boolean;
      implanterId?: number;
      adminName?: string;
      adminEmail?: string;
      customerId?: number;
      products?: Models.AccountProduct[];
      id?: number;
    };
    export type AccountProduct = {
      productId?: number;
      accountId?: number;
      licenses?: number;
      amount?: number;
      expirationDate?: string;
      subscriptionType?: Models.SubscriptionType;
      id?: number;
    };
    export type AccountProductGet = {
      productId?: number;
      productName?: string;
      licenses?: number;
      amount?: number;
      expirationDate?: string;
      subscriptionType?: Models.SubscriptionType;
      id?: number;
    };
    export type AccountStatus = 1 | 2 | 3;
    export type AccountUserSkill = { userId?: number; skillId?: number; id?: number };
    export type Action = {
      automationId?: number;
      processStageId?: number;
      processId?: number;
      type?: Models.ActionType;
      fields?: Models.ActionField[];
      id?: number;
    };
    export type ActionDynamicField = {
      actionFieldId?: number;
      customFieldId?: number;
      customField?: Models.CustomField;
      systemField?: Models.CustomFieldSystemType;
      name?: string;
      relativeDate?: number;
      id?: number;
    };
    export type ActionField = {
      actionId?: number;
      customFieldId?: number;
      customField?: Models.CustomField;
      systemField?: Models.CustomFieldSystemType;
      value?: string;
      valueId?: number;
      valueDate?: string;
      dynamicFields?: Models.ActionDynamicField[];
      id?: number;
    };
    export type ActionPatch = {
      processStageId?: number;
      processId?: number;
      type?: Models.ActionType;
      fields?: Models.ActionField[];
      id?: number;
    };
    export type ActionType = 1 | 2 | 3 | 4 | 5 | 6;
    export type ActiveStatus = 1 | 2;
    export type Attachment = {
      file?: string;
      name?: string;
      date?: string;
      description?: string;
      userId?: number;
      planId?: number;
      serviceOrderServiceId?: number;
      tireInspectionId?: number;
      serviceOrderId?: number;
      planItemId?: number;
      projectId?: number;
      meetingAgendaId?: number;
      meetingId?: number;
      meetingItemId?: number;
      taskId?: number;
      kpiId?: number;
      kpiExtendId?: number;
      useremail?: string;
      id?: number;
    };
    export type AttachmentGet = {
      file?: string;
      name?: string;
      date?: string;
      description?: string;
      userId?: number;
      userName?: string;
      userInitials?: string;
      userPhoto?: string;
      meetingAgendaId?: number;
      projectId?: number;
      meetingId?: number;
      meetingItemId?: number;
      serviceOrderId?: number;
      tireInspectionId?: number;
      taskId?: number;
      kpiId?: number;
      kpiExtendId?: number;
      id?: number;
    };
    export type AttachmentGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.AttachmentGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type AttachmentMeetingAgendaGet = {
      file?: string;
      name?: string;
      date?: string;
      description?: string;
      userId?: number;
      userName?: string;
      userInitials?: string;
      userPhoto?: string;
      meetingAgendaId?: number;
      id?: number;
    };
    export type Automation = {
      processId?: number;
      processStageId?: number;
      name?: string;
      event?: Models.ProcessEvent;
      alertType?: Models.AutomationAlertType;
      fields?: Models.AutomationField[];
      conditions?: Models.Condition[];
      action?: Models.Action;
      id?: number;
    };
    export type AutomationAlertType = 1 | 2 | 3;
    export type AutomationField = {
      automationId?: number;
      customFieldId?: number;
      systemField?: Models.CustomFieldSystemType;
      id?: number;
    };
    export type AutomationPatch = {
      name?: string;
      event?: Models.ProcessEvent;
      alertType?: Models.AutomationAlertType;
      fields?: Models.AutomationField[];
      conditions?: Models.Condition[];
      action?: Models.ActionPatch;
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
    export type BusinessUnitDepartment = {
      assigneeId?: number;
      businessUnitId?: number;
      departmentId?: number;
      id?: number;
    };
    export type BusinessUnitDepartmentPost = {
      businessUnitId?: number;
      departmentId?: number;
      departments?: number[];
      businessUnitDepartments?: number[];
      id?: number;
    };
    export type BusinessUnitGet = {
      name?: string;
      level?: number;
      parentId?: number;
      photo?: string;
      brand?: string;
      assigneeId?: number;
      assignee?: Models.UserMinimalGet;
      currency?: string;
      language?: string;
      blockedDate?: string;
      type?: Models.BusinessUnitType;
      children?: Models.BusinessUnitGet[];
      id?: number;
    };
    export type BusinessUnitGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.BusinessUnitGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type BusinessUnitPatch = {
      businessUnitDepartmentId?: number;
      name?: string;
      parentId?: number;
      photo?: string;
      brand?: string;
      assigneeId?: number;
      blockedDate?: string;
      language?: Models.Language;
      currency?: Models.Currency;
      closedDate?: string;
      id?: number;
    };
    export type BusinessUnitType = 1 | 2;
    export type Canvas = {
      accountId?: number;
      account?: Models.Account;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      departmentId?: number;
      department?: Models.Department;
      name?: string;
      description?: string;
      items?: Models.CanvasItem[];
      members?: Models.CanvasMember[];
      id?: number;
    };
    export type CanvasGet = {
      businessUnitId?: number;
      departmentId?: number;
      name?: string;
      description?: string;
      members?: Models.CanvasMemberGet[];
      id?: number;
    };
    export type CanvasGetById = {
      businessUnitId?: number;
      departmentId?: number;
      name?: string;
      description?: string;
      keyPartness?: Models.CanvasItem[];
      keyActivities?: Models.CanvasItem[];
      keyResources?: Models.CanvasItem[];
      valueProposition?: Models.CanvasItem[];
      customerRelationships?: Models.CanvasItem[];
      customerSegments?: Models.CanvasItem[];
      costStructure?: Models.CanvasItem[];
      revenueStreams?: Models.CanvasItem[];
      brainstorm?: Models.CanvasItem[];
      channels?: Models.CanvasItem[];
      members?: Models.CanvasMemberGet[];
      id?: number;
    };
    export type CanvasGetByIdQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.CanvasGetById[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type CanvasGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.CanvasGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type CanvasItem = {
      canvasId?: number;
      type?: Models.CanvasItemType;
      name?: string;
      description?: string;
      priority?: number;
      color?: string;
      id?: number;
    };
    export type CanvasItemPatch = {
      type?: Models.CanvasItemType;
      name?: string;
      description?: string;
      color?: string;
      priority?: number;
      id?: number;
    };
    export type CanvasItemType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    export type CanvasMember = {
      canvasId?: number;
      canvas?: Models.Canvas;
      userId?: number;
      function?: Models.UserFunction;
      id?: number;
    };
    export type CanvasMemberGet = {
      userId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      function?: Models.UserFunction;
      id?: number;
    };
    export type Chart = {
      accountId?: number;
      account?: Models.Account;
      dashboardId?: number;
      dashboard?: Models.Dashboard;
      name?: string;
      description?: string;
      departmentId?: number;
      type?: Models.ChartType;
      orientation?: Models.ChartOrientation;
      legend?: Models.ChartLegend;
      orderUp?: Models.ChartOrder;
      orderDown?: Models.ChartOrder;
      axes?: Models.ChartAxes[];
      columns?: Models.ChartColumn[];
      lines?: Models.ChartLine[];
      filters?: Models.ChartConditionFilter[];
      showAccumulated?: boolean;
      showAccumulatedAverage?: boolean;
      priority?: number;
      id?: number;
    };
    export type ChartAgregation = 1 | 2 | 3 | 4 | 5;
    export type ChartAxes = { chartId?: number; axis?: Models.ChartAxis; id?: number };
    export type ChartAxis =
      | 1
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
      | 14
      | 15
      | 16
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 25
      | 26;
    export type ChartColumn = {
      chartId?: number;
      value?: Models.ChartValue;
      agregation?: Models.ChartAgregation;
      id?: number;
    };
    export type ChartConditionFilter = {
      chartId?: number;
      parentId?: number;
      type?: Models.ChartFilterType;
      option?: Models.ChartFilterOption;
      value?: string;
      valueId?: number;
      valueDate?: string;
      children?: Models.ChartConditionFilter[];
      isKpiExtend?: boolean;
      key?: string;
      id?: number;
    };
    export type ChartFilterOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
    export type ChartFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15;
    export type ChartFrequency = 1 | 2 | 3 | 4 | 5 | 6 | 7;
    export type ChartGet = {
      dashboardId?: number;
      name?: string;
      description?: string;
      departmentId?: number;
      priority?: number;
      type?: Models.ChartType;
      orientation?: Models.ChartOrientation;
      legend?: Models.ChartLegend;
      orderUp?: Models.ChartOrder;
      orderDown?: Models.ChartOrder;
      axes?: Models.ChartAxes[];
      columns?: Models.ChartColumn[];
      lines?: Models.ChartLine[];
      filters?: Models.ChartConditionFilter[];
      showAccumulated?: boolean;
      showAccumulatedAverage?: boolean;
      data?: undefined;
      id?: number;
    };
    export type ChartGetById = {
      dashboardId?: number;
      name?: string;
      description?: string;
      departmentId?: number;
      priority?: number;
      type?: Models.ChartType;
      orientation?: Models.ChartOrientation;
      legend?: Models.ChartLegend;
      orderUp?: Models.ChartOrder;
      orderDown?: Models.ChartOrder;
      axes?: Models.ChartAxes[];
      columns?: Models.ChartColumn[];
      lines?: Models.ChartLine[];
      filters?: Models.ChartConditionFilter[];
      showAccumulated?: boolean;
      showAccumulatedAverage?: boolean;
      id?: number;
    };
    export type ChartGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.ChartGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type ChartGroup = 1;
    export type ChartLegend = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12;
    export type ChartLine = {
      chartId?: number;
      value?: Models.ChartValue;
      agregation?: Models.ChartAgregation;
      id?: number;
    };
    export type ChartOrder = 1 | 2 | 3 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
    export type ChartOrderPost = { id?: number; priority?: number };
    export type ChartOrientation = 1 | 2;
    export type ChartPatch = {
      name?: string;
      description?: string;
      departmentId?: number;
      type?: Models.ChartType;
      orientation?: Models.ChartOrientation;
      legend?: Models.ChartLegend;
      orderUp?: Models.ChartOrder;
      orderDown?: Models.ChartOrder;
      priority?: number;
      showAccumulated?: boolean;
      showAccumulatedAverage?: boolean;
      axes?: Models.ChartAxes[];
      columns?: Models.ChartColumn[];
      lines?: Models.ChartLine[];
      filters?: Models.ChartConditionFilter[];
      id?: number;
    };
    export type ChartType = 1 | 2 | 3 | 4 | 5 | 6;
    export type ChartValue =
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
    export type Checklist = {
      taskId?: number;
      serviceOrderServiceId?: number;
      name?: string;
      description?: string;
      isCompleted?: boolean;
      id?: number;
    };
    export type Comment = {
      name?: string;
      date?: string;
      oldValue?: string;
      newValue?: string;
      oldDate?: string;
      newDate?: string;
      oldDateHasTime?: boolean;
      newDateHasTime?: boolean;
      projectId?: number;
      taskId?: number;
      planItemId?: number;
      userId?: number;
      assigneeId?: number;
      teamId?: number;
      attachmentId?: number;
      kpiId?: number;
      kpiExtendId?: number;
      serviceOrderServiceId?: number;
      isLog?: boolean;
      level?: number;
      parentId?: number;
      histories?: Models.CommentHistory[];
      mentions?: Models.CommentMention[];
      children?: Models.Comment[];
      id?: number;
    };
    export type CommentGet = {
      name?: string;
      userId?: number;
      userName?: string;
      userPhoto?: string;
      userInitials?: string;
      date?: string;
      isLog?: boolean;
      oldValue?: string;
      newValue?: string;
      oldDateHasTime?: boolean;
      newDateHasTime?: boolean;
      assigneeId?: number;
      assigneeName?: string;
      teamId?: number;
      kpiId?: number;
      kpiExtendId?: number;
      teamName?: string;
      attachmentId?: number;
      attachmentName?: string;
      attachmentFile?: string;
      projectId?: number;
      projectName?: string;
      taskId?: number;
      taskName?: string;
      planItemId?: number;
      serviceOrderId?: number;
      planItemName?: string;
      isEdited?: boolean;
      editedDate?: string;
      children?: Models.CommentGet[];
      mentions?: Models.CommentMention[];
      id?: number;
    };
    export type CommentGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.CommentGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type CommentHistory = { name?: string; date?: string; commentId?: number; userId?: number; id?: number };
    export type CommentHistoryGet = {
      name?: string;
      date?: string;
      userId?: number;
      userName?: string;
      userPhoto?: string;
      userInitials?: string;
      id?: number;
    };
    export type CommentHistoryGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.CommentHistoryGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type CommentMention = { commentId?: number; userId?: number; id?: number };
    export type CommentPatch = {
      connectedUserId?: number;
      name?: string;
      mentions?: Models.CommentMention[];
      id?: number;
    };
    export type Condition = {
      automationId?: number;
      conditionalId?: number;
      parentId?: number;
      customFieldId?: number;
      customField?: Models.CustomField;
      systemField?: Models.CustomFieldSystemType;
      fieldOption?: Models.ConditionFieldOption;
      key?: string;
      value?: string;
      valueId?: number;
      valueDate?: string;
      children?: Models.Condition[];
      id?: number;
    };
    export type Conditional = {
      processId?: number;
      name?: string;
      conditions?: Models.Condition[];
      trueFields?: Models.ConditionalTrueField[];
      falseFields?: Models.ConditionalFalseField[];
      id?: number;
    };
    export type ConditionalFalseField = {
      conditionalId?: number;
      customFieldId?: number;
      systemField?: Models.CustomFieldSystemType;
      isHide?: boolean;
      id?: number;
    };
    export type ConditionalPatch = {
      name?: string;
      conditions?: Models.Condition[];
      trueFields?: Models.ConditionalTrueField[];
      falseFields?: Models.ConditionalFalseField[];
      id?: number;
    };
    export type ConditionalTrueField = {
      conditionalId?: number;
      customFieldId?: number;
      systemField?: Models.CustomFieldSystemType;
      isHide?: boolean;
      id?: number;
    };
    export type ConditionFieldOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
    export type Currency = 1 | 2;
    export type Customer = { name?: string; id?: number };
    export type CustomField = {
      processId?: number;
      processStageId?: number;
      name?: string;
      description?: string;
      helpText?: string;
      type?: Models.CustomFieldType;
      textType?: Models.CustomFieldTextType;
      selectType?: Models.CustomFieldSelectType;
      systemType?: Models.CustomFieldSystemType;
      priority?: number;
      isRequired?: boolean;
      isEditable?: boolean;
      isShowCard?: boolean;
      isSystemField?: boolean;
      isText?: boolean;
      isDate?: boolean;
      fieldConditions?: undefined[];
      trueConditions?: Models.Condition[];
      falseConditions?: Models.Condition[];
      options?: Models.CustomFieldOption[];
      trueConditionsIsHide?: boolean;
      falseConditionsIsHide?: boolean;
      isHide?: boolean;
      groupName?: string;
      id?: number;
    };
    export type CustomFieldOption = {
      name?: string;
      customFieldId?: number;
      taskCustomFieldOptionValues?: Models.TaskCustomFieldOptionValue[];
      id?: number;
    };
    export type CustomFieldPatch = {
      name?: string;
      description?: string;
      helpText?: string;
      type?: Models.CustomFieldType;
      textType?: Models.CustomFieldTextType;
      selectType?: Models.CustomFieldSelectType;
      systemType?: Models.CustomFieldSystemType;
      isRequired?: boolean;
      isEditable?: boolean;
      isShowCard?: boolean;
      priority?: number;
      options?: Models.CustomFieldOption[];
      id?: number;
    };
    export type CustomFieldSelectType = 1 | 2;
    export type CustomFieldSystemType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
    export type CustomFieldTextType = 1 | 2;
    export type CustomFieldType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
    export type Dashboard = {
      accountId?: number;
      assigneeId?: number;
      name?: string;
      description?: string;
      type?: Models.DashboardType;
      members?: Models.DashboardMember[];
      id?: number;
    };
    export type DashboardGet = {
      name?: string;
      description?: string;
      type?: Models.DashboardType;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      members?: Models.DashboardMemberGet[];
      id?: number;
    };
    export type DashboardGetById = {
      name?: string;
      description?: string;
      type?: Models.DashboardType;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      members?: Models.DashboardMemberGet[];
      id?: number;
    };
    export type DashboardGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.DashboardGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type DashboardMember = {
      dashboardId?: number;
      dashboard?: Models.Dashboard;
      userId?: number;
      function?: Models.UserFunction;
      id?: number;
    };
    export type DashboardMemberGet = {
      userId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      function?: Models.UserFunction;
      id?: number;
    };
    export type DashboardPatch = {
      name?: string;
      description?: string;
      assigneeId?: number;
      type?: Models.DashboardType;
      members?: Models.DashboardMember[];
      id?: number;
    };
    export type DashboardType = 1 | 2 | 3;
    export type Department = {
      name?: string;
      level?: number;
      parentId?: number;
      type?: Models.DepartmentType;
      hasTeam?: boolean;
      hasBusinessUnit?: boolean;
      businessUnitDepartmentId?: number;
      children?: Models.Department[];
      businessUnitId?: number;
      id?: number;
    };
    export type DepartmentPatch = {
      name?: string;
      parentId?: number;
      assigneeId?: number;
      businessUnitDepartmentId?: number;
      id?: number;
    };
    export type DepartmentType = 1 | 2;
    export type Direction = 1 | 2;
    export type EmailTemplate = {
      processId?: number;
      name?: string;
      nameSender?: string;
      emailSender?: string;
      emailDestination?: string;
      subject?: string;
      body?: Models.EmailTemplateDynamicField[];
      id?: number;
    };
    export type EmailTemplateDynamicField = {
      emailTemplateId?: number;
      customFieldId?: number;
      customField?: Models.CustomField;
      systemField?: Models.CustomFieldSystemType;
      name?: string;
      id?: number;
    };
    export type EmailTemplatePatch = {
      name?: string;
      nameSender?: string;
      emailSender?: string;
      emailDestination?: string;
      subject?: string;
      body?: Models.EmailTemplateDynamicField[];
      id?: number;
    };
    export type ExtendedPermission = 1 | 2 | 3;
    export type Frequency = 1 | 2 | 3 | 4 | 5 | 6;
    export type FrequencyUserManagement = 1 | 2 | 3;
    export type Holiday = {
      accountId?: number;
      businessUnitId?: number;
      businessUnitDepartmentId?: number;
      teamId?: number;
      name?: string;
      date?: string;
      repeat?: boolean;
      startTime?: string;
      endTime?: string;
      id?: number;
    };
    export type Kpi = {
      name?: string;
      description?: string;
      frequency?: Models.Frequency;
      direction?: Models.Direction;
      metricUnit?: Models.MetricUnit;
      accumulationType?: Models.KpiAccumulationType;
      toleranceUp?: number;
      toleranceDown?: number;
      isActive?: boolean;
      assigneeId?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      extends?: Models.KpiExtend[];
      members?: Models.KpiMember[];
      id?: number;
    };
    export type KpiAccumulationType = 1 | 2 | 3 | 4;
    export type KpiApproveData = {
      connectedUserId?: number;
      kpiId?: number;
      kpiExtendId?: number;
      approvedMeetingItemId?: number;
      approved?: boolean;
      year?: number;
    };
    export type KpiData = {
      kpiId?: number;
      kpiExtendId?: number;
      date?: string;
      goal?: number;
      value?: number;
      accumulatedGoal?: number;
      accumulatedValue?: number;
      approved?: boolean;
      approvedById?: number;
      approvedMeetingItemId?: number;
      approvedDate?: string;
      id?: number;
    };
    export type KpiDataGet = {
      kpiId?: number;
      kpiExtendId?: number;
      date?: string;
      goal?: number;
      value?: number;
      accumulatedGoal?: number;
      accumulatedValue?: number;
      id?: number;
    };
    export type KpiDataPatch = {
      goal?: string;
      value?: string;
      accumulatedGoal?: string;
      accumulatedValue?: string;
      fixedGoal?: string;
      fixedValue?: string;
      adjustmentGoal?: number;
      adjustmentValue?: number;
      adjustmentPercentGoal?: number;
      adjustmentPercentValue?: number;
      quantity?: number;
      id?: number;
    };
    export type KpiExtend = {
      kpiId?: number;
      name?: string;
      kpiChildId?: number;
      assigneeId?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      members?: Models.KpiExtendMember[];
      id?: number;
    };
    export type KpiExtendGet = {
      kpiId?: number;
      name?: string;
      kpiChildId?: number;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      toleranceUp?: number;
      toleranceDown?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      planId?: number;
      planItemId?: number;
      data?: Models.KpiDataGet[];
      members?: Models.KpiMemberGet[];
      function?: Models.KpiFunction;
      goal?: number;
      id?: number;
    };
    export type KpiExtendMember = {
      kpiExtendId?: number;
      userId?: number;
      user?: Models.User;
      function?: Models.KpiFunction;
      id?: number;
    };
    export type KpiExtendPatch = {
      name?: string;
      kpiChildId?: number;
      assigneeId?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      members?: Models.KpiExtendMember[];
      id?: number;
    };
    export type KpiFollowUp = {
      id?: string;
      kpiId?: number;
      kpiExtendId?: number;
      name?: string;
      toleranceUp?: number;
      toleranceDown?: number;
      accumulationType?: Models.KpiAccumulationType;
      metricUnit?: Models.MetricUnit;
      direction?: Models.Direction;
      goal?: number;
      value?: number;
      achievement?: number;
      goalAccumulated?: number;
      valueAccumulated?: number;
      achievementAccumulated?: number;
      approved?: boolean;
      approvedById?: number;
      approvedByName?: string;
      approvedByPhoto?: string;
      approvedYear?: number;
      approvedByInitials?: string;
      approvedMeetingItemId?: number;
      approvedDate?: string;
      approvedDatePT?: string;
      approvedDateEN?: string;
      businessUnitId?: number;
      businessUnitName?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      extends?: Models.KpiFollowUp[];
    };
    export type KpiFunction = 1 | 2 | 3 | 4 | 5 | 6;
    export type KpiGet = {
      name?: string;
      description?: string;
      frequency?: Models.Frequency;
      direction?: Models.Direction;
      metricUnit?: Models.MetricUnit;
      accumulationType?: Models.KpiAccumulationType;
      isActive?: boolean;
      toleranceUp?: number;
      toleranceDown?: number;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      businessUnitId?: number;
      businessUnitName?: string;
      departmentId?: number;
      departmentName?: string;
      teamId?: number;
      teamName?: string;
      planId?: number;
      planItemId?: number;
      planItemName?: string;
      data?: Models.KpiDataGet[];
      extends?: Models.KpiExtendGet[];
      members?: Models.KpiMemberGet[];
      function?: Models.KpiFunction;
      goal?: number;
      hasChildren?: boolean;
      id?: number;
    };
    export type KpiGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.KpiGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type KpiGroup = 1 | 2 | 3 | 4 | 5;
    export type KpiMember = { kpiId?: number; userId?: number; function?: Models.KpiFunction; id?: number };
    export type KpiMemberGet = {
      userId?: number;
      name?: string;
      photo?: string;
      initials?: string;
      function?: Models.KpiFunction;
      canDelete?: boolean;
      id?: number;
    };
    export type KpiPatch = {
      name?: string;
      description?: string;
      frequency?: Models.Frequency;
      direction?: Models.Direction;
      metricUnit?: Models.MetricUnit;
      accumulationType?: Models.KpiAccumulationType;
      toleranceUp?: number;
      toleranceDown?: number;
      assigneeId?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      isActive?: boolean;
      members?: Models.KpiMember[];
      id?: number;
    };
    export type KpiUploadExcel = { connectedAccountId?: number; file?: string; date?: string };
    export type Language = 1 | 2;
    export type Meeting = {
      name?: string;
      createdById?: number;
      assigneeId?: number;
      description?: string;
      nextDate?: string;
      time?: string;
      duration?: number;
      frequency?: Models.MeetingFrequency;
      type?: Models.MeetingType;
      projectId?: number;
      planId?: number;
      businessUnitId?: number;
      departmentId?: number;
      isActive?: boolean;
      members?: Models.MeetingMember[];
      kpis?: Models.MeetingKpi[];
      tasks?: Models.Task_[];
      id?: number;
    };
    export type MeetingAgenda = {
      meetingItemId?: number;
      meetingId?: number;
      name?: string;
      description?: string;
      userId?: number;
      user?: Models.User;
      createdDate?: string;
      isCompleted?: boolean;
      meetingItemIdCompleted?: number;
      attachments?: Models.Attachment[];
      notes?: Models.MeetingNote[];
      tasks?: Models.Task_[];
      priority?: number;
      canDelete?: boolean;
      id?: number;
    };
    export type MeetingAgendaGet = {
      meetingItemId?: number;
      meetingId?: number;
      createdDate?: string;
      userId?: number;
      userName?: string;
      userPhoto?: string;
      userInitials?: string;
      userEmail?: string;
      name?: string;
      description?: string;
      isCompleted?: boolean;
      meetingItemIdCompleted?: number;
      priority?: number;
      notes?: Models.MeetingNoteGet[];
      tasks?: Models.MeetingAgendaTaskGet[];
      attachments?: Models.AttachmentMeetingAgendaGet[];
      canDelete?: boolean;
      id?: number;
    };
    export type MeetingAgendaGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingAgendaGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingAgendaTaskGet = {
      meetingAgendaId?: number;
      createdDate?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      startDate?: string;
      dueDate?: string;
      startDatePT?: string;
      startDateEN?: string;
      dueDatePT?: string;
      dueDateEN?: string;
      hasTime?: boolean;
      name?: string;
      origin?: Models.TaskOrigin;
      taskPriority?: Models.TaskPriority;
      createdDatePT?: string;
      createdDateEN?: string;
      isCompleted?: boolean;
      isEdit?: boolean;
      isEditAssignee?: boolean;
      id?: number;
    };
    export type MeetingDateFrequency = 1 | 2 | 3 | 4;
    export type MeetingEnd = {
      startTime?: string;
      duration?: number;
      nextDate?: string;
      meetingId?: number;
      attendees?: number[];
      emails?: string[];
      sendByEmail?: boolean;
    };
    export type MeetingFrequency = 1 | 2 | 3 | 4;
    export type MeetingGet = {
      name?: string;
      description?: string;
      nextDate?: string;
      time?: string;
      duration?: number;
      frequency?: Models.MeetingFrequency;
      type?: Models.MeetingType;
      projectId?: number;
      planId?: number;
      businessUnitId?: number;
      departmentId?: number;
      status?: Models.MeetingStatus;
      meetingItemIdInProgress?: number;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      isActive?: boolean;
      members?: Models.MeetingMemberGet[];
      id?: number;
    };
    export type MeetingGetById = {
      name?: string;
      description?: string;
      nextDate?: string;
      time?: string;
      duration?: number;
      frequency?: Models.MeetingFrequency;
      type?: Models.MeetingType;
      projectId?: number;
      planId?: number;
      businessUnitId?: number;
      departmentId?: number;
      status?: Models.MeetingStatus;
      meetingItemIdInProgress?: number;
      assigneeId?: number;
      isActive?: boolean;
      assignee?: Models.UserMinimalGet;
      members?: Models.MeetingMemberGetById[];
      kpis?: Models.MeetingKpiGet[];
      id?: number;
    };
    export type MeetingGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingHeadline = {
      meetingId?: number;
      meetingItemId?: number;
      createdDate?: string;
      userId?: number;
      user?: Models.User;
      name?: string;
      description?: string;
      isCompleted?: boolean;
      meetingItemIdCompleted?: number;
      priority?: number;
      id?: number;
    };
    export type MeetingHeadlineGet = {
      meetingItemId?: number;
      meetingId?: number;
      createdDate?: string;
      userId?: number;
      userName?: string;
      userPhoto?: string;
      userInitials?: string;
      name?: string;
      isCompleted?: boolean;
      meetingItemIdCompleted?: number;
      priority?: number;
      id?: number;
    };
    export type MeetingHeadlineGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingHeadlineGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingItemAttendeeGet = {
      userId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      isGuest?: boolean;
      isPresent?: boolean;
    };
    export type MeetingItemGet = {
      meetingId?: number;
      startTime?: string;
      isCompleted?: boolean;
      duration?: number;
      meetingName?: string;
      meetingDescription?: string;
      meetingDuration?: number;
      meetingNextDate?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      isEditable?: boolean;
      attendees?: Models.MeetingItemAttendeeGet[];
      id?: number;
    };
    export type MeetingItemGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingItemGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingItemMinuteById = {
      meetingId?: number;
      startTime?: string;
      isCompleted?: boolean;
      duration?: number;
      meetingName?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      attendees?: Models.MeetingItemAttendeeGet[];
      agendas?: Models.MeetingAgendaGet[];
      notes?: Models.MeetingNoteGet[];
      attachments?: Models.AttachmentMeetingAgendaGet[];
      headlines?: Models.MeetingHeadlineGet[];
      createdTasks?: Models.MeetingAgendaTaskGet[];
      openedTasks?: Models.MeetingAgendaTaskGet[];
      approvedKpis?: Models.KpiFollowUp[];
      id?: number;
    };
    export type MeetingKpi = { kpiId?: number; meetingId?: number; id?: number };
    export type MeetingKpiGet = { kpiId?: number; kpiName?: string; meetingId?: number; id?: number };
    export type MeetingMember = {
      userId?: number;
      meetingId?: number;
      function?: Models.UserFunction;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      id?: number;
    };
    export type MeetingMemberGet = { userId?: number; name?: string; initials?: string; photo?: string; id?: number };
    export type MeetingMemberGetById = {
      userId?: number;
      meetingId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      function?: Models.UserFunction;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      id?: number;
    };
    export type MeetingMemberGetByIdQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingMemberGetById[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingNote = {
      name?: string;
      createdDate?: string;
      userId?: number;
      user?: Models.User;
      meetingItemId?: number;
      meetingAgendaId?: number;
      id?: number;
    };
    export type MeetingNoteFrequency = 1 | 2 | 3 | 4;
    export type MeetingNoteGet = {
      meetingAgendaId?: number;
      createdDate?: string;
      userId?: number;
      userName?: string;
      userPhoto?: string;
      userInitials?: string;
      userEmail?: string;
      name?: string;
      createdDatePT?: string;
      createdDateEN?: string;
      id?: number;
    };
    export type MeetingNoteGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.MeetingNoteGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type MeetingPatch = {
      name?: string;
      description?: string;
      nextDate?: string;
      duration?: number;
      frequency?: Models.MeetingFrequency;
      type?: Models.MeetingType;
      assigneeId?: number;
      planId?: number;
      projectId?: number;
      businessUnitId?: number;
      departmentId?: number;
      isActive?: boolean;
      members?: Models.MeetingMember[];
      kpis?: Models.MeetingKpi[];
      id?: number;
    };
    export type MeetingStart = {
      meetingId?: number;
      connectedAccountId?: number;
      startedUserId?: number;
      isEdit?: boolean;
      attendees?: number[];
      guests?: number[];
    };
    export type MeetingStatus = 1 | 2 | 3 | 4 | 5;
    export type MeetingTemplate = {
      name?: string;
      description?: string;
      agendas?: Models.MeetingTemplateAgenda[];
      id?: number;
    };
    export type MeetingTemplateAgenda = {
      meetingTemplateId?: number;
      name?: string;
      description?: string;
      priority?: number;
      roleId?: number;
      tasks?: Models.MeetingTemplateAgendaTask[];
      id?: number;
    };
    export type MeetingTemplateAgendaPatch = {
      name?: string;
      description?: string;
      priority?: number;
      roleId?: number;
      id?: number;
    };
    export type MeetingTemplateAgendaTask = {
      meetingTemplateAgendaId?: number;
      name?: string;
      description?: string;
      roleId?: number;
      days?: number;
      duration?: number;
      id?: number;
    };
    export type MeetingTemplateImportMemberResource = { roleId?: number; userId?: number };
    export type MeetingTemplateImportResource = {
      meetingTemplateId?: number;
      connectedUserId?: number;
      meetingItemId?: number;
      members?: Models.MeetingTemplateImportMemberResource[];
    };
    export type MeetingType = 1 | 2 | 3 | 4 | 5;
    export type MemberPatch = {
      function?: Models.UserFunction;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      id?: number;
    };
    export type MetricUnit = 1 | 2 | 3;
    export type Permission = 1 | 2;
    export type Plan = {
      name?: string;
      description?: string;
      businessUnitId?: number;
      departmentId?: number;
      assigneeId?: number;
      startDate?: string;
      dueDate?: string;
      closedDate?: string;
      isActive?: boolean;
      isEdit?: boolean;
      type?: Models.PlanType;
      members?: Models.PlanMember[];
      id?: number;
    };
    export type PlanGroup = 1 | 2 | 3;
    export type PlanItem = {
      name?: string;
      description?: string;
      icon?: string;
      status?: Models.PlanItemStatus;
      planId?: number;
      assigneeId?: number;
      priority?: number;
      parentId?: number;
      parentKeyResultId?: number;
      members?: Models.PlanItemMember[];
      startDate?: string;
      dueDate?: string;
      projects?: Models.PlanItemProject[];
      kpis?: Models.PlanItemKpi[];
      level?: number;
      duration?: number;
      departmentId?: number;
      businessUnitId?: number;
      isEdit?: boolean;
      isMember?: boolean;
      id?: number;
    };
    export type PlanItemKpi = { planItemId?: number; kpiId?: number; id?: number };
    export type PlanItemKpiPost = { planItemId?: number; kpis?: number[]; id?: number };
    export type PlanItemMember = { userId?: number; planItemId?: number; function?: Models.UserFunction; id?: number };
    export type PlanItemPatch = {
      name?: string;
      description?: string;
      icon?: string;
      duration?: number;
      status?: Models.PlanItemStatus;
      assigneeId?: number;
      parentId?: number;
      startDate?: string;
      dueDate?: string;
      departmentId?: number;
      businessUnitId?: number;
      members?: Models.PlanItemMember[];
      id?: number;
    };
    export type PlanItemProject = { planItemId?: number; projectId?: number; id?: number };
    export type PlanItemProjectPost = { planItemId?: number; projects?: number[]; id?: number };
    export type PlanItemStatus = 1 | 2 | 3 | 4 | 5;
    export type PlanMember = { userId?: number; planId?: number; function?: Models.UserFunction; id?: number };
    export type PlanPatch = {
      name?: string;
      description?: string;
      businessUnitId?: number;
      departmentId?: number;
      assigneeId?: number;
      startDate?: string;
      dueDate?: string;
      closedDate?: string;
      isActive?: boolean;
      type?: Models.PlanType;
      members?: Models.PlanMember[];
      id?: number;
    };
    export type PlanType = 1 | 2 | 3;
    export type PredecessorType = 1 | 2 | 3 | 4;
    export type Process = {
      name?: string;
      description?: string;
      shareForm?: boolean;
      formPublicUrl?: string;
      type?: Models.ProcessType;
      isActive?: boolean;
      businessUnitId?: number;
      departmentId?: number;
      requesters?: Models.ProcessRequester[];
      members?: Models.ProcessMember[];
      id?: number;
    };
    export type ProcessEvent = 1 | 2 | 3 | 4 | 5 | 6;
    export type ProcessGroup = 1 | 2;
    export type ProcessMember = {
      processId?: number;
      userId?: number;
      user?: Models.User;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      departmentId?: number;
      department?: Models.Department;
      function?: Models.UserFunction;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      key?: string;
      id?: number;
    };
    export type ProcessPatch = {
      name?: string;
      description?: string;
      type?: Models.ProcessType;
      shareForm?: boolean;
      isActive?: boolean;
      businessUnitId?: number;
      departmentId?: number;
      formPublicUrl?: string;
      members?: Models.ProcessMember[];
      requesters?: Models.ProcessRequester[];
      id?: number;
    };
    export type ProcessProject = { processId?: number; projectId?: number; project?: Models.Project; id?: number };
    export type ProcessProjectPost = { processId?: number; projects?: number[]; id?: number };
    export type ProcessRequester = {
      processId?: number;
      teamId?: number;
      team?: Models.Team;
      businessUnitId?: number;
      businessUnit?: Models.BusinessUnit;
      businessUnitDepartmentId?: number;
      businessUnitDepartment?: Models.BusinessUnitDepartment;
      key?: string;
      type?: string;
      id?: number;
    };
    export type ProcessStage = {
      processId?: number;
      name?: string;
      sla?: number;
      isStart?: boolean;
      isEnd?: boolean;
      isAuthorization?: boolean;
      priority?: number;
      shareForm?: boolean;
      formPublicUrl?: string;
      moveTo?: Models.ProcessStageMoveTo[];
      assignees?: Models.ProcessStageAssignee[];
      id?: number;
    };
    export type ProcessStageAssignee = {
      processStageId?: number;
      assigneeId?: number;
      teamId?: number;
      isCreator?: boolean;
      isAllUsers?: boolean;
      key?: string;
      type?: string;
      id?: number;
    };
    export type ProcessStageAssigneeGet = {
      processStageId?: number;
      assigneeId?: number;
      teamId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      email?: string;
      key?: string;
      type?: string;
      members?: Models.UserMinimalGet[];
      membersCount?: number;
      userId?: number;
      id?: number;
    };
    export type ProcessStageMoveTo = { processStageId?: number; moveToId?: number; id?: number };
    export type ProcessStagePatch = {
      name?: string;
      priority?: number;
      sla?: number;
      isStart?: boolean;
      isEnd?: boolean;
      isAuthorization?: boolean;
      shareForm?: boolean;
      formPublicUrl?: string;
      moveTo?: Models.ProcessStageMoveTo[];
      assignees?: Models.ProcessStageAssignee[];
      id?: number;
    };
    export type ProcessType = 1 | 2 | 3 | 4;
    export type Product = { name?: string; accountId?: number; account?: Models.Account; id?: number };
    export type ProductQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.Product[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Program_ = { name?: string; id?: number };
    export type Program_QueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.Program_[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Project = {
      name?: string;
      blockDates?: boolean;
      budget?: number;
      startDate?: string;
      dueDate?: string;
      status?: Models.ProjectStatus;
      managerId?: number;
      ownerId?: number;
      businessUnitId?: number;
      departmentId?: number;
      comments?: Models.Comment[];
      tags?: Models.ProjectTag[];
      customers?: Models.ProjectCustomer[];
      programs?: Models.ProjectProgram[];
      members?: Models.ProjectMember[];
      statusHistory?: Models.ProjectStatusHistory[];
      attachments?: Models.Attachment[];
      planItems?: Models.PlanItemProject[];
      processes?: Models.ProcessProject[];
      projectTemplateId?: number;
      id?: number;
    };
    export type ProjectBaseline = {
      projectId?: number;
      blockDates?: boolean;
      name?: string;
      description?: string;
      createdDate?: string;
      startDate?: string;
      dueDate?: string;
      assigneeId?: number;
      budget?: number;
      id?: number;
    };
    export type ProjectCustomer = { projectId?: number; customerId?: number; customer?: Models.Customer; id?: number };
    export type ProjectGroup = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    export type ProjectMember = {
      userId?: number;
      projectId?: number;
      function?: Models.UserFunction;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      id?: number;
    };
    export type ProjectPatch = {
      connectedUserId?: number;
      name?: string;
      startDate?: string;
      dueDate?: string;
      status?: Models.ProjectStatus;
      managerId?: number;
      ownerId?: number;
      businessUnitId?: number;
      departmentId?: number;
      budget?: number;
      purpose?: string;
      scope?: string;
      successCriteria?: string;
      resources?: string;
      constraints?: string;
      risks?: string;
      purposeLabel?: string;
      scopeLabel?: string;
      successCriteriaLabel?: string;
      resourcesLabel?: string;
      constraintsLabel?: string;
      risksLabel?: string;
      members?: Models.ProjectMember[];
      tags?: Models.ProjectTag[];
      customers?: Models.ProjectCustomer[];
      programs?: Models.ProjectProgram[];
      id?: number;
    };
    export type ProjectProgram = { projectId?: number; programId?: number; program?: Models.Program_; id?: number };
    export type ProjectStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    export type ProjectStatusHistory = {
      createdDate?: string;
      status?: Models.ProjectStatus;
      projectId?: number;
      id?: number;
    };
    export type ProjectTag = { projectId?: number; tagId?: number; tag?: Models.Tag; id?: number };
    export type ProjectTaskFrequency = 1 | 2 | 3 | 4 | 5;
    export type ProjectTemplate = { accountId?: number; name?: string; description?: string; id?: number };
    export type ProjectTemplateImportMemberResource = { roleId?: number; userId?: number };
    export type ProjectTemplateImportResource = {
      projectTemplateId?: number;
      connectedUserId?: number;
      projectId?: number;
      members?: Models.ProjectTemplateImportMemberResource[];
    };
    export type ProjectTemplateTask = {
      projectTemplateId?: number;
      name?: string;
      description?: string;
      roleId?: number;
      estimatedDuration?: number;
      days?: number;
      type?: Models.TaskType;
      parentId?: number;
      hasChildren?: boolean;
      order?: string;
      level?: number;
      priority?: number;
      path?: string;
      children?: Models.ProjectTemplateTask[];
      id?: number;
    };
    export type ProjectTemplateTaskChangeOrderPost = {
      projectTemplateTaskId?: number;
      targetId?: number;
      position?: Models.TaskChangeOrderPosition;
    };
    export type ProjectTemplateTaskImport = { projectTemplateId?: number; projectId?: number };
    export type ProjectTemplateTaskPatch = {
      name?: string;
      description?: string;
      roleId?: number;
      estimatedDuration?: number;
      days?: number;
      priority?: number;
      parentId?: number;
      type?: Models.TaskType;
      id?: number;
    };
    export type Report = {
      assigneeId?: number;
      name?: string;
      description?: string;
      type?: Models.ReportType;
      orderUp?: Models.ReportSystemField;
      orderDown?: Models.ReportSystemField;
      fields?: Models.ReportField[];
      members?: Models.ReportMember[];
      filters?: Models.ReportConditionFilter[];
      id?: number;
    };
    export type ReportConditionFilter = {
      reportId?: number;
      parentId?: number;
      type?: Models.ReportFilterType;
      option?: Models.ChartFilterOption;
      value?: string;
      valueId?: number;
      valueDate?: string;
      children?: Models.ReportConditionFilter[];
      id?: number;
    };
    export type ReportField = {
      reportId?: number;
      field?: Models.ReportSystemField;
      isField?: boolean;
      isFilter?: boolean;
      name?: string;
      id?: number;
    };
    export type ReportFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    export type ReportGetById = {
      name?: string;
      description?: string;
      type?: Models.ReportType;
      assigneeId?: number;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      orderUp?: Models.ReportSystemField;
      orderDown?: Models.ReportSystemField;
      fields?: Models.ReportField[];
      members?: Models.ReportMemberGet[];
      filters?: Models.ReportConditionFilter[];
      id?: number;
    };
    export type ReportMember = { reportId?: number; userId?: number; function?: Models.UserFunction; id?: number };
    export type ReportMemberGet = {
      userId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      function?: Models.UserFunction;
      id?: number;
    };
    export type ReportPatch = {
      name?: string;
      description?: string;
      assigneeId?: number;
      type?: Models.ReportType;
      orderUp?: Models.ReportSystemField;
      orderDown?: Models.ReportSystemField;
      fields?: Models.ReportField[];
      members?: Models.ReportMember[];
      filters?: Models.ReportConditionFilter[];
      id?: number;
    };
    export type ReportQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.Report[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type ReportSystemField = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
    export type ReportType = 1 | 2 | 3;
    export type Risk = {
      name?: string;
      level?: number;
      userId?: number;
      projectId?: number;
      parentId?: number;
      children?: Models.Risk[];
      tasks?: Models.Task_[];
      id?: number;
    };
    export type Role = { name?: string; id?: number };
    export type RoleGet = { name?: string; members?: Models.UserMinimalGet[]; id?: number };
    export type RoleGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.RoleGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Skill = { name?: string; id?: number };
    export type SkillQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.Skill[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Sprint = { name?: string; priority?: number; id?: number };
    export type SubscriptionType = 1 | 2 | 3;
    export type Swot = {
      accountId?: number;
      businessUnitId?: number;
      departmentId?: number;
      assigneeId?: number;
      name?: string;
      description?: string;
      items?: Models.SwotItem[];
      members?: Models.SwotMember[];
      id?: number;
    };
    export type SwotItem = {
      swotId?: number;
      type?: Models.SwotItemType;
      name?: string;
      priority?: number;
      id?: number;
    };
    export type SwotItemPatch = { type?: Models.SwotItemType; name?: string; priority?: number; id?: number };
    export type SwotItemType = 1 | 2 | 3 | 4;
    export type SwotMember = {
      swotId?: number;
      swot?: Models.Swot;
      userId?: number;
      function?: Models.UserFunction;
      id?: number;
    };
    export type Tag = { name?: string; color?: string; id?: number };
    export type TagQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.Tag[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Task_ = {
      description?: string;
      projectId?: number;
      meetingItemId?: number;
      meetingId?: number;
      blockDates?: boolean;
      planItemId?: number;
      name?: string;
      type?: Models.TaskType;
      assigneeId?: number;
      createdById?: number;
      businessUnitId?: number;
      customerId?: number;
      departmentId?: number;
      teamId?: number;
      meetingAgendaId?: number;
      riskId?: number;
      processStageId?: number;
      origin?: Models.TaskOrigin;
      createdDate?: string;
      startDate?: string;
      startDateRealized?: string;
      dueDate?: string;
      hasTime?: boolean;
      repeatEndDate?: string;
      repeatFrequency?: Models.TaskRepeatFrequency;
      repeatOption?: Models.TaskRepeatOptions;
      isCompleted?: boolean;
      status?: Models.TaskStatus_;
      taskPriority?: Models.TaskPriority;
      assignee?: Models.User;
      parentId?: number;
      checklists?: Models.Checklist[];
      members?: Models.TaskMember[];
      attachments?: Models.Attachment[];
      stages?: Models.TaskProcessStage[];
      customFields?: Models.TaskCustomField[];
      isActive?: boolean;
      percentDone?: number;
      level?: number;
      priority?: number;
      order?: string;
      cost?: number;
      isMeetingToAttend?: boolean;
      completedDate?: string;
      sprintId?: number;
      isPrivate?: boolean;
      estimatedDuration?: number;
      path?: string;
      id?: number;
    };
    export type TaskChangeOrderPosition = 1 | 2 | 3;
    export type TaskChangeOrderPost = {
      taskId?: number;
      targetId?: number;
      position?: Models.TaskChangeOrderPosition;
      connectionId?: string;
    };
    export type TaskCustomField = {
      customFieldId?: number;
      customField?: Models.CustomField;
      taskId?: number;
      value?: string;
      valueId?: number;
      valueDate?: string;
      options?: Models.TaskCustomFieldOptionValue[];
      id?: number;
    };
    export type TaskCustomFieldOptionValue = {
      value?: boolean;
      customFieldOptionId?: number;
      taskCustomFieldId?: number;
      id?: number;
    };
    export type TaskCustomFieldPatch = {
      value?: string;
      valueId?: number;
      valueDate?: string;
      options?: Models.TaskCustomFieldOptionValue[];
      id?: number;
    };
    export type TaskGet = {
      createdDate?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      startDate?: string;
      dueDate?: string;
      blockDates?: boolean;
      hasTime?: boolean;
      name?: string;
      description?: string;
      isCompleted?: boolean;
      origin?: Models.TaskOrigin;
      isEdit?: boolean;
      isEditAssignee?: boolean;
      status?: Models.TaskStatus_;
      taskPriority?: Models.TaskPriority;
      sprintId?: number;
      percentDone?: number;
      startDateRealized?: string;
      completedDate?: string;
      estimatedDuration?: number;
      lastProcessStageDate?: string;
      processStageName?: string;
      processName?: string;
      id?: number;
    };
    export type TaskGetById = {
      name?: string;
      description?: string;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      blockDates?: boolean;
      assignee?: Models.UserMinimalGet;
      createdDate?: string;
      startDate?: string;
      dueDate?: string;
      hasTime?: boolean;
      duration?: number;
      totalDuration?: number;
      estimatedDuration?: number;
      status?: Models.TaskStatus_;
      taskPriority?: Models.TaskPriority;
      statusName?: string;
      businessUnitId?: number;
      businessUnitName?: string;
      departmentId?: number;
      departmentName?: string;
      customerId?: number;
      customerName?: string;
      createdById?: number;
      createdByName?: string;
      createdByPhoto?: string;
      createdByInitials?: string;
      createdByEmail?: string;
      teamId?: number;
      teamName?: string;
      parentId?: number;
      sprintId?: number;
      sprintName?: string;
      milestoneName?: string;
      cost?: number;
      origin?: Models.TaskOrigin;
      originName?: string;
      projectId?: number;
      meetingId?: number;
      meetingItemId?: number;
      meetingAgendaId?: number;
      planItemId?: number;
      planId?: number;
      percentDone?: number;
      tasks?: number;
      open?: number;
      done?: number;
      doneInTime?: number;
      doneLate?: number;
      pastDue?: number;
      isRunning?: boolean;
      isMember?: boolean;
      isEdit?: boolean;
      isEditAssignee?: boolean;
      priority?: number;
      order?: string;
      processId?: number;
      processStageId?: number;
      newStageId?: number;
      processStageName?: string;
      checklistsNumber?: number;
      attachmentsNumber?: number;
      commentsNumber?: number;
      repeatFrequency?: Models.TaskRepeatFrequency;
      members?: Models.TaskMemberViewGet[];
      stages?: Models.TaskProcessStageGet[];
      customFields?: Models.TaskCustomField[];
      connectedCards?: undefined[];
      tags?: Models.TaskTagGet[];
      id?: number;
    };
    export type TaskHistory = {
      taskId?: number;
      name?: string;
      date?: string;
      assigneeId?: number;
      startDate?: string;
      dueDate?: string;
      hasTime?: boolean;
      status?: Models.TaskStatus_;
      type?: Models.TaskType;
      teamId?: number;
      planBaselineId?: number;
      sprintId?: number;
      parentId?: number;
      level?: number;
      priority?: number;
      projectBaselineId?: number;
      duration?: number;
      cost?: number;
      percentDone?: number;
      startDateRealized?: string;
      completedDate?: string;
      children?: Models.TaskHistory[];
      path?: string;
      order?: string;
      hasChildren?: boolean;
      id?: number;
    };
    export type TaskMember = {
      userId?: number;
      taskId?: number;
      function?: Models.UserFunction;
      personalPriority?: number;
      id?: number;
    };
    export type TaskMemberViewGet = {
      userId?: number;
      name?: string;
      initials?: string;
      photo?: string;
      function?: Models.UserFunction;
      id?: number;
    };
    export type TaskOrigin = 0 | 1 | 2 | 3 | 4 | -1;
    export type TaskPatch = {
      taskPriority?: Models.TaskPriority;
      taskIds?: number[];
      toDelete?: boolean;
      connectedUserId?: number;
      origin?: Models.TaskOrigin;
      name?: string;
      description?: string;
      startDate?: string;
      dueDate?: string;
      hasTime?: boolean;
      assigneeId?: number;
      estimatedDuration?: number;
      percentDone?: number;
      sprintId?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      customerId?: number;
      projectId?: number;
      processStageId?: number;
      meetingId?: number;
      planItemId?: number;
      originId?: number;
      cost?: number;
      isCompleted?: boolean;
      type?: Models.TaskType;
      status?: Models.TaskStatus_;
      priority?: number;
      personalPriority?: number;
      parentId?: number;
      repeatFrequency?: Models.TaskRepeatFrequency;
      members?: Models.TaskMember[];
      customFields?: Models.TaskCustomField[];
      connectionId?: string;
      id?: number;
    };
    export type TaskPost = {
      description?: string;
      projectId?: number;
      meetingItemId?: number;
      meetingId?: number;
      planItemId?: number;
      name?: string;
      type?: Models.TaskType;
      assigneeId?: number;
      createdById?: number;
      businessUnitId?: number;
      departmentId?: number;
      teamId?: number;
      customerId?: number;
      processId?: number;
      processStageId?: number;
      meetingAgendaId?: number;
      riskId?: number;
      origin?: Models.TaskOrigin;
      createdDate?: string;
      startDate?: string;
      startDateRealized?: string;
      dueDate?: string;
      hasTime?: boolean;
      repeatEndDate?: string;
      repeatFrequency?: Models.TaskRepeatFrequency;
      taskPriority?: Models.TaskPriority;
      isCompleted?: boolean;
      status?: Models.TaskStatus_;
      parentId?: number;
      children?: Models.Task_[];
      checklists?: Models.Checklist[];
      members?: Models.TaskMember[];
      tags?: Models.TaskTag[];
      timetrackings?: Models.Timetracking[];
      predecessors?: Models.TaskPredecessor[];
      comments?: Models.Comment[];
      histories?: Models.TaskHistory[];
      customFields?: Models.TaskCustomField[];
      percentDone?: number;
      level?: number;
      priority?: number;
      personalPriority?: number;
      cost?: number;
      completedDate?: string;
      sprintId?: number;
      isPrivate?: boolean;
      estimatedDuration?: number;
      path?: string;
      connectionId?: string;
      id?: number;
    };
    export type TaskPredecessor = {
      taskId?: number;
      predecessorId?: number;
      type?: Models.PredecessorType;
      id?: number;
    };
    export type TaskPriority = 1 | 2 | 3 | 4;
    export type TaskProcessStage = {
      taskId?: number;
      processStageId?: number;
      userId?: number;
      startDate?: string;
      completedDate?: string;
      estimatedDuration?: number;
      duration?: number;
      id?: number;
    };
    export type TaskProcessStageGet = {
      taskId?: number;
      processStageId?: number;
      processStageName?: string;
      userId?: number;
      userName?: string;
      userInitials?: string;
      userPhoto?: string;
      startDate?: string;
      completedDate?: string;
      estimatedDuration?: number;
      duration?: number;
      assignees?: Models.ProcessStageAssigneeGet[];
      customFields?: Models.TaskCustomField[];
      id?: number;
    };
    export type TaskPublicPost = {
      userName?: string;
      userEmail?: string;
      name?: string;
      description?: string;
      assigneeId?: number;
      createdById?: number;
      businessUnitId?: number;
      departmentId?: number;
      customerId?: number;
      teamId?: number;
      processId?: number;
      processStageId?: number;
      createdDate?: string;
      startDate?: string;
      dueDate?: string;
      hasTime?: boolean;
      status?: Models.TaskStatus_;
      cost?: number;
      estimatedDuration?: number;
      type?: Models.TaskType;
      level?: number;
      customFields?: Models.TaskCustomField[];
      sendEmail?: boolean;
      id?: number;
    };
    export type TaskRepeatFrequency = 1 | 2 | 3 | 4;
    export type TaskRepeatOptions = 1 | 2;
    export type TaskStatus_ = 0 | 1 | 2 | 3 | 4 | -1;
    export type TaskTag = { taskId?: number; tagId?: number; id?: number };
    export type TaskTagGet = { tag?: Models.Tag; id?: number };
    export type TaskType = 1 | 2;
    export type TaskViewGet = {
      assigneeId?: number;
      assignee?: Models.UserMinimalGet;
      assigneeName?: string;
      assigneeInitials?: string;
      assigneePhoto?: string;
      completedDate?: string;
      startDate?: string;
      dueDate?: string;
      hasTime?: boolean;
      name?: string;
      estimatedDuration?: number;
      duration?: number;
      totalDuration?: number;
      status?: Models.TaskStatus_;
      taskPriority?: Models.TaskPriority;
      origin?: Models.TaskOrigin;
      originName?: string;
      sprintId?: number;
      processStageId?: number;
      processStageName?: string;
      processIsLate?: boolean;
      percentDone?: number;
      isRunning?: boolean;
      personalPriority?: string;
      milestoneName?: string;
      members?: Models.TaskMemberViewGet[];
      isMember?: boolean;
      isEdit?: boolean;
      isEditAssignee?: boolean;
      tags?: Models.TaskTagGet[];
      id?: number;
    };
    export type TaskViewGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.TaskViewGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type Team = {
      name?: string;
      level?: number;
      parentId?: number;
      children?: Models.Team[];
      businessUnitDepartmentId?: number;
      id?: number;
    };
    export type TeamGet = {
      name?: string;
      level?: number;
      parentId?: number;
      children?: Models.TeamGet[];
      businessUnitDepartmentId?: number;
      assignee?: Models.UserMinimalGet;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      id?: number;
    };
    export type TeamGetById = {
      name?: string;
      level?: number;
      parentId?: number;
      businessUnitDepartmentId?: number;
      departmentId?: number;
      businessUnitId?: number;
      assignee?: Models.UserMinimalGet;
      assigneeId?: number;
      assigneeName?: string;
      assigneePhoto?: string;
      assigneeInitials?: string;
      id?: number;
    };
    export type TeamGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.TeamGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type TeamMember = {
      teamId?: number;
      userId?: number;
      user?: Models.User;
      isLeader?: boolean;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      roleId?: number;
      role?: Models.Role;
      id?: number;
    };
    export type TeamPatch = { name?: string; parentId?: number; assigneeId?: number; leaderId?: number; id?: number };
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
    export type TimezoneGet = { name?: string; offset?: string; offsetMinutes?: number; id?: number };
    export type TimezoneGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.TimezoneGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
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
    export type User = {
      email?: string;
      name?: string;
      password?: string;
      language?: Models.Language;
      photo?: string;
      initials?: string;
      timezoneId?: number;
      lastAccountId?: number;
      isRoot?: boolean;
      isVerified?: boolean;
      darkTheme?: boolean;
      firstName?: string;
      lastName?: string;
      isActive?: boolean;
      hasTasks?: boolean;
      hasTeams?: boolean;
      businessUnits?: Models.BusinessUnit[];
      id?: number;
    };
    export type UserDevice = { userId?: number; token?: string; endpointArn?: string; id?: number };
    export type UserFunction = 1 | 2;
    export type UserGet = {
      email?: string;
      name?: string;
      photo?: string;
      initials?: string;
      darkTheme?: boolean;
      id?: number;
    };
    export type UserGetByEmail = {
      email?: string;
      name?: string;
      photo?: string;
      initials?: string;
      timezoneId?: number;
      timezone?: Models.TimezoneGet;
      language?: Models.Language;
      id?: number;
    };
    export type UserGetByEmailQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.UserGetByEmail[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type UserGetById = {
      email?: string;
      name?: string;
      photo?: string;
      initials?: string;
      timezoneId?: number;
      timezone?: Models.TimezoneGet;
      isVerified?: boolean;
      language?: Models.Language;
      accountId?: number;
      function?: Models.UserFunction;
      isActive?: boolean;
      skills?: Models.UserSkillGet[];
      businessUnitId?: number;
      departmentId?: number;
      businessUnits?: string[];
      departments?: string[];
      teams?: Models.Team[];
      userHash?: string;
      projectFieldOrder?: boolean;
      darkTheme?: boolean;
      projectFieldId?: boolean;
      projectFieldName?: boolean;
      projectFieldAssignee?: boolean;
      projectFieldStatus?: boolean;
      projectFieldStartDate?: boolean;
      projectFieldStartedDate?: boolean;
      projectFieldDueDate?: boolean;
      projectFieldCompletedDate?: boolean;
      projectFieldDuration?: boolean;
      projectFieldTasks?: boolean;
      projectFieldDone?: boolean;
      projectFieldSprint?: boolean;
      id?: number;
    };
    export type UserGetQueryResult = {
      page?: number;
      pageSize?: number;
      totalItems?: number;
      totalPages?: number;
      items?: Models.UserGet[];
      totals?: Models.Total;
      totalsFooter?: Models.Total;
      noDataAccess?: boolean;
    };
    export type UserManagementGet = {
      name?: string;
      initials?: string;
      photo?: string;
      email?: string;
      progress?: number;
      tasks?: number;
      open?: number;
      pastDue?: number;
      doneInTime?: number;
      doneLate?: number;
      doneOnTimeFiltered?: number;
      doneLateFiltered?: number;
      rankTeam?: number;
      rankCompany?: number;
      inProgressTask?: string;
      inProgressTaskDuration?: number;
      inProgressTaskDueDate?: string;
      id?: number;
    };
    export type UserMinimalGet = { name?: string; initials?: string; photo?: string; id?: number };
    export type UserPatch = {
      email?: string;
      name?: string;
      oldPassword?: string;
      password?: string;
      language?: Models.Language;
      photo?: string;
      initials?: string;
      newAssigneeId?: number;
      timezoneId?: number;
      lastAccountId?: number;
      roleId?: number;
      function?: Models.UserFunction;
      isActive?: boolean;
      isLeader?: boolean;
      myTasks?: Models.Permission;
      tasksFromTeam?: Models.ExtendedPermission;
      darkTheme?: boolean;
      projectFieldOrder?: boolean;
      projectFieldId?: boolean;
      projectFieldName?: boolean;
      projectFieldAssignee?: boolean;
      projectFieldStatus?: boolean;
      projectFieldStartDate?: boolean;
      projectFieldStartedDate?: boolean;
      projectFieldDueDate?: boolean;
      projectFieldCompletedDate?: boolean;
      projectFieldDuration?: boolean;
      projectFieldTasks?: boolean;
      projectFieldDone?: boolean;
      projectFieldSprint?: boolean;
      id?: number;
    };
    export type UserPost = {
      email?: string;
      name?: string;
      photo?: string;
      timezoneId?: number;
      language?: Models.Language;
      teamId?: number;
      isLeader?: boolean;
      function?: Models.UserFunction;
      roleId?: number;
      skills?: Models.AccountUserSkill[];
    };
    export type UserProcessRenewToken = { email?: string; token?: string };
    export type UserResetPassword = {
      email?: string;
      password?: string;
      token?: string;
      firstAccess?: boolean;
      id?: number;
    };
    export type UserSkillGet = { skill?: Models.Skill; id?: number };
    export type Vision = {
      businessUnitId?: number;
      name?: string;
      description?: string;
      icon?: number;
      members?: Models.VisionMember[];
      id?: number;
    };
    export type VisionMember = {
      visionId?: number;
      vision?: Models.Vision;
      userId?: number;
      function?: Models.UserFunction;
      id?: number;
    };
    export type WorkScheduleDayPatch = {
      isActive?: boolean;
      workStartTime?: string;
      workEndTime?: string;
      breakStartTime?: string;
      breakEndTime?: string;
      id?: number;
    };
  }

  export namespace Services {
    export class Accounts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        IsRoot?: boolean;
        ProcessUserId?: number;
        Token?: string;
        ExpirationDate?: string;
        Status?: Models.AccountStatus[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.AccountGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.AccountPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.AccountPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.AccountPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.AccountPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/Public
       * @returns 200 Success
       */
      getPublic(query: {
        Name?: string;
        IsRoot?: boolean;
        ProcessUserId?: number;
        Token?: string;
        ExpirationDate?: string;
        Status?: Models.AccountStatus[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          IsRoot?: boolean;
          ProcessUserId?: number;
          Token?: string;
          ExpirationDate?: string;
          Status?: Models.AccountStatus[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.AccountGet>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AccountPatch,
      ): Promise<ApiResponse<Models.AccountGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AccountPatch,
      ): Promise<ApiResponse<Models.AccountGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AccountPatch,
      ): Promise<ApiResponse<Models.AccountGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AccountPatch,
      ): Promise<ApiResponse<Models.AccountGet>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/Status
       * @returns 200 Success
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Accounts/SubscriptionTypes
       * @returns 200 Success
       */
      getSubscriptionTypes(): Promise<ApiResponse<void>>;
    }
    export class Attachments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProjectId?: number;
        PlanItemId?: number;
        PlanId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        MeetingAgendaId?: number;
        ServiceOrderServiceId?: number;
        TireInspectionId?: number;
        ServiceOrderId?: number;
        TaskId?: number;
        KpiId?: number;
        KpiExtendId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.AttachmentGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Attachment): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/UploadFile
       * @contentType multipart/form-data
       * @returns 200 Success
       */
      createUploadFile(body: FormData): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/List
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createList(body: Models.Attachment[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/List
       * @contentType application/json
       * @returns 200 Success
       */
      createList(body: Models.Attachment[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/List
       * @contentType text/json
       * @returns 200 Success
       */
      createList(body: Models.Attachment[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/List
       * @contentType application/*+json
       * @returns 200 Success
       */
      createList(body: Models.Attachment[]): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Attachments/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Automations {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Automations
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number;
        ProcessStageId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Automations
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Automation): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Automations
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Automation): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Automations
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Automation): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Automations
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Automation): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/Events
       * @returns 200 Success
       */
      getEvents(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/ConditionFieldOptions
       * @returns 200 Success
       */
      getConditionFieldOptions(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/AutomationAlertTypes
       * @returns 200 Success
       */
      getAutomationAlertTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/ActionTypes
       * @returns 200 Success
       */
      getActionTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AutomationPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AutomationPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AutomationPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.AutomationPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Automations/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class BusinessUnits {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits
       * @returns 200 Success
       */
      get(query: {
        IncludeAll?: boolean;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Level?: number;
        OpenId?: number[];
        ParentId?: number;
        UserId?: number;
        TeamId?: number;
        IncludeGroup?: boolean;
        LeaderTeam?: boolean;
        HasProject?: boolean;
        AccountKpi?: boolean;
        IsActive?: boolean;
        ProcessId?: number;
        Type?: Models.BusinessUnitType;
        CompanyId?: number[];
        MaintenanceBusinessUnit?: boolean;
        FullAccess?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.BusinessUnitGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.BusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.BusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.BusinessUnit): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.BusinessUnit): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/Public
       * @returns 200 Success
       */
      getPublic(query: {
        IncludeAll?: boolean;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Level?: number;
        OpenId?: number[];
        ParentId?: number;
        UserId?: number;
        TeamId?: number;
        IncludeGroup?: boolean;
        LeaderTeam?: boolean;
        HasProject?: boolean;
        AccountKpi?: boolean;
        IsActive?: boolean;
        ProcessId?: number;
        Type?: Models.BusinessUnitType;
        CompanyId?: number[];
        MaintenanceBusinessUnit?: boolean;
        FullAccess?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          IncludeAll?: boolean;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Level?: number;
          OpenId?: number[];
          ParentId?: number;
          UserId?: number;
          TeamId?: number;
          IncludeGroup?: boolean;
          LeaderTeam?: boolean;
          HasProject?: boolean;
          AccountKpi?: boolean;
          IsActive?: boolean;
          ProcessId?: number;
          Type?: Models.BusinessUnitType;
          CompanyId?: number[];
          MaintenanceBusinessUnit?: boolean;
          FullAccess?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.BusinessUnitGet>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.BusinessUnitPatch,
      ): Promise<ApiResponse<Models.BusinessUnitGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.BusinessUnitPatch,
      ): Promise<ApiResponse<Models.BusinessUnitGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.BusinessUnitPatch,
      ): Promise<ApiResponse<Models.BusinessUnitGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.BusinessUnitPatch,
      ): Promise<ApiResponse<Models.BusinessUnitGet>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/AddDepartment
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/AddDepartment
       * @contentType application/json
       * @returns 200 Success
       */
      createAddDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/AddDepartment
       * @contentType text/json
       * @returns 200 Success
       */
      createAddDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/AddDepartment
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/RemoveDepartment/{id}
       * @returns 200 Success
       */
      deleteRemoveDepartmentById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/RemoveDepartment
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      deleteRemoveDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/RemoveDepartment
       * @contentType application/json
       * @returns 200 Success
       */
      deleteRemoveDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/RemoveDepartment
       * @contentType text/json
       * @returns 200 Success
       */
      deleteRemoveDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/BusinessUnits/RemoveDepartment
       * @contentType application/*+json
       * @returns 200 Success
       */
      deleteRemoveDepartment(body: Models.BusinessUnitDepartmentPost): Promise<ApiResponse<void>>;
    }
    export class Canvas {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.CanvasGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Canvas): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Canvas): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Canvas): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Canvas): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.CanvasGetByIdQueryResult>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddMember
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddMember(body: Models.CanvasMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddMember
       * @contentType application/json
       * @returns 200 Success
       */
      createAddMember(body: Models.CanvasMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddMember
       * @contentType text/json
       * @returns 200 Success
       */
      createAddMember(body: Models.CanvasMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddMember
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddMember(body: Models.CanvasMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/RemoveMember/{id}
       * @returns 200 Success
       */
      deleteRemoveMemberById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddItem
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddItem(body: Models.CanvasItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddItem
       * @contentType application/json
       * @returns 200 Success
       */
      createAddItem(body: Models.CanvasItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddItem
       * @contentType text/json
       * @returns 200 Success
       */
      createAddItem(body: Models.CanvasItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/AddItem
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddItem(body: Models.CanvasItem): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/RemoveItem/{id}
       * @returns 200 Success
       */
      deleteRemoveItemById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Items/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.CanvasItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Items/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.CanvasItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Items/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.CanvasItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Items/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.CanvasItemPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Members/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateMembersById(
        params: {
          id: number;
        },
        body: Models.MemberPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Members/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateMembersById(
        params: {
          id: number;
        },
        body: Models.MemberPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Members/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateMembersById(
        params: {
          id: number;
        },
        body: Models.MemberPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Canvas/Members/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateMembersById(
        params: {
          id: number;
        },
        body: Models.MemberPatch,
      ): Promise<ApiResponse<void>>;
    }
    export class Charts {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        DashboardId?: number;
        Frequency?: Models.ChartFrequency;
        Start?: string;
        End?: string;
        Group?: Models.ChartGroup;
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        TeamId?: number[];
        AssigneeId?: number[];
        ManagerId?: number[];
        MemberId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.ChartGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Chart): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Chart): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Chart): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Chart): Promise<ApiResponse<Models.Chart>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          DashboardId?: number;
          Frequency?: Models.ChartFrequency;
          Start?: string;
          End?: string;
          Group?: Models.ChartGroup;
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          TeamId?: number[];
          AssigneeId?: number[];
          ManagerId?: number[];
          MemberId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.ChartGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ChartPatch,
      ): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ChartPatch,
      ): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ChartPatch,
      ): Promise<ApiResponse<Models.Chart>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ChartPatch,
      ): Promise<ApiResponse<Models.Chart>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Frequencies
       * @returns 200 Success
       */
      getFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Orientations
       * @returns 200 Success
       */
      getOrientations(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Legends
       * @returns 200 Success
       */
      getLegends(query: { type?: Models.DashboardType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Orders
       * @returns 200 Success
       */
      getOrders(query: { type?: Models.DashboardType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Axis
       * @returns 200 Success
       */
      getAxis(query: { type?: Models.DashboardType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/Values
       * @returns 200 Success
       */
      getValues(query: { type?: Models.DashboardType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/FilterTypes
       * @returns 200 Success
       */
      getFilterTypes(query: { type?: Models.DashboardType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/ChangeOrder
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ChartOrderPost[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/ChangeOrder
       * @contentType application/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ChartOrderPost[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/ChangeOrder
       * @contentType text/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ChartOrderPost[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Charts/ChangeOrder
       * @contentType application/*+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ChartOrderPost[]): Promise<ApiResponse<void>>;
    }
    export class Checklists {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists
       * @returns 200 Success
       */
      get(query: {
        TaskId?: number;
        ServiceOrderServiceId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Checklist): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Checklist): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Checklist): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Checklist): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/List
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createList(body: Models.Checklist[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/List
       * @contentType application/json
       * @returns 200 Success
       */
      createList(body: Models.Checklist[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/List
       * @contentType text/json
       * @returns 200 Success
       */
      createList(body: Models.Checklist[]): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/List
       * @contentType application/*+json
       * @returns 200 Success
       */
      createList(body: Models.Checklist[]): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Checklists/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class CommentHistories {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CommentHistories
       * @returns 200 Success
       */
      get(query: {
        CommentId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.CommentHistoryGetQueryResult>>;
    }
    export class Comments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Comments
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProjectId?: number;
        TaskId?: number;
        PlanItemId?: number;
        UserId?: number;
        KpiId?: number;
        IsLog?: boolean;
        ServiceOrderServiceId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.CommentGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Comments
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Comment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Comments
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Comment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Comments
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Comment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Comments
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Comment): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Comments/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CommentPatch,
      ): Promise<ApiResponse<Models.CommentGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Comments/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CommentPatch,
      ): Promise<ApiResponse<Models.CommentGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Comments/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CommentPatch,
      ): Promise<ApiResponse<Models.CommentGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Comments/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CommentPatch,
      ): Promise<ApiResponse<Models.CommentGet>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Comments/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Conditionals {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Conditional): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Conditional): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Conditional): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Conditional): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ConditionalPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ConditionalPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ConditionalPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ConditionalPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Conditionals/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Customers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Customers
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        Level?: number;
        HasProject?: boolean;
        ProcessId?: number;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Customers
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Customer): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Customers
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Customer): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Customers
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Customer): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Customers
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Customer): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/Public
       * @returns 200 Success
       */
      getPublic(query: {
        Name?: string;
        Level?: number;
        HasProject?: boolean;
        ProcessId?: number;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Customers/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class CustomFields {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/TextTypes
       * @returns 200 Success
       */
      getTextTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/SelectTypes
       * @returns 200 Success
       */
      getSelectTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/FieldSystemTypes
       * @returns 200 Success
       */
      getFieldSystemTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number;
        ProcessStageId?: number;
        Group?: boolean;
        GroupName?: boolean;
        Type?: Models.CustomFieldType;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.CustomField): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.CustomField): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.CustomField): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.CustomField): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CustomFieldPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CustomFieldPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CustomFieldPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.CustomFieldPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/CustomFields/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Dashboards {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        AssigneeId?: number[];
        MemberId?: number[];
        Type?: Models.DashboardType[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.DashboardGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Dashboard): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Dashboard): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Dashboard): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Dashboard): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          AssigneeId?: number[];
          MemberId?: number[];
          Type?: Models.DashboardType[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.DashboardGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DashboardPatch,
      ): Promise<ApiResponse<Models.Dashboard>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DashboardPatch,
      ): Promise<ApiResponse<Models.Dashboard>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DashboardPatch,
      ): Promise<ApiResponse<Models.Dashboard>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DashboardPatch,
      ): Promise<ApiResponse<Models.Dashboard>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Dashboards/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;
    }
    export class Departments {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Departments
       * @returns 200 Success
       */
      get(query: {
        IncludeAll?: boolean;
        UserId?: number;
        ExcludeBusinessUnitId?: number;
        VerifyBusinessUnitId?: number;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Level?: number;
        HasProject?: boolean;
        IncludeGroup?: boolean;
        Type?: Models.DepartmentType;
        ProcessId?: number;
        BusinessUnitDepartment?: boolean;
        CompanyId?: number[];
        IsLeader?: boolean;
        MaintenanceDepartment?: boolean;
        OtherReceiptObjectId?: number;
        OtherReceiptDate?: string;
        ProductionMapId?: number;
        FullAccess?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Departments
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Department): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Departments
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Department): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Departments
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Department): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Departments
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Department): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/Public
       * @returns 200 Success
       */
      getPublic(query: {
        IncludeAll?: boolean;
        UserId?: number;
        ExcludeBusinessUnitId?: number;
        VerifyBusinessUnitId?: number;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Level?: number;
        HasProject?: boolean;
        IncludeGroup?: boolean;
        Type?: Models.DepartmentType;
        ProcessId?: number;
        BusinessUnitDepartment?: boolean;
        CompanyId?: number[];
        IsLeader?: boolean;
        MaintenanceDepartment?: boolean;
        OtherReceiptObjectId?: number;
        OtherReceiptDate?: string;
        ProductionMapId?: number;
        FullAccess?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          IncludeAll?: boolean;
          UserId?: number;
          ExcludeBusinessUnitId?: number;
          VerifyBusinessUnitId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Level?: number;
          HasProject?: boolean;
          IncludeGroup?: boolean;
          Type?: Models.DepartmentType;
          ProcessId?: number;
          BusinessUnitDepartment?: boolean;
          CompanyId?: number[];
          IsLeader?: boolean;
          MaintenanceDepartment?: boolean;
          OtherReceiptObjectId?: number;
          OtherReceiptDate?: string;
          ProductionMapId?: number;
          FullAccess?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DepartmentPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DepartmentPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DepartmentPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.DepartmentPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Departments/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class EmailTemplates {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.EmailTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.EmailTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.EmailTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.EmailTemplate): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.EmailTemplatePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.EmailTemplatePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.EmailTemplatePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.EmailTemplatePatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/EmailTemplates/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Holidays {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays
       * @returns 200 Success
       */
      get(query: {
        UserId?: number;
        BusinessUnitId?: number;
        BusinessUnitDepartmentId?: number;
        TeamId?: number;
        Date?: string;
        Suggestion?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Holiday): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Holiday): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Holiday): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Holiday): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Holidays/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Kpis {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        OneFrequency?: Models.Frequency;
        Direction?: Models.Direction;
        MetricUnit?: Models.MetricUnit;
        AccumulationType?: Models.KpiAccumulationType;
        DatePage?: number;
        DatePageSize?: number;
        Date?: string;
        Frequency?: Models.Frequency[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        TeamId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        MeetingId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        ApprovedMeetingItemId?: number;
        FromAccount?: boolean;
        ReportId?: number;
        Chart?: boolean;
        Status?: Models.ActiveStatus[];
        Group?: Models.KpiGroup;
        AllowGroup?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.KpiGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Kpi): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Kpi): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Kpi): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Kpi): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          OneFrequency?: Models.Frequency;
          Direction?: Models.Direction;
          MetricUnit?: Models.MetricUnit;
          AccumulationType?: Models.KpiAccumulationType;
          DatePage?: number;
          DatePageSize?: number;
          Date?: string;
          Frequency?: Models.Frequency[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          TeamId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          MeetingId?: number[];
          AssigneeId?: number[];
          MemberId?: number[];
          ApprovedMeetingItemId?: number;
          FromAccount?: boolean;
          ReportId?: number;
          Chart?: boolean;
          Status?: Models.ActiveStatus[];
          Group?: Models.KpiGroup;
          AllowGroup?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.KpiGetQueryResult>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.KpiPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.KpiPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.KpiPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.KpiPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/FollowUp
       * @returns 200 Success
       */
      getFollowUp(query: {
        Name?: string;
        OneFrequency?: Models.Frequency;
        Direction?: Models.Direction;
        MetricUnit?: Models.MetricUnit;
        AccumulationType?: Models.KpiAccumulationType;
        DatePage?: number;
        DatePageSize?: number;
        Date?: string;
        Frequency?: Models.Frequency[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        TeamId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        MeetingId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        ApprovedMeetingItemId?: number;
        FromAccount?: boolean;
        ReportId?: number;
        Chart?: boolean;
        Status?: Models.ActiveStatus[];
        Group?: Models.KpiGroup;
        AllowGroup?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Excel
       * @returns 200 Success
       */
      getExcel(query: {
        Name?: string;
        OneFrequency?: Models.Frequency;
        Direction?: Models.Direction;
        MetricUnit?: Models.MetricUnit;
        AccumulationType?: Models.KpiAccumulationType;
        DatePage?: number;
        DatePageSize?: number;
        Date?: string;
        Frequency?: Models.Frequency[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        TeamId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        MeetingId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        ApprovedMeetingItemId?: number;
        FromAccount?: boolean;
        ReportId?: number;
        Chart?: boolean;
        Status?: Models.ActiveStatus[];
        Group?: Models.KpiGroup;
        AllowGroup?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Excel
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createExcel(body: Models.KpiUploadExcel): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Excel
       * @contentType application/json
       * @returns 200 Success
       */
      createExcel(body: Models.KpiUploadExcel): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Excel
       * @contentType text/json
       * @returns 200 Success
       */
      createExcel(body: Models.KpiUploadExcel): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Excel
       * @contentType application/*+json
       * @returns 200 Success
       */
      createExcel(body: Models.KpiUploadExcel): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Dates/{frequency}
       * @returns 200 Success
       */
      getDatesByFrequency(
        params: {
          frequency: Models.Frequency;
        },
        query: {
          Name?: string;
          OneFrequency?: Models.Frequency;
          Direction?: Models.Direction;
          MetricUnit?: Models.MetricUnit;
          AccumulationType?: Models.KpiAccumulationType;
          DatePage?: number;
          DatePageSize?: number;
          Date?: string;
          Frequency?: Models.Frequency[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          TeamId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          MeetingId?: number[];
          AssigneeId?: number[];
          MemberId?: number[];
          ApprovedMeetingItemId?: number;
          FromAccount?: boolean;
          ReportId?: number;
          Chart?: boolean;
          Status?: Models.ActiveStatus[];
          Group?: Models.KpiGroup;
          AllowGroup?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Frequencies
       * @returns 200 Success
       */
      getFrequencies(query: {
        Name?: string;
        OneFrequency?: Models.Frequency;
        Direction?: Models.Direction;
        MetricUnit?: Models.MetricUnit;
        AccumulationType?: Models.KpiAccumulationType;
        DatePage?: number;
        DatePageSize?: number;
        Date?: string;
        Frequency?: Models.Frequency[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        TeamId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        MeetingId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        ApprovedMeetingItemId?: number;
        FromAccount?: boolean;
        ReportId?: number;
        Chart?: boolean;
        Status?: Models.ActiveStatus[];
        Group?: Models.KpiGroup;
        AllowGroup?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Directions
       * @returns 200 Success
       */
      getDirections(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/MetricUnits
       * @returns 200 Success
       */
      getMetricUnits(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/AccumulationTypes
       * @returns 200 Success
       */
      getAccumulationTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Functions
       * @returns 200 Success
       */
      getFunctions(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/Excel
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createDataExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/Excel
       * @contentType application/json
       * @returns 200 Success
       */
      createDataExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/Excel
       * @contentType text/json
       * @returns 200 Success
       */
      createDataExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/Excel
       * @contentType application/*+json
       * @returns 200 Success
       */
      createDataExcel(body: Models.Attachment): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createData(body: Models.KpiData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data
       * @contentType application/json
       * @returns 200 Success
       */
      createData(body: Models.KpiData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data
       * @contentType text/json
       * @returns 200 Success
       */
      createData(body: Models.KpiData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data
       * @contentType application/*+json
       * @returns 200 Success
       */
      createData(body: Models.KpiData): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateDataById(
        params: {
          id: number;
        },
        body: Models.KpiDataPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateDataById(
        params: {
          id: number;
        },
        body: Models.KpiDataPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateDataById(
        params: {
          id: number;
        },
        body: Models.KpiDataPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateDataById(
        params: {
          id: number;
        },
        body: Models.KpiDataPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Data/{id}
       * @returns 200 Success
       */
      deleteDataById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/ApproveData
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createApproveData(body: Models.KpiApproveData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/ApproveData
       * @contentType application/json
       * @returns 200 Success
       */
      createApproveData(body: Models.KpiApproveData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/ApproveData
       * @contentType text/json
       * @returns 200 Success
       */
      createApproveData(body: Models.KpiApproveData): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/ApproveData
       * @contentType application/*+json
       * @returns 200 Success
       */
      createApproveData(body: Models.KpiApproveData): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createExtend(body: Models.KpiExtend): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend
       * @contentType application/json
       * @returns 200 Success
       */
      createExtend(body: Models.KpiExtend): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend
       * @contentType text/json
       * @returns 200 Success
       */
      createExtend(body: Models.KpiExtend): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend
       * @contentType application/*+json
       * @returns 200 Success
       */
      createExtend(body: Models.KpiExtend): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateExtendById(
        params: {
          id: number;
        },
        body: Models.KpiExtendPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateExtendById(
        params: {
          id: number;
        },
        body: Models.KpiExtendPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateExtendById(
        params: {
          id: number;
        },
        body: Models.KpiExtendPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateExtendById(
        params: {
          id: number;
        },
        body: Models.KpiExtendPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Kpis/Extend/{id}
       * @returns 200 Success
       */
      deleteExtendById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingAgendas {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingId?: number;
        MeetingItemId?: number;
        UserId?: number;
        IsCompleted?: boolean;
        MeetingItemIdCompleted?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingAgendaGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingAgenda): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingAgenda): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingAgenda): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingAgenda): Promise<ApiResponse<Models.MeetingAgenda>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingAgenda>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingAgenda>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingAgendas/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingHeadlines {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingId?: number;
        MeetingItemId?: number;
        MeetingItemIdCompleted?: number;
        UserId?: number;
        IsCompleted?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingHeadlineGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingHeadline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingHeadline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingHeadline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingHeadline): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingHeadline>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingHeadline>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingHeadline>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingHeadline>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingHeadlines/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingMembers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers
       * @returns 200 Success
       */
      get(query: {
        MeetingId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingMemberGetByIdQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingMember>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingMember>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingMember>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingMember>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingMembers/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingNotes {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingAgendaId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        MeetingItemIdCompleted?: number;
        Frequency?: Models.MeetingNoteFrequency;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingNoteGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingNote): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingNote): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingNote): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingNote): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/Frequencies
       * @returns 200 Success
       */
      getFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingNoteGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingNoteGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingNoteGet>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<Models.MeetingNoteGet>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingNotes/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Meetings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProjectId?: number;
        _Id?: number;
        IsActive?: boolean;
        AssigneeId?: number[];
        MemberId?: number[];
        TeamId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        Status?: Models.ActiveStatus[];
        Frequency?: Models.MeetingFrequency[];
        Type?: Models.MeetingType[];
        DateFrequency?: Models.MeetingDateFrequency;
        Start?: string;
        End?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Meeting): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Meeting): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Meeting): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Meeting): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ProjectId?: number;
          _Id?: number;
          IsActive?: boolean;
          AssigneeId?: number[];
          MemberId?: number[];
          TeamId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          Status?: Models.ActiveStatus[];
          Frequency?: Models.MeetingFrequency[];
          Type?: Models.MeetingType[];
          DateFrequency?: Models.MeetingDateFrequency;
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.MeetingGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingPatch,
      ): Promise<ApiResponse<Models.Meeting>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingPatch,
      ): Promise<ApiResponse<Models.Meeting>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingPatch,
      ): Promise<ApiResponse<Models.Meeting>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingPatch,
      ): Promise<ApiResponse<Models.Meeting>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items/Minute/{id}
       * @returns 200 Success
       */
      getItemsMinuteById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingId?: number;
          IsCompleted?: boolean;
          UserId?: number[];
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.MeetingItemMinuteById>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items/PreviewMinute/Pdf/{id}
       * @returns 200 Success
       */
      getItemsPreviewMinutePdfById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingId?: number;
          IsCompleted?: boolean;
          UserId?: number[];
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items/Minute/Pdf/{id}
       * @returns 200 Success
       */
      getItemsMinutePdfById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingId?: number;
          IsCompleted?: boolean;
          UserId?: number[];
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items/Minute/Email/{id}
       * @returns 200 Success
       */
      getItemsMinuteEmailById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingId?: number;
          IsCompleted?: boolean;
          UserId?: number[];
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items
       * @returns 200 Success
       */
      getItems(query: {
        Name?: string;
        MeetingId?: number;
        IsCompleted?: boolean;
        UserId?: number[];
        Start?: string;
        End?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.MeetingItemGetQueryResult>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Items/{id}
       * @returns 200 Success
       */
      getItemsById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingId?: number;
          IsCompleted?: boolean;
          UserId?: number[];
          Start?: string;
          End?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.MeetingItemGet>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Frequencies
       * @returns 200 Success
       */
      getFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Start
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createStart(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Start
       * @contentType application/json
       * @returns 200 Success
       */
      createStart(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Start
       * @contentType text/json
       * @returns 200 Success
       */
      createStart(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Start
       * @contentType application/*+json
       * @returns 200 Success
       */
      createStart(body: Models.MeetingStart): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Pause
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createPause(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Pause
       * @contentType application/json
       * @returns 200 Success
       */
      createPause(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Pause
       * @contentType text/json
       * @returns 200 Success
       */
      createPause(body: Models.MeetingStart): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/Pause
       * @contentType application/*+json
       * @returns 200 Success
       */
      createPause(body: Models.MeetingStart): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/End
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createEnd(body: Models.MeetingEnd): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/End
       * @contentType application/json
       * @returns 200 Success
       */
      createEnd(body: Models.MeetingEnd): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/End
       * @contentType text/json
       * @returns 200 Success
       */
      createEnd(body: Models.MeetingEnd): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Meetings/End
       * @contentType application/*+json
       * @returns 200 Success
       */
      createEnd(body: Models.MeetingEnd): Promise<ApiResponse<void>>;
    }
    export class MeetingTemplateAgendas {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingTemplateId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgenda): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgenda): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgenda): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgenda): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingTemplateAgendaPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingTemplateAgendaPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingTemplateAgendaPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.MeetingTemplateAgendaPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendas/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingTemplateAgendaTasks {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingTemplateAgendaId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgendaTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgendaTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgendaTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplateAgendaTask): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplateAgendaTasks/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class MeetingTemplates {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.MeetingTemplate): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/ImportAgendas
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createImportAgendas(body: Models.MeetingTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/ImportAgendas
       * @contentType application/json
       * @returns 200 Success
       */
      createImportAgendas(body: Models.MeetingTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/ImportAgendas
       * @contentType text/json
       * @returns 200 Success
       */
      createImportAgendas(body: Models.MeetingTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/MeetingTemplates/ImportAgendas
       * @contentType application/*+json
       * @returns 200 Success
       */
      createImportAgendas(body: Models.MeetingTemplateImportResource): Promise<ApiResponse<void>>;
    }
    export class Members {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Members
       * @returns 200 Success
       */
      get(query: {
        Search?: string;
        Type?: string[];
        IncludeUserId?: number[];
        IncludeTeamId?: number[];
        IncludeBusinessUnitId?: number[];
        IncludeDepartmentId?: number[];
        IncludeBusinessUnitDepartmentId?: number[];
        ExcludeUserId?: number[];
        ExcludeTeamId?: number[];
        ExcludeBusinessUnitId?: number[];
        ExcludeDepartmentId?: number[];
        ExcludeBusinessUnitDepartmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;
    }
    export class Notifications {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications
       * @returns 200 Success
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Notifications/ReadAll
       * @returns 200 Success
       */
      createReadAll(): Promise<ApiResponse<void>>;
    }
    export class NotificationSettings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/NotificationSettings
       * @returns 200 Success
       */
      get(query: {
        UserId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/NotificationSettings/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/NotificationSettings/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/NotificationSettings/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/NotificationSettings/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
    }
    export class PlanItems {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        PlanId?: number;
        AssigneeId?: number[];
        MemberId?: number[];
        TeamId?: number[];
        AssigneeTeamId?: number[];
        Level?: number;
        IncludeChildren?: boolean;
        IncludeKeyResult?: boolean;
        HasProjects?: boolean;
        HasProjectAndTasks?: boolean;
        HasKpis?: boolean;
        Frequency?: Models.Frequency;
        Status?: Models.ActiveStatus[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.PlanItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.PlanItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.PlanItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.PlanItem): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          PlanId?: number;
          AssigneeId?: number[];
          MemberId?: number[];
          TeamId?: number[];
          AssigneeTeamId?: number[];
          Level?: number;
          IncludeChildren?: boolean;
          IncludeKeyResult?: boolean;
          HasProjects?: boolean;
          HasProjectAndTasks?: boolean;
          HasKpis?: boolean;
          Frequency?: Models.Frequency;
          Status?: Models.ActiveStatus[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanItemPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/Status
       * @returns 200 Success
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddProject
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddProject(body: Models.PlanItemProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddProject
       * @contentType application/json
       * @returns 200 Success
       */
      createAddProject(body: Models.PlanItemProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddProject
       * @contentType text/json
       * @returns 200 Success
       */
      createAddProject(body: Models.PlanItemProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddProject
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddProject(body: Models.PlanItemProjectPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/RemoveProject/{id}
       * @returns 200 Success
       */
      deleteRemoveProjectById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddKpi
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddKpi(body: Models.PlanItemKpiPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddKpi
       * @contentType application/json
       * @returns 200 Success
       */
      createAddKpi(body: Models.PlanItemKpiPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddKpi
       * @contentType text/json
       * @returns 200 Success
       */
      createAddKpi(body: Models.PlanItemKpiPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/AddKpi
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddKpi(body: Models.PlanItemKpiPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/PlanItems/RemoveKpi/{id}
       * @returns 200 Success
       */
      deleteRemoveKpiById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Plans {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Plans
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        Search?: string;
        IncludeKpis?: boolean;
        Group?: Models.PlanGroup;
        Status?: Models.ActiveStatus[];
        AssigneeId?: number[];
        MemberId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Plans
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Plan): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Plans
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Plan): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Plans
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Plan): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Plans
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Plan): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          Search?: string;
          IncludeKpis?: boolean;
          Group?: Models.PlanGroup;
          Status?: Models.ActiveStatus[];
          AssigneeId?: number[];
          MemberId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.PlanPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/Status
       * @returns 200 Success
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Plans/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;
    }
    export class Processes {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number;
        ProcessStageId?: number;
        Status?: Models.ActiveStatus[];
        MemberId?: number[];
        AssigneeId?: number[];
        TeamId?: number[];
        HasTasks?: boolean;
        HasTickets?: boolean;
        Group?: Models.ProcessGroup;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Process): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Process): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Process): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Process): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ProcessId?: number;
          ProcessStageId?: number;
          Status?: Models.ActiveStatus[];
          MemberId?: number[];
          AssigneeId?: number[];
          TeamId?: number[];
          HasTasks?: boolean;
          HasTickets?: boolean;
          Group?: Models.ProcessGroup;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProcessPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProcessPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProcessPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProcessPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage
       * @returns 200 Success
       */
      getStage(query: {
        Name?: string;
        ProcessId?: number;
        ProcessStageId?: number;
        Status?: Models.ActiveStatus[];
        MemberId?: number[];
        AssigneeId?: number[];
        TeamId?: number[];
        HasTasks?: boolean;
        HasTickets?: boolean;
        Group?: Models.ProcessGroup;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createStage(body: Models.ProcessStage): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage
       * @contentType application/json
       * @returns 200 Success
       */
      createStage(body: Models.ProcessStage): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage
       * @contentType text/json
       * @returns 200 Success
       */
      createStage(body: Models.ProcessStage): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage
       * @contentType application/*+json
       * @returns 200 Success
       */
      createStage(body: Models.ProcessStage): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @returns 200 Success
       */
      getStageById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ProcessId?: number;
          ProcessStageId?: number;
          Status?: Models.ActiveStatus[];
          MemberId?: number[];
          AssigneeId?: number[];
          TeamId?: number[];
          HasTasks?: boolean;
          HasTickets?: boolean;
          Group?: Models.ProcessGroup;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateStageById(
        params: {
          id: number;
        },
        body: Models.ProcessStagePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateStageById(
        params: {
          id: number;
        },
        body: Models.ProcessStagePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateStageById(
        params: {
          id: number;
        },
        body: Models.ProcessStagePatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateStageById(
        params: {
          id: number;
        },
        body: Models.ProcessStagePatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Stage/{id}
       * @returns 200 Success
       */
      deleteStageById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/CustomFieldTypes
       * @returns 200 Success
       */
      getCustomFieldTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/AddProject
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddProject(body: Models.ProcessProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/AddProject
       * @contentType application/json
       * @returns 200 Success
       */
      createAddProject(body: Models.ProcessProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/AddProject
       * @contentType text/json
       * @returns 200 Success
       */
      createAddProject(body: Models.ProcessProjectPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/AddProject
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddProject(body: Models.ProcessProjectPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Processes/RemoveProject/{id}
       * @returns 200 Success
       */
      deleteRemoveProjectById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Products {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Products
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.ProductQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Products
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Product): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Products
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Product): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Products
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Product): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Products
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Product): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Products/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Products/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Products/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Products/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Products/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Programs {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Programs
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        Level?: number;
        HasProject?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.Program_QueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Programs
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Program_): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Programs
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Program_): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Programs
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Program_): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Programs
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Program_): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Programs/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Programs/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Programs/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Programs/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Programs/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProjectBaselines {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.ProjectBaseline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.ProjectBaseline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.ProjectBaseline): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.ProjectBaseline): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ProjectId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectBaselines/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProjectMembers {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers
       * @returns 200 Success
       */
      get(query: {
        ProjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.ProjectMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.ProjectMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.ProjectMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.ProjectMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectMembers/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Projects {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        Search?: string;
        ReportId?: number;
        OwnerId?: number[];
        ProgramId?: number[];
        ManagerId?: number[];
        MemberId?: number[];
        TeamId?: number[];
        ManagerTeamId?: number[];
        OwnerTeamId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        CustomerId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        TagId?: number[];
        Status?: Models.ProjectStatus[];
        Group?: Models.ProjectGroup;
        HasMilestone?: boolean;
        ProjectPortfolio?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Project): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Project): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Project): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Project): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          Search?: string;
          ReportId?: number;
          OwnerId?: number[];
          ProgramId?: number[];
          ManagerId?: number[];
          MemberId?: number[];
          TeamId?: number[];
          ManagerTeamId?: number[];
          OwnerTeamId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          CustomerId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          TagId?: number[];
          Status?: Models.ProjectStatus[];
          Group?: Models.ProjectGroup;
          HasMilestone?: boolean;
          ProjectPortfolio?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Portfolio
       * @returns 200 Success
       */
      getPortfolio(query: {
        ProjectMonths?: boolean;
        Projects?: boolean;
        Milestone?: boolean;
        Managers?: boolean;
        Programs?: boolean;
        BusinessUnits?: boolean;
        Departments?: boolean;
        Customers?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Tasks/Frequencies
       * @returns 200 Success
       */
      getTasksFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Pdf
       * @returns 200 Success
       */
      getPdf(query: {
        Name?: string;
        Search?: string;
        ReportId?: number;
        OwnerId?: number[];
        ProgramId?: number[];
        ManagerId?: number[];
        MemberId?: number[];
        TeamId?: number[];
        ManagerTeamId?: number[];
        OwnerTeamId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        CustomerId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        TagId?: number[];
        Status?: Models.ProjectStatus[];
        Group?: Models.ProjectGroup;
        HasMilestone?: boolean;
        ProjectPortfolio?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Excel
       * @returns 200 Success
       */
      getExcel(query: {
        Name?: string;
        Search?: string;
        ReportId?: number;
        OwnerId?: number[];
        ProgramId?: number[];
        ManagerId?: number[];
        MemberId?: number[];
        TeamId?: number[];
        ManagerTeamId?: number[];
        OwnerTeamId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        CustomerId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        TagId?: number[];
        Status?: Models.ProjectStatus[];
        Group?: Models.ProjectGroup;
        HasMilestone?: boolean;
        ProjectPortfolio?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Pdf/{id}
       * @returns 200 Success
       */
      getSchedulePdfById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          Search?: string;
          ReportId?: number;
          OwnerId?: number[];
          ProgramId?: number[];
          ManagerId?: number[];
          MemberId?: number[];
          TeamId?: number[];
          ManagerTeamId?: number[];
          OwnerTeamId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          CustomerId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          TagId?: number[];
          Status?: Models.ProjectStatus[];
          Group?: Models.ProjectGroup;
          HasMilestone?: boolean;
          ProjectPortfolio?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Excel/{id}
       * @returns 200 Success
       */
      getScheduleExcelById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          Search?: string;
          ReportId?: number;
          OwnerId?: number[];
          ProgramId?: number[];
          ManagerId?: number[];
          MemberId?: number[];
          TeamId?: number[];
          ManagerTeamId?: number[];
          OwnerTeamId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          CustomerId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          TagId?: number[];
          Status?: Models.ProjectStatus[];
          Group?: Models.ProjectGroup;
          HasMilestone?: boolean;
          ProjectPortfolio?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Excel
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createScheduleExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Excel
       * @contentType application/json
       * @returns 200 Success
       */
      createScheduleExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Excel
       * @contentType text/json
       * @returns 200 Success
       */
      createScheduleExcel(body: Models.Attachment): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Schedule/Excel
       * @contentType application/*+json
       * @returns 200 Success
       */
      createScheduleExcel(body: Models.Attachment): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/Status
       * @returns 200 Success
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/AddTag
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddTag(body: Models.ProjectTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/AddTag
       * @contentType application/json
       * @returns 200 Success
       */
      createAddTag(body: Models.ProjectTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/AddTag
       * @contentType text/json
       * @returns 200 Success
       */
      createAddTag(body: Models.ProjectTag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/AddTag
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddTag(body: Models.ProjectTag): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Projects/RemoveTag/{id}
       * @returns 200 Success
       */
      deleteRemoveTagById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class ProjectTemplates {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates
       * @returns 200 Success
       */
      get(query: {
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplate): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplate): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/ImportTasks
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createImportTasks(body: Models.ProjectTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/ImportTasks
       * @contentType application/json
       * @returns 200 Success
       */
      createImportTasks(body: Models.ProjectTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/ImportTasks
       * @contentType text/json
       * @returns 200 Success
       */
      createImportTasks(body: Models.ProjectTemplateImportResource): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplates/ImportTasks
       * @contentType application/*+json
       * @returns 200 Success
       */
      createImportTasks(body: Models.ProjectTemplateImportResource): Promise<ApiResponse<void>>;
    }
    export class ProjectTemplateTasks {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks
       * @returns 200 Success
       */
      get(query: {
        ProjectTemplateId?: number;
        ParentId?: number;
        Level?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplateTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplateTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplateTask): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.ProjectTemplateTask): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProjectTemplateId?: number;
          ParentId?: number;
          Level?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectTemplateTaskPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectTemplateTaskPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectTemplateTaskPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ProjectTemplateTaskPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/Import
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createImport(body: Models.ProjectTemplateTaskImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/Import
       * @contentType application/json
       * @returns 200 Success
       */
      createImport(body: Models.ProjectTemplateTaskImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/Import
       * @contentType text/json
       * @returns 200 Success
       */
      createImport(body: Models.ProjectTemplateTaskImport): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/Import
       * @contentType application/*+json
       * @returns 200 Success
       */
      createImport(body: Models.ProjectTemplateTaskImport): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/ChangeOrder
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ProjectTemplateTaskChangeOrderPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/ChangeOrder
       * @contentType application/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ProjectTemplateTaskChangeOrderPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/ChangeOrder
       * @contentType text/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ProjectTemplateTaskChangeOrderPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/ProjectTemplateTasks/ChangeOrder
       * @contentType application/*+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.ProjectTemplateTaskChangeOrderPost): Promise<ApiResponse<void>>;
    }
    export class Reports {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ReportId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.ReportQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Reports
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Report): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Reports
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Report): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Reports
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Report): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Reports
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Report): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ReportId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.ReportGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ReportPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ReportPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ReportPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.ReportPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/Pdf
       * @returns 200 Success
       */
      getPdf(query: {
        Name?: string;
        ReportId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/Excel
       * @returns 200 Success
       */
      getExcel(query: {
        Name?: string;
        ReportId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/Orders
       * @returns 200 Success
       */
      getOrders(query: { type?: Models.ReportType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/Fields
       * @returns 200 Success
       */
      getFields(query: { type?: Models.ReportType }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Reports/FilterTypes
       * @returns 200 Success
       */
      getFilterTypes(): Promise<ApiResponse<void>>;
    }
    export class Risks {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Risks
       * @returns 200 Success
       */
      get(query: {
        ProjectId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Risks
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Risk): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Risks
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Risk): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Risks
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Risk): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Risks
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Risk): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Risks/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Risks/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Risks/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Risks/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Risks/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Roles {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Roles
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        MeetingTemplateId?: number;
        ProjectTemplateId?: number;
        TeamId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.RoleGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Roles
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Role): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Roles
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Role): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Roles
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Role): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Roles
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Role): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          MeetingTemplateId?: number;
          ProjectTemplateId?: number;
          TeamId?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.RoleGet>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Roles/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Skills {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Skills
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ExcludeUserId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.SkillQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Skills
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Skill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Skills
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Skill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Skills
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Skill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Skills
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Skill): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Skills/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Skills/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Skills/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Skills/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Skills/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Sprints {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ProcessId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Sprint): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Sprint): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Sprint): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Sprint): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Sprints/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Swots {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Swots
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Swot): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Swot): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Swot): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Swot): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Name?: string;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/AddItem
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddItem(body: Models.SwotItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/AddItem
       * @contentType application/json
       * @returns 200 Success
       */
      createAddItem(body: Models.SwotItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/AddItem
       * @contentType text/json
       * @returns 200 Success
       */
      createAddItem(body: Models.SwotItem): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/AddItem
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddItem(body: Models.SwotItem): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/RemoveItem/{id}
       * @returns 200 Success
       */
      deleteRemoveItemById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/Items/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.SwotItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/Items/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.SwotItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/Items/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.SwotItemPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Swots/Items/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateItemsById(
        params: {
          id: number;
        },
        body: Models.SwotItemPatch,
      ): Promise<ApiResponse<void>>;
    }
    export class Tags {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tags
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.TagQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tags
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Tag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tags
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Tag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tags
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Tag): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tags
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Tag): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tags/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tags/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tags/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tags/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Tags/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class TaskHistorys {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/TaskHistorys
       * @returns 200 Success
       */
      get(query: {
        ProjectBaselineId?: number;
        Level?: number;
        ParentId?: number;
        OpenId?: number[];
        IncludeChildren?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;
    }
    export class TaskPredecessors {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.TaskPredecessor): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.TaskPredecessor): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.TaskPredecessor): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.TaskPredecessor): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/TaskPredecessors/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Tasks {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks
       * @returns 200 Success
       */
      get(query: {
        Search?: string;
        Token?: string;
        AccountId?: number;
        OriginId?: number[];
        ProjectId?: number;
        ProcessId?: number;
        ProcessStageId?: number;
        ProjectBaselineId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        ExcludeMeetingItemId?: number;
        MeetingAgendaId?: number;
        PlanId?: number;
        PlanItemId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        TeamId?: number;
        IsCompleted?: boolean;
        DaysCreated?: number;
        DaysCompleted?: number;
        Level?: number;
        ParentId?: number;
        CreatedById?: number[];
        ProgramId?: number[];
        CustomerId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        SprintId?: number[];
        TagId?: number[];
        Status?: Models.TaskStatus_[];
        TaskPriority?: Models.TaskPriority[];
        Type?: Models.TaskType;
        Origin?: Models.TaskOrigin;
        StartDate?: string;
        DueDate?: string;
        OpenId?: number[];
        ParentIsNull?: boolean;
        Hierarchy?: boolean;
        Portfolio?: boolean;
        ShowProgress?: boolean;
        IncludeChildren?: boolean;
        FilterBy?: string;
        Start?: string;
        End?: string;
        Frequency?: Models.ProjectTaskFrequency;
        View?: string;
        IsReport?: boolean;
        OpenLevel?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.TaskViewGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.TaskPost): Promise<ApiResponse<Models.TaskPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.TaskPost): Promise<ApiResponse<Models.TaskPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.TaskPost): Promise<ApiResponse<Models.TaskPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.TaskPost): Promise<ApiResponse<Models.TaskPost>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Public
       * @returns 200 Success
       */
      getPublic(query: {
        Search?: string;
        Token?: string;
        AccountId?: number;
        OriginId?: number[];
        ProjectId?: number;
        ProcessId?: number;
        ProcessStageId?: number;
        ProjectBaselineId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        ExcludeMeetingItemId?: number;
        MeetingAgendaId?: number;
        PlanId?: number;
        PlanItemId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        TeamId?: number;
        IsCompleted?: boolean;
        DaysCreated?: number;
        DaysCompleted?: number;
        Level?: number;
        ParentId?: number;
        CreatedById?: number[];
        ProgramId?: number[];
        CustomerId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        SprintId?: number[];
        TagId?: number[];
        Status?: Models.TaskStatus_[];
        TaskPriority?: Models.TaskPriority[];
        Type?: Models.TaskType;
        Origin?: Models.TaskOrigin;
        StartDate?: string;
        DueDate?: string;
        OpenId?: number[];
        ParentIsNull?: boolean;
        Hierarchy?: boolean;
        Portfolio?: boolean;
        ShowProgress?: boolean;
        IncludeChildren?: boolean;
        FilterBy?: string;
        Start?: string;
        End?: string;
        Frequency?: Models.ProjectTaskFrequency;
        View?: string;
        IsReport?: boolean;
        OpenLevel?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Public
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createPublic(body: Models.TaskPublicPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Public
       * @contentType application/json
       * @returns 200 Success
       */
      createPublic(body: Models.TaskPublicPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Public
       * @contentType text/json
       * @returns 200 Success
       */
      createPublic(body: Models.TaskPublicPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Public
       * @contentType application/*+json
       * @returns 200 Success
       */
      createPublic(body: Models.TaskPublicPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          Search?: string;
          Token?: string;
          AccountId?: number;
          OriginId?: number[];
          ProjectId?: number;
          ProcessId?: number;
          ProcessStageId?: number;
          ProjectBaselineId?: number;
          MeetingId?: number;
          MeetingItemId?: number;
          ExcludeMeetingItemId?: number;
          MeetingAgendaId?: number;
          PlanId?: number;
          PlanItemId?: number;
          BusinessUnitId?: number;
          DepartmentId?: number;
          TeamId?: number;
          IsCompleted?: boolean;
          DaysCreated?: number;
          DaysCompleted?: number;
          Level?: number;
          ParentId?: number;
          CreatedById?: number[];
          ProgramId?: number[];
          CustomerId?: number[];
          AssigneeId?: number[];
          MemberId?: number[];
          SprintId?: number[];
          TagId?: number[];
          Status?: Models.TaskStatus_[];
          TaskPriority?: Models.TaskPriority[];
          Type?: Models.TaskType;
          Origin?: Models.TaskOrigin;
          StartDate?: string;
          DueDate?: string;
          OpenId?: number[];
          ParentIsNull?: boolean;
          Hierarchy?: boolean;
          Portfolio?: boolean;
          ShowProgress?: boolean;
          IncludeChildren?: boolean;
          FilterBy?: string;
          Start?: string;
          End?: string;
          Frequency?: Models.ProjectTaskFrequency;
          View?: string;
          IsReport?: boolean;
          OpenLevel?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.TaskGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TaskPatch,
      ): Promise<ApiResponse<Models.TaskGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TaskPatch,
      ): Promise<ApiResponse<Models.TaskGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TaskPatch,
      ): Promise<ApiResponse<Models.TaskGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TaskPatch,
      ): Promise<ApiResponse<Models.TaskGetById>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/{id}
       * @returns 200 Success
       */
      deleteById(
        params: {
          id: number;
        },
        query: {
          forceDelete?: boolean;
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Status
       * @returns 200 Success
       */
      getStatus(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Types
       * @returns 200 Success
       */
      getTypes(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/TaskPriority
       * @returns 200 Success
       */
      getTaskPriority(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Origins
       * @returns 200 Success
       */
      getOrigins(query: { getAll?: boolean }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/RepeatFrequencies
       * @returns 200 Success
       */
      getRepeatFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Process/{id}
       * @returns 200 Success
       */
      getProcessById(
        params: {
          Id: number[];
        },
        query: {
          Search?: string;
          Token?: string;
          AccountId?: number;
          OriginId?: number[];
          ProjectId?: number;
          ProcessId?: number;
          ProcessStageId?: number;
          ProjectBaselineId?: number;
          MeetingId?: number;
          MeetingItemId?: number;
          ExcludeMeetingItemId?: number;
          MeetingAgendaId?: number;
          PlanId?: number;
          PlanItemId?: number;
          BusinessUnitId?: number;
          DepartmentId?: number;
          TeamId?: number;
          IsCompleted?: boolean;
          DaysCreated?: number;
          DaysCompleted?: number;
          Level?: number;
          ParentId?: number;
          CreatedById?: number[];
          ProgramId?: number[];
          CustomerId?: number[];
          AssigneeId?: number[];
          MemberId?: number[];
          SprintId?: number[];
          TagId?: number[];
          Status?: Models.TaskStatus_[];
          TaskPriority?: Models.TaskPriority[];
          Type?: Models.TaskType;
          Origin?: Models.TaskOrigin;
          StartDate?: string;
          DueDate?: string;
          OpenId?: number[];
          ParentIsNull?: boolean;
          Hierarchy?: boolean;
          Portfolio?: boolean;
          ShowProgress?: boolean;
          IncludeChildren?: boolean;
          FilterBy?: string;
          Start?: string;
          End?: string;
          Frequency?: Models.ProjectTaskFrequency;
          View?: string;
          IsReport?: boolean;
          OpenLevel?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
          id?: number;
        },
      ): Promise<ApiResponse<Models.TaskGet>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Pdf
       * @returns 200 Success
       */
      getPdf(query: {
        Search?: string;
        Token?: string;
        AccountId?: number;
        OriginId?: number[];
        ProjectId?: number;
        ProcessId?: number;
        ProcessStageId?: number;
        ProjectBaselineId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        ExcludeMeetingItemId?: number;
        MeetingAgendaId?: number;
        PlanId?: number;
        PlanItemId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        TeamId?: number;
        IsCompleted?: boolean;
        DaysCreated?: number;
        DaysCompleted?: number;
        Level?: number;
        ParentId?: number;
        CreatedById?: number[];
        ProgramId?: number[];
        CustomerId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        SprintId?: number[];
        TagId?: number[];
        Status?: Models.TaskStatus_[];
        TaskPriority?: Models.TaskPriority[];
        Type?: Models.TaskType;
        Origin?: Models.TaskOrigin;
        StartDate?: string;
        DueDate?: string;
        OpenId?: number[];
        ParentIsNull?: boolean;
        Hierarchy?: boolean;
        Portfolio?: boolean;
        ShowProgress?: boolean;
        IncludeChildren?: boolean;
        FilterBy?: string;
        Start?: string;
        End?: string;
        Frequency?: Models.ProjectTaskFrequency;
        View?: string;
        IsReport?: boolean;
        OpenLevel?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Excel
       * @returns 200 Success
       */
      getExcel(query: {
        Search?: string;
        Token?: string;
        AccountId?: number;
        OriginId?: number[];
        ProjectId?: number;
        ProcessId?: number;
        ProcessStageId?: number;
        ProjectBaselineId?: number;
        MeetingId?: number;
        MeetingItemId?: number;
        ExcludeMeetingItemId?: number;
        MeetingAgendaId?: number;
        PlanId?: number;
        PlanItemId?: number;
        BusinessUnitId?: number;
        DepartmentId?: number;
        TeamId?: number;
        IsCompleted?: boolean;
        DaysCreated?: number;
        DaysCompleted?: number;
        Level?: number;
        ParentId?: number;
        CreatedById?: number[];
        ProgramId?: number[];
        CustomerId?: number[];
        AssigneeId?: number[];
        MemberId?: number[];
        SprintId?: number[];
        TagId?: number[];
        Status?: Models.TaskStatus_[];
        TaskPriority?: Models.TaskPriority[];
        Type?: Models.TaskType;
        Origin?: Models.TaskOrigin;
        StartDate?: string;
        DueDate?: string;
        OpenId?: number[];
        ParentIsNull?: boolean;
        Hierarchy?: boolean;
        Portfolio?: boolean;
        ShowProgress?: boolean;
        IncludeChildren?: boolean;
        FilterBy?: string;
        Start?: string;
        End?: string;
        Frequency?: Models.ProjectTaskFrequency;
        View?: string;
        IsReport?: boolean;
        OpenLevel?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Start
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Start
       * @contentType application/json
       * @returns 200 Success
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Start
       * @contentType text/json
       * @returns 200 Success
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Start
       * @contentType application/*+json
       * @returns 200 Success
       */
      createStart(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/ChangeOrder
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.TaskChangeOrderPost): Promise<ApiResponse<Models.TaskChangeOrderPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/ChangeOrder
       * @contentType application/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.TaskChangeOrderPost): Promise<ApiResponse<Models.TaskChangeOrderPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/ChangeOrder
       * @contentType text/json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.TaskChangeOrderPost): Promise<ApiResponse<Models.TaskChangeOrderPost>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/ChangeOrder
       * @contentType application/*+json
       * @returns 200 Success
       */
      createChangeOrder(body: Models.TaskChangeOrderPost): Promise<ApiResponse<Models.TaskChangeOrderPost>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Pause
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Pause
       * @contentType application/json
       * @returns 200 Success
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Pause
       * @contentType text/json
       * @returns 200 Success
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Pause
       * @contentType application/*+json
       * @returns 200 Success
       */
      createPause(body: Models.Timetracking): Promise<ApiResponse<Models.Timetracking>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddPredecessor
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddPredecessor(body: Models.TaskPredecessor): Promise<ApiResponse<Models.TaskPredecessor>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddPredecessor
       * @contentType application/json
       * @returns 200 Success
       */
      createAddPredecessor(body: Models.TaskPredecessor): Promise<ApiResponse<Models.TaskPredecessor>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddPredecessor
       * @contentType text/json
       * @returns 200 Success
       */
      createAddPredecessor(body: Models.TaskPredecessor): Promise<ApiResponse<Models.TaskPredecessor>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddPredecessor
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddPredecessor(body: Models.TaskPredecessor): Promise<ApiResponse<Models.TaskPredecessor>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/CloneTask
       * @returns 200 Success
       */
      createCloneTask(query: { Id?: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/RemovePredecessor/{id}
       * @returns 200 Success
       */
      deleteRemovePredecessorById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddTag
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddTag(body: Models.TaskTag): Promise<ApiResponse<Models.TaskTag>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddTag
       * @contentType application/json
       * @returns 200 Success
       */
      createAddTag(body: Models.TaskTag): Promise<ApiResponse<Models.TaskTag>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddTag
       * @contentType text/json
       * @returns 200 Success
       */
      createAddTag(body: Models.TaskTag): Promise<ApiResponse<Models.TaskTag>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/AddTag
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddTag(body: Models.TaskTag): Promise<ApiResponse<Models.TaskTag>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/RemoveTag/{id}
       * @returns 200 Success
       */
      deleteRemoveTagById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/CustomFields/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateCustomFieldsById(
        params: {
          id: number;
        },
        body: Models.TaskCustomFieldPatch,
      ): Promise<ApiResponse<Models.TaskCustomFieldPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/CustomFields/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateCustomFieldsById(
        params: {
          id: number;
        },
        body: Models.TaskCustomFieldPatch,
      ): Promise<ApiResponse<Models.TaskCustomFieldPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/CustomFields/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateCustomFieldsById(
        params: {
          id: number;
        },
        body: Models.TaskCustomFieldPatch,
      ): Promise<ApiResponse<Models.TaskCustomFieldPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/CustomFields/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateCustomFieldsById(
        params: {
          id: number;
        },
        body: Models.TaskCustomFieldPatch,
      ): Promise<ApiResponse<Models.TaskCustomFieldPatch>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/UpdateBulk
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createUpdateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/UpdateBulk
       * @contentType application/json
       * @returns 200 Success
       */
      createUpdateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/UpdateBulk
       * @contentType text/json
       * @returns 200 Success
       */
      createUpdateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/UpdateBulk
       * @contentType application/*+json
       * @returns 200 Success
       */
      createUpdateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Bulk
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Bulk
       * @contentType application/json
       * @returns 200 Success
       */
      updateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Bulk
       * @contentType text/json
       * @returns 200 Success
       */
      updateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Bulk
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateBulk(body: Models.TaskPatch): Promise<ApiResponse<Models.TaskPatch>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Tasks/Bulk
       * @returns 200 Success
       */
      deleteBulk(query: { id?: number[] }): Promise<ApiResponse<void>>;
    }
    export class Teams {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Teams
       * @returns 200 Success
       */
      get(query: {
        ProcessId?: number[];
        BusinessUnitId?: number[];
        UserId?: number;
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number;
        Name?: string;
        FullSearch?: string;
        IncludeAll?: boolean;
        AllLevel?: boolean;
        FullAccess?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.TeamGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Team): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Team): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Team): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Team): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          ProcessId?: number[];
          BusinessUnitId?: number[];
          UserId?: number;
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number;
          Name?: string;
          FullSearch?: string;
          IncludeAll?: boolean;
          AllLevel?: boolean;
          FullAccess?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.TeamGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TeamPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TeamPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TeamPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.TeamPatch,
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/Public
       * @returns 200 Success
       */
      getPublic(query: {
        ProcessId?: number[];
        BusinessUnitId?: number[];
        UserId?: number;
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number;
        Name?: string;
        FullSearch?: string;
        IncludeAll?: boolean;
        AllLevel?: boolean;
        FullAccess?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/AddMember
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddMember(body: Models.TeamMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/AddMember
       * @contentType application/json
       * @returns 200 Success
       */
      createAddMember(body: Models.TeamMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/AddMember
       * @contentType text/json
       * @returns 200 Success
       */
      createAddMember(body: Models.TeamMember): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/AddMember
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddMember(body: Models.TeamMember): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Teams/RemoveMember/{id}
       * @returns 200 Success
       */
      deleteRemoveMemberById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Timetrackings {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings
       * @returns 200 Success
       */
      get(query: {
        TaskId?: number;
        ServiceOrderServiceId?: number;
        UserId?: number;
        Date?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Timetracking): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Timetracking): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/Management/{id}
       * @returns 200 Success
       */
      getManagementById(
        params: {
          id: number;
        },
        query: {
          Start?: string;
          End?: string;
          Days?: number;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Timetrackings/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class Timezones {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Timezones
       * @returns 200 Success
       */
      get(query: {
        Name?: string;
        Search?: string;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.TimezoneGetQueryResult>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Timezones/Timestamp
       * @returns 200 Success
       */
      getTimestamp(): Promise<ApiResponse<number>>;
    }
    export class Users {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users
       * @returns 200 Success
       */
      get(query: {
        UserId?: number;
        ExcludeTeamId?: number;
        TeamId?: number[];
        ProjectId?: number[];
        MeetingId?: number[];
        ProcessId?: number[];
        ProcessStageId?: number[];
        MeetingItemId?: number;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Email?: string;
        ProjectOwner?: boolean;
        ProjectManager?: boolean;
        KpiManager?: boolean;
        KpiMember?: boolean;
        IncludeAll?: boolean;
        IsLeader?: boolean;
        IncludeOneTeam?: boolean;
        Management?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.UserGetQueryResult>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.UserPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.UserPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.UserPost): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.UserPost): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Public
       * @returns 200 Success
       */
      getPublic(query: {
        UserId?: number;
        ExcludeTeamId?: number;
        TeamId?: number[];
        ProjectId?: number[];
        MeetingId?: number[];
        ProcessId?: number[];
        ProcessStageId?: number[];
        MeetingItemId?: number;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Email?: string;
        ProjectOwner?: boolean;
        ProjectManager?: boolean;
        KpiManager?: boolean;
        KpiMember?: boolean;
        IncludeAll?: boolean;
        IsLeader?: boolean;
        IncludeOneTeam?: boolean;
        Management?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.UserGetQueryResult>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @returns 200 Success
       */
      getById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.UserGetById>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
        body: Models.UserPatch,
      ): Promise<ApiResponse<Models.UserGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
        body: Models.UserPatch,
      ): Promise<ApiResponse<Models.UserGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
        body: Models.UserPatch,
      ): Promise<ApiResponse<Models.UserGetById>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
        body: Models.UserPatch,
      ): Promise<ApiResponse<Models.UserGetById>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Users/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Me
       * @returns 200 Success
       */
      getMe(): Promise<ApiResponse<Models.UserGetById>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Email
       * @returns 200 Success
       */
      getEmail(query: {
        UserId?: number;
        ExcludeTeamId?: number;
        TeamId?: number[];
        ProjectId?: number[];
        MeetingId?: number[];
        ProcessId?: number[];
        ProcessStageId?: number[];
        MeetingItemId?: number;
        View?: string;
        Name?: string;
        Search?: string;
        FullSearch?: string;
        Email?: string;
        ProjectOwner?: boolean;
        ProjectManager?: boolean;
        KpiManager?: boolean;
        KpiMember?: boolean;
        IncludeAll?: boolean;
        IsLeader?: boolean;
        IncludeOneTeam?: boolean;
        Management?: boolean;
        ProjectPortfolio?: boolean;
        Status?: Models.ProjectStatus[];
        CustomerId?: number[];
        BusinessUnitId?: number[];
        DepartmentId?: number[];
        BusinessUnitDepartmentId?: number[];
        PlanId?: number[];
        PlanItemId?: number[];
        RoleId?: number[];
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.UserGetByEmailQueryResult>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Management/Frequencies
       * @returns 200 Success
       */
      getManagementFrequencies(): Promise<ApiResponse<void>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Process/{id}
       * @returns 200 Success
       */
      getProcessById(
        params: {
          Id: number[];
        },
        query: {
          UserId?: number;
          ExcludeTeamId?: number;
          TeamId?: number[];
          ProjectId?: number[];
          MeetingId?: number[];
          ProcessId?: number[];
          ProcessStageId?: number[];
          MeetingItemId?: number;
          View?: string;
          Name?: string;
          Search?: string;
          FullSearch?: string;
          Email?: string;
          ProjectOwner?: boolean;
          ProjectManager?: boolean;
          KpiManager?: boolean;
          KpiMember?: boolean;
          IncludeAll?: boolean;
          IsLeader?: boolean;
          IncludeOneTeam?: boolean;
          Management?: boolean;
          ProjectPortfolio?: boolean;
          Status?: Models.ProjectStatus[];
          CustomerId?: number[];
          BusinessUnitId?: number[];
          DepartmentId?: number[];
          BusinessUnitDepartmentId?: number[];
          PlanId?: number[];
          PlanItemId?: number[];
          RoleId?: number[];
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
          id?: number;
        },
      ): Promise<ApiResponse<Models.UserGetQueryResult>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Management
       * @returns 200 Success
       */
      getManagement(query: {
        Frequency?: Models.FrequencyUserManagement;
        TeamId?: number[];
        BusinessUnitId?: number[];
        BusinessUnitDepartmentId?: number[];
        View?: string;
        Search?: string;
        NoInfo?: boolean;
        InProgressTask?: boolean;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<Models.UserManagementGet[]>>;

      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Management/{id}
       * @returns 200 Success
       */
      getManagementById(
        params: {
          id: number;
        },
        query: {
          Frequency?: Models.FrequencyUserManagement;
          TeamId?: number[];
          BusinessUnitId?: number[];
          BusinessUnitDepartmentId?: number[];
          View?: string;
          Search?: string;
          NoInfo?: boolean;
          InProgressTask?: boolean;
          ConnectedUserId?: number;
          ConnectedAccountId?: number;
          IsAdmin?: boolean;
          Page?: number;
          PageSize?: number;
          GetAll?: boolean;
          Minimal?: boolean;
          NoDataAccess?: boolean;
          Id?: number[];
          IncludeId?: number[];
          ExcludeId?: number[];
          Sort?: string[];
          Totals?: string[];
          TotalsFooter?: string[];
        },
      ): Promise<ApiResponse<Models.UserManagementGet>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddDevice
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddDevice
       * @contentType application/json
       * @returns 200 Success
       */
      createAddDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddDevice
       * @contentType text/json
       * @returns 200 Success
       */
      createAddDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddDevice
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/RemoveDevice
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createRemoveDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/RemoveDevice
       * @contentType application/json
       * @returns 200 Success
       */
      createRemoveDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/RemoveDevice
       * @contentType text/json
       * @returns 200 Success
       */
      createRemoveDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/RemoveDevice
       * @contentType application/*+json
       * @returns 200 Success
       */
      createRemoveDevice(body: Models.UserDevice): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddSkill
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createAddSkill(body: Models.AccountUserSkill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddSkill
       * @contentType application/json
       * @returns 200 Success
       */
      createAddSkill(body: Models.AccountUserSkill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddSkill
       * @contentType text/json
       * @returns 200 Success
       */
      createAddSkill(body: Models.AccountUserSkill): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/AddSkill
       * @contentType application/*+json
       * @returns 200 Success
       */
      createAddSkill(body: Models.AccountUserSkill): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Users/RemoveSkill/{id}
       * @returns 200 Success
       */
      deleteRemoveSkillById(params: { id: number }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ForgotPassword
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createForgotPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ForgotPassword
       * @contentType application/json
       * @returns 200 Success
       */
      createForgotPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ForgotPassword
       * @contentType text/json
       * @returns 200 Success
       */
      createForgotPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ForgotPassword
       * @contentType application/*+json
       * @returns 200 Success
       */
      createForgotPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ResetPassword
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createResetPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ResetPassword
       * @contentType application/json
       * @returns 200 Success
       */
      createResetPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ResetPassword
       * @contentType text/json
       * @returns 200 Success
       */
      createResetPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/ResetPassword
       * @contentType application/*+json
       * @returns 200 Success
       */
      createResetPassword(body: Models.UserResetPassword): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Process/RenewToken
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createProcessRenewToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Process/RenewToken
       * @contentType application/json
       * @returns 200 Success
       */
      createProcessRenewToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Process/RenewToken
       * @contentType text/json
       * @returns 200 Success
       */
      createProcessRenewToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Process/RenewToken
       * @contentType application/*+json
       * @returns 200 Success
       */
      createProcessRenewToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Token
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      createToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Token
       * @contentType application/json
       * @returns 200 Success
       */
      createToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Token
       * @contentType text/json
       * @returns 200 Success
       */
      createToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Users/Token
       * @contentType application/*+json
       * @returns 200 Success
       */
      createToken(body: Models.UserProcessRenewToken): Promise<ApiResponse<void>>;
    }
    export class Visions {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/Visions
       * @returns 200 Success
       */
      get(query: {
        BusinessUnitId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Visions
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      create(body: Models.Vision): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Visions
       * @contentType application/json
       * @returns 200 Success
       */
      create(body: Models.Vision): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Visions
       * @contentType text/json
       * @returns 200 Success
       */
      create(body: Models.Vision): Promise<ApiResponse<void>>;
      /**
       * @endpoint POST https://api-erp-dev.lux-one.com/agile/swagger/api/Visions
       * @contentType application/*+json
       * @returns 200 Success
       */
      create(body: Models.Vision): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Visions/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Visions/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Visions/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/Visions/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: {},
      ): Promise<ApiResponse<void>>;

      /**
       * @endpoint DELETE https://api-erp-dev.lux-one.com/agile/swagger/api/Visions/{id}
       * @returns 200 Success
       */
      deleteById(params: { id: number }): Promise<ApiResponse<void>>;
    }
    export class WorkScheduleDays {
      constructor(handler: <T>(request: ApiRequest) => Promise<ApiResponse<T>>);
      /**
       * @endpoint GET https://api-erp-dev.lux-one.com/agile/swagger/api/WorkScheduleDays
       * @returns 200 Success
       */
      get(query: {
        UserId?: number;
        BusinessUnitId?: number;
        BusinessUnitDepartmentId?: number;
        TeamId?: number;
        ConnectedUserId?: number;
        ConnectedAccountId?: number;
        IsAdmin?: boolean;
        Page?: number;
        PageSize?: number;
        GetAll?: boolean;
        Minimal?: boolean;
        NoDataAccess?: boolean;
        Id?: number[];
        IncludeId?: number[];
        ExcludeId?: number[];
        Sort?: string[];
        Totals?: string[];
        TotalsFooter?: string[];
      }): Promise<ApiResponse<void>>;

      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/WorkScheduleDays/{id}
       * @contentType application/json-patch+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.WorkScheduleDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/WorkScheduleDays/{id}
       * @contentType application/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.WorkScheduleDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/WorkScheduleDays/{id}
       * @contentType text/json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.WorkScheduleDayPatch,
      ): Promise<ApiResponse<void>>;
      /**
       * @endpoint PATCH https://api-erp-dev.lux-one.com/agile/swagger/api/WorkScheduleDays/{id}
       * @contentType application/*+json
       * @returns 200 Success
       */
      updateById(
        params: {
          id: number;
        },
        body: Models.WorkScheduleDayPatch,
      ): Promise<ApiResponse<void>>;
    }
  }
}
