# -*- coding: utf-8 -*-
{
    'name': 'Google',
    'version': '1.18',
    'category': 'Integration/Google',
    'sequence': 145,
    'summary': 'Google account integration',
    'website': 'https://www.ranggamaulana.xyz',
    'depends': ['base'],
    'data': [
        'views/google_templates.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            'google/static/src/scss/google.scss',
            'google/static/src/login_button/*'
        ]
    },
    'installable': True,
    'application': True,
    'licence': 'LGPL-3'
}