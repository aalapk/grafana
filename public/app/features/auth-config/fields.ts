import { SelectableValue } from '@grafana/data';

import { SSOProvider } from './types';

/** Map providers to their settings */
export const fields: Record<SSOProvider['provider'], string[]> = {
  github: ['clientId', 'clientSecret', 'teamIds', 'allowedOrganizations'],
  google: ['clientId', 'clientSecret', 'allowedDomains'],
  gitlab: ['clientId', 'clientSecret', 'allowedOrganizations', 'teamIds'],
  azuread: ['clientId', 'clientSecret', 'authUrl', 'tokenUrl', 'scopes', 'allowedGroups', 'allowedDomains'],
  okta: [
    'clientId',
    'clientSecret',
    'authUrl',
    'tokenUrl',
    'apiUrl',
    'roleAttributePath',
    'allowedGroups',
    'allowedDomains',
  ],
};

export type FieldData = {
  label: string;
  type: string;
  validation?: {
    required?: boolean;
    message?: string;
  };
  multi?: boolean;
  allowCustomValue?: boolean;
  options?: Array<SelectableValue<string>>;
  placeholder?: string;
};

export const fieldMap: Record<string, FieldData> = {
  clientId: {
    label: 'Client Id',
    type: 'text',
    validation: {
      required: true,
      message: 'This field is required',
    },
  },
  clientSecret: {
    label: 'Client Secret',
    type: 'text',
    validation: {
      required: true,
      message: 'This field is required',
    },
  },
  teamIds: {
    label: 'Team Ids',
    type: 'select',
    multi: true,
    allowCustomValue: true,
    options: [],
    placeholder: 'Enter team IDs and press Enter to add',
  },
  allowedOrganizations: {
    label: 'Allowed Organizations',
    type: 'select',
    multi: true,
    allowCustomValue: true,
    options: [],
    placeholder: 'Enter organizations (my-team, myteam...) and press Enter to add',
  },
  allowedDomains: {
    label: 'Allowed Domains',
    type: 'select',
    multi: true,
    allowCustomValue: true,
    options: [],
  },
  authUrl: {
    label: 'Auth Url',
    type: 'text',
    validation: {
      required: false,
    },
  },
  tokenUrl: {
    label: 'Token Url',
    type: 'text',
    validation: {
      required: false,
    },
  },
  scopes: {
    label: 'Scopes',
    type: 'select',
    multi: true,
    allowCustomValue: true,
    options: [],
  },
  allowedGroups: {
    label: 'Allowed Groups',
    type: 'select',
    multi: true,
    allowCustomValue: true,
    options: [],
  },
  apiUrl: {
    label: 'API Url',
    type: 'text',
    validation: {
      required: false,
    },
  },
  roleAttributePath: {
    label: 'Role Attribute Path',
    type: 'text',
    validation: {
      required: false,
    },
  },
};
