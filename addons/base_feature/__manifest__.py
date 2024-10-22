# -*- coding: utf-8 -*-
{
    'name': 'Basic Additional Feature',
    'version': '1.0',
    'category': 'Hidden',
    'description': """
This module add additional feature for base module
================================================================================

Basic feature for base module.

    """,
    'depends': ['base', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/res_users_views.xml',
    ],
    'auto_install': True,
    'installable': True,

    'license': 'LGPL-3',
}
