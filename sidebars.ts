import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const sidebars: SidebarsConfig = {
    apiSidebar: [
        'index',
        {
            type: 'category',
            label: 'Authentication',
            link: {
                type: 'doc',
                id: 'auth/index',
            },
            items: [
                'auth/login',
                'auth/sms-otp',
                'auth/confirm-otp',
                'auth/forgot-password',
                'auth/logout',
                'auth/check-token',
            ],
        },
        {
            type: 'category',
            label: 'Send SMS',
            link: {
                type: 'doc',
                id: 'send/index',
            },
            items: [
                'send/webservice',
                'send/peer-to-peer',
                'send/peer-to-peer-file',
                'send/postalcode',
                {
                    type: 'category',
                    label: 'Country',
                    link: {
                        type: 'doc',
                        id: 'send/country/index',
                    },
                    items: [
                        'send/country/count',
                        'send/country/province',
                        'send/country/county',
                        'send/country/city',
                        'send/country/gender',
                    ], // Empty array for now, can add items when files are created
                },
                {
                    type: 'category',
                    label: 'Country V2',
                    link: {
                        type: 'doc',
                        id: 'send/countryV2/index',
                    },
                    items: [
                        'send/countryV2/count',
                        'send/countryV2/province',
                        'send/countryV2/county',
                        'send/countryV2/city',
                    ], // Empty array for now, can add items when files are created
                },
                {
                    type: 'category',
                    label: 'Jobs',
                    link: {
                        type: 'doc',
                        id: 'send/jobs/index',
                    },
                    items: [
                        'send/jobs/count',
                        'send/jobs/categories',
                        'send/jobs/sub-category',
                    ], // Empty array for now, can add items when files are created
                },
                'send/keyword',
                'send/keyword-phonebook',
                'send/phonebook',
                'send/pattern',
                'send/file',
                'send/votp',
                'send/url',
                'send/cancel-scheduled',
                'send/calculate-price'
                // Additional items can be added when files are created
            ],
        },
        {
            type: 'category',
            label: 'Report',
            link: {
                type: 'doc',
                id: 'report/index',
            },
            items: [
                'report/outbox-report',
                'report/outbox-report-id',
                'report/bulk-stats',
                'report/bulk-recipient',
                'report/inbox-report',
            ], // Empty array for now, can add items when files are created
        },
        {
            type: 'category',
            label: 'Numbers',
            link: {
                type: 'doc',
                id: 'numbers/index',
            },
            items: [
                'numbers/assign-number',
                'numbers/unassign-number',
                'numbers/list-numbers',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'User',
            link: {
                type: 'doc',
                id: 'user/index',
            },
            items: [
                'user/parents-tree',
                'user/list-users',
                'user/register-user',
                'user/user-tariff',
                'user/check-exist',
                'user/update-user',
                'user/show-user',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'Package',
            link: {
                type: 'doc',
                id: 'package/index',
            },
            items: [
                'package/list-packages',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'Phonebook',
            link: {
                type: 'doc',
                id: 'phonebook/index',
            },
            items: [
                {
                    type: 'category',
                    label: 'Phonebook',
                    link: {
                        type: 'doc',
                        id: 'phonebook/phonebook/index',
                    },
                    items: [
                        'phonebook/phonebook/phonebook-list',
                        'phonebook/phonebook/store-phonebook',
                        'phonebook/phonebook/delete-phonebook',
                        'phonebook/phonebook/update-phonebook',
                    ], // Empty array for now
                },
                {
                    type: 'category',
                    label: 'Phonebook Number',
                    link: {
                        type: 'doc',
                        id: 'phonebook/number/index',
                    },
                    items: [
                        'phonebook/number/store-number',
                        'phonebook/number/delete-number',
                        'phonebook/number/show-number',
                        'phonebook/number/list-number',
                        'phonebook/number/export-number-contacts',
                        'phonebook/number/update-number',
                        'phonebook/number/import-number',
                        'phonebook/number/sample-import-number',
                        'phonebook/number/export-number-members',
                    ], // Empty array for now
                },
                {
                    type: 'category',
                    label: 'Phonebook Option',
                    link: {
                        type: 'doc',
                        id: 'phonebook/option/index',
                    },
                    items: [
                        'phonebook/option/store-option',
                        'phonebook/option/update-option',
                        'phonebook/option/list-option',
                        'phonebook/option/delete-option',
                    ], // Empty array for now
                },
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'ticket',
            link: {
                type: 'doc',
                id: 'ticket/index',
            },
            items: [
                'ticket/create-ticket',
                'ticket/list-ticket',
                'ticket/ticket-id',
                'ticket/reply-ticket',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'Draft',
            link: {
                type: 'doc',
                id: 'draft/index',
            },
            items: [
                'draft/create-draft-group',
                'draft/list-draft-group',
                'draft/update-draft-group',
                'draft/delete-draft-group',
                'draft/create-draft',
                'draft/list-draft',
                'draft/update-draft',
                'draft/delete-draft',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'Pattern',
            link: {
                type: 'doc',
                id: 'pattern/index',
            },
            items: [
                'pattern/create-pattern',
                'pattern/list-pattern',
                'pattern/pattern-by-code',
                'pattern/update-pattern',
                'pattern/delete-pattern',
            ], // Empty array for now
        },
        {
            type: 'category',
            label: 'Payment',
            link: {
                type: 'doc',
                id: 'payment/index',
            },
            items: [
                'payment/my-credit',
            ], // Empty array for now
        },
    ],
};

export default sidebars;
