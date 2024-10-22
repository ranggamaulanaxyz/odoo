import { registry } from "@web/core/registry";
import { rpc } from "@web/core/network/rpc";
import { Component, onWillStart, onWillRender } from "@odoo/owl";

export class LoginButton extends Component {
    static template = "google.LoginButton";
    static props = {};

    setup() {
        onWillStart(this.initConfig)
        onWillRender(this.initGoogle)
    }

    async initConfig() {
        const result = await rpc("/api/google/config")
        this.login_uri = result.login_url
        this.client_id = result.client_id
    }
    
    initGoogle() {
        window.google.accounts.id.initialize({
            client_id: this.client_id,
            ux_mode: 'redirect',
            login_uri: this.login_url,
            context: 'signin',
            itp_support: true,
            callback: this.callback
        });
        this.renderButton()
        this.prompt()
    }

    prompt() {
        window.google.accounts.id.prompt()
    }

    renderButton() {
        const buttonWrapper = document.createElement('div')
        window.google.accounts.id.renderButton(buttonWrapper, {
            type: 'icon',
            width: '200',
        });
        this.button = buttonWrapper.querySelector('div[role=button]')
    }

    login() {
        this.button.click()
    }

    callback() {

    }
}

registry.category("public_components").add("google.LoginButton", LoginButton);