"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/todos.ts":
/*!********************************!*\
  !*** ./src/pages/api/todos.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        // get all todos\n        const todos = await prisma.todo.findMany({\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        res.json(todos);\n    } else if (req.method === \"POST\") {\n        // create todo\n        const text = JSON.parse(req.body).text;\n        const todo = await prisma.todo.create({\n            data: {\n                text,\n                completed: false\n            }\n        });\n        res.json(todo);\n    } else if (req.method === \"PUT\") {\n        // update todo\n        const id = req.query.todoId;\n        const data = JSON.parse(req.body);\n        const todo = await prisma.todo.update({\n            where: {\n                id\n            },\n            data\n        });\n        res.json(todo);\n    } else if (req.method === \"DELETE\") {\n        // delete todo\n        const id = req.query.todoId;\n        await prisma.todo.delete({\n            where: {\n                id\n            }\n        });\n        res.json({\n            status: \"ok\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM4QztBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZSxPQUFPRSxLQUFxQkMsTUFBeUI7SUFDbEUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsZ0JBQWdCO1FBQ2hCLE1BQU1DLFFBQVEsTUFBTUosT0FBT0ssSUFBSSxDQUFDQyxRQUFRLENBQUM7WUFDdkNDLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTztRQUMvQjtRQUNBTixJQUFJTyxJQUFJLENBQUNMO0lBQ1gsT0FBTyxJQUFJSCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUNoQyxjQUFjO1FBQ2QsTUFBTU8sT0FBT0MsS0FBS0MsS0FBSyxDQUFDWCxJQUFJWSxJQUFJLEVBQUVILElBQUk7UUFDdEMsTUFBTUwsT0FBTyxNQUFNTCxPQUFPSyxJQUFJLENBQUNTLE1BQU0sQ0FBQztZQUNwQ0MsTUFBTTtnQkFBRUw7Z0JBQU1NLFdBQVcsS0FBSztZQUFDO1FBQ2pDO1FBRUFkLElBQUlPLElBQUksQ0FBQ0o7SUFDWCxPQUFPLElBQUlKLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQy9CLGNBQWM7UUFDZCxNQUFNYyxLQUFLaEIsSUFBSWlCLEtBQUssQ0FBQ0MsTUFBTTtRQUMzQixNQUFNSixPQUFPSixLQUFLQyxLQUFLLENBQUNYLElBQUlZLElBQUk7UUFDaEMsTUFBTVIsT0FBTyxNQUFNTCxPQUFPSyxJQUFJLENBQUNlLE1BQU0sQ0FBQztZQUNwQ0MsT0FBTztnQkFBRUo7WUFBRztZQUNaRjtRQUNGO1FBRUFiLElBQUlPLElBQUksQ0FBQ0o7SUFDWCxPQUFPLElBQUlKLElBQUlFLE1BQU0sS0FBSyxVQUFVO1FBQ2xDLGNBQWM7UUFDZCxNQUFNYyxLQUFLaEIsSUFBSWlCLEtBQUssQ0FBQ0MsTUFBTTtRQUMzQixNQUFNbkIsT0FBT0ssSUFBSSxDQUFDaUIsTUFBTSxDQUFDO1lBQUVELE9BQU87Z0JBQUVKO1lBQUc7UUFBRTtRQUV6Q2YsSUFBSU8sSUFBSSxDQUFDO1lBQUVjLFFBQVE7UUFBSztJQUMxQixDQUFDO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtbmV4dGpzLXByaXNtYS8uL3NyYy9wYWdlcy9hcGkvdG9kb3MudHM/NzlmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgLy8gZ2V0IGFsbCB0b2Rvc1xuICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24odG9kb3MpO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgLy8gY3JlYXRlIHRvZG9cbiAgICBjb25zdCB0ZXh0ID0gSlNPTi5wYXJzZShyZXEuYm9keSkudGV4dDtcbiAgICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgdGV4dCwgY29tcGxldGVkOiBmYWxzZSB9LFxuICAgIH0pO1xuXG4gICAgcmVzLmpzb24odG9kbyk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xuICAgIC8vIHVwZGF0ZSB0b2RvXG4gICAgY29uc3QgaWQgPSByZXEucXVlcnkudG9kb0lkIGFzIHN0cmluZztcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KTtcblxuICAgIHJlcy5qc29uKHRvZG8pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcbiAgICAvLyBkZWxldGUgdG9kb1xuICAgIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LnRvZG9JZCBhcyBzdHJpbmc7XG4gICAgYXdhaXQgcHJpc21hLnRvZG8uZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcblxuICAgIHJlcy5qc29uKHsgc3RhdHVzOiBcIm9rXCIgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJ0b2RvIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwianNvbiIsInRleHQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlIiwiZGF0YSIsImNvbXBsZXRlZCIsImlkIiwicXVlcnkiLCJ0b2RvSWQiLCJ1cGRhdGUiLCJ3aGVyZSIsImRlbGV0ZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();