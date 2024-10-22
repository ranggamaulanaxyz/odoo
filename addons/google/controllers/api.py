# -*- coding: utf-8 -*-

from odoo import http

class GoogleApiController(http.Controller):
    @http.route("/api/google/config", type="json", auth='public', csrf=None)
    def get_google_config(self):
        return {
            'client_id': '289766748875-9a9ccdkb4753r6dkib87nof821dfgt7v.apps.googleusercontent.com',
            'redirect': '/web/login/google',
        }