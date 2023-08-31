function joinUrl(base, path = '') {
  return new URL(path.replace(/^\/\/+/, ''), base)
}

function accept(body, contentTypes) {
  const headers = new Headers();

  for (const contentType of contentTypes) {
    if (contentType.includes('json') && typeof body === 'object') {
      body = JSON.stringify(body);
      headers.set('Content-Type', contentType);
      return { body, headers };
    }

    if (contentType === 'multipart/form-data' && body instanceof FormData) {
      headers.set('Content-Type', contentType);
      return { body, headers };
    }

    if (contentType === 'application/x-www-form-urlencoded' && body instanceof URLSearchParams) {
      body = body.toString();
      headers.set('Content-Type', contentType);
      return { body, headers };
    }
  }
  return { body, headers };
}

export const Services = {
  AuthorizationSettingRules: class AuthorizationSettingRules {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/AuthorizationSettingRules';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getRuleTypes() {
      const url = joinUrl(this.baseUrl, '/RuleTypes');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  AuthorizationSettings: class AuthorizationSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/AuthorizationSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  BookKeepings: class BookKeepings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/BookKeepings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  CommissionSettingProducts: class CommissionSettingProducts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CommissionSettingProducts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getIncidences() {
      const url = joinUrl(this.baseUrl, '/Incidences');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGetBasis() {
      const url = joinUrl(this.baseUrl, '/GetBasis');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  CommissionSettingReductions: class CommissionSettingReductions {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CommissionSettingReductions';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getTypes() {
      const url = joinUrl(this.baseUrl, '/Types');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  CommissionSettings: class CommissionSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CommissionSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createCommissionCalculation(data) {
      const url = joinUrl(this.baseUrl, '/CommissionCalculation');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCommissionSales(data) {
      const url = joinUrl(this.baseUrl, '/CommissionSales');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCommissionPurchase(data) {
      const url = joinUrl(this.baseUrl, '/CommissionPurchase');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCommissionReceipt(data) {
      const url = joinUrl(this.baseUrl, '/CommissionReceipt');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  CommissionSettingTeams: class CommissionSettingTeams {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CommissionSettingTeams';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  CommissionTransactions: class CommissionTransactions {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CommissionTransactions';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getTypes() {
      const url = joinUrl(this.baseUrl, '/Types');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  CteMovements: class CteMovements {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CteMovements';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  CustomerVehicles: class CustomerVehicles {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/CustomerVehicles';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  DiscountSettingPercentages: class DiscountSettingPercentages {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/DiscountSettingPercentages';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  DiscountSettingProducts: class DiscountSettingProducts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/DiscountSettingProducts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  DiscountSettings: class DiscountSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/DiscountSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Edis: class Edis {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Edis';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getGenerateEdiById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateEdi/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  Freights: class Freights {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Freights';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getVehicleStatus() {
      const url = joinUrl(this.baseUrl, '/VehicleStatus');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  FreightSalesAreas: class FreightSalesAreas {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/FreightSalesAreas';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  FreightSettings: class FreightSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/FreightSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  FuelPumps: class FuelPumps {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/FuelPumps';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Fuels: class Fuels {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Fuels';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  FuelTransactions: class FuelTransactions {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/FuelTransactions';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createImportTicket(data) {
      const url = joinUrl(this.baseUrl, '/ImportTicket');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createClose(data) {
      const url = joinUrl(this.baseUrl, '/Close');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReOpen(data) {
      const url = joinUrl(this.baseUrl, '/ReOpen');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  KanbanMembers: class KanbanMembers {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/KanbanMembers';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Kanbans: class Kanbans {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Kanbans';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  KanbanStages: class KanbanStages {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/KanbanStages';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  KanbanStageTypes: class KanbanStageTypes {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/KanbanStageTypes';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PackingListChecks: class PackingListChecks {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PackingListChecks';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PackingLists: class PackingLists {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PackingLists';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getGeneratePackingListById(params) {
      const url = joinUrl(this.baseUrl, `/GeneratePackingList/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGenerateFullFileById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateFullFile/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGreenmile(query) {
      const url = joinUrl(this.baseUrl, '/Greenmile');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getTypes() {
      const url = joinUrl(this.baseUrl, '/Types');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getVehicleStatus() {
      const url = joinUrl(this.baseUrl, '/VehicleStatus');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getStatus() {
      const url = joinUrl(this.baseUrl, '/Status');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    createCreatePackingList(data) {
      const url = joinUrl(this.baseUrl, '/CreatePackingList');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createUndoPackingList(data) {
      const url = joinUrl(this.baseUrl, '/UndoPackingList');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createInvoicing(data) {
      const url = joinUrl(this.baseUrl, '/Invoicing');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createShipping(data) {
      const url = joinUrl(this.baseUrl, '/Shipping');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSendEmail(data) {
      const url = joinUrl(this.baseUrl, '/SendEmail');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  PackingListTypes: class PackingListTypes {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PackingListTypes';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingCustomers: class PricingCustomers {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingCustomers';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingFinancialCosts: class PricingFinancialCosts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingFinancialCosts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingIndustrys: class PricingIndustrys {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingIndustrys';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingProductFreights: class PricingProductFreights {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingProductFreights';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingProducts: class PricingProducts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingProducts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createExcel(data) {
      const url = joinUrl(this.baseUrl, '/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  Pricings: class Pricings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Pricings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getPricingTypes() {
      const url = joinUrl(this.baseUrl, '/PricingTypes');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    createPricingSetting(data) {
      const url = joinUrl(this.baseUrl, '/PricingSetting');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createPricing(data) {
      const url = joinUrl(this.baseUrl, '/Pricing');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createPricingMeasureUnit(data) {
      const url = joinUrl(this.baseUrl, '/PricingMeasureUnit');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  PricingSalesAreas: class PricingSalesAreas {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingSalesAreas';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PricingSettings: class PricingSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PricingSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PrintableDocuments: class PrintableDocuments {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PrintableDocuments';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getGroups(query) {
      const url = joinUrl(this.baseUrl, '/Groups');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGroupChildren(query) {
      const url = joinUrl(this.baseUrl, '/GroupChildren');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createGenerateFile(data) {
      const url = joinUrl(this.baseUrl, '/GenerateFile');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  PromotionalCampaignProducts: class PromotionalCampaignProducts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PromotionalCampaignProducts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  PromotionalCampaigns: class PromotionalCampaigns {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/PromotionalCampaigns';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  ReturnCheckProducts: class ReturnCheckProducts {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/ReturnCheckProducts';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createPopulateReturnCheckProducts(data) {
      const url = joinUrl(this.baseUrl, '/PopulateReturnCheckProducts');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  RouteAreas: class RouteAreas {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/RouteAreas';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Routes: class Routes {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Routes';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  RouteTypes: class RouteTypes {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/RouteTypes';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  RouteVisitDays: class RouteVisitDays {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/RouteVisitDays';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesBlocks: class SalesBlocks {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesBlocks';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesLegalStatements: class SalesLegalStatements {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesLegalStatements';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrderLoadNfeKeys: class SalesOrderLoadNfeKeys {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderLoadNfeKeys';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrderLoads: class SalesOrderLoads {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderLoads';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrderObjectCommissions: class SalesOrderObjectCommissions {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderObjectCommissions';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrderObjectLots: class SalesOrderObjectLots {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderObjectLots';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrderObjects: class SalesOrderObjects {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderObjects';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getGetProducts(query) {
      const url = joinUrl(this.baseUrl, '/GetProducts');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGetSalesOrderObjects(query) {
      const url = joinUrl(this.baseUrl, '/GetSalesOrderObjects');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getStatus() {
      const url = joinUrl(this.baseUrl, '/Status');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    createSeparateProduct(data) {
      const url = joinUrl(this.baseUrl, '/SeparateProduct');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createConferenceProduct(data) {
      const url = joinUrl(this.baseUrl, '/ConferenceProduct');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCloseConference(data) {
      const url = joinUrl(this.baseUrl, '/close_conference');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  SalesOrderReasonMessages: class SalesOrderReasonMessages {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrderReasonMessages';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  SalesOrders: class SalesOrders {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesOrders';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getReport(query) {
      const url = joinUrl(this.baseUrl, '/Report');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getAuthorization(query) {
      const url = joinUrl(this.baseUrl, '/Authorization');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getVerification(query) {
      const url = joinUrl(this.baseUrl, '/Verification');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getSalesAreaRelease(query) {
      const url = joinUrl(this.baseUrl, '/SalesAreaRelease');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getPaymentMethods() {
      const url = joinUrl(this.baseUrl, '/PaymentMethods');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getFreights() {
      const url = joinUrl(this.baseUrl, '/Freights');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getStatus() {
      const url = joinUrl(this.baseUrl, '/Status');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getInvoiceStatus() {
      const url = joinUrl(this.baseUrl, '/InvoiceStatus');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getAuthorizationStatus() {
      const url = joinUrl(this.baseUrl, '/AuthorizationStatus');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getPhases() {
      const url = joinUrl(this.baseUrl, '/Phases');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGroups(query) {
      const url = joinUrl(this.baseUrl, '/Groups');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    createGenerateSalesOrder(data) {
      const url = joinUrl(this.baseUrl, '/GenerateSalesOrder');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSalesOrderExcel(data) {
      const url = joinUrl(this.baseUrl, '/SalesOrder/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createClose(data) {
      const url = joinUrl(this.baseUrl, '/Close');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReturningClose(data) {
      const url = joinUrl(this.baseUrl, '/Returning/Close');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReOpen(data) {
      const url = joinUrl(this.baseUrl, '/ReOpen');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSalesAuthorization(data) {
      const url = joinUrl(this.baseUrl, '/SalesAuthorization');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createAuthorize(data) {
      const url = joinUrl(this.baseUrl, '/Authorize');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReturnOfSalesOrders(data) {
      const url = joinUrl(this.baseUrl, '/ReturnOfSalesOrders');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createFutureDeliverySalesOrder(data) {
      const url = joinUrl(this.baseUrl, '/FutureDeliverySalesOrder');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCreateSalesOrderFromSalesQuote(data) {
      const url = joinUrl(this.baseUrl, '/CreateSalesOrderFromSalesQuote');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createPackingList(data) {
      const url = joinUrl(this.baseUrl, '/PackingList');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSalesOrderBreakDown(data) {
      const url = joinUrl(this.baseUrl, '/SalesOrderBreakDown');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createGenerateCsvGreenmile(data) {
      const url = joinUrl(this.baseUrl, '/GenerateCsvGreenmile');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createPostFromGreenmile(data) {
      const url = joinUrl(this.baseUrl, '/post_from_greenmile');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCancelInvoice(data) {
      const url = joinUrl(this.baseUrl, '/CancelInvoice');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createDuplicateSalesOrder(data) {
      const url = joinUrl(this.baseUrl, '/DuplicateSalesOrder');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCloneSalesOrder(data) {
      const url = joinUrl(this.baseUrl, '/CloneSalesOrder');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSendEmailCanceled(data) {
      const url = joinUrl(this.baseUrl, '/SendEmailCanceled');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createSendEmail(data) {
      const url = joinUrl(this.baseUrl, '/SendEmail');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCreateReturnFromRebill(data) {
      const url = joinUrl(this.baseUrl, '/CreateReturnFromRebill');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createRebill(data) {
      const url = joinUrl(this.baseUrl, '/Rebill');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createRedelivery(data) {
      const url = joinUrl(this.baseUrl, '/Redelivery');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createPartialBilling(data) {
      const url = joinUrl(this.baseUrl, '/PartialBilling');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  SalesRoutings: class SalesRoutings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/SalesRoutings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getDates(query) {
      const url = joinUrl(this.baseUrl, '/Dates');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getTeams(query) {
      const url = joinUrl(this.baseUrl, '/Teams');
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getStatus() {
      const url = joinUrl(this.baseUrl, '/Status');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getNoSaleJustify() {
      const url = joinUrl(this.baseUrl, '/NoSaleJustify');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  Sectors: class Sectors {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Sectors';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TireMeters: class TireMeters {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TireMeters';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TrafficTickets: class TrafficTickets {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TrafficTickets';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelCustomerBonus: class TravelCustomerBonus {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelCustomerBonus';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelDates: class TravelDates {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelDates';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelExpenses: class TravelExpenses {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelExpenses';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Traveling: class Traveling {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Traveling';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createAuthorize(data) {
      const url = joinUrl(this.baseUrl, '/Authorize');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createBonusCalculate(data) {
      const url = joinUrl(this.baseUrl, '/BonusCalculate');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCreateTravelAdvance(data) {
      const url = joinUrl(this.baseUrl, '/CreateTravelAdvance');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createClose(data) {
      const url = joinUrl(this.baseUrl, '/Close');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReOpen(data) {
      const url = joinUrl(this.baseUrl, '/ReOpen');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getGenerateTravelById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravel/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  Travels: class Travels {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Travels';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createAuthorize(data) {
      const url = joinUrl(this.baseUrl, '/Authorize');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createBonusCalculate(data) {
      const url = joinUrl(this.baseUrl, '/BonusCalculate');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createCreateTravelAdvance(data) {
      const url = joinUrl(this.baseUrl, '/CreateTravelAdvance');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createClose(data) {
      const url = joinUrl(this.baseUrl, '/Close');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    createReOpen(data) {
      const url = joinUrl(this.baseUrl, '/ReOpen');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getGenerateTravelById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravel/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGenerateTravelExpenseById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravelExpense/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGenerateTravelAdvancedById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravelAdvanced/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGenerateTravelChangeById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravelChange/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getGenerateTravelGratificationById(params) {
      const url = joinUrl(this.baseUrl, `/GenerateTravelGratification/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  TravelSalesOrders: class TravelSalesOrders {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelSalesOrders';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelSettingFuels: class TravelSettingFuels {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelSettingFuels';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelSettingObjects: class TravelSettingObjects {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelSettingObjects';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  TravelSettings: class TravelSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/TravelSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  Values: class Values {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Values';
    }

    getCorrectSalesOrderObjectsZeroTotalAmount() {
      const url = joinUrl(this.baseUrl, '/CorrectSalesOrderObjectsZeroTotalAmount');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getCorrectSalesOrdersZeroTotalAmount() {
      const url = joinUrl(this.baseUrl, '/CorrectSalesOrdersZeroTotalAmount');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getCorrectBoletoNumber() {
      const url = joinUrl(this.baseUrl, '/CorrectBoletoNumber');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getReprocessAccountingEvent() {
      const url = joinUrl(this.baseUrl, '/ReprocessAccountingEvent');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getCorrectSalesOrders() {
      const url = joinUrl(this.baseUrl, '/CorrectSalesOrders');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getCorrectSalesOrderObjects() {
      const url = joinUrl(this.baseUrl, '/CorrectSalesOrderObjects');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

  },
  VehicleAttacheds: class VehicleAttacheds {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleAttacheds';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  VehicleCategories: class VehicleCategories {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleCategories';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createVehicleCategoryExcel(data) {
      const url = joinUrl(this.baseUrl, '/VehicleCategory/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  VehicleFines: class VehicleFines {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleFines';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  VehicleIpvaSettings: class VehicleIpvaSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleIpvaSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  VehicleLicensingSettings: class VehicleLicensingSettings {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleLicensingSettings';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  VehicleMeters: class VehicleMeters {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleMeters';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createCreateVehicleTireMeter(data) {
      const url = joinUrl(this.baseUrl, '/CreateVehicleTireMeter');
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  VehicleModels: class VehicleModels {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleModels';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createVehicleModelExcel(data) {
      const url = joinUrl(this.baseUrl, '/VehicleModel/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  Vehicles: class Vehicles {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/Vehicles';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    getBodys() {
      const url = joinUrl(this.baseUrl, '/Bodys');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getWheeleds() {
      const url = joinUrl(this.baseUrl, '/Wheeleds');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    getTypes() {
      const url = joinUrl(this.baseUrl, '/Types');
      const headers = new Headers();

      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    createVehicleExcel(data) {
      const url = joinUrl(this.baseUrl, '/Vehicle/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
  VehicleTransactions: class VehicleTransactions {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleTransactions';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

  },
  VehicleTypes: class VehicleTypes {
    constructor(request) {
      this.request = request;
      this.baseUrl = 'https://api-erp-dev.lux-one.com/salesorders/swagger/v1/swagger.json/api/VehicleTypes';
    }

    get(query) {
      const url = joinUrl(this.baseUrl);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    create(data) {
      const url = joinUrl(this.baseUrl);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

    getById(params, query) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();
      url.search = new URLSearchParams(query).toString();


      return this.request({
        method: 'GET',
        url,
        headers,
      });
    }

    updateById(params, data) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const { body, headers } = accept(data, ["application/json-patch+json", "application/json", "text/json", "application/*+json"]);

      return this.request({
        method: 'PATCH',
        url,
        body,
        headers,
      });
    }

    deleteById(params) {
      const url = joinUrl(this.baseUrl, `/${params.id}`);
      const headers = new Headers();

      return this.request({
        method: 'DELETE',
        url,
        headers,
      });
    }

    createVehicleTypeExcel(data) {
      const url = joinUrl(this.baseUrl, '/VehicleType/Excel');
      const { body, headers } = accept(data, ["multipart/form-data"]);

      return this.request({
        method: 'POST',
        url,
        body,
        headers,
      });
    }

  },
}
