# -*- coding: utf-8 -*-

from odoo import models, fields

class ResUsersLinkAccounts(models.Model):
    _name = "res.user.link.accounts"
    _description = "User Link Accounts"

    name = fields.Char("Name", required=True)
    user_id = fields.Many2one("res.users", "User", required=True, ondelete="cascade")
    platform = fields.Selection([], string="Platform", required=True)