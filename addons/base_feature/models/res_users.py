# -*- coding: utf-8 -*-
from odoo import models, fields

class ResUsers(models.Model):
    _inherit = 'res.users'

    link_account_ids = fields.One2many("res.user.link.accounts", "user_id", "Linked Accounts", readonly=True)