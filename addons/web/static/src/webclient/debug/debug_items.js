import { browser } from "@web/core/browser/browser";
import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { SelectCreateDialog } from "@web/views/view_dialogs/select_create_dialog";

function runHootItem() {
    const href = "/web/tests/next?debug=assets";
    return {
        type: "item",
        description: _t("Run unit tests"),
        href,
        callback: () => browser.open(href),
        sequence: 10,
    };
}

function runJSTestsItem() {
    const href = "/web/tests?debug=assets";
    return {
        type: "item",
        description: _t("Run QUnit tests (legacy)"),
        href,
        callback: () => browser.open(href),
        sequence: 20,
    };
}

function runJSTestsMobileItem() {
    const href = "/web/tests/mobile?debug=assets";
    return {
        type: "item",
        description: _t("Run QUnit mobile tests (legacy)"),
        href,
        callback: () => browser.open(href),
        sequence: 30,
    };
}

export function openViewItem({ env }) {
    async function onSelected(records) {
        const views = await env.services.orm.searchRead(
            "ir.ui.view",
            [["id", "=", records[0]]],
            ["name", "model", "type"],
            { limit: 1 }
        );
        const view = views[0];
        env.services.action.doAction({
            type: "ir.actions.act_window",
            name: view.name,
            res_model: view.model,
            views: [[view.id, view.type]],
        });
    }

    return {
        type: "item",
        description: _t("Open View"),
        callback: () => {
            env.services.dialog.add(SelectCreateDialog, {
                resModel: "ir.ui.view",
                title: _t("Select a view"),
                multiSelect: false,
                domain: [
                    ["type", "!=", "qweb"],
                    ["type", "!=", "search"],
                ],
                onSelected,
            });
        },
        sequence: 40,
    };
}

// This separates the items defined above from global items that aren't webclient-only
function globalSeparator() {
    return {
        type: "separator",
        sequence: 400,
    };
}

registry
    .category("debug")
    .category("default")
    .add("runHootItem", runHootItem)
    .add("runJSTestsItem", runJSTestsItem)
    .add("runJSTestsMobileItem", runJSTestsMobileItem)
    .add("globalSeparator", globalSeparator)
    .add("openViewItem", openViewItem);
