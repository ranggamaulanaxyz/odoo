# -*- coding: utf-8 -*-
from odoo import http
from odoo.addons.web.controllers.home import Home as HomeController

class Home(HomeController):
    @http.route(
        '/web/login/google',
        type='http', auth='public', methods=['GET', 'POST'], sitemap=False, csrf=None,
        website=True, multilang=False # website breaks the login layout...
    )
    def google_login(self, **kwargs):
        print(kwargs)
        return http.request.redirect("/app")