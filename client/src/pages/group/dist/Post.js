"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../../styles/scss/pages/group/post.scss");
var GroupHeader_1 = require("../../components/group/content/GroupHeader");
function Post() {
    // 1. 클릭한 곳 default 값
    // 1) Header - tilte
    // 2) select
    // 3) Link to
    // 2. select 변경 시 변경
    return (react_1["default"].createElement("div", { className: "section section-group" },
        react_1["default"].createElement(GroupHeader_1["default"], { title: '공지사항', groupName: '코딩학당' }),
        react_1["default"].createElement("div", { className: "post-container" },
            react_1["default"].createElement("div", { className: "noti-content post-header title5" },
                react_1["default"].createElement("div", null, "\uC885\uB958"),
                react_1["default"].createElement("select", null,
                    react_1["default"].createElement("option", null, "\uACF5\uC9C0\uC0AC\uD56D"),
                    react_1["default"].createElement("option", null, "\uC790\uC720/\uC9C8\uBB38"),
                    react_1["default"].createElement("option", null, "\uBBF8\uC1581"),
                    react_1["default"].createElement("option", null, "\uBBF8\uC1582"),
                    react_1["default"].createElement("option", null, "\uBBF8\uC1583")),
                react_1["default"].createElement("div", { className: "post-title" },
                    react_1["default"].createElement("div", null, "\uC81C\uBAA9"),
                    react_1["default"].createElement("input", { type: "text", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." }))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("textarea", { className: "editor", placeholder: "\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694" }))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/group/noti/1" },
                react_1["default"].createElement("button", { className: "btn-lg" }, "\uC791\uC131 \uC644\uB8CC")))));
}
exports["default"] = Post;
